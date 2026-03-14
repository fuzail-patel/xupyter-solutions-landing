import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import Header from "@/components/layout/Header"
import { getProjectBySlug, getCaseStudyByProject } from "@/lib/cms-client"
import { PageHeader, CtaButton } from "@/components/shared"
import { CallToAction } from "@/components/sections"
import { SmartImage } from "@/components/shared/SmartImage"
import { getMediaUrl } from "@/lib/utils"

export async function generateMetadata({
  params,
}: any): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({
  params,
}: any) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const caseStudy = await getCaseStudyByProject(project.id)

  return (
    <main className="flex flex-col bg-background">
      <Header />

      <PageHeader
        eyebrow={(typeof project.industry === 'object' ? project.industry.name : project.industry) || "Portfolio"}
        titlePrimary={project.title}
        titleSecondary=""
        description={project.summary}
      />

      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-16">
          {/* Main Project Image */}
          <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-muted/60 shadow-xl">
            <SmartImage
              src={getMediaUrl(project.coverImage)}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 960px, 100vw"
              priority
            />
          </div>

          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Project Summary</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.summary}
                </p>
              </div>

              {caseStudy && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Deep Dive Available</h3>
                    <p className="text-muted-foreground">We've written a detailed case study about the technical challenges and solutions for this project.</p>
                  </div>
                  <CtaButton variant="primary" href={`/case-studies/${caseStudy.slug}`}>
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
                      {typeof project.industry === 'object' ? project.industry.name : project.industry}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Client</dt>
                    <dd className="mt-1 text-sm font-semibold text-foreground">
                      {typeof project.client === 'object' ? project.client.name : (project.client || "Xupyter Client")}
                    </dd>
                  </div>
                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Technologies</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((item: any) => (
                          <span
                            key={item.id}
                            className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                          >
                            {item.technology}
                          </span>
                        ))}
                      </dd>
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

// Helper component for Payload Lexical RichText
function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null

  // A very basic serializer for Lexical content
  return (
    <div className="space-y-4">
      {content.root.children.map((node: any, i: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={i}>
              {node.children?.map((child: any, j: number) => {
                if (child.format & 1) return <strong key={j}>{child.text}</strong>
                if (child.format & 2) return <em key={j}>{child.text}</em>
                return child.text
              })}
            </p>
          )
        }
        if (node.type === 'heading') {
          const Tag = node.tag as any
          return (
            <Tag key={i} className="text-foreground font-bold">
              {node.children?.map((child: any, j: number) => child.text)}
            </Tag>
          )
        }
        if (node.type === 'list') {
          const Tag = node.tag === 'ol' ? 'ol' : 'ul'
          return (
            <Tag key={i} className="list-inside list-disc space-y-2">
              {node.children?.map((item: any, j: number) => (
                <li key={j}>
                  {item.children?.map((child: any, k: number) => child.text)}
                </li>
              ))}
            </Tag>
          )
        }
        return null
      })}
    </div>
  )
}
