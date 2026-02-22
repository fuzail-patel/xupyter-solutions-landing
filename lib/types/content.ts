import type { ReactElement, ReactNode } from "react"
import type { GridColSpan } from "@/lib/types/layout"

export type Service = {
  title: string
  description: string
  bullets: string[]
  icon: ReactElement
  href: string
  colSpan: GridColSpan
}

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  initials: string
  industry?: string
  timeAgo?: string
}

export type ContactLinkItemProps = {
  icon: ReactNode
  label: string
  value: string
  href: string
}

export type Industry = {
  name: string
  description: string
  icon: ReactElement
  href: string
  colSpan: GridColSpan,
}
