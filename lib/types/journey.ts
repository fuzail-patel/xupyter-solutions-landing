import type { ReactNode } from "react"
import type { GridColSpan } from "./layout"

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
