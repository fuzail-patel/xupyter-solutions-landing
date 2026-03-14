"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { BlogCard } from "@/components/blog"
import { Section } from "@/components/layout"
import { AutoCarousel, SectionHeader } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade } from "@/utils/animations"
import { getDisplayPosts } from "@/utils/blog/mapPost"
import type { Post } from "@/payload-types"
import type { DisplayPost } from "@/types/blog"

interface BlogSectionProps {
  posts?: Post[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const carouselRef = useRef<HTMLDivElement | null>(null)

  const { ref, style } = useSectionReveal({
    threshold: 0.15,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // Section heading + subtitle: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Blog cards in carousel: fade-in only
      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll<HTMLElement>(
          "[data-blog-card]"
        )
        animateFade(cards)
      }
    },
  })

  const latestPosts = getDisplayPosts(posts)

  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const calcPerView = () => {
      if (typeof window === "undefined") return
      const w = window.innerWidth
      if (w >= 1024) {
        setPerView(3)
      } else if (w >= 768) {
        setPerView(2)
      } else {
        setPerView(1)
      }
    }

    calcPerView()
    window.addEventListener("resize", calcPerView)
    return () => window.removeEventListener("resize", calcPerView)
  }, [])

  const slides = useMemo(() => {
    const chunks: DisplayPost[][] = []
    for (let i = 0; i < latestPosts.length; i += perView) {
      chunks.push(latestPosts.slice(i, i + perView))
    }

    return chunks.map((chunk, idx) => (
      <div
        key={`slide-${idx}`}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7"
      >
        {chunk.map((post) => (
          <div key={post.slug} data-blog-card>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    ))
  }, [latestPosts, perView])

  return (
    <Section ref={ref} style={style}>
      <div ref={headerRef}>
        <SectionHeader
          align="center"
          eyebrow="News & Insights"
          titlePrimary="Practical engineering insights"
          titleSecondary="and startup tech strategy"
          description="Lessons from the build floor. Practical advice for founders and engineers building the future."
        />
      </div>

      <div ref={carouselRef}>
        <AutoCarousel
          slides={slides}
          interval={4000}
          pauseOnHover
          className="mt-6 md:mt-8"
        />
      </div>
    </Section>
  )
}
 
