import { cn } from "@/lib/utils"
import type { SectionHeaderProps } from "@/types/ui"
import { LanguageIcon } from "@heroicons/react/24/outline"
import EyeBrow from "./EyeBrow"

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  accent = true,
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
        <EyeBrow text={eyebrow}/>
      )}
      <div className="w-full max-w-3xl space-y-2 mt-1">
        <h2
          className={cn(
            "font-semibold tracking-tight leading-tight",
            titleSize
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "text-sm md:text-base font-semibold text-muted-foreground/80",
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
            "mt-4 h-px w-16 bg-border",
            align === "center" ? "mx-auto" : ""
          )}
        />
      )}
    </div>
  )
}
