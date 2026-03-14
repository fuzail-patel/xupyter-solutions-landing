import { Service } from "@/types/marketing"
import {
  CpuChipIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  CodeBracketIcon,
  ShareIcon,
  CircleStackIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid"

export const SERVICES: Service[] = [
  {
    title: "Business Websites & Digital Foundations",
    description:
      "Strategic business websites built as long-term digital infrastructure, not disposable marketing pages. We engineer high-performance websites that strengthen credibility, support marketing initiatives, and provide a scalable foundation for integrations, structured content systems, and future platform expansion as your business evolves.",
    icon: <GlobeAltIcon className="size-6" />,
    href: "/services/business-websites-and-digital-foundations",
    colSpan: 4,
  },
  {
    title: "Custom ERP, CRM & Business Platforms",
    description:
      "Operational platforms engineered around how your business actually runs. We build custom ERP, CRM, and internal business systems that centralize data, streamline workflows, and replace fragmented tools with a unified platform. The result is better operational visibility, improved efficiency, and a system that grows with your organization.",
    icon: <Squares2X2Icon className="size-6" />,
    href: "/services/custom-erp-crm-and-business-platforms",
    colSpan: 4,
  },
  {
    title: "Automation & AI-Ready Systems",
    description:
      "Systems designed for automation from the very beginning. We structure platforms to support workflow automation, integrations, and data pipelines so repetitive operational tasks can be eliminated. The architecture also prepares your business for future AI-driven capabilities without requiring major platform rebuilds.",
    icon: <CpuChipIcon className="size-6" />,
    href: "/services/automation-and-ai-ready-systems",
    colSpan: 4,
  },
  {
    title: "Architecture & Technical Strategy",
    description:
      "Before development begins, we define the system architecture and long-term technical direction. This includes data models, technology decisions, infrastructure planning, and integration strategy. The goal is to ensure scalability, maintainability, and the ability for your platform to evolve as business complexity increases.",
    icon: <SquaresPlusIcon className="size-6" />,
    href: "/services/architecture-and-technical-strategy",
    colSpan: 4,
  },
  {
    title: "Application Development",
    description:
      "Custom web applications and digital platforms engineered for performance, reliability, and long-term adaptability. From internal operational tools to large customer-facing platforms, we build software using scalable architecture and modern technologies designed to evolve alongside changing business needs.",
    icon: <CodeBracketIcon className="size-6" />,
    href: "/services/application-development",
    colSpan: 4,
  },
  {
    title: "API & System Integrations",
    description:
      "Modern businesses rely on multiple systems working together. We design and implement APIs and integration layers that connect internal tools, SaaS platforms, and enterprise systems. This creates a unified operational environment where data flows reliably across your entire technology stack.",
    icon: <ShareIcon className="size-6" />,
    href: "/services/api-and-system-integrations",
    colSpan: 4,
  },
  {
    title: "SAP Integrations",
    description:
      "Integrate SAP with modern platforms, applications, and digital products. We build secure connectors, middleware, and APIs that allow SAP systems to communicate with external services and custom platforms. This enables organizations to extend SAP workflows into modern operational tools and customer-facing systems.",
    icon: <CircleStackIcon className="size-6" />,
    href: "/services/sap-integrations",
    colSpan: 6,
  },
  {
    title: "Third-Party Platform Integrations",
    description:
      "Reliable integrations with external platforms such as CRMs, payment gateways, analytics tools, logistics systems, and other SaaS services. We ensure stable data exchange and seamless communication between platforms so your technology stack operates as a connected system rather than isolated tools.",
    icon: <PuzzlePieceIcon className="size-6" />,
    href: "/services/third-party-platform-integrations",
    colSpan: 6,
  },
]