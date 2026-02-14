"use client"

import { JourneyTimeline } from "@/components/sections/JourneyTimeline"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { PROCESS_STEPS } from "@/data/process"
import { useSectionReveal } from "@/hooks/useSectionReveal"

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

        <JourneyTimeline steps={PROCESS_STEPS} />
      </div>
    </section>
  )
}
