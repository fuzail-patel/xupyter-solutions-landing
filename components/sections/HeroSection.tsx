"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

import { AutoCarousel } from "@/components/custom/AutoCarousel"
import { CtaButton } from "@/components/custom/CtaButton"
import StrategyCallBooking from "@/components/StrategyCallBooking"
import { cn } from "@/lib/utils"
import { animateHeroIntro } from "@/lib/animations"

export default function HeroSection() {
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const descriptionRef = useRef<HTMLParagraphElement | null>(null)
  const ctaGroupRef = useRef<HTMLDivElement | null>(null)
  const heroMediaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (
      !eyebrowRef.current ||
      !headingRef.current ||
      !descriptionRef.current ||
      !ctaGroupRef.current ||
      !heroMediaRef.current
    ) {
      return
    }

    animateHeroIntro({
      eyebrow: eyebrowRef.current,
      heading: headingRef.current,
      description: descriptionRef.current,
      ctaGroup: ctaGroupRef.current,
      media: heroMediaRef.current,
    })
  }, [])

  return (
    <section id="home" className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-2">
              <p
                ref={eyebrowRef}
                className={cn(
                  "text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
                  "text-brand-gradient"
                )}
              >
                Changing The Business
              </p>
              <h1
                ref={headingRef}
                className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold max-w-3xl font-[var(--font-satoshi)] tracking-tight"
              >
                <span className={cn("relative", "text-brand-gradient")}>
                  We Build the Systems
                </span>
                {", "}
                <span className="text-primary block md:inline">
                  Your Business Runs On
                </span>
              </h1>
            </div>

            <p
              ref={descriptionRef}
              className="mt-1 text-sm md:text-base text-muted-foreground/90 leading-relaxed max-w-xl"
            >
              Custom platforms, automation, and internal tools designed to
              support real operations — not just look good online.
            </p>

            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <StrategyCallBooking variant="primary" />

              <CtaButton variant="secondary" href="#work">
                View Case Studies
              </CtaButton>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <p className="font-bold text-3xl md:text-4xl font-[var(--font-satoshi)]">
                  100+
                </p>
                <p className="text-sm text-muted-foreground tracking-[0.08em] mt-1">
                  Projects
                </p>
              </div>

              <div>
                <p className="font-bold text-3xl md:text-4xl font-[var(--font-satoshi)]">
                  10+
                </p>
                <p className="text-sm text-muted-foreground tracking-[0.08em] mt-1">
                  Industries
                </p>
              </div>

              <div>
                <p className="font-bold text-3xl md:text-4xl font-[var(--font-satoshi)]">
                  7+
                </p>
                <p className="text-sm text-muted-foreground tracking-[0.08em] mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div
            ref={heroMediaRef}
            className="relative rounded-xl aspect-[4/3] overflow-hidden mx-auto md:mx-0 w-full max-w-md md:max-w-none"
          >
            <AutoCarousel
              slides={[
                <div className="relative h-full w-full" key="hero-slide-1">
                  <Image
                    src="/hero-image.webp"
                    alt="Hero illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>,
                <div className="relative h-full w-full" key="hero-slide-2">
                  <Image
                    src="/hero-image.png"
                    alt="Hero illustration detail"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>,
              ]}
              interval={8000}
              pauseOnHover
              controlsPlacement="inside"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
