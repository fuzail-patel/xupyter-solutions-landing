"use client"

import { useState, useRef } from "react"
import { AboutContent, AboutTabs, MapLegend, WorldMap } from "@/components/about"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { animateFade } from "@/utils/animations"

export function AboutClient() {
  const [activeTab, setActiveTab] = useState("who-we-are")
  const leftColRef = useRef<HTMLDivElement | null>(null)
  const rightColRef = useRef<HTMLDivElement | null>(null)

  const { ref, style } = useSectionReveal({
    threshold: 0.1,
    autoAnimate: false,
    onReveal: () => {
      if (leftColRef.current) {
        animateFade(leftColRef.current, {
          translateX: [-20, 0],
        })
      }
      if (rightColRef.current) {
        animateFade(rightColRef.current, {
          translateX: [20, 0],
          delay: 150,
        })
      }
    },
  })

  return (
    <section ref={ref} style={style} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Left Column: Interactive Map and Controls */}
          <div ref={leftColRef} className="flex flex-col space-y-4">
            <WorldMap />
            <MapLegend />
            <AboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Right Column: Descriptive Content */}
          <div ref={rightColRef}>
            <AboutContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}
