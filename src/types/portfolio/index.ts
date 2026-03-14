import type { Project } from "@/payload-types"

export type DisplayProject = {
  id: string | number
  slug: string
  title: string
  summary: string
  industry: string
  technologies?: { technology: string; id: string }[]
  coverImage: any // String URL or Media object/ID
  featured: boolean
  liveUrl?: string | null
  caseStudyUrl?: string | null
}

export type PortfolioCardProps = {
  project: DisplayProject
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
