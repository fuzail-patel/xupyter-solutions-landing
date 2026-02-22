import { cn } from "@/lib/utils"
import type { AsymmetricGridProps } from "@/lib/types/layout"
import { getDesktopSpanClass } from "@/lib/utils/layout"

export default function AsymmetricGrid({ items, className }: AsymmetricGridProps) {
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
