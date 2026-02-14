import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"

import type { Industry } from "@/types/content"

export const INDUSTRIES: Industry[] = [
  {
    name: "Logistics & Supply Chain",
    description:
      "Integrated tracking systems and operational control dashboards.",
    icon: <TruckIcon className="size-6" />,
    href: "/blog/logistics-and-supply-chain",
    colSpan: 7,
  },
  {
    name: "Manufacturing",
    description: "Internal ERP tools and production workflow automation.",
    icon: <WrenchScrewdriverIcon className="size-6" />,
    href: "/blog/manufacturing",
    colSpan: 5,
  },
  {
    name: "Healthcare",
    description:
      "Secure systems built around regulated processes and data workflows.",
    icon: <HeartIcon className="size-6" />,
    href: "/blog/healthcare",
    colSpan: 4,
  },
  {
    name: "Growing Product Companies",
    description:
      "Scalable platforms designed to support rapid expansion.",
    icon: <BuildingOffice2Icon className="size-6" />,
    href: "/blog/growing-product-companies",
    colSpan: 4,
  },
  {
    name: "Fashion & Apparel",
    description:
      "Digital design tools, supply chain management, and e-commerce solutions.",
    icon: <ShoppingBagIcon className="size-6" />,
    href: "/blog/fashion-and-apparel",
    colSpan: 4,
  },
  {
    name: "Retail & E-commerce",
    description:
      "Custom platforms connecting sales, inventory, and operations.",
    icon: <ShoppingBagIcon className="size-6" />,
    href: "/blog/retail-and-e-commerce",
    colSpan: 5,
  },
  {
    name: "Fintech",
    description:
      "Infrastructure for payments, compliance workflows, and financial operations.",
    icon: <CurrencyDollarIcon className="size-6" />,
    href: "/blog/fintech",
    colSpan: 7,
  },
]

