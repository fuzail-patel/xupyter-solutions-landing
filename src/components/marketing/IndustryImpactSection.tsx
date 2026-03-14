"use client"

import { useRef } from "react"
import { Section } from "@/components/layout"
import { CtaButton, SectionHeader } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/utils/animations"
import { cn } from "@/utils/common"
import {
  ArrowTrendingUpIcon as TrendingUpIcon,
  ClockIcon,
  ShieldCheckIcon,
  WalletIcon,
  CpuChipIcon as CpuIcon,
} from "@heroicons/react/24/outline"

const IMPACT_METRICS = [
  {
    icon: ClockIcon,
    value: "[3x]",
    title: "Faster Time-to-Market",
    description:
      "Startups working with Xupyter ship their MVPs up to 3x faster through our pre-built component libraries and parallel dev sprints.",
  },
  {
    icon: ShieldCheckIcon,
    value: "[99.9%]",
    title: "Infrastructure Uptime",
    description:
      "Our DevOps setups are production-hardened with auto-scaling and health checks — keeping your platform online when it matters most.",
  },
  {
    icon: WalletIcon,
    value: "[40%]",
    title: "Average Cost Reduction",
    description:
      "By right-sizing cloud infrastructure and automating manual workflows, our clients consistently reduce operational overhead.",
  },
  {
    icon: TrendingUpIcon,
    value: "[50+]",
    title: "Products Shipped",
    description:
      "Across 7 industries and multiple countries, we've taken ideas from concept to live product — repeatedly and reliably.",
  },
]

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
                  "rounded-xl border-0 bg-card backdrop-blur-sm p-5 flex gap-4 items-start transition-all hover:border-primary/20",
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
 

