import type { ComponentProps } from "react"

export type PaginationLinkProps = {
  isActive?: boolean
} & { size?: "default" | "sm" | "lg" | "icon" } & ComponentProps<"a">
