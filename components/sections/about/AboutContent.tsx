"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"

interface AboutContentProps {
  activeTab: string
}

/**
 * AboutContent component displaying the descriptive text for the About page.
 */
export default function AboutContent({ activeTab }: AboutContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "who-we-are":
        return (
          <>
            <div>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 font-bold uppercase py-1.5 px-5 rounded-full text-[10px] tracking-widest mb-6"
              >
                Who we are?
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-foreground">
                From Blockchain Pioneers to AI Innovators
              </h2>
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 via-purple-500 to-indigo-600 mb-8">
                Evolving Since 2021
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p>
                Xupyter Solutions was founded in 2021 with a specific focus: building
                blockchain development systems for businesses worldwide. Over the years, we have empowered
                numerous startups and enterprises with decentralized solutions.
              </p>
              <p>
                Recognizing AI as the next transformative force, our team has expanded to
                provide AI solutions, including AI chatbots, AI agents, deep learning applications,
                and custom large language models (LLMs) for enterprises.
              </p>
              <p>
                We stand at the intersection of AI innovation and blockchain trust,
                helping companies transform ambitious ideas into high-performing digital products.
              </p>
            </div>
          </>
        )
      case "mission":
        return (
          <>
            <div>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 font-bold uppercase py-1.5 px-5 rounded-full text-[10px] tracking-widest mb-6"
              >
                Our Mission
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-foreground">
                Engineering for Long-Term Clarity
              </h2>
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-teal-500 to-emerald-600 mb-8">
                Built to Scale, Not Just to Ship
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p>
                Our mission is to replace fragmented stacks with unified systems. We believe that modern companies shouldn't just run on scattered apps; they should run on integrated software that fits their unique operational DNA.
              </p>
              <p>
                We prioritize architecture before speed. Fast builds without structure create long-term friction, so we focus on creating foundations that allow businesses to scale without ever needing a complete rebuild.
              </p>
            </div>
          </>
        )
      case "values":
        return (
          <>
            <div>
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 font-bold uppercase py-1.5 px-5 rounded-full text-[10px] tracking-widest mb-6"
              >
                Our Values
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-foreground">
                Principles Over Templates
              </h2>
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-600 mb-8">
                Integrity in Architecture
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p>
                We value clarity over complexity. Operational software should reduce chaos, not introduce it. Every line of code we write is aimed at creating visibility and control for our clients.
              </p>
              <p>
                Technical trust is our cornerstone. We stand by our builds, ensuring that every system we deliver is 100% custom, secure, and engineered for the long-term operational health of your business.
              </p>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col justify-center h-full space-y-8 lg:pl-10">
      {renderContent()}
    </div>
  )
}
