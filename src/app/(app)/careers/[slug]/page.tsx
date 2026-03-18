import { jobs } from "@/lib/constants/careers"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { JobApplicationForm } from "./JobApplicationForm"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const job = jobs.find((j) => j.id.toString() === slug)
  const isGeneral = slug === "general-application"

  if (!job && !isGeneral) {
    return {
      title: "Job Not Found",
    }
  }

  const title = job ? `${job.title} | Careers` : "General Application | Careers"
  const description = job 
    ? `Apply for the ${job.title} position at Xupyter Solutions. Join our engineering team and build high-performance business systems.`
    : "Submit a general application to join the Xupyter Solutions team."

  return {
    title,
    description,
  }
}

export default async function JobApplicationPage({ params }: PageProps) {
  const { slug } = await params
  const job = jobs.find((j) => j.id.toString() === slug)
  const isGeneral = slug === "general-application"

  if (!job && !isGeneral) {
    notFound()
  }

  return (
    <div className="pt-20">
      <JobApplicationForm job={job} isGeneral={isGeneral} />
    </div>
  )
}
