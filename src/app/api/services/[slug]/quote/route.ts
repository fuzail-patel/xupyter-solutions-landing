import { NextResponse } from "next/server"
import { sendMail } from "@/lib/mailer"
import { getPayloadInstance } from "@/lib/cms-client"
import {
  serviceQuoteSchema,
  type ServiceQuoteFormValues,
} from "@/utils/schemas/service-quote.schema"

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
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

  const parsed = serviceQuoteSchema.safeParse(data)

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

  const { slug } = await params
  const { fullName, workEmail, companySize, budgetRange, message } =
    parsed.data as ServiceQuoteFormValues

  const [firstName = "", ...lastNameParts] = fullName.split(" ")
  const lastName = lastNameParts.join(" ") || "-"

  try {
    const payload = await getPayloadInstance()

    await payload.create({
      collection: 'contact-leads',
      data: {
        firstName,
        lastName,
        emailOrPhone: workEmail,
        companySize,
        budgetRange,
        message: message || "",
        serviceSlug: slug,
        isQuote: true,
      },
    })
  } catch (error) {
    console.error("Failed to save service quote lead to Payload", error)
  }

  try {
    const subject = `New Service Quote Request: ${slug}`
    const text = [
      `*** SERVICE QUOTE REQUEST ***`,
      `Service: ${slug}`,
      `Name: ${fullName}`,
      `Work email: ${workEmail}`,
      `Company size: ${companySize}`,
      `Budget range: ${budgetRange}`,
      "",
      `Message:`,
      message || "No additional message provided.",
    ]
      .filter(Boolean)
      .join("\n")

    await sendMail({
      subject,
      text,
    })
  } catch (error) {
    console.error("Failed to send service quote email", error)
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

