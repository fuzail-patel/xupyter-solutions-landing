"use client"

import {
  BriefcaseIcon,
  ClockIcon,
  HomeModernIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid"

const BENEFITS = [
  {
    number: "01",
    title: "Remote-first structure",
    description:
      "Work from where you're most effective, with clear overlap windows instead of fixed office hours.",
    icon: HomeModernIcon,
  },
  {
    number: "02",
    title: "Stable 5-day weeks",
    description:
      "No weekend sprints or ad-hoc late nights as a default expectation. Sustainable pace is non-negotiable.",
    icon: ClockIcon,
  },
  {
    number: "03",
    title: "Clear ownership, no micromanagement",
    description:
      "Small teams, direct communication, and responsibility aligned to systems you help design.",
    icon: BriefcaseIcon,
  },
  {
    number: "04",
    title: "Continuous learning and growth",
    description:
      "Exposure to complex systems, regular feedback loops, and the space to genuinely deepen your craft.",
    icon: SparklesIcon,
  },
]

function BracketIconBox({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
      <span className="absolute left-0 top-0 w-3 h-3 border-l-2 border-t-2 border-muted-foreground/50 transition-colors duration-200 group-hover:border-primary" />
      <span className="absolute right-0 top-0 w-3 h-3 border-r-2 border-t-2 border-muted-foreground/50 transition-colors duration-200 group-hover:border-primary" />
      <span className="absolute left-0 bottom-0 w-3 h-3 border-l-2 border-b-2 border-muted-foreground/50 transition-colors duration-200 group-hover:border-primary" />
      <span className="absolute right-0 bottom-0 w-3 h-3 border-r-2 border-b-2 border-muted-foreground/50 transition-colors duration-200 group-hover:border-primary" />
      <Icon className="w-5 h-5 text-foreground/70 transition-colors duration-200 group-hover:text-primary" />
    </div>
  )
}

function BenefitCard({
  number,
  title,
  description,
  icon,
}: {
  number: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div
      className="group relative border-r border-b border-border bg-background p-6 transition-colors duration-200 hover:bg-muted/20"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`)
      }}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle 120px at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-4">
          <BracketIconBox icon={icon} />
          <span className="text-xs font-medium tabular-nums text-muted-foreground/80">
            {number}
          </span>
        </div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/90 transition-colors duration-200 group-hover:text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  )
}

export function HowWeWorkSection() {
  return (
    <div className="mt-16 md:mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
        How We Work
      </h2>
      <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-foreground">
        How we structure day-to-day work
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-muted-foreground/90 leading-relaxed">
        Clear overlap windows, sustainable pace, and ownership aligned to the systems you help design.
      </p>

      <div className="mt-10 border-t border-l border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(2n)]:md:border-r-0 [&>*:nth-child(4n)]:lg:border-r-0 [&>*:last-child]:border-b-0 [&>*:nth-last-child(-n+2)]:md:border-b-0 [&>*:nth-last-child(-n+4)]:lg:border-b-0">
        {BENEFITS.map((benefit) => (
          <BenefitCard
            key={benefit.number}
            number={benefit.number}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  )
}
