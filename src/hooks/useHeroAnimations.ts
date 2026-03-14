import { animateFade, animateStaggered } from "@/utils/animations"
import { type RefObject, useEffect } from "react"

interface UseHeroAnimationsProps {
  eyebrowRef: RefObject<HTMLDivElement | null>
  headingRef: RefObject<HTMLHeadingElement | null>
  descriptionRef: RefObject<HTMLParagraphElement | null>
  ctaButtonsRef: RefObject<HTMLDivElement | null>
  statsRef: RefObject<HTMLDivElement | null>
  heroMediaRef: RefObject<HTMLDivElement | null>
}

export const useHeroAnimations = ({
  eyebrowRef,
  headingRef,
  descriptionRef,
  ctaButtonsRef,
  statsRef,
  heroMediaRef,
}: UseHeroAnimationsProps) => {
  useEffect(() => {
    // Eyebrow pill: fade-in + translateY(10px → 0), delay 0ms
    if (eyebrowRef.current) {
      animateFade(eyebrowRef.current, {
        translateY: [10, 0],
        delay: 0,
      })
    }

    // H1 headline: fade-in + translateY(16px → 0), delay 100ms
    if (headingRef.current) {
      animateFade(headingRef.current, {
        translateY: [16, 0],
        delay: 100,
      })
    }

    // Subheadline paragraph: fade-in, delay 220ms
    if (descriptionRef.current) {
      animateFade(descriptionRef.current, {
        delay: 220,
      })
    }

    // CTA buttons: fade-in + translateY(8px → 0), staggered 80ms apart, delay 340ms
    if (ctaButtonsRef.current) {
      const buttons = ctaButtonsRef.current.children
      animateStaggered(buttons as any, {
        translateY: [8, 0],
        delay: 340,
        staggerDelay: 80,
      })
    }

    // Right column visual/media: fade-in + translateX(20px → 0), delay 200ms
    if (heroMediaRef.current) {
      animateFade(heroMediaRef.current, {
        translateX: [20, 0],
        delay: 200,
      })
    }

    // Stats strip (3 items): fade-in, stagger 100ms, delay 460ms
    if (statsRef.current) {
      const stats = statsRef.current.children
      animateStaggered(stats as any, {
        delay: 460,
        staggerDelay: 100,
      })
    }
  }, [eyebrowRef, headingRef, descriptionRef, ctaButtonsRef, statsRef, heroMediaRef])
}
