import { CallToAction } from "@/components/marketing"
import { PortfolioGrid } from "@/components/portfolio"
import { PageHeader } from "@/components/ui"
import { getCaseStudies, getProjects } from "@/lib/cms-client"
import { getDisplayProjects } from "@/utils/portfolio/mapProject"
import { pageSEO } from "@/lib/seo/pages"
import type { Metadata } from "next"

export const metadata: Metadata = pageSEO.portfolio

export default async function PortfolioPage() {
  const [projectsData, caseStudiesData] = await Promise.all([
    getProjects({
      where: {
        published: { equals: true },
      },
      sort: '-createdAt',
      limit: 100,
    }),
    getCaseStudies({
      where: {
        published: { equals: true },
      },
      sort: '-createdAt',
      limit: 100, // Get enough to map
    })
  ]).catch(() => [{ docs: [] }, { docs: [] }])

  const projects = getDisplayProjects(projectsData.docs, caseStudiesData.docs)

  return (
    <main className="flex flex-col bg-background">

      <PageHeader
        eyebrow="Portfolio"
        titlePrimary="Systems We’ve Designed"
        titleSecondary="& Shipped"
        description="Custom SaaS platforms, internal tools, ERP systems, and automation infrastructure built with scalability in mind."
      />

      <PortfolioGrid projects={projects} />

      <CallToAction />
    </main>
  )
}

