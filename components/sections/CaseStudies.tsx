"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"

import { SectionHeader } from "@/components/custom/SectionHeader"
import { BodyText } from "@/components/custom/Typography"
import { CtaButton } from "@/components/custom/CtaButton"
import { CASE_STUDIES } from "@/data/caseStudies"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFadeUp } from "@/lib/animations"

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
              "px-6 py-8 md:px-10 md:py-10",
              "transition-opacity duration-300",
              isVisible ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
             <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 md:gap-10 items-start">
               <div className="flex flex-col items-start gap-5">
                 <span className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] text-muted-foreground/90">
                   <span className="text-muted-foreground/95">
                     {activeCase.icon}
                   </span>
                   <span>{activeCase.industry}</span>
                 </span>
                 <h3 className="text-2xl md:text-3xl font-semibold">
                   {activeCase.headline}
                 </h3>

                 <div className="space-y-6">
                   <BodyText className="text-muted-foreground leading-relaxed">
                     {activeCase.challenge} {activeCase.systemBuilt}
                   </BodyText>
                 </div>

                 <div className="pt-4 ms-auto">
                   <CtaButton
                     variant="primary"
                     href={`/case-studies/${activeCase.slug}`}
                     className="text-sm"
                   >
                     Read Full Case Study
                   </CtaButton>
                 </div>
               </div>

              <div className="flex flex-col gap-5">
                <div className="rounded-xl bg-secondary/60 px-5 py-4 md:px-6 md:py-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    System View
                  </p>
                  <div className="mt-3 rounded-lg bg-background/80 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                      <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2.5 w-5/6 rounded-full bg-muted/70" />
                      <div className="h-2.5 w-2/3 rounded-full bg-muted/60" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-md bg-muted" />
                      <div className="h-14 rounded-md bg-muted" />
                      <div className="h-14 rounded-md bg-muted" />
                    </div>
                  </div>
                  <div className="mt-4 border-t border-border/60 pt-4">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                      Impact in Operations
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {activeCase.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col">
                          <span className="text-sm md:text-base font-semibold font-[var(--font-satoshi)]">
                            {metric.value}
                          </span>
                          <span className="text-[0.7rem] md:text-xs text-muted-foreground">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
             </div>

             <div className="mt-6 flex items-center justify-end gap-3 text-sm text-muted-foreground">
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
     </section>
   )
 }
