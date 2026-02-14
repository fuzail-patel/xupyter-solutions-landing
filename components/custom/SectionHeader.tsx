import { ArrowRightIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import type { SectionHeaderProps } from "@/types/ui"

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  accent = false,
  className,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left"

  const titleSize =
    size === "lg"
      ? "text-3xl md:text-4xl lg:text-5xl"
      : "text-2xl md:text-3xl"

  return (
    <div
      className={cn(
        "flex flex-col",
        alignment,
        "gap-2 md:gap-3",
        "mb-8 md:mb-10",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-1">
          <ArrowRightIcon className="h-3 w-3 text-brand" />
          <p
            className={cn(
              "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-600",
              "text-brand-gradient"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <div className="w-full max-w-3xl space-y-2">
        <h2
          className={cn(
            "font-[var(--font-satoshi)] font-semibold tracking-tight leading-tight",
            titleSize
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "text-sm md:text-base font-bold text-muted-foreground/90",
              "leading-relaxed",
              "max-w-2xl",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        )}
      </div>
      {accent && (
        <div
          className={cn(
            "mt-4 h-px w-16 bg-border/80",
            align === "center" ? "mx-auto" : ""
          )}
        />
      )}
    </div>
  )
}
