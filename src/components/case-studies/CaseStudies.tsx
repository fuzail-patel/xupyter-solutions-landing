"use client"
import { CtaButton, Card, SectionHeader } from "@/components/ui"
import { CASE_STUDIES, mapCaseStudyToDisplay } from "@/utils/case-studies/mapCaseStudy"
import { useState, useRef } from "react"

import { Section } from "@/components/layout"
import type { CaseStudy } from "@/payload-types"
import { PreviewPanel } from "./PreviewPanel"
import { CaseStudyCard } from "./CaseStudyCard"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/utils/animations"

export default function CaseStudies({ studies }: { studies?: CaseStudy[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const headerRef = useRef<HTMLDivElement | null>(null)
  
  const displayStudies = studies && studies.length > 0 
    ? studies.slice(0, 3).map(mapCaseStudyToDisplay)
    : CASE_STUDIES // fallback to mock data

  const { ref, style } = useSectionReveal({
    threshold: 0.15,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Header: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Main Card: fade-in + translateY(20px → 0)
      const mainCard = sectionEl.querySelector("[data-case-studies-card]")
      if (mainCard) {
        animateFade(mainCard as HTMLElement, {
          translateY: [20, 0],
          delay: 150,
        })
      }

      // Case Study cards (within the main card): staggered fade-in
      const items = sectionEl.querySelectorAll<HTMLElement>("[data-case-study-item]")
      animateStaggered(items, {
        delay: 300,
        staggerDelay: 100,
      })
    },
  })

  if (displayStudies.length === 0) return null

  return (
    <Section ref={ref} style={style} className="bg-background" id="work">
      <div ref={headerRef} className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        <SectionHeader 
          eyebrow="What We've Built" 
          titlePrimary="Success Stories"
          titleSecondary="That Speak for Themselves"
          description="Discover how we help visionary startups and enterprises bring Blockchain and AI-powered platforms to life, solve complex challenges across finance, retail, logistics, and more."
          align="left"
          className="mb-0"
        />
        
        <div className="pb-2 ms-auto">
           <CtaButton 
             variant="primary" 
             href="/portfolio"
             className="whitespace-nowrap"
           >
             View All Projects
           </CtaButton>
         </div>
      </div>

      <Card data-case-studies-card className="w-full rounded-3xl border border-border bg-card shadow-sm overflow-hidden p-0 gap-0 py-0">
        {/* Preview Panel Area */}
        <div className="w-full h-80 border-b border-border">
          <PreviewPanel 
            src={displayStudies[activeIndex].image} 
            alt={displayStudies[activeIndex].title} 
          />
        </div>

        {/* Columns Area */}
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
          {displayStudies.map((study, idx) => (
            <div key={study.id || study.slug} data-case-study-item className="flex-1">
              <CaseStudyCard 
                study={study} 
                isActive={activeIndex === idx}
                onMouseEnter={() => setActiveIndex(idx)}
              />
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}


