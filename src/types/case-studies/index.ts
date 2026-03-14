import type { ReactElement } from "react"
import type { CaseStudy as PayloadCaseStudy } from "@/payload-types"

export type CaseStudyMetric = {
  value: string
  label: string
}

export type CaseStudy = {
  slug: string
  industry: string
  icon: ReactElement
  headline: string
  challenge: string
  systemBuilt: string
  metrics: CaseStudyMetric[]
} & Partial<PayloadCaseStudy>
