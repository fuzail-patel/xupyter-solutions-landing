import type { GridItem } from "@/lib/types/layout"

export function getDesktopSpanClass(item: GridItem) {
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
