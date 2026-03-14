import type { ReactNode } from "react"

export type CtaVariant = "primary" | "secondary" | "header"

export type CtaButtonProps = {
  variant: CtaVariant
  href?: string
  className?: string
  children: ReactNode
  icon?: ReactNode
  iconPlacement?: "left" | "right"
  buttonType?: "button" | "submit" | "reset"
  disabled?: boolean
  onClick?: () => void
}
