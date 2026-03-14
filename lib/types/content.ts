import type { ReactElement, ReactNode } from "react"
import type { GridColSpan } from "@/lib/types/layout"

export type Service = {
  title: string
  tag?: string
  description: string
  bullets: string[]
  icon: ReactElement
  href: string
  colSpan: GridColSpan
}

export type Testimonial = {
  id?: string
  type?: "video" | "text"
  colSpan?: number
  name: string
  location?: string
  role?: string
  content?: string
  videoThumbnail?: string
  rating?: number
  quote?: string
  initials?: any
  industry?: any
  timeAgo?: any
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
  colSpan: GridColSpan
  subLinks?: string[]
}
