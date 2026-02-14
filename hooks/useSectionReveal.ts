import { useEffect, useRef, useState } from "react"
import type { CSSProperties, RefObject } from "react"

import { animateSectionReveal } from "@/lib/animations"

type SectionRevealResult = {
  ref: RefObject<HTMLElement>
  style: CSSProperties
}

export function useSectionReveal(
  onReveal?: (element: HTMLElement) => void
): SectionRevealResult {
  const elementRef = useRef<HTMLElement | null>(null)
  const [hasRevealed, setHasRevealed] = useState(false)

  useEffect(() => {
    const node = elementRef.current

    if (!node || hasRevealed) {
      return
    }

    if (typeof window === "undefined") {
      return
    }

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      node.style.opacity = "1"
      node.style.transform = "translateY(0)"
      setHasRevealed(true)

      if (onReveal) {
        onReveal(node)
      }

      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            animateSectionReveal(target)
            setHasRevealed(true)

            if (onReveal) {
              onReveal(target)
            }

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

  const style: CSSProperties = hasRevealed
    ? {}
    : {
        opacity: 0,
        transform: "translateY(10px)",
      }

  return {
    ref: elementRef as any,
    style,
  }
}

