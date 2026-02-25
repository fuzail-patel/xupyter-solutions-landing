"use client"

import { useEffect, useRef, useState } from "react"
import { SmartImage } from "@/components/shared/SmartImage"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline"

import SectionHeader from "@/components/shared/SectionHeader"
import { BodyText } from "@/components/shared/Typography"
import { CASE_STUDIES } from "@/lib/constants/caseStudies"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { animateFadeUp } from "@/lib/animations"
import { Badge } from "../ui"
import Link from "next/link"

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const timeoutRef = useRef<number | null>(null)

  const { ref, style } = useSectionReveal((sectionEl) => {
    const card = sectionEl.querySelector<HTMLElement>("[data-case-card]")
    if (!card) return

    animateFadeUp(card)
  })

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleNavigate = (direction: "next" | "prev") => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    setIsVisible(false)

    timeoutRef.current = window.setTimeout(() => {
      setActiveIndex((current) => {
        const lastIndex = CASE_STUDIES.length - 1

        if (direction === "next") {
          return current === lastIndex ? 0 : current + 1
        }

        return current === 0 ? lastIndex : current - 1
      })

      setIsVisible(true)
    }, 150)
  }

  const activeCase = CASE_STUDIES[activeIndex]

  return (
    <section
      id="work"
      className="py-10 md:py-14"
      ref={ref}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          size="md"
          align="center"
          accent
          eyebrow="Case Studies"
          title="Selected Systems in Production"
          description="Real platforms built for real operations."
        />

        <div>
          <div
            className={[
              "relative rounded-2xl bg-card",
              "transition-opacity duration-300",
              isVisible ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start overflow-hidden">
              <div className="flex flex-col gap-5">
                <div className="bg-secondary/60 p-1">
                  <div className="relative rounded-lg bg-background/80 overflow-hidden aspect-16/9">
                    <SmartImage
                      src={activeCase.image ?? '/fallback-image.png'}
                      alt={`${activeCase.headline} system view`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                      priority={activeIndex === 0}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                      Impact in Operations
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {activeCase.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="text-sm md:text-base font-semibold">
                            {metric.value}
                          </span>
                          <span className="text-xs md:text-xs text-muted-foreground">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 p-6 md:p-10">
                <div className="flex items-center justify-between w-full">
                  <Badge variant={'outline'}>
                    <span className="text-muted-foreground/95">
                      {activeCase.icon}
                    </span>
                    <span>{activeCase.industry}</span>
                  </Badge>

                  <div className="ms-auto">
                    <Link
                      href={`/case-studies/${activeCase.slug}`}
                    >
                      <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground hover:text-accent-foreground" />
                    </Link>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {activeCase.headline}
                </h3>

                <div className="space-y-6">
                  <BodyText className="text-muted-foreground leading-relaxed">
                    {activeCase.challenge} {activeCase.systemBuilt}
                  </BodyText>
                </div>

                <div className="mt-15 ms-auto flex items-center justify-end gap-3 text-sm text-muted-foreground">
                  <button
                    type="button"
                    onClick={() => handleNavigate("prev")}
                    className="inline-flex items-center gap-1 hover:text-foreground transition-colors group"
                  >
                    <ArrowLeftIcon className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                    <span>Previous</span>
                  </button>
                  <span className="h-4 w-px bg-border/70" />
                  <button
                    type="button"
                    onClick={() => handleNavigate("next")}
                    className="inline-flex items-center gap-1 hover:text-foreground transition-colors group"
                  >
                    <span>Next</span>
                    <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
