import Image from "next/image"
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline"
import { RiWhatsappLine } from "react-icons/ri"

import { Card, CardContent } from "@/components/ui/card"
import type { ContactLinkItemProps } from "@/types/content"

function ContactLinkItem({ icon, label, value, href }: ContactLinkItemProps) {
  const isExternal = href.startsWith("http")

  return (
    <a
      href={href}
      target={isExternal ? "_xupyter_solutions" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-xl border border-border/60 bg-card px-5 py-4 transition-colors hover:bg-secondary/50"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary shrink-0">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {label}
          </span>
          <span className="text-sm text-muted-foreground">
            {value}
          </span>
        </div>
      </div>
      <div className="flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/80 group-hover:text-foreground transition-colors">
        Open
      </div>
    </a>
  )
}

export function ContactInfoCard() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-6 h-full">
      <Card className="border-none shadow-none row-span-1 p-0 overflow-hidden hidden lg:block">
        <CardContent className="p-0 h-full">
          <Image
            src="/contact-image.jpg"
            alt="Contact"
            className="h-full w-full object-cover opacity-80"
            height={300}
            width={300}
          />
        </CardContent>
      </Card>
      <Card className="border-none shadow-none h-max">
        <CardContent className="space-y-4">
          <ContactLinkItem
            icon={<EnvelopeIcon className="h-5 w-5 text-foreground" />}
            label="Email"
            value="contact@xupyter.in"
            href="mailto:hello@xupyter.com"
          />
          <ContactLinkItem
            icon={<PhoneArrowUpRightIcon className="h-5 w-5 text-foreground" />}
            label="Phone"
            value="+91 94287-14605"
            href="tel:+919428714605"
          />
          <ContactLinkItem
            icon={<RiWhatsappLine className="h-5 w-5 text-foreground" />}
            label="Whatsapp"
            value="https://wa.me/+919428714605"
            href="https://wa.me/+919428714605"
          />
          <ContactLinkItem
            icon={<BuildingOffice2Icon className="h-5 w-5 text-foreground" />}
            label="Address"
            value="NARMADA COMMERCIAL COMPLEX, M G ROAD, Panch Batti Cir, Bharuch, Gujarat 392001"
            href="https://www.google.com/maps/place/Xupyter+Solutions/@21.7030446,72.9899944,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6a0e0c28bf5127:0xc19b9ba1bdd1c691!8m2!3d21.7030447!4d72.9948653!16s%2Fg%2F11xl3_rhr8?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
          />
        </CardContent>
      </Card>
    </div>
  )
}
