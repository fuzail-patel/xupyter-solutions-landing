import { sendMail } from "@/lib/mailer"
import { getPayloadInstance } from "@/lib/cms-client"
import { NextResponse } from "next/server"
import { getEmailTemplate } from "@/lib/mail-templates"

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
    
    // Configurable batch size (default 5)
    const BATCH_SIZE = parseInt(process.env.EMAIL_BATCH_SIZE || "5", 10)

    // Fetch pending leads:
    // 1. Prioritize quotes (isQuote: true first)
    // 2. Then by creation date (oldest first)
    const { docs: pendingLeads } = await payload.find({
      collection: "contact-leads",
      where: {
        email_status: {
          equals: "pending",
        },
      },
      sort: "-isQuote,createdAt", // '-' prefix for descending (isQuote: true first)
      limit: BATCH_SIZE,
    })

    // Fetch pending job applications
    const { docs: pendingApplications } = await payload.find({
      collection: "job-applications",
      where: {
        email_status: {
          equals: "pending",
        },
      },
      sort: "createdAt",
      limit: BATCH_SIZE,
      depth: 1, // To get resume media data
    })

    summary.processed = pendingLeads.length + pendingApplications.length

    // Process contact leads
    for (const lead of pendingLeads) {
      try {
        const isQuote = lead.isQuote
        const name = `${lead.firstName} ${lead.lastName}`
        const subject = isQuote 
          ? `New Service Quote Request: ${lead.serviceSlug}`
          : `New contact from ${name}`
        
        // Generate plain text as fallback
        const text = isQuote ? [
          `*** SERVICE QUOTE REQUEST ***`,
          `Service: ${lead.serviceSlug}`,
          `Name: ${name}`,
          `Work email: ${lead.emailOrPhone}`,
          `Company size: ${lead.companySize}`,
          `Budget range: ${lead.budgetRange}`,
          "",
          `Message:`,
          lead.message || "No additional message provided.",
        ].filter(Boolean).join("\n") : [
          `Name: ${name}`,
          `Contact: ${lead.emailOrPhone}`,
          lead.website ? `Website: ${lead.website}` : "",
          "",
          lead.message,
        ].filter(Boolean).join("\n")

        // Generate HTML from templates
        const html = isQuote 
          ? getEmailTemplate("quote-template", {
              name,
              email: lead.emailOrPhone || "",
              company_size: lead.companySize || "N/A",
              budget: lead.budgetRange || "N/A",
              message: lead.message || "No additional message provided.",
            })
          : getEmailTemplate("contact-template", {
              name,
              email: lead.emailOrPhone || "",
              message: lead.message || "No additional message provided.",
            })

        await sendMail({
          subject,
          text,
          html,
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

    // Process job applications
    for (const application of pendingApplications) {
      try {
        const name = application.fullName
        const subject = `New Job Application: ${application.position} - ${name}`
        
        // Get resume URL from Cloudinary (assuming it's in the media collection)
        const resumeUrl = (application.resume as any)?.url || ""
        
        const text = [
          `*** NEW JOB APPLICATION ***`,
          `Candidate: ${name}`,
          `Email: ${application.email}`,
          `Phone: ${application.phone || "N/A"}`,
          `Position: ${application.position}`,
          `Resume: ${resumeUrl}`,
          "",
          `Cover Note:`,
          application.coverNote,
        ].filter(Boolean).join("\n")

        const html = getEmailTemplate("career-template", {
          name,
          email: application.email,
          phone: application.phone || "N/A",
          position: application.position,
          resume_url: resumeUrl,
          message: application.coverNote,
        })

        await sendMail({
          subject,
          text,
          html,
        })

        // Update status to sent
        await payload.update({
          collection: "job-applications",
          id: application.id,
          data: {
            email_status: "sent",
          },
        })
        summary.sent++
      } catch (error) {
        console.error(`Failed to send email for application ${application.id}:`, error)
        
        // Update status to failed
        await payload.update({
          collection: "job-applications",
          id: application.id,
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
