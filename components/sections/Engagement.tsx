import type { ReactElement } from "react"

import { SectionHeader } from "@/components/custom/SectionHeader"
import { SystemList } from "@/components/custom/SystemList"
import { ENGAGEMENT_MODELS } from "@/data/engagementModels"
import { EngagementModel } from "@/types/content"

export default function Engagement(): ReactElement {
  const primaryModel = ENGAGEMENT_MODELS.find(
    (model) => model.primary
  ) as EngagementModel
  const secondaryModels = ENGAGEMENT_MODELS.filter(
    (model) => !model.primary
  )

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div id="engagement">
          <p className="mb-3 text-xs md:text-sm text-muted-foreground/90 text-center">
            We operate as long-term system partners. When needed, we engage through structured
            project or advisory models.
          </p>
          <SectionHeader
            align="center"
            size="md"
            eyebrow="Engagement Model"
            title="How We Engage"
            description="Clear structure. No surprises."
          />
        </div>
        <div className="mt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-start">
            <div className="rounded-2xl border border-border/70 bg-card px-6 py-6 md:px-8 md:py-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                Primary Engagement Model
              </p>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold font-[var(--font-satoshi)]">
                {primaryModel.name}
              </h3>
              <p className="mt-4 text-base md:text-lg font-medium text-foreground">
                {primaryModel.positioning}
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    How We Work
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground/90">
                    {primaryModel.engagementType}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground/90">
                    {primaryModel.scopeStructure}
                  </p>
                  <div className="mt-3">
                    <SystemList items={primaryModel.collaborationModel} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    What This Includes
                  </p>
                  <div className="mt-2">
                    <SystemList items={primaryModel.deliverables} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    Best Fit
                  </p>
                  <div className="mt-2">
                    <SystemList items={primaryModel.bestFit} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {secondaryModels.map((model) => (
                <div
                  key={model.key}
                  className="rounded-2xl border border-border/60 bg-card px-6 py-6 md:px-7 md:py-7"
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                    Alternative Model
                  </p>
                  <h3 className="mt-2 text-base md:text-lg font-semibold font-[var(--font-satoshi)]">
                    {model.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground/90">
                    {model.positioning}
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                      Engagement Snapshot
                    </p>
                    <p className="text-xs text-muted-foreground/90">
                      {model.engagementType}
                    </p>
                  <div className="mt-2">
                    <SystemList items={model.bestFit} size="xs" />
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
