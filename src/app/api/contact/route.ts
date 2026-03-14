import { sendMail } from "@/lib/mailer"
import { connectMongo } from "@/lib/mongodb"
import { ContactLead } from "@/models/ContactLead"
import { contactSchema } from "@/utils/schemas/contact.schema"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  let data: unknown

  try {
    data = await request.json()
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request body",
      },
      { status: 400 }
    )
  }

  const parsed = contactSchema.safeParse(data)

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation error",
        details: parsed.error.flatten(),
      },
      { status: 400 }
    )
  }

  const { name, email, website, message } = parsed.data
  const [firstName = "", ...lastNameParts] = name.split(" ")
  const lastName = lastNameParts.join(" ") || "-"

  try {
    await connectMongo()

    await ContactLead.create({
      firstName,
      lastName,
      emailOrPhone: email,
      website,
      message,
    })
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    )
  }

  try {
    const subject = `New contact from ${firstName} ${lastName}`
    const text = [
      `Name: ${firstName} ${lastName}`,
      `Contact: ${email}`,
      website ? `Website: ${website}` : "",
      "",
      message,
    ].filter(Boolean).join("\n")

    await sendMail({
      subject,
      text,
    })
  } catch {
    console.error("Failed to send contact notification email")
  }

  return NextResponse.json(
    {
      success: true,
    },
    { status: 200 }
  )
}

