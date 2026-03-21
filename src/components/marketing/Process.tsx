"use client"

import { Card, CardContent } from "@/components/ui"
import { AsymmetricGrid, Section } from "@/components/layout"
import { cn } from "@/utils/common"
import { SectionHeader, BodyText } from "@/components/ui"
import { PROCESS_STEPS } from "@/lib/constants/process"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { useRef } from "react"
import { animateFade, animateStaggered } from "@/utils/animations"

export default function Process() {
  const headerRef = useRef<HTMLDivElement | null>(null)

  const { ref, style } = useSectionReveal({
    threshold: 0.2,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Section heading: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Process steps: fade-in + translateY(16px → 0), stagger 100ms
      const steps = sectionEl.querySelectorAll<HTMLElement>("[data-process-step]")
      animateStaggered(steps, {
        translateY: [16, 0],
        staggerDelay: 100,
      })
    },
  })

  return (
    <Section id="about" ref={ref} style={style} className="[&_[data-process-step]]:opacity-0">
      <div ref={headerRef} style={{ opacity: 0 }}>
        <SectionHeader
          align="center"
          size="md"
          eyebrow="Delivery Process"
          titlePrimary="How We"
          titleSecondary="Build Systems"
          description="A structured, repeatable process designed for long-term performance — not one-off delivery."
        />
      </div>

      <AsymmetricGrid
        className="gap-2"
        items={PROCESS_STEPS.map((step) => ({
          id: step.id,
          colSpan: step.colSpan,
          content: (
            <Card
              key={step.id}
              data-process-step
              className={cn(
                "relative border-none py-6",
                "transition-all duration-200 ease-out hover:shadow-sm hover:from-card/90 hover:to-secondary/10 h-full"
              )}
            >
                <CardContent className="px-6">
                  <h3 className="text-secondary-foreground/50 font-bold text-4xl md:text-5xl">
                    {step.id}
                  </h3>

                  <h3 className="text-xl md:text-2xl font-semibold">
                    {step.title}
                  </h3>

                  {step.description && (
                    <BodyText className="text-muted-foreground font-semibold mt-4">
                      {step.description}
                    </BodyText>
                  )}
                </CardContent>
              </Card>
            ),
          }))}
        />
    </Section>
  )
}


