import { GridColSpan } from "../layout/Grid.types"
import type { ReactElement } from "react"

export type Service = {
  title: string
  tag?: string
  description: string
  bullets: string[]
  icon: ReactElement
  href: string
  colSpan: GridColSpan
}
