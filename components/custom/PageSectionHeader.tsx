import { ArrowRightIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import type { PageSectionHeaderProps } from "@/types/ui"

export function PageSectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: PageSectionHeaderProps) {
  return (
    <section className={cn("w-full bg-background", className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-14 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {eyebrow && (
              <div className="mb-3 flex items-center justify-center gap-1">
                <ArrowRightIcon className="h-3 w-3 text-brand" />
                <p
                  className={cn(
                    "text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
                    "text-brand-gradient"
                  )}
                >
                  {eyebrow}
                </p>
              </div>
            )}
            <h1 className="font-[var(--font-satoshi)] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
