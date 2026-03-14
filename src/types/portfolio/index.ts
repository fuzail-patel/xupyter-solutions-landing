import type { Project } from "@/payload-types"

export type PortfolioCardProps = {
  project: Project & { caseStudyUrl?: string | null }
}

export type PortfolioProject = {
  slug: string
  name: string
  industry: string
  type: string
  outcome: string
  image: string
  featured?: boolean
  metrics: { value: string; label: string }[]
  caseStudyUrl: string
  liveUrl: string
}
