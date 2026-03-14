import Header from "@/components/layout/Header"
import { PageHeader } from "@/components/shared"
import { PortfolioCard } from "@/components/portfolio"
import { CtaButton } from "@/components/shared"
import { CallToAction } from "@/components/sections"
import { SmartImage } from "@/components/shared/SmartImage"
import { getProjects, getCaseStudies } from "@/lib/cms-client"
import { getMediaUrl } from "@/lib/utils"

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
      limit: 100, // Get enough to map
    })
  ])

  const projects = projectsData.docs.map((doc: any) => {
    const relatedCaseStudy = caseStudiesData.docs.find((cs: any) =>
      (typeof cs.project === 'object' ? cs.project.id : cs.project) === doc.id
    )

    return {
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      industry: typeof doc.industry === 'object' ? doc.industry.name : (doc.industry || 'Tech'),
      client: doc.client || null,
      description: doc.summary,
      image: getMediaUrl(doc.coverImage),
      featured: doc.featured,
      techstack: doc.technologies?.map((t: any) => t.technology).filter(Boolean) || [],
      caseStudyUrl: relatedCaseStudy ? `/case-studies/${relatedCaseStudy.slug}` : null,
      liveUrl: doc.liveUrl || null,
    }
  })

  if (projects.length === 0) {
    return (<main className="flex flex-col bg-background">
      <PageHeader eyebrow="Portfolio" titlePrimary="Our" titleSecondary="Work" description="No projects found." />
    </main>
    )
  }

  return (
    <main className="flex flex-col bg-background">

      <PageHeader
        eyebrow="Portfolio"
        titlePrimary="Systems We’ve Designed"
        titleSecondary="& Shipped"
        description="Custom SaaS platforms, internal tools, ERP systems, and automation infrastructure built with scalability in mind."
      />

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: any) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
