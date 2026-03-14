import { cn } from "@/utils/common"
import type { TextProps } from "@/types/ui"

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

