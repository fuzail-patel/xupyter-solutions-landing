"use client"

import { useRef } from "react"
import { AsymmetricGrid, Section } from "@/components/layout"
import { SectionHeader } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { Testimonial } from "@/types/marketing/Testimonial.types"
import { animateFade, animateStaggered } from "@/utils/animations"
import { getDisplayTestimonials } from "@/utils/marketing/mapTestimonial"

// Sub-components and constants
import { STATS } from "./constants"
import { VideoCard } from "./VideoCard"
import { TextCard } from "./TextCard"

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const kpiRef = useRef<HTMLDivElement | null>(null)

  const displayTestimonials = getDisplayTestimonials(testimonials)

  const { ref, style } = useSectionReveal({
    threshold: 0.2,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // KPI strip numbers: fade-in + translateY(8px → 0), stagger 100ms
      if (kpiRef.current) {
        animateStaggered(kpiRef.current.children as any, {
          translateY: [8, 0],
          staggerDelay: 100,
        })
      }

      // Section heading: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Testimonial cards: fade-in + translateY(16px → 0), stagger 120ms
      const cards = sectionEl.querySelectorAll<HTMLElement>("[data-testimonial-card]")
      animateStaggered(cards, {
        translateY: [16, 0],
        staggerDelay: 120,
      })
    },
  })

  return (
    <Section ref={ref} style={style} className="relative">
      <div className="bg-transparent sm:bg-card sm:p-6 rounded-xl space-y-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-10 gap-y-5">
          <div ref={headerRef} className="max-w-lg">
            <SectionHeader
              eyebrow="Testimonials"
              titlePrimary="What Our"
              titleSecondary="Clients Say"
              accent={false}
              description="Don't take our word for it — here's what the startups we've built for have to say."
            />
          </div>

          {/* KPI Strip */}
          <div ref={kpiRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="border-t border-foreground/10 pt-10">
          <AsymmetricGrid
            className="gap-4"
            items={displayTestimonials.map((item) => ({
              id: item.id,
              colSpan: item.colSpan,
              content:
                item.type === "video" ? (
                  <div data-testimonial-card>
                    <VideoCard {...item as any} />
                  </div>
                ) : (
                  <div data-testimonial-card>
                    <TextCard {...item as any} />
                  </div>
                ),
            }))}
          />
        </div>
      </div>
    </Section>
  )
}
