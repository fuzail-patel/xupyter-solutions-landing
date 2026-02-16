import Image from "next/image"
import {
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"

import Header from "@/components/layout/Header"
import { PageSectionHeader } from "@/components/custom/PageSectionHeader"
import { CtaButton } from "@/components/custom/CtaButton"

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Header />
      <PageSectionHeader
        eyebrow="About Xupyter"
        title={
          <>
            <span className="text-brand-gradient">The Thinking Behind</span>{" "}
            <span className="text-primary">How We Build</span>
          </>
        }
        subtitle="We design and build scalable business systems engineered for long-term operational clarity."
      />

      <section className="py-12 sm:py-16 md:py-20 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
            ABOUT XUPYTER
          </p>
          <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:gap-14 items-start">
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              <p>
                Xupyter Solutions is a systems-focused development company founded in{" "}
                <span className="font-semibold text-foreground">2019</span>, designing and
                building web platforms, internal tools, and automation infrastructure.
              </p>
              <p>
                We have delivered{" "}
                <span className="font-semibold text-foreground">100+ projects</span> across{" "}
                <span className="font-semibold text-foreground">10+ industries</span> for
                operations-led teams that rely on their systems for daily delivery,
                reporting, and growth.
              </p>
              <p>
                Our team of{" "}
                <span className="font-semibold text-foreground">10+ engineers, designers, and system leads</span>{" "}
                operates as a remote-first unit serving clients in the{" "}
                <span className="font-semibold text-foreground">UK, EU, and North America</span>.
              </p>
              <p>
                Engagements are structured as long-term system partnerships or clearly{" "}
                scoped projects, with a focus on stable, well-structured platforms that are
                easy to operate and extend.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full rounded-xl bg-card/40 overflow-hidden">
              <Image
                src="/about-intro-placeholder.jpg"
                alt="Xupyter team working on systems and platforms"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
            HOW WE OPERATE
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="space-y-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                Focused delivery teams
              </h3>
              <p>
                Small, cross-functional groups own systems from design through delivery.
              </p>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                Clear scopes and outputs
              </h3>
              <p>
                Work is organized into defined scopes with documented deliverables and owners.
              </p>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
              <h3 className="text-sm sm:text-base font-semibold text-foreground">
                Operational reliability
              </h3>
              <p>
                Changes are designed to protect uptime, data quality, and key workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
            HOW WE WORK WITH CLIENTS
          </p>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:gap-8">
            {[
              {
                label: "Architecture & planning",
                description:
                  "We align on objectives, constraints, and system boundaries before any build work starts.",
              },
              {
                label: "System design",
                description:
                  "We define data flows, responsibilities, and integration points for each core component.",
              },
              {
                label: "Structured build",
                description:
                  "We implement in defined scopes with review points, demos, and deployment plans.",
              },
              {
                label: "Long-term support",
                description:
                  "We monitor systems, plan iterations, and support ongoing operational change.",
              },
            ].map((step, index, all) => (
              <div key={step.label} className="flex items-start gap-4 md:flex-1">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/70 text-[0.75rem] font-semibold text-foreground">
                    0{index + 1}
                  </div>
                  {index < all.length - 1 && (
                    <div className="hidden md:block mt-3 h-px w-10 bg-border/60" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    {step.label}
                  </p>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm sm:text-base text-foreground font-medium">
            Building something that needs to operate properly?
          </p>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Let&apos;s structure it correctly.
          </p>
          <div className="mt-6">
            <CtaButton variant="primary" href="#strategy-call">
              Discuss Your Project
            </CtaButton>
          </div>
        </div>
      </section>
    </main>
  )
}

