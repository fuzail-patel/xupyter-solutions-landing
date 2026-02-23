import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/schemas/contact.schema"
import { connectMongo } from "@/lib/mongodb"
import { ContactLead } from "@/models/ContactLead"
import { sendMail } from "@/lib/mailer"

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

  const { firstName, lastName, emailOrPhone, message } = parsed.data

  try {
    await connectMongo()

    await ContactLead.create({
      firstName,
      lastName,
      emailOrPhone,
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
      `Contact: ${emailOrPhone}`,
      "",
      message,
    ].join("\n")

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

