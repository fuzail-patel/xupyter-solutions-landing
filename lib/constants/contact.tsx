import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid"
import { RiWhatsappLine } from "react-icons/ri"

export const CONTACT_ITEMS = [
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