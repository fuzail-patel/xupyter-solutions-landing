"use client"

import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade } from "@/utils/animations"
import { ReactNode } from "react"

interface BlogArticleRevealProps {
  children: ReactNode
}

export function BlogArticleReveal({ children }: BlogArticleRevealProps) {
  const { ref, style } = useSectionReveal<HTMLDivElement>({
    threshold: 0,
    autoAnimate: false,
    onReveal: (el) => {
      const header = el.querySelector("[data-article-header]")
      const content = el.querySelector("[data-article-content]")
      const related = el.querySelector("[data-related-articles]")

      if (header) {
        animateFade(header as HTMLElement, {
          translateY: [20, 0],
          duration: 1000,
        })
      }

      if (content) {
        animateFade(content as HTMLElement, {
          translateY: [16, 0],
          delay: 200,
          duration: 1000,
        })
      }

      if (related) {
        animateFade(related as HTMLElement, {
          translateY: [12, 0],
          delay: 400,
          duration: 1000,
        })
      }
    },
  })

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  )
}
