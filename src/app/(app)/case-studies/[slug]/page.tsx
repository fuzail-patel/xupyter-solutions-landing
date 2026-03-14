import { CallToAction } from "@/components/marketing"
import { RichText } from "@/components/shared"
import { CtaButton, PageHeader, SmartImage } from "@/components/ui"
import { getCaseStudyBySlug } from "@/lib/cms-client"
import { getMediaUrl } from "@/utils/common"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CASE_STUDIES } from "@/lib/constants/caseStudies"


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug).catch(() => null)

  if (!caseStudy) {
    const constantCaseStudy = CASE_STUDIES.find(cs => cs.slug === slug)
    if (constantCaseStudy) {
      return {
        title: `${constantCaseStudy.headline} | Case Study`,
        description: constantCaseStudy.challenge,
      }
    }
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${caseStudy.title || 'Case Study'} | Case Study`,
    description: "Case Study Detail",
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let caseStudy = await getCaseStudyBySlug(slug).catch(() => null)
  let isConstant = false

  if (!caseStudy) {
    const constantCaseStudy = CASE_STUDIES.find(cs => cs.slug === slug)
    if (constantCaseStudy) {
      caseStudy = {
        id: 1,
        slug: constantCaseStudy.slug,
        title: constantCaseStudy.headline,
        project: {
          title: constantCaseStudy.industry,
          summary: constantCaseStudy.challenge,
          industry: { name: constantCaseStudy.industry } as any,
          coverImage: `/images/portfolio/${constantCaseStudy.slug.split('-')[0]}.jpg` as any, 
        } as any,
        problem: { 
          root: { 
            children: [{ 
              type: 'paragraph', 
              children: [{ text: constantCaseStudy.challenge }] 
            }] 
          } 
        } as any,
        solution: { 
          root: { 
            children: [{ 
              type: 'paragraph', 
              children: [{ text: constantCaseStudy.systemBuilt }] 
            }] 
          } 
        } as any,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      }
      isConstant = true
    } else {
      notFound()
    }
  }

  // The project is usually a populated object
  const project = (typeof caseStudy.project === 'object' && caseStudy.project !== null) ? caseStudy.project : null

  return (
    <main className="flex flex-col bg-background min-h-screen">
      {/* New Hero Layout inspired by image */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 text-primary font-medium tracking-[0.2em] text-xs uppercase">
              <span className="w-8 h-px bg-primary" />
              CASE STUDY — {caseStudy.id?.toString().padStart(2, '0') || '01'}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.1] max-w-4xl">
              {caseStudy.title || 'Untitled Case Study'}
            </h1>

            {/* Excerpt/Summary */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
              {project?.summary || ""}
            </p>

            {/* Project Meta Details */}
            <div className="pt-8 flex flex-wrap gap-12 md:gap-20">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Client</span>
                <p className="text-sm font-medium">{project?.title || "Internal"}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Industry</span>
                <p className="text-sm font-medium">
                  {(typeof project?.industry === 'object' && project.industry !== null) ? project.industry.name : "Technology"}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Role</span>
                <p className="text-sm font-medium">Systems & Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="bg-muted/30 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {project?.coverImage && (
            <div className="relative aspect-video md:aspect-21/9 w-full overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <SmartImage
                src={getMediaUrl(project.coverImage) || ""}
                alt={caseStudy.title || 'Case Study Image'}
                fill
                className="object-cover"
                sizes="100vw"
                preload
              />
              {/* Decorative Scroll Down Indicator (optional, matching image) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-border/20">
                <span className="text-foreground text-lg">↓</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16 md:space-y-24">
            {/* Problem Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <RichText content={caseStudy.problem} />
              </div>
            </div>

            {/* Solution Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <RichText content={caseStudy.solution} />
              </div>
            </div>

            {/* Architecture Section */}
            {caseStudy.architecture && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Architecture</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <RichText content={caseStudy.architecture} />
                </div>
              </div>
            )}

            {/* Results Section */}
            {caseStudy.results && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Results & Impact</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <RichText content={caseStudy.results} />
                </div>
              </div>
            )}
          </div>

          <div className="mt-24 pt-12 border-t border-border flex justify-between items-center">
            <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
