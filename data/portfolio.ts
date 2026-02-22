import type { CaseStudyMetric } from "@/types/caseStudies"

export type PortfolioProject = {
  slug: string
  name: string
  industry: string
  type: string
  outcome: string
  image: string
  featured?: boolean
  metrics: CaseStudyMetric[]
  caseStudyUrl?: string
  liveUrl?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "logistics-erp-platform",
    name: "Logistics ERP Platform",
    industry: "Logistics & Supply Chain",
    type: "Custom ERP System",
    outcome: "Unified logistics operations with real-time control.",
    image: "/images/portfolio/logistics.jpg",
    featured: true,
    metrics: [
      { value: "98% ", label: "On-Time Shipments" },
      { value: "3x ", label: "Faster Dispatch Coordination" },
      { value: "4 ", label: "Regions Unified" },
    ],
    caseStudyUrl: "/case-studies/national-fleet-operations-dashboard",
    liveUrl: "https://logistics-ops.example.com",
  },
  {
    slug: "saas-crm-automation",
    name: "Sales CRM Automation",
    industry: "B2B SaaS",
    type: "Automation Infrastructure",
    outcome: "Reduced manual sales operations by 60%.",
    image: "/images/portfolio/crm.jpg",
    metrics: [
      { value: "60% ", label: "Manual Sales Ops Reduced" },
      { value: "30% ", label: "Faster Pipeline Updates" },
      { value: "24/7 ", label: "Automation Coverage" },
    ],
    caseStudyUrl: "/case-studies/unified-legacy-operations-platform",
    liveUrl: "https://revenue-automation.example.com",
  },
  {
    slug: "manufacturing-dashboard",
    name: "Manufacturing Control System",
    industry: "Manufacturing",
    type: "Internal Tool",
    outcome: "Production visibility across 4 plants.",
    image: "/images/portfolio/manufacturing.jpg",
    metrics: [
      { value: "4 ", label: "Plants in a Single View" },
      { value: "25% ", label: "Unplanned Downtime Reduced" },
      { value: "Real-Time", label: "Production Telemetry" },
    ],
    caseStudyUrl: "/case-studies/manufacturing-erp-production-inventory",
    liveUrl: "https://manufacturing-ops.example.com",
  },
]
