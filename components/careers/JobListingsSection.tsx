"use client"

import { useState } from "react"
import Link from "next/link"

import type { Job } from "@/types/careers"
import { Button } from "@/components/ui/button"
import { JobListingItem } from "@/components/careers/JobListingItem"

type JobListingsSectionProps = {
  jobs: Job[]
  emptyStateMessage: string
  emptyStateCtaLabel: string
  emptyStateHref: string
}

export function JobListingsSection({
  jobs,
  emptyStateMessage,
  emptyStateCtaLabel,
  emptyStateHref,
}: JobListingsSectionProps) {
  const hasJobs = jobs.length > 0
  const [openJobIds, setOpenJobIds] = useState<string[]>(() =>
    jobs.map((job) => job.id)
  )

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {hasJobs ? (
          <div className="space-y-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                Open Positions
              </h2>
            </div>
            <div className="divide-y divide-border/60">
              {jobs.map((job) => (
                <JobListingItem
                  key={job.id}
                  job={job}
                  isOpen={openJobIds.includes(job.id)}
                  onToggle={() =>
                    setOpenJobIds((current) =>
                      current.includes(job.id)
                        ? current.filter((id) => id !== job.id)
                        : [...current, job.id]
                    )
                  }
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border/70 bg-muted/20 px-6 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16">
            <p className="text-sm md:text-base text-muted-foreground/90">
              {emptyStateMessage}
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href={emptyStateHref}>{emptyStateCtaLabel}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
