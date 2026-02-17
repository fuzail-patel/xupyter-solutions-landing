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
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                          <span className="text-foreground">
                            {service.icon}
                          </span>
                        </div>
                        <span className="text-foreground/40 hover:text-foreground">
                          <ArrowUpRightIcon className="h-4 w-4" />
                          <span className="sr-only">View detail</span>
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-[var(--font-satoshi)] font-semibold">
                        {service.title}
                      </h3>

                      <BodyText className="mt-4 max-w-md">
                        {service.description}
                      </BodyText>

                      <div className="mt-6">
                        <SystemList items={service.bullets} />
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
