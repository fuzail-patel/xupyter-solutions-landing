import { AboutClient } from "@/components/about"
import { CallToAction } from "@/components/marketing"
import { PageHeader } from "@/components/ui"
import { pageSEO } from "@/lib/seo/pages"
import type { Metadata } from "next"

export const metadata: Metadata = pageSEO.about

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-background">
      <PageHeader
        eyebrow="About Xupyter"
        titlePrimary="The Thinking Behind"
        titleSecondary="How We Build"
        description="We design and build scalable business systems engineered for long-term operational clarity."
      />

      <AboutClient />

      <CallToAction />
    </main>
  )
}
