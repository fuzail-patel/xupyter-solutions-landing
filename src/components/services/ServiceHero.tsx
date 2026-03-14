"use client"

import { Briefcase } from "lucide-react"
import { cn } from "@/utils/common"

interface ServiceHeroProps {
  name: string
  category: string
  description: string
}

export const ServiceHero = ({
  name,
  category,
  description,
}: ServiceHeroProps) => {
  return (
    <section className="mb-12 md:mb-16">
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 mb-4 text-[11px] font-medium text-muted-foreground">
        <Briefcase className="h-3 w-3 text-primary" />
        <span className="uppercase tracking-[0.12em]">
          {category}
        </span>
      </div>

      <h1
        className={cn(
          "font-display tracking-tight text-2xl md:text-3xl lg:text-4xl",
          "text-foreground mb-4 md:mb-5 leading-tight"
        )}
      >
        {name}
      </h1>

      <p className="text-sm md:text-base font-medium text-muted-foreground/80 leading-relaxed max-w-2xl">
        {description}
      </p>
    </section>
  )
}
