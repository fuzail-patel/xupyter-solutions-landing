"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { CtaButton } from "@/components/shared/CtaButton"
import { SmartImage } from "@/components/shared/SmartImage"
import Section from "@/components/layout/Section"
import SectionHeader from "@/components/shared/SectionHeader"

/* ── CASE STUDY DATA ── */
const CASE_STUDIES = [
  {
    id: "1",
    tag: "Logistics",
    title: "National Logistics Network: Real-Time Operational View",
    excerpt: "We built a unified source of truth for a national logistics leader, moving them from manual reconciliations to real-time data.",
    date: "August 8, 2025",
    image: "/service-images/services-image-1.webp",
  },
  {
    id: "2",
    tag: "Blockchain",
    title: "Secure Ledger: Institutional Grade Crypto Custody",
    excerpt: "Developing a highly secure, multi-signature wallet architecture for enterprise-level digital asset management.",
    date: "July 15, 2025",
    image: "/service-images/services-image-2.webp",
  },
  {
    id: "3",
    tag: "AI & Automation",
    title: "AutoStream: AI-Driven Workflow Orchestration",
    excerpt: "A custom ERP system that automates production planning and inventory management for multi-plant manufacturing.",
    date: "June 22, 2025",
    image: "/service-images/services-image-3.webp",
  },
]

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
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
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
  study: typeof CASE_STUDIES[0], 
  isActive: boolean, 
  onMouseEnter: () => void 
}) => {
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

        <div className="mt-auto flex items-center justify-between">
          <Link 
            href={`/projects/${study.id}`}
            className="text-sm font-bold inline-flex items-center gap-1 transition-colors text-primary hover:text-primary/80"
          >
            Continue Reading <span className="text-lg">→</span>
          </Link>
          <span className="text-[11px] text-muted-foreground font-medium">
            {study.date}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

/* ── MAIN SECTION ── */
export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

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
        <div className="w-full h-[320px] border-b border-border">
          <PreviewPanel 
            src={CASE_STUDIES[activeIndex].image} 
            alt={CASE_STUDIES[activeIndex].title} 
          />
        </div>

        {/* Columns Area */}
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
          {CASE_STUDIES.map((study, idx) => (
            <CaseStudyCard 
              key={study.id} 
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
