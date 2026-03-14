import { ArrowRightIcon } from "@heroicons/react/24/outline"
import type { SystemListItemProps } from "@/types/shared"

const itemTextClasses = {
  sm: "text-sm",
  xs: "text-xs",
}

export function SystemListItem({ children, size = "sm" }: SystemListItemProps) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 inline-flex">
        <ArrowRightIcon className="h-3 w-3 text-foreground" />
      </span>
      <span className={itemTextClasses[size]}>{children}</span>
    </li>
  )
}
