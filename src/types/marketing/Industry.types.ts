import type { ReactElement } from "react"
import type { GridColSpan } from "../layout/Grid.types"
import type { Industry as PayloadIndustry } from "@/payload-types"

export type UIIndustry = {
  name: string
  description: string
  icon: ReactElement
  href: string
  colSpan: GridColSpan
  subLinks?: string[]
}

export type Industry = PayloadIndustry
