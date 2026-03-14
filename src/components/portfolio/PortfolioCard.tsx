import { SmartImage } from "@/components/ui"
import { getMediaUrl } from "@/utils/common"
import Link from "next/link"
import type { PortfolioCardProps } from "@/types/portfolio"

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const caseStudyHref = project.caseStudyUrl ?? `/portfolio/${project.slug || ''}`
  const imageUrl = getMediaUrl(project.coverImage)
  const industryName = (typeof project.industry === 'object' && project.industry !== null) ? project.industry : 'Tech'

  return (
    <article className="h-full">
      <div className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-none">
        <div className="flex h-full flex-col overflow-hidden rounded-none border border-transparent bg-background transition-colors duration-200">
          {/* Image/Header Area */}
          <Link href={caseStudyHref} className="relative block aspect-video w-full overflow-hidden rounded-none bg-[#F0EEE8] dark:bg-muted/30">
            {imageUrl ? (
              <SmartImage
                src={imageUrl}
                alt={project.title || 'Project Image'}
                fill
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              />
            ) : null}

            {/* Overlay Tags */}
            <div className="absolute left-4 top-4 z-20 flex gap-2">
              <span className="bg-[#1A1A1A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-none">
                {industryName}
              </span>
              {project.featured && (
                <span className="bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-none">
                  Featured
                </span>
              )}
            </div>
          </Link>

          {/* Content Area */}
          <div className="flex flex-1 flex-col py-6 px-1">
            {/* Techstack at top */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  (typeof tech === 'object' && tech !== null) ? (
                    <span key={tech.id} className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                      {tech.technology}
                    </span>
                  ) : null
                ))}
              </div>
            )}

            <Link href={caseStudyHref}>
              <h3 className="text-[22px] font-semibold leading-tight text-foreground transition-colors duration-200 group-hover:text-primary mb-4 line-clamp-2">
                {project.title || 'Untitled Project'}
              </h3>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground/80 line-clamp-3 mb-8">
              {project.summary || ''}
            </p>

            <div className="mt-auto flex items-center">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors px-3 py-1.5 border"
                >
                  View Live
                </a>
              ) : null}
              <Link href={caseStudyHref} className="text-[11px] font-bold ms-auto uppercase tracking-widest text-[#B54728] hover:underline flex items-center gap-1.5 transition-all">
                Case Study
                <span className="text-lg leading-none">→</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

