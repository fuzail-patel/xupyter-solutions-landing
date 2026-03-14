import { UIIndustry } from "@/types/marketing"
import {
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid"


export const INDUSTRIES: UIIndustry[] = [
  {
    name: "SaaS Products",
    description:
      "We help SaaS founders go from whiteboard to working product. Our teams are fluent in multi-tenant architecture, subscription billing, and the scaling decisions that matter at Series A and beyond.",
    icon: <BuildingOffice2Icon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/saas-products",
    colSpan: 4,
    subLinks: ["MVP Development", "SaaS Architecture"],
  },
  {
    name: "Fintech",
    description:
      "Financial products demand precision. We build payment platforms, lending systems, and financial dashboards with security, compliance readiness, and audit-trail logic baked in.",
    icon: <CurrencyDollarIcon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/fintech",
    colSpan: 4,
    subLinks: ["Payment Integration", "Compliance Engineering"],
  },
  {
    name: "Healthtech",
    description:
      "From patient portals to health data pipelines, we build HIPAA-aware digital health systems that clinicians and patients actually want to use.",
    icon: <HeartIcon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/healthtech",
    colSpan: 4,
    subLinks: ["Patient Management", "Health Data Systems"],
  },
  {
    name: "Edtech",
    description:
      "We craft learning platforms, LMS systems, and interactive courseware that engage learners and scale to thousands of concurrent users.",
    icon: <AcademicCapIcon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/edtech",
    colSpan: 4,
    subLinks: ["LMS Development", "Live Learning Platforms"],
  },
  {
    name: "E-commerce",
    description:
      "Custom storefronts, inventory management, headless commerce, and checkout optimization — we build infrastructure for brands that need more than Shopify.",
    icon: <ShoppingBagIcon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/e-commerce",
    colSpan: 4,
    subLinks: ["Custom Storefronts", "Headless Commerce"],
  },
  {
    name: "Logistics & Supply Chain",
    description:
      "Real-time tracking, route optimization, warehouse management, and driver apps — we digitize logistics operations so goods move faster.",
    icon: <TruckIcon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/logistics-and-supply-chain",
    colSpan: 4,
    subLinks: ["Fleet & Route Systems", "Supply Chain Dashboards"],
  },
  {
    name: "Internal Tools & Dashboards",
    description:
      "The best internal tools are invisible — they just work. We build admin panels, ops dashboards, and workflow automation tools that save your team hours.",
    icon: <TableCellsIcon className="w-9 h-9 md:w-10 md:h-10" />,
    href: "/blog/internal-tools-and-dashboards",
    colSpan: 4,
    subLinks: ["Ops Dashboards", "Workflow Automation"],
  },
]
