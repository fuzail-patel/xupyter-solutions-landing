"use client"

import Link from "next/link"
import { useRef } from "react"

import AsymmetricGrid from "@/components/layout/AsymmetricGrid"
import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/shared/SectionHeader"
import { INDUSTRIES } from "@/lib/constants/industries"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/lib/animations"
import Section from "@/components/layout/Section"

export default function IndustriesSection() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const { ref, style } = useSectionReveal({
    threshold: 0.2,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Section heading + subtitle: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Industry cards: fade-in + translateY(16px → 0), stagger 100ms per card
      const cards = sectionEl.querySelectorAll<HTMLElement>(
        "[data-industry-card]"
      )
      animateStaggered(cards, {
        translateY: [16, 0],
        staggerDelay: 100,
      })
    },
  })

  return (
    <Section id="industries" ref={ref} style={style}>
      <div ref={headerRef}>
        <SectionHeader
          align="left"
          eyebrow="Industries"
          titlePrimary="Industries"
          titleSecondary="We Power"
          description="We've shipped production systems across 7 high-growth verticals. Here's how we think about each one."
        />
      </div>

      <AsymmetricGrid
        className="gap-4 md:gap-6"
        items={INDUSTRIES.map((industry) => ({
          id: industry.name,
          colSpan: industry.colSpan,
          content: (
            <Link
              key={industry.name}
              href={industry.href}
              className="block group"
            >
              <Card
                data-industry-card
                className="h-full rounded-2xl p-0 gap-0 
                 border-0 backdrop-blur-sm 
                 transition-all duration-300 
                 hover:text-primary
                 hover:border-primary/20 hover:bg-card/60"
              >
                {/* Top Icon Band */}
                <div className="h-32 flex items-center justify-center 
                      bg-white/3 rounded-t-2xl">
                  <div className="group-hover:opacity-100 transition text-current">
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="px-6 py-6 flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {industry.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          )
        }))}
      />
    </Section>
  )
}
