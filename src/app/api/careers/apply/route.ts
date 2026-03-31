import { getPayloadInstance } from "@/lib/cms-client"
import { applicationSchema } from "@/utils/schemas/application.schema"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    // Extract fields for Zod validation
    const fullName = formData.get("fullName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const position = formData.get("position")
    const coverNote = formData.get("coverNote")
    const resume = formData.get("resume")

    const data = {
      fullName,
      email,
      phone,
      position,
      coverNote,
      resume,
    }

    // Validate the basic data
    const parsed = applicationSchema.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.flatten() }, { status: 400 })
    }

    const payload = await getPayloadInstance()

    // 1. Upload Resume to Media Collection
    const resumeFile = formData.get("resume") as File
    if (!resumeFile) {
        return NextResponse.json({ success: false, error: "Resume is required" }, { status: 400 })
    }
    
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())
    
    const mediaDoc = await payload.create({
      collection: 'media',
      data: { alt: `Resume - ${fullName}` },
      file: {
        data: resumeBuffer,
        name: resumeFile.name,
        mimetype: resumeFile.type,
        size: resumeFile.size,
      },
    })

    // 2. Create Job Application entry
    await payload.create({
      collection: 'job-applications',
      data: {
        fullName: fullName as string,
        email: email as string,
        phone: (phone as string) || '',
        position: position as string,
        coverNote: coverNote as string,
        resume: mediaDoc.id,
        email_status: 'pending',
      },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Job application submission failed:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
