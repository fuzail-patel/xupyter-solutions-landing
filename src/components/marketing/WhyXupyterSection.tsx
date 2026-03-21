"use client"

import { useRef } from "react"
import { Section } from "@/components/layout"
import { SectionHeader } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/utils/animations"
import { cn } from "@/utils/common"
import {
  Layers,
  Network,
  Boxes,
  Workflow,
  ShieldCheck,
  Handshake,
} from "lucide-react"

type WhyItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const WHY_XUPYTER_ITEMS: WhyItem[] = [
  {
    icon: Handshake,
    title: "FULL-CYCLE OWNERSHIP",
    description:
      "From discovery workshops to post-launch support, we own every phase. No handoffs, no finger-pointing — just one accountable team from day one to deployment.",
  },
  {
    icon: Layers,
    title: "ARCHITECTURE-FIRST THINKING",
    description:
      "We design systems to last, not just to ship. Every project starts with a technical blueprint so your stack doesn't become technical debt by month six.",
  },
  {
    icon: Boxes,
    title: "STACK-AGNOSTIC ENGINEERING",
    description:
      "We don't push a preferred stack — we choose the right technology for your specific product, timeline, and scale. MERN, Laravel, Flutter, or serverless? We speak them all.",
  },
  {
    icon: Workflow,
    title: "STARTUP-SPEED EXECUTION",
    description:
      "We move at startup pace. Sprints are tight, decisions are fast, and our teams are structured to ship working software every two weeks — not every two months.",
  },
  {
    icon: Network,
    title: "AI-READY BY DEFAULT",
    description:
      "Every product we build is designed to integrate AI capabilities — whether that's a recommendation engine, smart search, or a custom LLM workflow — when you're ready to scale.",
  },
  {
    icon: ShieldCheck,
    title: "TRANSPARENT PARTNERSHIP",
    description:
      "You get a dedicated project lead, weekly demos, real-time progress tracking, and honest conversations about trade-offs. No black box, no surprises.",
  },
]

export default function WhyXupyterSection() {
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

      // 6 USP blocks: fade-in + translateY(12px → 0), stagger 90ms per block
      const cards = sectionEl.querySelectorAll<HTMLElement>("[data-why-card]")
      animateStaggered(cards, {
        translateY: [12, 0],
        staggerDelay: 90,
      })
    },
  })

  return (
    <Section ref={ref} style={style} className="[&_[data-why-card]]:opacity-0">
      <div ref={headerRef} style={{ opacity: 0 }}>
        <SectionHeader
          align="center"
          eyebrow="Why Xupyter"
          titlePrimary="Why Startups"
          titleSecondary="Choose Xupyter"
          description="We're not a dev shop you manage — we're a technical co-founder you hire."
        />
      </div>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 mt-14"
        )}
      >
        {WHY_XUPYTER_ITEMS.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.title}-${idx}`}
              data-why-card
              className="relative pl-6 border-l border-white/10 transition-all hover:translate-x-1 group"
            >
              <span className="absolute -left-px top-0 h-10 w-0.5 bg-primary/70 group-hover:bg-primary rounded-full" />

              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

