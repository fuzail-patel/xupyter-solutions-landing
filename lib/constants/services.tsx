import {
  CpuChipIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid"

import type { Service } from "@/lib/types/content"

export const SERVICES: Service[] = [
  {
    title: "Business Websites & Digital Foundations",
    description:
      "Structured, high-performance digital foundations built for credibility, scale, and long-term evolution.",
    bullets: [
      "Corporate & business platforms",
      "Product & landing ecosystems",
      "Performance-focused architecture",
      "Scalable front-end systems",
    ],
    icon: <GlobeAltIcon className="size-6" />,
    href: "/services/business-websites-and-digital-foundations",
    colSpan: 6,
  },
  {
    title: "Custom ERP, CRM & Business Platforms",
    description:
      "Operational systems engineered around your exact workflows — not generic templates.",
    bullets: [
      "Custom ERP & CRM systems",
      "Admin dashboards & portals",
      "Multi-role business platforms",
      "Workflow-driven architecture",
    ],
    icon: <Squares2X2Icon className="size-6" />,
    href: "/services/custom-erp-crm-and-business-platforms",
    colSpan: 6,
  },
  {
    title: "Automation & AI-Ready Systems",
    description:
      "Systems built for automation, integration, and AI-driven expansion from inception.",
    bullets: [
      "Workflow automation",
      "Tool integrations & APIs",
      "AI-ready system design",
      "Internal operational tooling",
    ],
    icon: <CpuChipIcon className="size-6" />,
    href: "/services/automation-and-ai-ready-systems",
    colSpan: 6,
  },
  {
    title: "Architecture & Technical Strategy",
    description:
      "We define structure, scalability, and long-term technical direction before a single line of code is written.",
    bullets: [
      "System architecture planning",
      "Scalability audits",
      "Migration & restructuring strategy",
      "Long-term technical advisory",
    ],
    icon: <SquaresPlusIcon className="size-6" />,
    href: "/services/architecture-and-technical-strategy",
    colSpan: 6,
  },
]
