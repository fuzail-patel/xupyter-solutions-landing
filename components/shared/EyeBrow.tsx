import { cn } from "@/lib/utils";
import type { EyebrowProps } from "@/lib/types/ui";

export default function EyeBrow({ text, className, showDot = true }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-muted-foreground",
        className
      )}
    >
      {showDot && <span className="size-2.5 rounded-full bg-primary shrink-0" />}
      <span>{text}</span>
    </div>
  )
}
