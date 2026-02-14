import type { ReactNode } from "react"

export type JourneyStep = {
  id: string
  title: string
  description: string
  icon?: ReactNode
  details?: string[]
}

export type JourneyTimelineProps = {
  steps: JourneyStep[]
}
