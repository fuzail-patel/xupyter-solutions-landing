import type { ReactNode } from "react"

export type GridColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export type GridItem = {
  id: string
  variant?: "normal" | "wide"
  colSpan?: GridColSpan
  content: ReactNode
}

export type AsymmetricGridProps = {
  items: GridItem[]
  className?: string
}

