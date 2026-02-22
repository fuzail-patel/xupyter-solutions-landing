import { cn } from "@/lib/utils"
import type { TextProps } from "@/types/ui"

export function Subtext({ className, children }: TextProps) {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-muted-foreground/90 leading-relaxed",
        "max-w-2xl",
        className
      )}
    >
      {children}
    </p>
  )
}

export function BodyText({ className, children }: TextProps) {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-muted-foreground leading-snug",
        className
      )}
    >
      {children}
    </p>
  )
}
