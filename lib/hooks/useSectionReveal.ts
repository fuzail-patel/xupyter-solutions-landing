import { useEffect, useRef, useState } from "react"
import type { CSSProperties, RefObject } from "react"

import { animateSectionReveal } from "@/lib/animations"

type SectionRevealResult = {
  ref: RefObject<HTMLElement | null>
  style: CSSProperties
}

export function useSectionReveal(
  onReveal?: (element: HTMLElement) => void
): SectionRevealResult {
  const elementRef = useRef<HTMLElement | null>(null)
  const [hasRevealed, setHasRevealed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    return prefersReduced
  })

  useEffect(() => {
    const node = elementRef.current

    if (!node || hasRevealed) {
      return
    }

    if (typeof window === "undefined") {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            animateSectionReveal(target)
            setHasRevealed(true)

            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [hasRevealed, onReveal])

  useEffect(() => {
    if (!hasRevealed || !onReveal) return
    const node = elementRef.current
    if (!node) return
    onReveal(node)
  }, [hasRevealed, onReveal])

  const style: CSSProperties = hasRevealed
    ? {}
    : {
        opacity: 0,
        transform: "translateY(10px)",
      }

  return {
    ref: elementRef,
    style,
  }
}
