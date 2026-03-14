export type PortfolioProject = {
  slug: string
  title: string
  industry: string
  client?: string
  description: string
  image: string
  featured?: boolean
  techstack: string[]
  caseStudyUrl?: string
  liveUrl?: string
}

export type PortfolioCardProps = {
  project: PortfolioProject
}
