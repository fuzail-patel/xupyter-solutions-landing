"use client"
import { ContactFormCard } from "@/components/contact"
import { useSectionReveal } from "@/hooks/useSectionReveal"
import { CONTACT_ITEMS } from "@/lib/constants/contact"
import { SectionHeader } from "@/components/ui"

import { Section } from "@/components/layout"

export default function Contact() {
  const { ref, style } = useSectionReveal()

  return (
    <Section id="contact" ref={ref} style={style}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-center space-y-12">
          <SectionHeader
            align="left"
            size="md"
            eyebrow="LET'S TALK"
            accent={false}
            titlePrimary="Got a Product Idea?"
            titleSecondary="Let's Build It."
            description="Whether you're pre-launch or scaling fast, our team is ready to jump in. Tell us what you're building and we'll set up a free 30-minute discovery call within 24 hours."
          />

          <div className="space-y-8">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="group flex items-start gap-5 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-foreground transition-all shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col space-y-1 pt-1">
                  <span className="text-sm font-semibold text-foreground">
                    {item.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col justify-center">
          <ContactFormCard />
        </div>
      </div>
    </Section>
  )
}

