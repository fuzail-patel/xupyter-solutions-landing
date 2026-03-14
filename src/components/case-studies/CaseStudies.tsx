"use client"
import { CtaButton, SmartImage } from "@/components/ui"
import { Card, CardContent } from "@/components/ui"
import { CASE_STUDIES, mapCaseStudyToDisplay, type DisplayStudy } from "@/utils/case-studies/mapCaseStudy"
import { cn, getMediaUrl } from "@/utils/common"
import { useState } from "react"

import Link from "next/link"
import { Section } from "@/components/layout"
import { SectionHeader } from "@/components/ui"
import type { CaseStudy } from "@/payload-types"

/* ── PREVIEW PANEL ── */
const PreviewPanel = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-background">
      <div className="relative w-full h-full">
        <SmartImage
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        {/* Subtle overlay for better integration */}
        <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

/* ── COLUMN COMPONENT ── */
const CaseStudyCard = ({ 
  study, 
  isActive, 
  onMouseEnter 
}: { 
  study: DisplayStudy, 
  isActive: boolean, 
  onMouseEnter: () => void 
}) => {
  const href = `/case-studies/${study.slug}`

  return (
    <Card 
      onMouseEnter={onMouseEnter}
      className={cn(
        "relative flex-1 p-6 transition-all duration-300 cursor-default border-none shadow-none rounded-none",
        isActive ? "bg-muted/40" : "bg-transparent"
      )}
    >
      {/* Top Border Accent */}
      <div 
        className={cn(
          "absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 bg-primary",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />

      <CardContent className="p-0 flex flex-col h-full">
        <span 
          className="text-[10px] font-mono font-bold uppercase tracking-widest mb-3 text-primary"
        >
          {study.tag}
        </span>
        
        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
          {study.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {study.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <Link 
            href={href}
            className="text-sm font-bold inline-flex items-center gap-1.5 transition-colors text-primary hover:text-primary/80 whitespace-nowrap"
          >
            Read Case Study <span className="text-lg leading-none">→</span>
          </Link>
          <span className="text-[11px] text-muted-foreground font-medium shrink-0">
            {study.date}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── MAIN SECTION ── */
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

      <Card className="w-full rounded-3xl border border-border bg-card shadow-sm overflow-hidden p-0">
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


