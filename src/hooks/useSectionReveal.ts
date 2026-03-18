"use client"

import { animateSectionReveal, prefersReducedMotion } from "@/utils/animations"
import { useEffect, useRef, useState } from "react"
import type { CSSProperties, RefObject } from "react"

type SectionRevealOptions = {
  threshold?: number
  onReveal?: (element: HTMLElement) => void
  autoAnimate?: boolean
  initialStyles?: CSSProperties
}

type SectionRevealResult<T extends HTMLElement> = {
  ref: RefObject<T | null>
  style: CSSProperties
  hasRevealed: boolean
}

export function useSectionReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0.25,
  onReveal,
  autoAnimate = true,
  initialStyles = {
    opacity: 0,
    transform: "translateY(16px)",
  },
}: SectionRevealOptions = {}): SectionRevealResult<T> {
  const elementRef = useRef<T | null>(null)
  const [hasRevealed, setHasRevealed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return prefersReducedMotion()
  })

  useEffect(() => {
    const node = elementRef.current

    if (!node || hasRevealed) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true)
            if (autoAnimate) {
              animateSectionReveal(node)
            }
            if (onReveal) {
              onReveal(node)
            }
            observer.disconnect()
          }
        })
      },
      {
        threshold,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [hasRevealed, onReveal, threshold, autoAnimate])

  const style: CSSProperties = hasRevealed ? {} : initialStyles

  return {
    ref: elementRef,
    style,
    hasRevealed,
  }
}
