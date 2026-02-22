"use client"

import Link from "next/link"

import { AsymmetricGrid } from "@/components/layout/AsymmetricGrid"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { cn } from "@/lib/utils"
import { INDUSTRIES } from "@/data/industries"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateStaggeredFadeUp } from "@/lib/animations"
import { BodyText } from "../custom/Typography"

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
          className="gap-2"
          items={INDUSTRIES.map((industry) => ({
            id: industry.name,
            colSpan: industry.colSpan,
            content: (
              <Link key={industry.name} href={industry.href} className="block h-full group">
                <Card
                  data-industry-card
                  className={cn(
                    "h-full rounded-xl border-none py-0 cursor-pointer",
                    "hover:bg-linear-to-br hover:from-card hover:to-secondary/10",
                    "transition-all duration-250 ease-out hover:scale-[1.02] hover:shadow-sm",
                    "border-b-2 border-transparent hover:border-primary/20"
                  )}
                >
                  <CardContent className="px-6 py-6 flex flex-col justify-center h-full space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
                      {industry.name}
                    </h3>

                    <BodyText className="font-semibold">
                      {industry.description}
                    </BodyText>
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
