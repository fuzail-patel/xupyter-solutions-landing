import type { CaseStudyMetric } from "@/lib/types/caseStudies"

export type PortfolioProject = {
  slug: string
  name: string
  industry: string
  type: string
  outcome: string
  image: string
  featured?: boolean
  metrics: CaseStudyMetric[]
  caseStudyUrl?: string
  liveUrl?: string
}

export type PortfolioCardProps = {
  project: PortfolioProject
}
