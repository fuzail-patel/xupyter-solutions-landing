import { TESTIMONIALS } from "@/lib/constants/testimonials"
import { GridColSpan } from "@/types/layout/Grid.types"
import { Testimonial } from "@/types/marketing/Testimonial.types"
import { getMediaUrl } from "@/utils/common"

export interface DisplayTestimonial {
  id: string
  type: string
  colSpan: GridColSpan
  name: string
  role: string
  rating: number
  content: string
  avatar: string | null
  videoThumbnail: string | null
  videoUrl?: string | null
}

export const mapTestimonialToDisplay = (t: Testimonial, idx: number): DisplayTestimonial => ({
  id: t.id?.toString() || idx.toString(),
  type: t.type || 'text',
  colSpan: (t.colSpan || 6) as GridColSpan,
  name: t.name || 'Client',
  role: t.role || '',
  rating: t.rating || 5,
  content: t.content || '',
  avatar: getMediaUrl(t.avatar),
  videoThumbnail: getMediaUrl(t.videoThumbnail),
  videoUrl: t.videoUrl
})

export const getDisplayTestimonials = (testimonials?: Testimonial[]): DisplayTestimonial[] => {
  if (testimonials && testimonials.length > 0) {
    return testimonials.map(mapTestimonialToDisplay)
  }
  return TESTIMONIALS.map((t, idx) => mapTestimonialToDisplay(t as unknown as Testimonial, idx))
}
