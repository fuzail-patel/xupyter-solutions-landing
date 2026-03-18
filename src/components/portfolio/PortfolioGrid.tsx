"use client"

import { PortfolioCard } from "@/components/portfolio"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateStaggered } from "@/utils/animations"
import type { DisplayProject } from "@/types/portfolio"

interface PortfolioGridProps {
  projects: DisplayProject[]
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const { ref, style } = useSectionReveal({
    threshold: 0.1,
    autoAnimate: false,
    onReveal: (el) => {
      const cards = el.querySelectorAll<HTMLElement>("[data-portfolio-card]")
      animateStaggered(cards, {
        translateY: [20, 0],
        staggerDelay: 100,
      })
    },
  })

  return (
    <section ref={ref} style={style} className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} data-portfolio-card>
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
