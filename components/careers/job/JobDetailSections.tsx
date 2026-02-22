import type { JobDetailSectionsProps } from "@/lib/types/careers"

export function JobDetailSections({ job }: JobDetailSectionsProps) {
  const showOverview = !!job.overview
  const showTechStack = !!job.techStack && job.techStack.length > 0
  const showResponsibilities =
    !!job.responsibilities && job.responsibilities.length > 0
  const showRequirements = !!job.requirements && job.requirements.length > 0
  const showSuccessIndicators =
    !!job.successIndicators && job.successIndicators.length > 0

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-10 md:space-y-12">
        {showOverview && (
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              Overview
            </h2>
            <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
              {job.overview}
            </p>
          </div>
        )}

        {showTechStack && (
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              Key skills / Tech stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {job.techStack?.map((item) => (
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

        {showResponsibilities && (
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              Responsibilities
            </h2>
            <ul className="space-y-1.5 text-sm md:text-base text-muted-foreground/90 leading-relaxed list-disc pl-5">
              {job.responsibilities?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {showRequirements && (
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              Requirements
            </h2>
            <ul className="space-y-1.5 text-sm md:text-base text-muted-foreground/90 leading-relaxed list-disc pl-5">
              {job.requirements?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {showSuccessIndicators && (
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              What success looks like
            </h2>
            <ul className="space-y-1.5 text-sm md:text-base text-muted-foreground/90 leading-relaxed list-disc pl-5">
              {job.successIndicators?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
