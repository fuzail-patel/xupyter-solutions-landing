import { CallToAction } from "@/components/marketing"
import { CtaButton, PageHeader, SmartImage } from "@/components/ui"
import { getCaseStudyByProject, getProjectBySlug } from "@/lib/cms-client"
import { getMediaUrl } from "@/utils/common"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { portfolioProjects } from "@/lib/constants/portfolio"
import { mapConstantToDisplayProject } from "@/utils/portfolio/mapProject"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug).catch(() => null)

  if (!project) {
    const constantProject = portfolioProjects.find(p => p.slug === slug)
    if (constantProject) {
      return {
        title: `${constantProject.name} | Case Study`,
        description: constantProject.outcome,
      }
    }
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title || 'Project'} | Case Study`,
    description: project.summary || '',
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let project = await getProjectBySlug(slug).catch(() => null)
  let caseStudy = null

  if (!project) {
    const constantProject = portfolioProjects.find(p => p.slug === slug)
    if (constantProject) {
      const displayProject = mapConstantToDisplayProject(constantProject, 0)
      project = {
        id: 0,
        slug: displayProject.slug,
        title: displayProject.title,
        summary: displayProject.summary,
        industry: { name: displayProject.industry } as any,
        client: { name: 'Proprietary' } as any,
        coverImage: displayProject.coverImage as any,
        liveUrl: displayProject.liveUrl,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      }
      caseStudy = { slug: constantProject.caseStudyUrl?.split('/').pop() }
    } else {
      notFound()
    }
  } else {
    caseStudy = await getCaseStudyByProject(project.id).catch(() => null)
  }

  const industryName = (typeof project.industry === 'object' && project.industry !== null) ? project.industry.name : 'Tech'
  const clientName = (typeof project.client === 'object' && project.client !== null) ? project.client.name : (project.client || 'Proprietary')

  return (    <main className="flex flex-col bg-background">
      <PageHeader
        eyebrow={industryName}
        titlePrimary={project.title || 'Untitled Project'}
        titleSecondary=""
        description={project.summary || ''}
      />

      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-16">
          {/* Main Project Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted/60 shadow-xl">
            <SmartImage
              src={getMediaUrl(project.coverImage) || ""}
              alt={project.title || 'Project Image'}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 960px, 100vw"
              preload
            />
          </div>

          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Project Summary</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.summary || ''}
                </p>
              </div>

              {caseStudy && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Deep Dive Available</h3>
                    <p className="text-muted-foreground">We've written a detailed case study about the technical challenges and solutions for this project.</p>
                  </div>
                  <CtaButton variant="primary" href={`/case-studies/${caseStudy.slug || ''}`}>
                    Read Full Case Study
                  </CtaButton>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Industry</dt>
                    <dd className="mt-1 text-sm font-semibold text-foreground">
                      {industryName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Client</dt>
                    <dd className="mt-1 text-sm font-semibold text-foreground">
                      {clientName}
                    </dd>
                  </div>
                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Technologies</dt>
                      <dd className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: any) => (
                          (typeof tech === 'object' && tech !== null) ? (
                            <span key={tech.id} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground border border-border/50">
                              {tech.technology}
                            </span>
                          ) : null
                        ))}
                      </dd>
                    </div>
                  )}
                  {project.liveUrl && (
                    <div className="pt-4 border-t border-border/50">
                      <CtaButton variant="primary" href={project.liveUrl} className="w-full text-center py-2 text-xs">
                        View Live Site
                      </CtaButton>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <span>←</span> Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
