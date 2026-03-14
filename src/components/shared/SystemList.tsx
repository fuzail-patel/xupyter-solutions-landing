import { SystemListItem } from "./SystemListItem"
import { cn } from "@/utils/common"
import type { SystemListProps } from "@/types/shared"

const sizeClasses = {
  sm: "text-sm space-y-1.5",
  xs: "text-xs space-y-1.5",
}

export function SystemList({
  items,
  size = "sm",
  className,
  children,
}: SystemListProps) {
  const content =
    items?.map((item, index) => (
      <SystemListItem key={index} size={size}>
        {item}
      </SystemListItem>
    )) ?? children

  return (
    <ul
      className={cn(
        sizeClasses[size],
        "text-muted-foreground leading-relaxed font-bold",
        className
      )}
    >
      {content}
    </ul>
  )
}

