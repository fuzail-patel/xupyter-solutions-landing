"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui"
import { AsymmetricGrid, Section } from "@/components/layout"
import { SectionHeader } from "@/components/ui"
import { PlayCircleIcon, StarIcon } from "@heroicons/react/24/solid"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { TESTIMONIALS } from "@/lib/constants/testimonials"
import { GridColSpan } from "@/types/layout/Grid.types"
import { Testimonial } from "@/types/marketing/Testimonial.types"
import { animateFade, animateStaggered } from "@/utils/animations"
import { getMediaUrl } from "@/utils/common"
import { getDisplayTestimonials } from "@/utils/marketing/mapTestimonial"


const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "30+", label: "Startup Clients" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "7+", label: "Industries" },
]

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const kpiRef = useRef<HTMLDivElement | null>(null)

  const displayTestimonials = getDisplayTestimonials(testimonials)

  const { ref, style } = useSectionReveal({
    threshold: 0.2,
    autoAnimate: false,
    onReveal: (sectionEl) => {
      // KPI strip numbers: fade-in + translateY(8px → 0), stagger 100ms
      if (kpiRef.current) {
        animateStaggered(kpiRef.current.children as any, {
          translateY: [8, 0],
          staggerDelay: 100,
        })
      }

      // Section heading: fade-in + translateY(12px → 0)
      if (headerRef.current) {
        animateFade(headerRef.current, {
          translateY: [12, 0],
        })
      }

      // Testimonial cards: fade-in + translateY(16px → 0), stagger 120ms
      const cards = sectionEl.querySelectorAll<HTMLElement>("[data-testimonial-card]")
      animateStaggered(cards, {
        translateY: [16, 0],
        staggerDelay: 120,
      })
    },
  })

  return (
    <Section ref={ref} style={style} className="relative">
      <div className="bg-card p-6 rounded-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-10 gap-y-5">
          <div ref={headerRef} className="max-w-lg">
            <SectionHeader
              eyebrow="Testimonials"
              titlePrimary="What Our"
              titleSecondary="Clients Say"
              accent={false}
              description="Don't take our word for it — here's what the startups we've built for have to say."
            />
          </div>

          {/* KPI Strip */}
          <div ref={kpiRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="border-t border-foreground/10 pt-10">
          <AsymmetricGrid
            className="gap-4"
            items={displayTestimonials.map((item) => ({
              id: item.id,
              colSpan: item.colSpan,
              content:
                item.type === "video" ? (
                  <div data-testimonial-card>
                    <VideoCard {...item as any} />
                  </div>
                ) : (
                  <div data-testimonial-card>
                    <TextCard {...item as any} />
                  </div>
                ),
            }))}
          />
        </div>
      </div>
    </Section>
  )
}

/* ------------------------------
   Video Card
--------------------------------*/

interface VideoCardProps {
  name: string
  videoThumbnail?: string
}

function VideoCard({
  name,
  videoThumbnail,
}: VideoCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-white/5 bg-background/60 backdrop-blur-lg group cursor-pointer p-0">
      <div className="relative h-72 md:h-80">
        <Image
          src={videoThumbnail || '/fallback-video-thumbnail.jpg'}
          alt={name}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition">
            <PlayCircleIcon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Name */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
          <div className="text-sm font-semibold text-white">
            {name}
          </div>
        </div>
      </div>
    </Card>
  )
}

/* ------------------------------
   Text Card
--------------------------------*/

interface TextCardProps {
  name: string
  role?: string
  content: string
  rating?: number
  avatar?: string
}

function TextCard({
  name,
  role,
  content,
  rating = 5,
  avatar,
}: TextCardProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/5 bg-background/60 backdrop-blur-lg p-0">
      <CardContent className="p-6 flex flex-col justify-between h-full">

        <div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {content}
          </p>

        </div>

        <div className="mt-8  pt-4 flex items-center gap-6 justify-between">
          <div className="flex items-center gap-3">
            {avatar && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-foreground">
                {name}
              </div>
              {role && (
                <div className="text-xs text-muted-foreground">
                  {role}
                </div>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${i < rating
                  ? "text-foreground"
                  : "text-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

