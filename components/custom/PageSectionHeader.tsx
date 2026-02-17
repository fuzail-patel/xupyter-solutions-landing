import { ArrowRightIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import type { PageSectionHeaderProps } from "@/types/ui"

export function PageSectionHeader({
  eyebrow,
  titlePrimary,
  titleSecondary,
  subtitle,
  className,
  accent = true,
}: PageSectionHeaderProps) {
  return (
    <section className={cn("w-full bg-background", className)}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-14 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {eyebrow && (
              <div className="mb-3 flex items-center justify-center gap-1">
                {accent && <ArrowRightIcon className="h-3 w-3 text-brand" />}
                <p
                  className={cn(
                    "text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
                    accent ? "text-brand-gradient" : "text-muted-foreground/80"
                  )}
                >
                  {eyebrow}
                </p>
              </div>
            )}
            <h1 className="font-[var(--font-satoshi)] text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
              <span
                className={cn(
                  "relative",
                  accent ? "text-brand-gradient" : "text-foreground"
                )}
              >
                {titlePrimary}
              </span>
              {titleSecondary && (
                <>
                  {" "}
                  <span className="text-primary">{titleSecondary}</span>
                </>
              )}
            </h1>
            {subtitle && (
              <p className="mt-3 text-base text-muted-foreground/80 font-semibold leading-relaxed max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
