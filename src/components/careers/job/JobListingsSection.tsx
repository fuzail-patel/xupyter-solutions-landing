"use client"
import { JobListingItem } from "@/components/careers"
import { Button } from "@/components/ui"
import { useState } from "react"

import Link from "next/link"
import type { JobListingsSectionProps } from "@/types/careers"

export function JobListingsSection({
  jobs,
}: JobListingsSectionProps) {
  const hasJobs = jobs.length > 0
  const [openJobIds, setOpenJobIds] = useState<number[]>(() =>
    jobs.map((job) => job.id)
  )

  if (!hasJobs) return null

  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
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
      </div>
    </section>
  )
}

