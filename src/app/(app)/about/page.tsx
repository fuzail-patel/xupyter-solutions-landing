"use client"
import { AboutContent, AboutTabs, MapLegend, WorldMap } from "@/components/about"
import { CallToAction } from "@/components/marketing"
import { PageHeader } from "@/components/ui"
import { useState } from "react"


export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("who-we-are")

  return (
    <main className="flex flex-col bg-background">
      <PageHeader
        eyebrow="About Xupyter"
        titlePrimary="The Thinking Behind"
        titleSecondary="How We Build"
        description="We design and build scalable business systems engineered for long-term operational clarity."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
            {/* Left Column: Interactive Map and Controls */}
            <div className="flex flex-col space-y-4">
              <WorldMap />
              <MapLegend />
              <AboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Right Column: Descriptive Content */}
            <AboutContent activeTab={activeTab} />
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  )
}
