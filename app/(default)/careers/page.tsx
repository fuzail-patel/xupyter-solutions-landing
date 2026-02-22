import {
  BriefcaseIcon,
  ClockIcon,
  HomeModernIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid"

import Header from "@/components/layout/Header"
import PageSectionHeader from "@/components/shared/PageSectionHeader"
import { JobListingsSection } from "@/components/careers/job/JobListingsSection"
import { ApplyModal } from "@/components/careers/ApplyModal"
import AsymmetricGrid from "@/components/layout/AsymmetricGrid"
import { careersBenefits, careersPageContent, jobs } from "@/lib/constants/careers"
import { jobListSchema } from "@/lib/schemas/careers.schema"

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
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
              How We Work
            </h2>
            <p className="text-sm mt-1 text-muted-foreground/90 leading-relaxed">
              How we structure day-to-day work, collaboration, and expectations for the team.
            </p>
          </div>

          <div className="mt-8">
            <AsymmetricGrid
              className="gap-3 sm:gap-4 items-start"
              items={careersBenefits.map((benefit) => ({
                id: benefit.id,
                colSpan: 3,
                content: (
                  <div className="h-full rounded-none bg-card px-4 py-3 sm:px-5 sm:py-4 space-y-3">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-muted shrink-0">
                      {(() => {
                        const Icon = benefitIconMap[benefit.icon]
                        return (
                          <Icon className="h-5 w-5 text-muted-foreground" />
                        )
                      })()}
                    </div>
                    <div className="space-y-3">
                      <p className="text-base md:text-lg font-semibold text-foreground leading-snug">
                        {benefit.title}
                      </p>
                      <p className="text-sm font-semibold text-muted-foreground/90">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ),
              }))}
            />
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
