"use client"

import { PageHeader, BodyText } from "@/components/ui"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/utils/common"
import { TERMS_OF_SERVICE_SECTIONS } from "@/lib/constants/terms-of-service"
import { Section } from "@/components/layout"

export default function TermsOfServicePage() {
  const lastUpdated = "March 18, 2026"
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-45% 0% -45% 0%",
        threshold: 0,
      }
    )

    TERMS_OF_SERVICE_SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="flex flex-col bg-background">
      <PageHeader
        eyebrow="Legal"
        titlePrimary="Terms of"
        titleSecondary="Service"
        description={`Last updated: ${lastUpdated}. Our terms and conditions governing project engagements.`}
      />

      <Section className="py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 items-start">
          
          {/* Sticky Sidebar TOC */}
          <aside className="hidden lg:block sticky top-32">
            <nav className="flex flex-col gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">
                On this page
              </p>
              {TERMS_OF_SERVICE_SECTIONS.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={cn(
                    "text-sm font-medium transition-all duration-300",
                    activeSection === section.id 
                      ? "text-primary translate-x-1" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {section.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="space-y-24">
            {TERMS_OF_SERVICE_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                  {section.title}
                </h2>
                
                {section.content && (
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <BodyText key={idx}>{paragraph}</BodyText>
                    ))}
                  </div>
                )}

                {section.subSections && (
                  <div className="space-y-6 mt-8 ps-3">
                    {section.subSections.map((sub) => (
                      <div key={sub.id} id={sub.id} className="p-8 bg-card border-l-4 border-primary/20 rounded-r-2xl">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {sub.title}
                        </h3>
                        <div className="space-y-4">
                          {sub.content.map((paragraph, idx) => (
                            <BodyText key={idx}>{paragraph}</BodyText>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
