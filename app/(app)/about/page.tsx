"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import { PageHeader } from "@/components/shared"
import { CallToAction } from "@/components/sections"
import WorldMap from "@/components/sections/about/WorldMap"
import MapLegend from "@/components/sections/about/MapLegend"
import AboutTabs from "@/components/sections/about/AboutTabs"
import AboutContent from "@/components/sections/about/AboutContent"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("who-we-are")

  return (
    <main className="flex flex-col bg-background">
      <Header />
      
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
