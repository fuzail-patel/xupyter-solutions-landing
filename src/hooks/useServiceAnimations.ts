import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade, animateStaggered } from "@/utils/animations"
import { type RefObject } from "react"

export const useServiceAnimations = (headerRef: RefObject<HTMLDivElement | null>) => {
  return useSectionReveal({
    threshold: 0.15,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Section heading: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Service cards: fade-in + translateY(20px → 0), stagger 110ms
      const cards = sectionEl.querySelectorAll<HTMLElement>("[data-service-card]")
      animateStaggered(cards, {
        translateY: [20, 0],
        staggerDelay: 110,
      })
    },
  })
}
