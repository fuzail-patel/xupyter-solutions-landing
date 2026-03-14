"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { CtaButton } from "@/components/shared/CtaButton"
import { SmartImage } from "@/components/shared/SmartImage"
import Section from "@/components/layout/Section"
import SectionHeader from "@/components/shared/SectionHeader"
import { getMediaUrl } from "@/lib/utils"
import type { CaseStudy } from "@/payload-types"

/* ── CASE STUDY DATA ── */
const CASE_STUDIES: DisplayStudy[] = [
  {
    id: "1",
    slug: "logistics-network",
    tag: "Logistics",
    title: "National Logistics Network: Real-Time Operational View",
    excerpt: "We built a unified source of truth for a national logistics leader, moving them from manual reconciliations to real-time telemetry and dispatch coordination.",
    date: "March 04, 2026",
    image: "/images/portfolio/logistics.jpg",
  },
  {
    id: "2",
    slug: "fintech-compliance-engine",
    tag: "FinTech",
    title: "FinTech Compliance Engine: Scaling Institutional Custody",
    excerpt: "Developing a high-security backend architecture for automated KYC/AML verification with immutable audit trails for institutional crypto assets.",
    date: "February 28, 2026",
    image: "/images/portfolio/fintech.jpg",
  },
  {
    id: "3",
    slug: "autostream-manufacturing",
    tag: "Manufacturing",
    title: "AutoStream: Bespoke ERP for Multi-Plant Production",
    excerpt: "A custom ERP backbone that automates production planning and inventory management, eliminating stockouts across 4 manufacturing facilities.",
    date: "February 15, 2026",
    image: "/images/portfolio/manufacturing.jpg",
  },
]

/* ── TYPES ── */
interface DisplayStudy {
  id: string | number
  slug: string
  tag: string
  title: string
  excerpt: string
  date: string
  image: string
}

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
    ? studies.slice(0, 3).map(s => {
        const project = (typeof s.project === 'object' && s.project !== null) ? s.project : null
        const industry = (project && typeof project.industry === 'object' && project.industry !== null) ? project.industry : null
        return {
          id: s.id,
          slug: s.slug || '',
          tag: industry?.name || "Tech",
          title: s.title || 'Untitled Case Study',
          excerpt: project?.summary || s.title || '',
          date: s.createdAt ? new Date(s.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently',
          image: getMediaUrl(project?.coverImage)
        }
      })
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
