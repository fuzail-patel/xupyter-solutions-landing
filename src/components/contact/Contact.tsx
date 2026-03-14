"use client"
import { ContactFormCard } from "@/components/contact"
import { Badge } from "@/components/ui"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { CONTACT_ITEMS } from "@/lib/constants/contact"

import {
  ArrowRightIcon
} from "@heroicons/react/24/solid"
import { SectionHeader } from "@/components/ui"

import { Section } from "@/components/layout"

export default function Contact() {
  const { ref, style } = useSectionReveal()

  return (
    <Section id="contact" ref={ref} style={style}>
      <SectionHeader
        align="left"
        size="md"
        eyebrow="LET'S TALK"
        accent={false}
        titlePrimary="Got a Product Idea?"
        titleSecondary="Let's Build It."
        description="Whether you're pre-launch or scaling fast, our team is ready to jump in. Tell us what you're building and we'll set up a free 30-minute discovery call within 24 hours."
      />

      <div className="mt-10 md:mt-12 overflow-hidden rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-1 bg-card lg:divide-x divide-border">
          {/* Left Panel: Contact Form */}
          <div className="p-4 sm:p-5 md:p-8">
            <ContactFormCard />
          </div>

          {/* Right Panel: Contact Info */}
          <div className="flex flex-col h-full relative px-4">
            <div className="flex-1 divide-y divide-border">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between py-6 px-1 transition-colors"
                >
                  <div className="flex items-start gap-4 pe-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary shrink-0 text-muted-foreground">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              ))}
            </div>

            <div className="py-6 border-t border-border flex justify-start">
              <Badge variant="secondary" className="bg-secondary/50 text-muted-foreground font-medium py-1 px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                Typical response: &lt; 2 hours
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

