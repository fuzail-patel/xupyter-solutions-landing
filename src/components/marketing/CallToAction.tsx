"use client"

import { CtaButton } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade } from "@/utils/animations"
import { useRef } from "react"

export default function CallToAction() {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const { ref, style } = useSectionReveal({
    threshold: 0.3,
    autoAnimate: false,
    onReveal: () => {
      if (contentRef.current) {
        animateFade(contentRef.current, {
          translateY: [12, 0],
        })
      }
    },
  })

  return (
    <section ref={ref} style={style} className="border-y border-secondary py-20">
      <div ref={contentRef} className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm sm:text-base text-foreground font-medium">
          Building something that needs to operate properly?
        </p>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-medium">
          Let&apos;s structure it correctly.
        </p>
        <div className="mt-6">
          <CtaButton variant="primary" href="#strategy-call">
            Discuss Your Project
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
