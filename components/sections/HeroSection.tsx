import Image from "next/image"

import { AutoCarousel } from "@/components/custom/AutoCarousel"
import { CtaButton } from "@/components/custom/CtaButton"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  return (
    <section id="home" className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-2">
              <p
                className={cn(
                  "text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
                  "text-brand-gradient"
                )}
              >
                Changing The Business
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold max-w-3xl font-[var(--font-satoshi)] tracking-tight">
                <span className={cn("relative", "text-brand-gradient")}>
                  We Build the Systems
                </span>
                {", "}
                <span className="text-primary block md:inline">
                  Your Business Runs On
                </span>
              </h1>
            </div>

            <p className="mt-1 text-sm md:text-base text-muted-foreground/90 leading-relaxed max-w-xl">
              Custom platforms, automation, and internal tools designed to
              support real operations — not just look good online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CtaButton variant="primary" href="#strategy-call">
                Book a Strategy Call
              </CtaButton>

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

          <div className="relative rounded-xl aspect-[4/3] overflow-hidden mx-auto md:mx-0 w-full max-w-md md:max-w-none">
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
