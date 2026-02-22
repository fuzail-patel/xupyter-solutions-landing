"use client"

import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

import { AsymmetricGrid } from "@/components/layout/AsymmetricGrid"
import { Card, CardContent } from "@/components/ui/card"
import { BodyText } from "@/components/custom/Typography"
import { SectionHeader } from "@/components/custom/SectionHeader"
import { SystemList } from "@/components/custom/SystemList"
import { SERVICES } from "@/data/services"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateStaggeredFadeUp } from "@/lib/animations"
import { Badge } from "../ui/badge"

export default function Services() {
  const { ref, style } = useSectionReveal((sectionEl) => {
    const cards = sectionEl.querySelectorAll<HTMLElement>(
      "[data-service-card]"
    )
    animateStaggeredFadeUp(cards)
  })

  return (
    <section
      id="services"
      className="py-10 md:py-14"
      ref={ref}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          size="md"
          eyebrow="Services"
          title="Systems We Design & Deliver"
          description="From foundational websites to complex ERP and AI-ready platforms — we build structured systems that support real business operations."
        />

        <div className="mt-10 md:mt-12">
          <AsymmetricGrid
            className="gap-2"
            items={SERVICES.map((service) => ({
              id: service.title,
              colSpan: service.colSpan,
              content: (
                <Card
                  data-service-card
                  className="h-full shadow-sm py-0 transform-gpu transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md rounded-none border-none"
                >
                  <CardContent className="h-full px-6 py-6">
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground/90">
                        {service.title}
                      </h3>

                      <BodyText className="mt-2 max-w-md">
                        {service.description}
                      </BodyText>

                      <div className="mt-6 grid md:grid-cols-2 gap-2 justify-items-start me-auto">
                        {service.bullets.map(service => (
                          <Badge variant={'secondary'} className="font-bold flex items-center gap-1.5">
                            <div className="p-0.75 mt-0.5 bg-primary rounded-full animate-pulse"></div>
                            {service}
                          </Badge>
                        ))}
                      </div>

                    </Link>
                  </CardContent>
                </Card>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  )
}
