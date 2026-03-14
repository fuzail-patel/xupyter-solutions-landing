import { Media } from "@/payload-types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMediaUrl(media: Media | number | string | null | undefined, fallback: string = '/fallback-image.png'): string {
  if (typeof media === 'string') return media
  if (!media || typeof media === 'number') return fallback
  
  // Prioritize Cloudinary secure URL if available
  if (media.cloudinary?.secure_url) {
    return media.cloudinary.secure_url
  }
  
  return media.url || fallback
}
