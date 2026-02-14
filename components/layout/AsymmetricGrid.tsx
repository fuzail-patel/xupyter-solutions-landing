import { cn } from "@/lib/utils"
import type { AsymmetricGridProps, GridItem } from "@/types/layout"

function getDesktopSpanClass(item: GridItem) {
  switch (item.colSpan) {
    case 1:
      return "lg:col-span-1"
    case 2:
      return "lg:col-span-2"
    case 3:
      return "lg:col-span-3"
    case 4:
      return "lg:col-span-4"
    case 5:
      return "lg:col-span-5"
    case 6:
      return "lg:col-span-6"
    case 7:
      return "lg:col-span-7"
    case 8:
      return "lg:col-span-8"
    case 9:
      return "lg:col-span-9"
    case 10:
      return "lg:col-span-10"
    case 11:
      return "lg:col-span-11"
    case 12:
      return "lg:col-span-12"
    default:
      return item.variant === "wide" ? "lg:col-span-8" : "lg:col-span-4"
  }
}

export function AsymmetricGrid({ items, className }: AsymmetricGridProps) {
  return (
    <div
      className={cn(
        "grid",
        "grid-cols-1",      // mobile
        "md:grid-cols-2",   // tablet
        "lg:grid-cols-12",  // desktop
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "col-span-1 md:col-span-1",
            getDesktopSpanClass(item)
          )}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
