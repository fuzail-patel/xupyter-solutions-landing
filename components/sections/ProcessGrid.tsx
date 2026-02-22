"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AsymmetricGrid } from "@/components/layout/AsymmetricGrid"
import { cn } from "@/lib/utils"
import type { JourneyStep } from "@/types/journey"
import { BodyText } from "../custom/Typography"

interface ProcessGridProps {
  steps: JourneyStep[]
}

export default function ProcessGrid({ steps }: ProcessGridProps) {
  return (
    <AsymmetricGrid
      className="gap-2"
      items={steps.map((step) => ({
        id: step.id,
        colSpan: step.colSpan,
        content: (
          <Card
            key={step.id}
            className={cn(
              "relative border-none py-6",
              "transition-all duration-200 ease-out hover:shadow-sm hover:from-card/90 hover:to-secondary/10"
            )}
          >
            <CardContent className="px-6">
              {/* Steps */}
              <h3 className="text-secondary-foreground/50 font-bold text-4xl md:text-5xl">
                {step.id}
              </h3>
              

              {/* Phase title */}
              <h3 className="text-xl md:text-2xl font-semibold">
                {step.title}
              </h3>

              {/* Description paragraph */}
              {step.description && (
                <BodyText className="text-muted-foreground font-semibold mt-4">
                  {step.description}
                </BodyText>
              )}

            </CardContent>
          </Card>
        ),
      }))}
    />
  )
}
