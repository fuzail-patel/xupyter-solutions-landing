import { Card, CardContent } from "@/components/ui"
import { cn } from "@/utils/common"
import Link from "next/link"
import type { DisplayStudy } from "@/utils/case-studies/mapCaseStudy"

export const CaseStudyCard = ({ 
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
