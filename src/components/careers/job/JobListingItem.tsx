import { CtaButton } from "@/components/ui"
import { SystemList } from "@/components/shared"
import { Card, CardContent } from "@/components/ui"
import Link from "next/link"
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  MapPinIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline"
import type { JobListingItemProps } from "@/types/careers"

export function JobListingItem({ job, isOpen, onToggle }: JobListingItemProps) {
  // Flag: missing fields from Payload: techStack, responsibilities, salary, benefits, successIndicators
  const hasRequirements = job.requirements && job.requirements.length > 0
  const requirementsList = job.requirements?.map(r => r.requirement).filter(Boolean) as string[] || []

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
                <h2 className="text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors">
                  {job.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground/90">
                  <span className="inline-flex items-center gap-1.5">
                    <BriefcaseIcon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.type || 'Full-time'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.location || 'Remote'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BuildingOffice2Icon className="h-3.5 w-3.5 text-muted-foreground/80" />
                    <span>{job.department || 'Engineering'}</span>
                  </span>
                  {/* experienceLevel is missing in Payload Job */}
                </div>

                <p className="mt-3 text-sm text-muted-foreground/90 max-w-2xl">
                  {job.summary || ''}
                </p>

                <div className="my-8"></div>
              </button>

              {isOpen && (
                <div className="mt-4 space-y-6 text-sm md:text-base text-muted-foreground/90">
                  {requirementsList.length > 0 && (
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <p className="font-semibold text-foreground">
                            Requirements
                          </p>
                          <SystemList items={requirementsList} size="sm" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-start mt-6">
                    <CtaButton
                      variant="primary"
                      href={`/careers/${job.id}`}
                      className="text-sm"
                    >
                      View Details & Apply
                    </CtaButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  )
}

