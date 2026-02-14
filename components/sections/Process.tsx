import { JourneyTimeline } from "@/components/sections/JourneyTimeline"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { PROCESS_STEPS } from "@/data/process"

export default function Process() {
  return (
    <section id="about" className="py-10 md:py-14">
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
