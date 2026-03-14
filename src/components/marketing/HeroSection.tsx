"use client"

import { useRef } from "react"
import { CtaButton, EyeBrow as Eyebrow, LottieAnimation } from "@/components/ui"
import { ScheduleCallButton } from "@/components/shared"
import { Section } from "@/components/layout"
import { useHeroAnimations } from "@/hooks/useHeroAnimations"
import { cn } from "@/utils/common"

export default function HeroSection() {
  const eyebrowRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const descriptionRef = useRef<HTMLParagraphElement | null>(null)
  const ctaButtonsRef = useRef<HTMLDivElement | null>(null)
  const statsRef = useRef<HTMLDivElement | null>(null)
  const heroMediaRef = useRef<HTMLDivElement | null>(null)

  useHeroAnimations({
    eyebrowRef,
    headingRef,
    descriptionRef,
    ctaButtonsRef,
    statsRef,
    heroMediaRef,
  })

  return (
    <Section as="section" id="home">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 text-white">
        <div className="flex flex-col gap-7 lg:text-left ">
          <div className="space-y-2">
            <div ref={eyebrowRef}>
              <Eyebrow
                text="Architecture-First Software Development"
                className="text-gradient-primary text-[9px] sm:text-[11px]"
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
            className="flex flex-col flex-wrap sm:flex-row gap-4"
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
            className="mt-12 flex flex-wrap gap-x-16 gap-y-8 text-center sm:text-left items-center justify-center sm:justify-between w-fit max-w-lg"
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
