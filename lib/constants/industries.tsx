import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid"

import type { Industry } from "@/lib/types/content"

export const INDUSTRIES: Industry[] = [
  {
    name: "Logistics & Supply Chain",
    description:
      "Fleet tracking dashboards, dispatch automation, warehouse sync systems.",
    icon: <TruckIcon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/logistics-and-supply-chain",
    colSpan: 8,
  },
  {
    name: "Manufacturing",
    description: "Production line monitoring, quality control systems, inventory automation.",
    icon: <WrenchScrewdriverIcon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/manufacturing",
    colSpan: 4,
  },
  {
    name: "Healthcare",
    description:
      "Patient data management, compliance tracking, clinical workflow systems.",
    icon: <HeartIcon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/healthcare",
    colSpan: 4,
  },
  {
    name: "Enterprise Operations",
    description:
      "ERP integrations, internal tooling, operational workflow automation.",
    icon: <BuildingOffice2Icon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/enterprise-operations",
    colSpan: 4,
  },
  {
    name: "Fashion & Apparel",
    description:
      "Inventory management systems, supplier coordination, seasonal planning tools.",
    icon: <ShoppingBagIcon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/fashion-and-apparel",
    colSpan: 4,
  },
  {
    name: "Retail & E-commerce",
    description:
      "Order fulfillment systems, inventory synchronization, multi-channel sales platforms.",
    icon: <ShoppingBagIcon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/retail-and-e-commerce",
    colSpan: 4,
  },
  {
    name: "Fintech",
    description:
      "Payment processing infrastructure, regulatory compliance systems, financial data pipelines.",
    icon: <CurrencyDollarIcon className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    href: "/blog/fintech",
    colSpan: 8,
  },
]
