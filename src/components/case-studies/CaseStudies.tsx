"use client"
import { CtaButton, Card, SectionHeader } from "@/components/ui"
import { CASE_STUDIES, mapCaseStudyToDisplay } from "@/utils/case-studies/mapCaseStudy"
import { useState } from "react"

import { Section } from "@/components/layout"
import type { CaseStudy } from "@/payload-types"
import { PreviewPanel } from "./PreviewPanel"
import { CaseStudyCard } from "./CaseStudyCard"

export default function CaseStudies({ studies }: { studies?: CaseStudy[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const displayStudies = studies && studies.length > 0 
    ? studies.slice(0, 3).map(mapCaseStudyToDisplay)
    : CASE_STUDIES // fallback to mock data

  if (displayStudies.length === 0) return null

  return (
    <Section className="bg-background" id="work">
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
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

      <Card className="w-full rounded-3xl border border-border bg-card shadow-sm overflow-hidden p-0 gap-0 py-0">
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
            <CaseStudyCard 
              key={study.id || study.slug} 
              study={study} 
              isActive={activeIndex === idx}
              onMouseEnter={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </Card>
    </Section>
  )
}


