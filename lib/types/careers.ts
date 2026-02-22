export type JobMeta = {
  employmentType: string
  location: string
  department: string
  experienceLevel: string
}

export type Salary = {
  value: string
}

export type Job = {
  id: string
  title: string
  meta: JobMeta
  shortDescription: string
  salary?: Salary
  href: string
  overview?: string
  techStack?: string[]
  responsibilities?: string[]
  requirements?: string[]
  benefits?: string[]
  successIndicators?: string[]
}

export type CareersPageContent = {
  title: string
  subtitle: string
  emptyStateMessage: string
  emptyStateCtaLabel: string
  emptyStateHref: string
}

export type CareersBenefit = {
  id: string
  title: string
  description: string
  icon: "remote" | "clock" | "briefcase" | "sparkles"
}

export type ApplyModalMode = "specific" | "general"

export type ApplyModalProps = {
  mode: ApplyModalMode
  job?: Job
  jobs: Job[]
  triggerLabel: string
}

export type JobListingsSectionProps = {
  jobs: Job[]
  emptyStateMessage: string
  emptyStateCtaLabel: string
  emptyStateHref: string
}

export type JobListingItemProps = {
  job: Job
  isOpen: boolean
  onToggle: () => void
}

export type JobDetailTopProps = {
  job: Job
  allJobs: Job[]
}

export type JobDetailSectionsProps = {
  job: Job
}

import type { UseFormReturn } from "react-hook-form"
import type { ApplicationFormValues } from "@/lib/schemas/application.schema"

export type ApplyModalFormProps = {
  form: UseFormReturn<ApplicationFormValues>
  onSubmit: () => void
  onCancel: () => void
  isSpecific: boolean
}
