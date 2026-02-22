"use client"

import SectionHeader from "@/components/shared/SectionHeader"
import AutoCarousel from "@/components/shared/AutoCarousel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TESTIMONIALS } from "@/lib/constants/testimonials"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { animateFadeUp } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"


const ITEMS_PER_SLIDE = 3
const ROTATION_INTERVAL = 8000

export default function Testimonials() {
  const { ref, style } = useSectionReveal((sectionEl) => {
    const cards = sectionEl.querySelectorAll<HTMLElement>(
      "[data-testimonial-card]"
    )

    if (!cards.length) return

    animateFadeUp(Array.from(cards) as HTMLElement[])
  })

  const totalSlides = Math.ceil(TESTIMONIALS.length / ITEMS_PER_SLIDE)

  const slides = Array.from({ length: totalSlides }).map((_, slideIndex) => {
    const startIndex = slideIndex * ITEMS_PER_SLIDE
    const visibleTestimonials = TESTIMONIALS.slice(
      startIndex,
      startIndex + ITEMS_PER_SLIDE
    )

    return (
      <div className="grid gap-6 md:grid-cols-3" key={slideIndex}>
        {visibleTestimonials.map((testimonial) => (
          <article
            key={testimonial.company + testimonial.name}
            data-testimonial-card
            className="flex flex-col rounded-2xl bg-card shadow-xl px-5 py-6 md:px-6 md:py-7"
          >
            {testimonial.industry && (
              <Badge variant="secondary" className="font-semibold mb-1">
                {testimonial.industry}
              </Badge>
            )}
            <p className="text-sm md:text-base leading-relaxed text-foreground/50 font-semibold mt-2">
              {testimonial.quote}
            </p>
            <div className="mt-6 flex gap-3">
              <Avatar size="lg">
                <AvatarFallback className="text-xs font-medium text-muted-foreground">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground/90">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    )
  })

  return (
    <section
      id="testimonials"
      className="py-10 md:py-14"
      ref={ref}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          size="md"
          eyebrow="Testimonials"
          title="Proof from teams whose systems we now run"
          description="Selected operators and leaders whose day-to-day now depends on the platforms we shipped together."
        />

        <div className="mt-8">
          <AutoCarousel
            slides={slides}
            interval={ROTATION_INTERVAL}
            pauseOnHover
          />
        </div>
      </div>
    </section>
  )
}
