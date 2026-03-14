import { GridColSpan } from "../layout/Grid.types"
import type { ReactElement } from "react"

export type Service = {
  title: string
  tag?: string
  /** Short copy for home/landing sections */
  shortDescription: string
  /** Full copy for dedicated service page */
  description: string
  icon: ReactElement
  href: string
  colSpan: GridColSpan
}
