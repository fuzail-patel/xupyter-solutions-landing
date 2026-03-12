"use client"

import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"

import Header from "@/components/layout/Header"
import { jobs } from "@/lib/constants/careers"
import { applicationSchema, type ApplicationFormValues } from "@/lib/schemas/application.schema"
import { ApplyModalForm } from "@/components/careers/ApplyModal/ApplyModalForm"
import { CtaButton } from "@/components/shared/CtaButton"
import { SystemList } from "@/components/shared/SystemList"

export default function JobApplicationPage() {
  const params = useParams()
  const slug = params?.slug as string
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)

  const job = jobs.find((j) => j.id === slug) || jobs.find(j => j.href.endsWith(slug))
  
  const isGeneral = slug === "general-application"
  
  if (!job && !isGeneral) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Job Not Found</h1>
            <Link href="/careers" className="text-primary mt-4 inline-block hover:underline">Back to Careers</Link>
          </div>
        </div>
      </div>
    )
  }

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      resume: undefined,
      coverNote: "",
      position: job ? job.title : "General Application",
    },
  })

  const onSubmit = (data: ApplicationFormValues) => {
    console.log("Form data:", data)
    // In a real app, you'd send this to your API
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircleIcon className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Application Sent!</h1>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for applying{job ? ` for the ${job.title} position` : ""}. We've received your application and our team will review it shortly.
              </p>
            </div>
            <div className="pt-4">
              <CtaButton variant="primary" onClick={() => router.push("/careers")}>
                Back to Careers
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <Link 
            href="/careers" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 md:mb-12 group"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Side: Job Details */}
            <div className="space-y-10 lg:sticky lg:top-24 pb-12">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
                  {job ? job.title : "General Application"}
                </h1>
                {job && (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base text-muted-foreground/90">
                    <span>{job.meta.employmentType}</span>
                    <span className="h-1 w-1 rounded-full bg-border/80" />
                    <span>{job.meta.location}</span>
                    <span className="h-1 w-1 rounded-full bg-border/80" />
                    <span>{job.meta.department}</span>
                    <span className="h-1 w-1 rounded-full bg-border/80" />
                    <span>{job.meta.experienceLevel}</span>
                  </div>
                )}
                {job?.salary && (
                  <p className="text-sm md:text-base text-muted-foreground/90 font-medium">
                    {job.salary.value}
                  </p>
                )}
              </div>

              {job ? (
                <div className="space-y-10">
                  {job.overview && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
                        Overview
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                        {job.overview}
                      </p>
                    </div>
                  )}

                  {job.techStack && job.techStack.length > 0 && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
                        Key skills / Tech stack
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-xs md:text-sm text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {job.responsibilities && job.responsibilities.length > 0 && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
                        Responsibilities
                      </h2>
                      <SystemList items={job.responsibilities} />
                    </div>
                  )}

                  {job.requirements && job.requirements.length > 0 && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
                        Requirements
                      </h2>
                      <SystemList items={job.requirements} />
                    </div>
                  )}

                  {job.benefits && job.benefits.length > 0 && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-foreground uppercase tracking-wider">
                        Benefits
                      </h2>
                      <SystemList items={job.benefits} />
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                    Don't see a specific role that matches your profile? Share your background and areas of interest with us.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                    We're always looking for engineers and operators who care about long-term, structured systems work across internal platforms and operations tooling.
                  </p>
                </div>
              )}
            </div>

            {/* Right Side: Application Form */}
            <div className="bg-secondary border border-border/60 rounded-2xl p-6 md:p-10 shadow-sm lg:sticky lg:top-24">
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">Apply for this position</h2>
                <p className="mt-2 text-sm text-muted-foreground/80">
                  Please fill out the form below and we'll be in touch.
                </p>
              </div>
              <ApplyModalForm 
                form={form} 
                onSubmit={onSubmit} 
                isSpecific={!!job}
                showCancel={false}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
