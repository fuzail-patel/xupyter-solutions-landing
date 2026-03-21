import { sendMail } from "@/lib/mailer"
import { getPayloadInstance } from "@/lib/cms-client"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")
  
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    )
  }

  const summary = {
    processed: 0,
    sent: 0,
    failed: 0,
  }

  try {
    const payload = await getPayloadInstance()
    
    // Fetch all leads with email_status = pending
    const { docs: pendingLeads } = await payload.find({
      collection: "contact-leads",
      where: {
        email_status: {
          equals: "pending",
        },
      },
      limit: 100, // Process in batches if necessary
    })

    summary.processed = pendingLeads.length

    for (const lead of pendingLeads) {
      try {
        const subject = `New contact from ${lead.firstName} ${lead.lastName}`
        const text = [
          `Name: ${lead.firstName} ${lead.lastName}`,
          `Contact: ${lead.emailOrPhone}`,
          lead.website ? `Website: ${lead.website}` : "",
          "",
          lead.message,
        ].filter(Boolean).join("\n")

        await sendMail({
          subject,
          text,
        })

        // Update status to sent
        await payload.update({
          collection: "contact-leads",
          id: lead.id,
          data: {
            email_status: "sent",
          },
        })
        summary.sent++
      } catch (error) {
        console.error(`Failed to send email for lead ${lead.id}:`, error)
        
        // Update status to failed
        await payload.update({
          collection: "contact-leads",
          id: lead.id,
          data: {
            email_status: "failed",
          },
        })
        summary.failed++
      }
    }

    return NextResponse.json(summary)
  } catch (error) {
    console.error("Cron job failed:", error)
    return NextResponse.json(
      { success: false, error: "Cron job failed", summary },
      { status: 500 }
    )
  }
}
