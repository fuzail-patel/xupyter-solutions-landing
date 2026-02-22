import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  MapPinIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline"
import { ApplyModal } from "@/components/careers/ApplyModal"
import { SystemList } from "@/components/shared/SystemList"
import { Card, CardContent } from "@/components/ui/card"
import type { JobListingItemProps } from "@/lib/types/careers"

export function JobListingItem({ job, isOpen, onToggle }: JobListingItemProps) {
  const hasTechStack = job.techStack && job.techStack.length > 0
  const hasResponsibilities = job.responsibilities && job.responsibilities.length > 0
  const hasRequirements = job.requirements && job.requirements.length > 0

  return (
    <article className="py-4">
      <Card className="border-border/70 bg-card/80 shadow-sm">
        <CardContent className="pt-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3 md:flex-1">
              <button
                type="button"
                onClick={onToggle}
                className="text-left w-full"
              >
                <h2 className="text-lg md:text-xl font-semibold text-foreground">
                  {job.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground/90">
                  <span className="inline-flex items-center gap-1.5">
                    <BriefcaseIcon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.meta.employmentType}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.meta.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BuildingOffice2Icon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.meta.department}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <AcademicCapIcon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.meta.experienceLevel}</span>
                  </span>
                  {job.salary && (
                    <span className="inline-flex items-center gap-1.5">
                      <CurrencyDollarIcon className="h-3.5 w-3.5 text-muted-foreground/80" />
                      <span>{job.salary.value}</span>
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-muted-foreground/90 max-w-2xl">
                  {job.shortDescription}
                </p>

                <div className="my-8"></div>

                {hasTechStack && (
                  <div className="mt-3 space-y-2">
                    <p className="font-semibold text-foreground">
                      Key Skills/Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack?.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </button>

              {isOpen && (
                <div className="mt-4 space-y-6 text-sm md:text-base text-muted-foreground/90">
                  {(hasResponsibilities || hasRequirements) && (
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        {hasResponsibilities && (
                          <div className="space-y-2">
                            <p className="font-semibold text-foreground">
                              Responsibilities
                            </p>
                            <SystemList items={job.responsibilities} size="sm" />
                          </div>
                        )}

                        {hasRequirements && (
                          <div className="space-y-2">
                            <p className="font-semibold text-foreground">
                              Requirements
                            </p>
                            <SystemList items={job.requirements} size="sm" />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="md:mt-1 md:ml-8">
              <ApplyModal
                mode="specific"
                job={job}
                jobs={[job]}
                triggerLabel="Apply Now"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}
