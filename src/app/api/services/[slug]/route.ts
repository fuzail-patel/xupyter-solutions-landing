import { NextResponse } from "next/server"
import { connectMongo } from "@/lib/mongodb"
import { Service } from "@/models/Service"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectMongo()
    const { slug } = await params
    const service = await Service.findOne({ slug }).lean()

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error) {
    console.error("Error fetching service:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
