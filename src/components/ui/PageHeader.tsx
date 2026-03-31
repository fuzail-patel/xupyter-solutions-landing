"use client"

import { cn } from "@/utils/common"
import type { SectionHeaderProps } from "@/types/ui"
import SectionHeader from "./SectionHeader"
import HeroBackground from "./HeroBackground"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade } from "@/utils/animations"

/**
 * PageHeader component for main pages (About, Careers, etc.)
 * Features a minimum viewport height and a smooth hero background.
 */
export default function PageHeader({
  eyebrow,
  titlePrimary,
  titleSecondary,
  description,
  align = "center",
  size = "xl",
  className,
}: SectionHeaderProps) {
  const { ref, style } = useSectionReveal({
    threshold: 0,
    autoAnimate: false,
    onReveal: (el) => {
      // Find elements within the section header
      const eyebrowEl = el.querySelector("[data-eyebrow]")
      const titleEl = el.querySelector("[data-title]")
      const descEl = el.querySelector("[data-description]")

      if (eyebrowEl) {
        animateFade(eyebrowEl as HTMLElement, {
          translateY: [10, 0],
          delay: 0,
        })
      }

      if (titleEl) {
        animateFade(titleEl as HTMLElement, {
          translateY: [16, 0],
          delay: 100,
        })
      }

      if (descEl) {
        animateFade(descEl as HTMLElement, {
          translateY: [12, 0],
          delay: 200,
        })
      }
    },
  })

  return (
    <section 
      ref={ref}
      style={style}
      className={cn(
        "w-full relative flex flex-col justify-center overflow-hidden",
        "min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh]",
        "pt-24 pb-10 sm:pt-32 sm:pb-12 md:pt-40 md:pb-14",
        "[&_[data-eyebrow]]:opacity-0 [&_[data-title]]:opacity-0 [&_[data-description]]:opacity-0",
        className
      )}
    >
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <SectionHeader
          eyebrow={eyebrow}
          titlePrimary={titlePrimary}
          titleSecondary={titleSecondary}
          description={description}
          align={align}
          size={size}
          accent={false}
          as="h1"
          className="mb-0"
        />
      </div>
    </section>
  )
}

