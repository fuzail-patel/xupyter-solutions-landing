import { getPayloadInstance } from "@/lib/cms-client"
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
    const payload = await getPayloadInstance()

    await payload.create({
      collection: 'contact-leads',
      data: {
        firstName,
        lastName,
        emailOrPhone: email,
        website,
        message,
        isQuote: false,
      },
    })
  } catch (error) {
    console.error("Failed to save contact lead to Payload", error)
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    )
  }

  return NextResponse.json(
    {
      success: true,
    },
    { status: 200 }
  )
}

