import Image from "next/image"
import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid"
import { RiWhatsappLine } from "react-icons/ri"

import { Card, CardContent } from "@/components/ui/card"

const contactItems = [
  {
    label: "Email",
    value: "contact@xupyter.in",
    href: "mailto:contact@xupyter.in",
    icon: <EnvelopeIcon className="h-5 w-5 text-muted-foreground" />,
  },
  {
    label: "Phone",
    value: "+91 94287-14605",
    href: "tel:+919428714605",
    icon: <PhoneArrowUpRightIcon className="h-5 w-5 text-muted-foreground" />,
  },
  {
    label: "WhatsApp",
    value: "wa.me/919428714605",
    href: "https://wa.me/919428714605",
    icon: <RiWhatsappLine className="h-5 w-5 text-muted-foreground" />,
    external: true,
  },
  {
    label: "Address",
    value:
      "NARMADA COMMERCIAL COMPLEX, M G ROAD, Panch Batti Cir, Bharuch, Gujarat 392001",
    href: "https://www.google.com/maps",
    icon: <BuildingOffice2Icon className="h-5 w-5 text-muted-foreground" />,
    external: true,
  },
]

export function  ContactInfoCard() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-6 h-full">
      
      {/* Image Card */}
      <Card className="border-none shadow-none p-0 overflow-hidden hidden lg:block">
        <CardContent className="p-0 h-full">
          <Image
            src="/contact-image.jpg"
            alt="Contact"
            height={300}
            width={300}
            className="h-full w-full object-cover"
          />
        </CardContent>
      </Card>

      {/* Contact Links */}
      <Card className="border-none shadow-none p-0 overflow-hidden">
        <CardContent className="p-0 divide-y divide-accent">
          {contactItems.map((item) => (
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
  )
}
