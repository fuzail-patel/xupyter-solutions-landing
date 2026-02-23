"use client"

import { SmartImage } from "@/components/shared/SmartImage"
import {
  ArrowUpRightIcon
} from "@heroicons/react/24/solid"
import { useSectionReveal } from "@/lib/hooks/useSectionReveal"
import { Card, CardContent } from "@/components/ui/card"

import { ContactFormCard } from "@/components/sections/contact/ContactFormCard"
import { CONTACT_ITEMS } from "@/lib/constants/contact"

export default function Contact() {
  const { ref, style } = useSectionReveal()

  return (
    <section
      id="contact"
      className="py-10 md:py-14"
      ref={ref}
      style={style}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-10 md:my-12 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          <ContactFormCard />
          <div className="grid grid-cols-1 ;g:grid-rows-2 gap-6 h-full">
            <Card className="border-none shadow-none p-0 overflow-hidden hidden lg:block">
              <CardContent className="p-0 h-full">
                <SmartImage
                  src="/contact-image.jpg"
                  alt="Contact"
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              </CardContent>
            </Card>

            <Card className="border-none shadow-none p-0 overflow-hidden">
              <CardContent className="p-0 divide-y divide-accent">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex items-center justify-between py-5 px-6 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-start gap-4 pe-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground font-semibold break-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground/60 group-hover:text-muted-foreground transition-colors shrink-0" />
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
