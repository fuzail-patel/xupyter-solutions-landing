import type { ReactNode } from "react"

export type SystemListProps = {
  items?: Array<string | ReactNode>
  size?: "sm" | "xs"
  className?: string
  children?: ReactNode
}

export type SystemListItemProps = {
  children: ReactNode
  size?: "sm" | "xs"
}
