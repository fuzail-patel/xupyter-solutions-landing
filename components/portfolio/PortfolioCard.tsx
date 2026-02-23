import { SmartImage } from "@/components/shared/SmartImage"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { PortfolioCardProps } from "@/lib/types/portfolio"
import { Badge } from "@/components/ui/badge"
import { CtaButton } from "@/components/shared/CtaButton"

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const caseStudyHref = project.caseStudyUrl ?? `/portfolio/${project.slug}`
  const metrics = project.metrics.slice(0, 2)

  return (
    <Card className="group relative flex h-full flex-col gap-0 overflow-hidden border-border/70 bg-card p-0 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
      <Link href={caseStudyHref} className="relative block">
        <div className="relative aspect-16/10 bg-muted/60">
          <SmartImage
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </Link>

      <CardContent className="flex flex-1 flex-col p-5 md:px-6">
        <Badge variant={"secondary"}>{project.industry}</Badge>

        <h3 className="mt-3 text-base md:text-lg font-semibold text-foreground">
          {project.name}
        </h3>

        <p className="mt-1 text-xs md:text-xs text-muted-foreground/90">
          {project.type}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-sm md:text-base font-semibold ">
                {metric.value}
              </span>
              <span className="text-xs md:text-xs text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex md:flex-nowrap flex-wrap items-center justify-between text-xs md:text-sm gap-5">
          <CtaButton href={project.caseStudyUrl} variant="primary" className="text-xs flex-1">Case Study</CtaButton>

          {project.liveUrl && (
            <CtaButton href={project.liveUrl} variant="secondary" className="text-xs" iconPlacement="left">View Live</CtaButton>
          )}
          
        </div>
      </CardContent>
    </Card>
  )
}
