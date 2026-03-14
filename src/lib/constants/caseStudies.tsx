import { CaseStudy } from "@/types/case-studies"
import {
  CurrencyDollarIcon,
  TruckIcon,
  CubeIcon,
} from "@heroicons/react/24/outline"


export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "unified-legacy-operations-platform",
    industry: "Fintech",
    icon: <CurrencyDollarIcon className="size-4" />,
    headline: "Unified Legacy Operations Into a Scalable Internal Platform",
    challenge:
      "A leading financial services provider was struggling with fragmented legacy tools, manual spreadsheets, and disconnected reporting, leading to high operational risk and slow response times.",
    systemBuilt:
      "We engineered a centralized ERP and reporting layer that unified core workflows, approval chains, and real-time data ingestion into a structured internal platform with a modern, high-performance UI.",
    metrics: [
      { value: "38% ", label: "Operational Time Reduced" },
      { value: "3 ", label: "Systems Unified" },
      { value: "Real-Time", label: "Audit Infrastructure" },
    ],
  },
  {
    slug: "national-fleet-operations-dashboard",
    industry: "Logistics",
    icon: <TruckIcon className="size-4" />,
    headline: "Built Multi-Role Operational Dashboard for National Fleet",
    challenge:
      "Dispatch teams and fleet managers were working across disconnected GPS tracking, CRM, and inventory systems, resulting in 'data silos' and delayed coordination for over 500 vehicles.",
    systemBuilt:
      "We developed a unified command-and-control dashboard that integrates real-time telemetry, driver management, and inventory tracking into a single source of truth for all operational roles.",
    metrics: [
      { value: "25% ", label: "Process Efficiency Increase" },
      { value: "120+ ", label: "Daily Active Users" },
      { value: "Integrated", label: "CRM + Telemetry" },
    ],
  },
  {
    slug: "manufacturing-erp-production-inventory",
    industry: "Manufacturing",
    icon: <CubeIcon className="size-4" />,
    headline: "Custom ERP Platform for Production & Inventory Control",
    challenge:
      "A multi-plant manufacturer faced critical delays due to separate systems for production planning and procurement, leading to frequent stockouts and unplanned downtime.",
    systemBuilt:
      "We built a bespoke ERP backbone that connects production scheduling directly with procurement and inventory levels, featuring automated reordering and real-time plant telemetry.",
    metrics: [
      { value: "40% ", label: "Reporting Speed Improvement" },
      { value: "Automated", label: "Procurement Workflows" },
      { value: "Zero", label: "Inventory Stockouts" },
    ],
  },
]
