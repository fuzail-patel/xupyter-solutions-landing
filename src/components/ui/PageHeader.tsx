"use client"

import { cn } from "@/utils/common"
import type { SectionHeaderProps } from "@/types/ui"
import SectionHeader from "./SectionHeader"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade } from "@/utils/animations"

/**
 * PageHeader component for main pages (About, Careers, etc.)
 * Features a minimum viewport height and the signature hero-gradient background.
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
        "w-full hero-gradient border-b border-border relative flex flex-col justify-center",
        "min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh]",
        "py-20 sm:py-24 md:py-32",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
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

