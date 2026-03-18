"use client"

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
        delay: 10,
      })
    }

    // H1 headline: fade-in + translateY(16px → 0), delay 100ms
    if (headingRef.current) {
      animateFade(headingRef.current, {
        translateY: [16, 0],
        delay: 200,
      })
    }

    // Subheadline paragraph: fade-in, delay 220ms
    if (descriptionRef.current) {
      animateFade(descriptionRef.current, {
        delay: 300,
      })
    }

    // CTA buttons: fade-in + translateY(8px → 0), staggered 80ms apart, delay 340ms
    if (ctaButtonsRef.current) {
      const buttons = ctaButtonsRef.current.children
      animateStaggered(buttons as any, {
        translateY: [8, 0],
        delay: 500,
        duration: 500,
        staggerDelay: 50,
      })
    }

    // Right column visual/media: fade-in + translateX(20px → 0), delay 200ms
    if (heroMediaRef.current) {
      // Animate the container
      animateFade(heroMediaRef.current, {
        translateX: [20, 0],
        delay: 300,
        duration: 1500,
      })

      // If it contains a Lottie animation, ensure it's also faded in smoothly
      const lottie = heroMediaRef.current.querySelector('[data-lottie]')
      if (lottie) {
        animateFade(lottie as HTMLElement, {
          delay: 400,
          duration: 2000,
        })
      }
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
