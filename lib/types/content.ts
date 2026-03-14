import type { ReactElement, ReactNode } from "react"
import type { GridColSpan } from "@/lib/types/layout"
import type { Testimonial as PayloadTestimonial, Industry as PayloadIndustry } from "@/payload-types"

export type Service = {
  title: string
  tag?: string
  description: string
  bullets: string[]
  icon: ReactElement
  href: string
  colSpan: GridColSpan
}

// Rename existing Testimonial to prevent conflict if needed, 
// but Phase 2 rule 2.1 says replace.
// I'll export PayloadTestimonial as Testimonial for backward compatibility 
// with components while moving them to Payload types.
export type Testimonial = PayloadTestimonial

export type ContactLinkItemProps = {
  icon: ReactNode
  label: string
  value: string
  href: string
}

// Keeping UIIndustry for hardcoded constants
export type UIIndustry = {
  name: string
  description: string
  icon: ReactElement
  href: string
  colSpan: GridColSpan
  subLinks?: string[]
}

// Exporting Payload Industry as Industry
export type Industry = PayloadIndustry
