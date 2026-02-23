import Image from "next/image"

import Header from "@/components/layout/Header"
import { PageSectionHeader } from "@/components/shared"
import { PortfolioCard } from "@/components/portfolio"
import { CtaButton } from "@/components/shared"
import { CallToAction } from "@/components/sections"
import { portfolioProjects } from "@/lib/constants/portfolio"
import { SmartImage } from "@/components/shared/SmartImage"

export default function PortfolioPage() {
  const featuredProject =
    portfolioProjects.find((project) => project.featured) ??
    portfolioProjects[0]

  const otherProjects = portfolioProjects.filter(
    (project) => project.slug !== featuredProject.slug
  )

  return (
    <main className="flex flex-col">
      <Header />

      <PageSectionHeader
        eyebrow="Portfolio"
        titlePrimary="Systems We’ve Designed"
        titleSecondary="& Shipped"
        subtitle="Custom SaaS platforms, internal tools, ERP systems, and automation infrastructure built with scalability in mind."
      />

      <section className="py-10 sm:py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-6 space-y-10 md:space-y-12">
          <div className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-stretch">
              <div className="relative overflow-hidden bg-muted/60">
                <div className="relative aspect-16/10 md:aspect-auto md:h-full">
                  <SmartImage
                    src={featuredProject.image}
                    alt={featuredProject.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 640px, (min-width: 768px) 60vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 p-6 lg:py-8">
                <div className="space-y-4 space-x-2">
                  {featuredProject.featured && (
                    <span className="inline-flex items-center rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-500">
                      Featured
                    </span>
                  )}

                  <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground/90">
                    <span>{featuredProject.industry}</span>
                    <span className="h-1 w-10 rounded-full bg-gradient-to-r from-emerald-400/80 via-sky-400/80 to-violet-500/80" />
                  </span>

                  <div className="space-y-2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-[var(--font-satoshi)] text-foreground">
                      {featuredProject.name}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground/90">
                      {featuredProject.type}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-foreground/90">
                    {featuredProject.outcome}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                    {featuredProject.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label} className="flex flex-col">
                        <span className="text-base md:text-lg font-semibold font-[var(--font-satoshi)]">
                          {metric.value}
                        </span>
                        <span className="text-xs md:text-xs text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {featuredProject.caseStudyUrl && (
                    <CtaButton
                      variant="primary"
                      href={featuredProject.caseStudyUrl}
                      className="flex-1"
                    >
                      View Case Study
                    </CtaButton>
                  )}
                  {featuredProject.liveUrl && (
                    <CtaButton
                      variant="secondary"
                      href={featuredProject.liveUrl}
                      className="border-dashed"
                    >
                      View Live
                    </CtaButton>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
