import { SmartImage } from "@/components/shared/SmartImage"
import Header from "@/components/layout/Header"
import { BodyText, PageSectionHeader } from "@/components/shared"
import { CallToAction } from "@/components/sections"
import { Card, CardContent } from "@/components/ui/card"
import { VISION_PRINCIPLES } from "@/lib/constants/vision"
import { AsymmetricGrid } from "@/components/layout"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Header />
      <PageSectionHeader
        eyebrow="About Xupyter"
        titlePrimary="The Thinking Behind"
        titleSecondary="How We Build"
        subtitle="We design and build scalable business systems engineered for long-term operational clarity."
      />

      <section className="py-10 sm:py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:gap-14 items-start">
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              <p className="font-semibold">
                Xupyter Solutions was founded in <span className="font-bold text-foreground mx-1">2022</span> in{" "}
                <span className="font-bold text-foreground mx-1">Bharuch, Gujarat</span>, with a specific focus:
                building software that businesses can actually depend on as they grow.
              </p>
              <p className="font-semibold">
                We work with founder-led businesses, growing companies, and SaaS startups that have
                outgrown spreadsheets and disconnected tools. Our clients come to us when they need
                a system that fits the way they operate — not a generic product they have to work
                around. Our delivery is <span className="font-bold text-foreground mx-1">global</span>.
              </p>
              <p className="font-semibold">
                We are a small, focused team. We take on projects where architecture and long-term
                structure matter. We do not build brochure websites or template-based solutions. We focus on{" "}
                <span className="font-bold text-foreground mx-1">5 core service areas</span> and ship{" "}
                <span className="font-bold text-foreground mx-1">100% custom-built systems</span>.
              </p>
            </div>
            <div className="relative aspect-4/3 w-full rounded-xl bg-card/40 overflow-hidden">
              <SmartImage
                src="/about-image.webp"
                alt="Xupyter team working on systems and platforms"
                fill
                className="object-cover shrink-0"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">OUR VISION</p>
          <AsymmetricGrid
            className="gap-2 mt-6"
            items={VISION_PRINCIPLES.map((vision) => ({
              id: vision.num,
              colSpan: 6,
              content: (
                <Card
                  key={vision.num}
                  className={cn(
                    "relative border-none py-6",
                    "transition-all duration-200 ease-out hover:shadow-sm hover:from-card/90 hover:to-secondary/10"
                  )}
                >
                  <CardContent className="px-6">
                    <h3 className="text-secondary-foreground/50 font-bold text-4xl md:text-5xl">
                      {vision.num}
                    </h3>

                    <h3 className="text-xl md:text-2xl font-semibold">
                      {vision.title}
                    </h3>

                    <BodyText className="text-muted-foreground font-semibold mt-4">
                      {vision.description}
                    </BodyText>
                  </CardContent>
                </Card>
              ),
            }))}
          />
        </div>
      </section>

      {/* Removed extra sections to keep the page focused */}

      <CallToAction />
    </main>
  )
}
