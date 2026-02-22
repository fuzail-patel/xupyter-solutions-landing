"use client"

import { Card, CardContent } from "@/components/ui/card"
import AsymmetricGrid from "@/components/layout/AsymmetricGrid"
import { cn } from "@/lib/utils"
import SectionHeader from "@/components/shared/SectionHeader"
import { PROCESS_STEPS } from "@/lib/constants/process"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { BodyText } from "@/components/shared/Typography"

export default function Process() {
  const { ref, style } = useSectionReveal()

  return (
    <section
      id="about"
      className="py-10 md:py-14"
      ref={ref}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          size="md"
          eyebrow="Delivery Process"
          title="How We Build Systems"
          description="A structured, repeatable process designed for long-term performance — not one-off delivery."
        />

        <AsymmetricGrid
          className="gap-2"
          items={PROCESS_STEPS.map((step) => ({
            id: step.id,
            colSpan: step.colSpan,
            content: (
              <Card
                key={step.id}
                className={cn(
                  "relative border-none py-6",
                  "transition-all duration-200 ease-out hover:shadow-sm hover:from-card/90 hover:to-secondary/10"
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
      </div>
    </section>
  )
}
