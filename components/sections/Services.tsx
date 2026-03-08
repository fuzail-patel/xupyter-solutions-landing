"use client"

import Link from "next/link"
import { useRef } from "react"
import AsymmetricGrid from "@/components/layout/AsymmetricGrid"
import { Card, CardContent } from "@/components/ui/card"
import { BodyText } from "@/components/shared/Typography"
import SectionHeader from "@/components/shared/SectionHeader"
import { SERVICES } from "@/lib/constants/services"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/lib/animations"
import Section from "@/components/layout/Section"
import {
  Globe,
  Database,
  Bot,
  Layers,
  Code,
  Share2,
  Server,
  Puzzle,
} from "lucide-react"

/** Maps service titles to their representative Lucide icon */
const SERVICE_ICON: Record<string, React.ElementType> = {
  "Application Development": Code,
  "API & System Integrations": Share2,
  "SAP Integrations": Server,
  "Third-Party Platform Integrations": Puzzle,
  "Business Websites & Digital Foundations": Globe,
  "Custom ERP, CRM & Business Platforms": Database,
  "Automation & AI-Ready Systems": Bot,
  "Architecture & Technical Strategy": Layers,
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const { ref, style } = useSectionReveal({
    threshold: 0.15,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Section heading: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Service cards: fade-in + translateY(20px → 0), stagger 110ms
      const cards = sectionEl.querySelectorAll<HTMLElement>("[data-service-card]")
      animateStaggered(cards, {
        translateY: [20, 0],
        staggerDelay: 110,
      })
    },
  })

  return (
    <Section id="services" ref={ref} style={style}>
      <div ref={headerRef}>
        <SectionHeader
          align="center"
          size="md"
          eyebrow="Services"
          titlePrimary="Systems We Design & Deliver"
          titleSecondary="for Real Business Operations"
          description="From foundational websites to complex ERP and AI-ready platforms — we build structured systems that support real business operations."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-14">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICON[service.title]

          return (
            <div
              key={`${service.title}-${index}`}
              data-service-card
              className="relative transition-all hover:translate-x-1 group"
            >
              <div className="flex flex-col gap-4">

                <div className="relative w-8 h-8 flex items-center justify-center">

                  {/* top-left */}
                  <span className="
    absolute -left-2 -top-2
    w-3 h-3
    border-l-[2px] border-t-[2px] border-muted-foreground
    transition-all duration-300 ease-out
    group-hover:w-1/2 group-hover:h-1/2 group-hover:border-primary
  " />

                  {/* bottom-right */}
                  <span className="
    absolute -right-2 -bottom-2
    w-3 h-3
    border-r-[2px] border-b-[2px] border-muted-foreground
    transition-all duration-300 ease-out
    group-hover:w-1/2 group-hover:h-1/2 group-hover:border-primary
  " />

                  {Icon && (
                    <Icon
                      className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors"
                      strokeWidth={1.5}
                    />
                  )}

                </div>

                <div className="space-y-2 mt-5">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-medium">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}