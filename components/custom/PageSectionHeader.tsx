import { ArrowRightIcon, LanguageIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import type { PageSectionHeaderProps } from "@/types/ui"
import EyeBrow from "./EyeBrow"

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
              <div className="mb-3 flex items-center justify-center gap-1 mb-1">
                <EyeBrow text={eyebrow} />
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
              <span className="text-primary">
                {titlePrimary}
              </span>

              {titleSecondary && (
                <>
                  {" "}
                  <span className="text-foreground">
                    {titleSecondary}
                  </span>
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
