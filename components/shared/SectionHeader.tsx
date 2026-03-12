import { cn } from "@/lib/utils"
import type { SectionHeaderProps } from "@/lib/types/ui"
import EyeBrow from "./EyeBrow"

export default function SectionHeader({
  eyebrow,
  titlePrimary,
  titleSecondary,
  description,
  align = "left",
  size = "md",
  accent = true,
  className,
  as: Tag = "h2",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left"

  const titleSize =
    size === "xl"
      ? "text-4xl sm:text-5xl md:text-6xl lg:text-6xl"
      : size === "lg"
      ? "text-3xl md:text-4xl lg:text-5xl"
      : size === "md"
      ? "text-2xl md:text-3xl"
      : "text-xl md:text-2xl"

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
      {eyebrow && <EyeBrow text={eyebrow} />}

      <div className={cn("w-full space-y-2 mt-1", align === "center" ? "max-w-4xl" : "max-w-3xl")}>
        <Tag
          className={cn(
            "font-display tracking-tight leading-tight",
            titleSize
          )}
        >
          {titlePrimary}{" "}
          {titleSecondary && (
            <span className="text-gradient-primary font-bold">
              {titleSecondary}
            </span>
          )}
        </Tag>

        {description && (
          <div
            className={cn(
              "text-sm md:text-base font-semibold text-muted-foreground/80",
              "leading-relaxed",
              "max-w-2xl",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </div>
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