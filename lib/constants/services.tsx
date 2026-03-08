import {
  CpuChipIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  CodeBracketIcon,
  ShareIcon,
  ArrowsRightLeftIcon,
  CircleStackIcon,
  PuzzlePieceIcon,
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
    colSpan: 4,
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
    colSpan: 4,
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
    colSpan: 4,
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
    colSpan: 4,
  },
  {
    title: "Application Development",
    description:
      "Custom web and platform applications engineered for performance, scalability, and long-term evolution.",
    bullets: [
      "Full-stack development",
      "Progressive Web Apps",
      "Scalable frontend systems",
      "High-performance architecture",
    ],
    icon: <CodeBracketIcon className="size-6" />,
    href: "/services/application-development",
    colSpan: 4,
  },
  {
    title: "API & System Integrations",
    description:
      "Robust APIs and middleware designed to connect internal tools, SaaS platforms, and enterprise systems into a unified workflow.",
    bullets: [
      "REST & GraphQL API design",
      "Workflow automation & sync",
      "Middleware development",
      "Unified operational dashboards",
    ],
    icon: <ShareIcon className="size-6" />,
    href: "/services/api-and-system-integrations",
    colSpan: 4,
  },
  {
    title: "SAP Integrations",
    description:
      "Integrate SAP with modern platforms, APIs, and operational systems.",
    bullets: [
      "S/4HANA & ECC connectivity",
      "OData & RFC services",
      "SAP BTP integrations",
      "Custom adapter development",
    ],
    icon: <CircleStackIcon className="size-6" />,
    href: "/services/sap-integrations",
    colSpan: 6,
  },
  {
    title: "Third-Party Platform Integrations",
    description:
      "Reliable integrations with CRMs, payment gateways, analytics systems, and external services.",
    bullets: [
      "CRM & ERP sync",
      "Payment gateway setup",
      "Analytics & reporting tools",
      "Cloud service connections",
    ],
    icon: <PuzzlePieceIcon className="size-6" />,
    href: "/services/third-party-platform-integrations",
    colSpan: 6,
  },
]
