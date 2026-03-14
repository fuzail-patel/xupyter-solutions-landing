"use client"

import { useEffect, useMemo, useState, useRef } from "react"
import { SectionHeader, AutoCarousel } from "@/components/shared"
import { BlogCard } from "@/components/blog"
import type { BlogPost } from "@/lib/types/blog"
import Section from "@/components/layout/Section"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { animateFade } from "@/lib/animations"
import { getMediaUrl } from "@/lib/utils"

interface BlogsSectionProps {
  posts?: any[]
}

export default function BlogsSection({ posts }: BlogsSectionProps) {
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

  const latestPosts = useMemo<BlogPost[]>(() => {
    if (!posts || posts.length === 0) return []

    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
       excerpt: post.excerpt,
       category: post.tags?.[0]?.name || "Insight",
       readTime: post.readTime || "5 min read",
       publishedAt: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : "Recently",
      image: getMediaUrl(post.coverImage),
      featured: post.featured,
      author: {
        name: post.author?.name || "Xupyter Team",
        avatar: getMediaUrl(post.author?.avatar),
      },
    }))
  }, [posts])

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
    const chunks: BlogPost[][] = []
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
 
