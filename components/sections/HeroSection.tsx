"use client"

import { useEffect, useRef } from "react"

import { CtaButton } from "@/components/shared/CtaButton"
import ScheduleCallButton from "@/components/shared/ScheduleCallButton"
import { cn } from "@/lib/utils"
import { animateFade, animateStaggered } from "@/lib/animations"
import Eyebrow from "@/components/shared/EyeBrow"
import Section from "@/components/layout/Section"
import LottieAnimation from "@/components/shared/LottieAnimation"

export default function HeroSection() {
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const descriptionRef = useRef<HTMLParagraphElement | null>(null)
  const ctaButtonsRef = useRef<HTMLDivElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const heroMediaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Eyebrow pill: fade-in + translateY(10px → 0), delay 0ms
    if (eyebrowRef.current) {
      animateFade(eyebrowRef.current, {
        translateY: [10, 0],
        delay: 0,
      })
    }

    // H1 headline: fade-in + translateY(16px → 0), delay 100ms
    if (headingRef.current) {
      animateFade(headingRef.current, {
        translateY: [16, 0],
        delay: 100,
      })
    }

    // Subheadline paragraph: fade-in, delay 220ms
    if (descriptionRef.current) {
      animateFade(descriptionRef.current, {
        delay: 220,
      })
    }

    // CTA buttons: fade-in + translateY(8px → 0), staggered 80ms apart, delay 340ms
    if (ctaButtonsRef.current) {
      const buttons = ctaButtonsRef.current.children
      animateStaggered(buttons as any, {
        translateY: [8, 0],
        delay: 340,
        staggerDelay: 80,
      })
    }

    // Right column visual/media: fade-in + translateX(20px → 0), delay 200ms
    if (heroMediaRef.current) {
      animateFade(heroMediaRef.current, {
        translateX: [20, 0],
        delay: 200,
      })
    }

    // Stats strip (3 items): fade-in, stagger 100ms, delay 460ms
    if (statsRef.current) {
      const stats = statsRef.current.children
      animateStaggered(stats as any, {
        delay: 460,
        staggerDelay: 100,
      })
    }
  }, [])

  return (
    <Section as="section" id="home">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 text-white">
        <div className="flex flex-col gap-7 lg:text-left ">
          <div className="space-y-2">
            <div ref={eyebrowRef}>
              <Eyebrow
                text="Architecture-First Software Development"
                className="text-gradient-primary"
              />
            </div>
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold max-w-3xl tracking-tight"
            >
              <span className={cn("relative", "text-gradient-primary font-display")}>
                We Build the Systems
              </span>
              {", "}
              <span className="block md:inline font-display">
                Your Business Runs On
              </span>
            </h1>
          </div>

          <p
            ref={descriptionRef}
            className="mt-1 text-sm md:text-base text-muted-foreground/90 leading-relaxed max-w-xl font-semibold"
          >
            We designs and builds custom SaaS platforms, ERP systems, CRMs, and
            internal business tools — engineered for scale from day one, not
            patched together as you grow.
          </p>

          <div
            ref={ctaButtonsRef}
            className="flex flex-col md:flex-wrap sm:flex-row gap-4"
          >
            <ScheduleCallButton
              variant="primary"
              className="rounded-xl "
            />

            <CtaButton variant="secondary" className="hover:bg-white hover:text-muted-foreground" href="#work">
              View Case Studies
            </CtaButton>
          </div>

          <div
            ref={statsRef}
            className="mt-12 flex items-center justify-between max-w-lg"
          >
            <div>
              <p className="font-bold text-3xl md:text-4xl font-display">100+</p>
              <p className="text-sm text-muted-foreground tracking-wider mt-1">
                Projects
              </p>
            </div>

            <div>
              <p className="font-bold text-3xl md:text-4xl font-display">10+</p>
              <p className="text-sm text-muted-foreground tracking-wider mt-1">
                Industries
              </p>
            </div>

            <div>
              <p className="font-bold text-3xl md:text-4xl font-display">7+</p>
              <p className="text-sm text-muted-foreground tracking-wider mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div
          ref={heroMediaRef}
          className="mx-auto md:mx-0 w-full max-w-md md:max-w-none flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-lg">
            <LottieAnimation
              src="/animations/tech-circle.json"
              className="w-full h-full pointer-events-none opacity-80"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
