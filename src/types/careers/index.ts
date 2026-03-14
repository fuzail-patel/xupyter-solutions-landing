import type { Job as PayloadJob } from "@/payload-types"
import type { UseFormReturn } from "react-hook-form"
import type { ApplicationFormValues } from "@/utils/schemas/application.schema"

export type Job = PayloadJob

export type CareersPageContent = {
  title: string
  subtitle: string
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

export type ApplyModalFormProps = {
  form: UseFormReturn<ApplicationFormValues>
  onSubmit: (data: ApplicationFormValues) => void
  onCancel?: () => void
  isSpecific: boolean
  showCancel?: boolean
}
