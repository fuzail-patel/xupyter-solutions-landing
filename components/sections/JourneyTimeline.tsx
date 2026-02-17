"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import type { JourneyTimelineProps } from "@/types/journey"

export function JourneyTimeline({ steps }: JourneyTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const index = stepRefs.current.findIndex(
            (node) => node === entry.target
          )

          if (index !== -1) {
            setActiveIndex((prev) => (index > prev ? index : prev))
          }
        })
      },
      {
        threshold: 0.4,
      }
    )

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  const progress =
    steps.length <= 1 ? 1 : activeIndex / (steps.length - 1 || 1)

  return (
    <div className="mt-16 md:mt-20 relative">
      <div className="absolute top-0 h-full w-[2px] bg-border/70 left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2" />
      <div
        className="absolute top-0 w-[2px] bg-foreground/35 left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 origin-top transition-[height] duration-500 ease-out"
        style={{ height: `${progress * 100}%` }}
      />

      {steps.map((step, index) => {
        const isActive = index === activeIndex
        const isPast = index < activeIndex
        const isLeft = index % 2 === 1

        return (
          <div
            key={step.id}
            ref={(node) => {
              stepRefs.current[index] = node
            }}
            className={cn(
              "relative flex flex-col md:flex-row items-start mb-16 md:mb-20",
              isLeft && "md:flex-row-reverse"
            )}
          >
            <div className="hidden md:block md:w-1/2" />

            <div className="w-full md:w-1/2">
              <div
                className={cn(
                  "relative max-w-xl pl-10",
                  isLeft
                    ? "md:pr-10 md:pl-0 md:text-right"
                    : "md:pl-10 md:text-left"
                )}
              >
                <div className="animate-process-float">
                  <div
                    className={cn(
                      "flex flex-col gap-3 transition-all duration-300",
                      isActive || isPast
                        ? "opacity-100 translate-y-0"
                        : "opacity-60 translate-y-2",
                      isLeft && "md:items-end"
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
                        {step.id}
                      </span>
                      <h3 className="font-[var(--font-satoshi)] text-lg md:text-xl font-medium text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                      {step.description}
                    </p>

                    {step.details && (
                      <ul
                        className={cn(
                          "mt-2 space-y-1.5 text-sm text-muted-foreground leading-relaxed",
                          isLeft && "md:text-right"
                        )}
                      >
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className={cn(
                              "flex gap-2",
                              isLeft && "md:flex-row-reverse"
                            )}
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 size-5 rounded-full bg-background border-[2.5px] border-foreground/70" />
          </div>
        )
      })}
    </div>
  )
}
