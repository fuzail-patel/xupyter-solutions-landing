export type PortfolioProject = {
  slug: string
  name: string
  industry: string
  type: string
  outcome: string
  image: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "logistics-erp-platform",
    name: "Logistics ERP Platform",
    industry: "Logistics & Supply Chain",
    type: "Custom ERP System",
    outcome: "Unified operations and real-time shipment tracking.",
    image: "/images/portfolio/logistics.jpg",
  },
  {
    slug: "saas-crm-automation",
    name: "Sales CRM Automation",
    industry: "B2B SaaS",
    type: "Automation Infrastructure",
    outcome: "Reduced manual sales operations by 60%.",
    image: "/images/portfolio/crm.jpg",
  },
  {
    slug: "manufacturing-dashboard",
    name: "Manufacturing Control System",
    industry: "Manufacturing",
    type: "Internal Tool",
    outcome: "Production visibility across 4 plants.",
    image: "/images/portfolio/manufacturing.jpg",
  },
]

