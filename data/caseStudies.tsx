import {
  CurrencyDollarIcon,
  TruckIcon,
  CubeIcon,
} from "@heroicons/react/24/outline"

import type { CaseStudy } from "@/types/caseStudies"

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "unified-legacy-operations-platform",
    industry: "Fintech",
    icon: <CurrencyDollarIcon className="size-4" />,
    headline: "Unified Legacy Operations Into a Scalable Internal Platform",
    challenge:
      "Operations teams were working across aging tools, manual spreadsheets, and disconnected reporting, making it hard to see the full picture or move quickly.",
    systemBuilt:
      "We designed a centralized ERP and reporting layer that unified workflows, data, and approvals into one structured internal platform.",
    metrics: [
      { value: "38% ", label: "Operational Time Reduced" },
      { value: "3 ", label: "Systems Unified" },
      { value: "Real-Time", label: "Reporting Infrastructure" },
    ],
  },
  {
    slug: "national-fleet-operations-dashboard",
    industry: "Logistics",
    icon: <TruckIcon className="size-4" />,
    headline: "Built Multi-Role Operational Dashboard for National Fleet",
    challenge:
      "Dispatch and operations teams relied on fragmented tools, manual reporting, and disconnected data sources, slowing daily workflows and decision-making.",
    systemBuilt:
      "We engineered a unified operational dashboard integrating CRM, fleet tracking, and inventory systems into a single control surface.",
    metrics: [
      { value: "25% ", label: "Process Efficiency Increase" },
      { value: "120+ ", label: "Daily Users" },
      { value: "Integrated", label: "CRM + Inventory" },
    ],
  },
  {
    slug: "manufacturing-erp-production-inventory",
    industry: "Manufacturing",
    icon: <CubeIcon className="size-4" />,
    headline: "Custom ERP Platform for Production & Inventory Control",
    challenge:
      "Production and procurement teams were managing orders, stock levels, and schedules in separate systems, creating blind spots and delays.",
    systemBuilt:
      "We built a custom ERP platform that connected production planning, procurement, and inventory into a single, structured operational backbone.",
    metrics: [
      { value: "40% ", label: "Reporting Speed Improvement" },
      { value: "Automated", label: "Procurement Workflows" },
      { value: "Centralized", label: "Data Management" },
    ],
  },
]

