import type { ReactNode } from "react"

export type AutoCarouselProps = {
  slides: ReactNode[]
  interval?: number
  className?: string
  controlsPlacement?: "outside" | "inside"
  pauseOnHover?: boolean
}
