"use client"

import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui"
import { AsymmetricGrid, Section } from "@/components/layout"
import { SectionHeader, BodyText } from "@/components/ui"
import { SERVICES } from "@/lib/constants/services"
import { useServiceAnimations } from "@/hooks/useServiceAnimations"
import {
  Globe,
  Database,
  Bot,
  Layers,
  Code,
  Share2,
  Server,
  Puzzle,
  ArrowUpRight,
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
  const { ref, style } = useServiceAnimations(headerRef)

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
            <Link
              key={`${service.title}-${index}`}
              href={service.href}
              data-service-card
              className="relative transition-all hover:translate-x-1 group block"
            >
              <div className="flex flex-col gap-4">

                <div className="relative w-8 h-8 flex items-center justify-center text-primary">

                  {/* top-left */}
                  <span className="
    absolute -left-2 -top-2
    w-3 h-3
    border-l-2 border-t-2 border-muted-foreground
    transition-all duration-300 ease-out
    group-hover:w-1/2 group-hover:h-1/2 group-hover:border-primary
  " />

                  {/* bottom-right */}
                  <span className="
    absolute -right-2 -bottom-2
    w-3 h-3
    border-r-2 border-b-2 border-muted-foreground
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
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-0.5 -translate-x-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-0"
                      strokeWidth={1.75}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-medium">
                    {service.shortDescription}
                  </p>
                </div>

              </div>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}
