import Image from "next/image"
import Link from "next/link"

import type { PortfolioProject } from "@/data/portfolio"

type PortfolioCardProps = {
  project: PortfolioProject
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative aspect-[16/10] bg-muted/60">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
            {project.industry}
          </span>

          <h3 className="mt-3 text-base md:text-lg font-semibold font-[var(--font-satoshi)] text-foreground">
            {project.name}
          </h3>

          <p className="mt-1 text-xs md:text-sm text-muted-foreground">
            {project.type}
          </p>

          <p className="mt-3 text-sm text-foreground/90">
            {project.outcome}
          </p>
        </div>
      </div>
    </Link>
  )
}

