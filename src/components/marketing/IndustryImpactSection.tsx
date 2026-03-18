"use client"

import { useRef } from "react"
import { Section } from "@/components/layout"
import { CtaButton, SectionHeader } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/utils/animations"
import { cn } from "@/utils/common"
import { IMPACT_METRICS } from "@/lib/constants/impact"

export default function IndustryImpactSection() {
  const leftColRef = useRef<HTMLDivElement | null>(null)
  const { ref, style } = useSectionReveal({
    threshold: 0.25,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Left column (heading + CTA): fade-in + translateX(-16px → 0)
      if (leftColRef.current) {
        animateFade(leftColRef.current, {
          translateX: [-16, 0],
        })
      }

      // Metric cards (right column): fade-in + translateY(14px → 0), stagger 120ms
      const cards = sectionEl.querySelectorAll<HTMLElement>("[data-impact-card]")
      animateStaggered(cards, {
        translateY: [14, 0],
        staggerDelay: 120,
      })
    },
  })

  return (
    <Section ref={ref} style={style}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div ref={leftColRef}>
          <SectionHeader
            align="left"
            eyebrow="PROVEN RESULTS"
            titlePrimary="Results That"
            titleSecondary="Speak for Themselves"
            description="Beyond the code, we focus on the outcomes that matter most to your business. From rapid development cycles to enterprise-grade uptime, we deliver measurable value at every stage."
          />
          <div className="mt-6">
            <CtaButton variant="primary" href="#contact">
              Speak to a Specialist
            </CtaButton>
          </div>
        </div>

        <div className="space-y-5">
          {IMPACT_METRICS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={`${item.title}-${idx}`}
                data-impact-card
                className={cn(
                  "rounded-xl border border-muted-foreground/10 bg-card backdrop-blur-sm p-5 flex gap-4 items-start transition-all hover:border-primary/20",
                  "md:odd:translate-x-2 md:even:-translate-x-2"
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="text-base font-semibold">
                    {item.value} {item.title}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
 

