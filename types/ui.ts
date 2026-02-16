import type { ReactNode } from "react"

export type AutoCarouselProps = {
  slides: ReactNode[]
  interval?: number
  className?: string
  controlsPlacement?: "outside" | "inside"
  pauseOnHover?: boolean
}

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

export type SectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  size?: "md" | "lg"
  accent?: boolean
  className?: string
}

export type PageSectionHeaderProps = {
  eyebrow?: string
  titlePrimary: ReactNode
  titleSecondary?: ReactNode
  subtitle?: ReactNode
  className?: string
}

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

export type TextProps = {
  className?: string
  children: ReactNode
}
