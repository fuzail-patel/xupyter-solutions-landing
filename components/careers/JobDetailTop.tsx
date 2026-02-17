import type { Job } from "@/types/careers"
import { ApplyModal } from "@/components/careers/ApplyModal"

type JobDetailTopProps = {
  job: Job
  allJobs: Job[]
}

export function JobDetailTop({ job, allJobs }: JobDetailTopProps) {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-[var(--font-satoshi)] leading-tight text-foreground">
          {job.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted-foreground/90">
          <span>{job.meta.employmentType}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{job.meta.location}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{job.meta.department}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{job.meta.experienceLevel}</span>
        </div>

        {job.salary && (
          <p className="mt-3 text-sm text-muted-foreground/90">
            {job.salary.value}
          </p>
        )}

        <div className="mt-6">
          <ApplyModal
            mode="specific"
            job={job}
            jobs={allJobs}
            triggerLabel="Apply for this role"
          />
        </div>
      </div>
    </section>
  )
}

