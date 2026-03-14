import type { ReactNode } from "react"
import type { GridColSpan } from "../layout/Grid.types"

export * from "./Service.types"
export * from "./Testimonial.types"
export * from "./Industry.types"

export type JourneyStep = {
  id: string
  title: string
  description: string
  icon?: ReactNode
  details?: string[]
  colSpan?: GridColSpan
}

export type JourneyTimelineProps = {
  steps: JourneyStep[]
}

export interface ProcessGridProps {
  steps: JourneyStep[]
}
