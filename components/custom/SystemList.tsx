import { CheckCircleIcon } from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import type { SystemListItemProps, SystemListProps } from "@/types/ui"

const sizeClasses = {
  sm: "text-sm space-y-1.5",
  xs: "text-xs space-y-1.5",
}

const itemTextClasses = {
  sm: "text-sm",
  xs: "text-xs",
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
        "text-muted-foreground leading-relaxed",
        className
      )}
    >
      {content}
    </ul>
  )
}

export function SystemListItem({ children, size = "sm" }: SystemListItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-border/70 bg-secondary">
        <CheckCircleIcon className="h-3 w-3" />
      </span>
      <span className={itemTextClasses[size]}>{children}</span>
    </li>
  )
}
