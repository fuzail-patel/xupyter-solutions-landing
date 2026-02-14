"use client"

import Link from "next/link"

import { AsymmetricGrid } from "@/components/layout/AsymmetricGrid"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { cn } from "@/lib/utils"
import { INDUSTRIES } from "@/data/industries"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateStaggeredFadeUp } from "@/lib/animations"

export default function IndustriesSection() {
  const { ref, style } = useSectionReveal((sectionEl) => {
    const cards = sectionEl.querySelectorAll<HTMLElement>(
      "[data-industry-card]"
    )
    animateStaggeredFadeUp(cards)
  })

  return (
    <section
      id="industries"
      className="py-10 md:py-14"
      ref={ref}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          size="md"
          eyebrow="Industries"
          title="Built for Complex, Real-World Industries"
          description="We design structured platforms and automation systems tailored to industry-specific operations and workflows."
        />

        <AsymmetricGrid
          className="gap-3"
          items={INDUSTRIES.map((industry) => ({
            id: industry.name,
            colSpan: industry.colSpan,
            content: (
              <Link key={industry.name} href={industry.href} className="block h-full group">
                <Card
                  data-industry-card
                  className={cn(
                    "h-full rounded-xl border border-border/70 py-0",
                    "bg-card hover:bg-secondary/40",
                    "transition-colors duration-200 transform-gpu transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  <CardContent className="px-6 py-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                          <span className="text-foreground">
                            {industry.icon}
                          </span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/80 group-hover:text-foreground transition-colors">
                          VIEW DETAIL
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl md:text-2xl font-semibold font-[var(--font-satoshi)]">
                        {industry.name}
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground">
                        {industry.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ),
          }))}
        />
      </div>
    </section>
  )
}
