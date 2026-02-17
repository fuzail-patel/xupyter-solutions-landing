import {
  BriefcaseIcon,
  ClockIcon,
  HomeModernIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"

import Header from "@/components/layout/Header"
import { PageSectionHeader } from "@/components/custom/PageSectionHeader"
import { JobListingsSection } from "@/components/careers/JobListingsSection"
import { ApplyModal } from "@/components/careers/ApplyModal"
import { careersBenefits, careersPageContent, jobs } from "@/data/careers"
import { jobListSchema } from "@/schemas/careers.schema"

export default function CareersPage() {
  const validatedJobs = jobListSchema.parse(jobs)
  const benefitIconMap = {
    remote: HomeModernIcon,
    clock: ClockIcon,
    briefcase: BriefcaseIcon,
    sparkles: SparklesIcon,
  } as const

  return (
    <main className="flex flex-col">
      <Header />

      <PageSectionHeader
        eyebrow="Careers"
        titlePrimary="Build Systems"
        titleSecondary="That Power Real Businesses"
        subtitle="We hire engineers and operators who care about long-term, structured systems work across internal platforms and operations tooling."
        accent={true}
      />

      <section className="py-10 sm:py-12 md:py-16 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
              Why Join Us
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {careersBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="rounded-xl border border-border/60 bg-card/40 p-5 sm:p-6 flex items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/50 border border-border/60">
                    {(() => {
                      const Icon = benefitIconMap[benefit.icon]
                      return (
                        <Icon className="h-5 w-5 text-muted-foreground/90" />
                      )
                    })()}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {benefit.title}
                    </p>
                    <p className="text-sm text-muted-foreground/90">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JobListingsSection
        jobs={validatedJobs}
        emptyStateMessage={careersPageContent.emptyStateMessage}
        emptyStateCtaLabel={careersPageContent.emptyStateCtaLabel}
        emptyStateHref={careersPageContent.emptyStateHref}
      />

      <section className="py-10 sm:py-12 md:py-16 border-t border-border/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            Don’t see a suitable role?
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground/90 leading-relaxed">
            Share your profile and areas of focus and we’ll match you against current and upcoming roles.
          </p>
          <div className="mt-5 flex justify-center">
            <ApplyModal
              mode="general"
              jobs={validatedJobs}
              triggerLabel="Apply for a role"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
