import type { ReactNode, ComponentProps } from "react"

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

export type FloatingFieldProps = {
  id: string
  label: string
  children: ReactNode
}

export interface EyebrowProps {
  text: string
  className?: string
}

export type ScheduleCallButtonProps = {
  variant?: CtaVariant
  className?: string
}

export type PaginationLinkProps = {
  isActive?: boolean
} & { size?: "default" | "sm" | "lg" | "icon" } & ComponentProps<"a">
