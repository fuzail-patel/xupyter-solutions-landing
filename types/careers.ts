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
