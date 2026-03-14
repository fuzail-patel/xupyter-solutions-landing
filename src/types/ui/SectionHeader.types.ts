import type { ReactNode } from "react"

export interface SectionHeaderProps {
  eyebrow?: string
  titlePrimary: ReactNode
  titleSecondary?: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  size?: "sm" | "md" | "lg" | "xl"
  accent?: boolean
  className?: string
  as?: "h1" | "h2"
}
