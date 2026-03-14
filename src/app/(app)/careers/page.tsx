import { JobListingsSection } from "@/components/careers"
import { CtaButton, PageHeader } from "@/components/ui"
import { getJobs } from "@/lib/cms-client"
import { careersBenefits, careersPageContent } from "@/lib/constants/careers"
import { Job } from "@/types/careers"
import {
  BriefcaseIcon,
  ClockIcon,
  HomeModernIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid"

export default async function CareersPage() {
  const jobsData = await getJobs()
  const validatedJobs = jobsData.docs as Job[]

  const benefitIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    remote: HomeModernIcon,
    clock: ClockIcon,
    briefcase: BriefcaseIcon,
    sparkles: SparklesIcon,
  }

  return (
    <main className="flex flex-col">
      <PageHeader
        eyebrow="Careers"
        titlePrimary="Build Systems"
        titleSecondary="That Power Real Businesses"
        description="We hire engineers and operators who care about long-term, structured systems work across internal platforms and operations tooling."
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 mt-14">
            {careersBenefits.map((benefit, index) => {
              const Icon = benefitIconMap[benefit.icon]

              return (
                <div
                  key={benefit.id}
                  className="relative transition-all hover:translate-x-1 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      {/* top-left corner */}
                      <span className="
                        absolute -left-2 -top-2
                        w-3 h-3
                        border-l-2 border-t-2 border-muted-foreground/50
                        transition-all duration-300 ease-out
                        group-hover:w-1/2 group-hover:h-1/2 group-hover:border-primary
                      " />

                      {/* bottom-right corner */}
                      <span className="
                        absolute -right-2 -bottom-2
                        w-3 h-3
                        border-r-2 border-b-2 border-muted-foreground/50
                        transition-all duration-300 ease-out
                        group-hover:w-1/2 group-hover:h-1/2 group-hover:border-primary
                      " />

                      {Icon && (
                        <Icon
                          className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors"
                        />
                      )}
                    </div>

                    <div className="space-y-2 mt-5">
                      <h3 className="text-base font-bold text-foreground uppercase tracking-tight">
                        {benefit.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
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
            <CtaButton href="/careers/general-application" variant="primary" className="font-semibold">
              Apply for a role
            </CtaButton>
          </div>
        </div>
      </section>
    </main>
  )
}
