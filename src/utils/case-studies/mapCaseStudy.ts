import { getMediaUrl } from "@/utils/common"
import { formatDate } from "@/utils/formatDate"
import type { CaseStudy } from "@/payload-types"

export interface DisplayStudy {
  id: string | number
  slug: string
  tag: string
  title: string
  excerpt: string
  date: string
  image: string
}

export const CASE_STUDIES: DisplayStudy[] = [
  {
    id: "1",
    slug: "logistics-network",
    tag: "Logistics",
    title: "National Logistics Network: Real-Time Operational View",
    excerpt: "We built a unified source of truth for a national logistics leader, moving them from manual reconciliations to real-time telemetry and dispatch coordination.",
    date: "March 04, 2026",
    image: "/images/portfolio/logistics.jpg",
  },
  {
    id: "2",
    slug: "fintech-compliance-engine",
    tag: "FinTech",
    title: "FinTech Compliance Engine: Scaling Institutional Custody",
    excerpt: "Developing a high-security backend architecture for automated KYC/AML verification with immutable audit trails for institutional crypto assets.",
    date: "February 28, 2026",
    image: "/images/portfolio/fintech.jpg",
  },
  {
    id: "3",
    slug: "autostream-manufacturing",
    tag: "Manufacturing",
    title: "AutoStream: Bespoke ERP for Multi-Plant Production",
    excerpt: "A custom ERP backbone that automates production planning and inventory management, eliminating stockouts across 4 manufacturing facilities.",
    date: "February 15, 2026",
    image: "/images/portfolio/manufacturing.jpg",
  },
]

export const mapCaseStudyToDisplay = (s: CaseStudy): DisplayStudy => {
  const project = (typeof s.project === 'object' && s.project !== null) ? s.project : null
  const industry = (project && typeof project.industry === 'object' && project.industry !== null) ? project.industry : null
  
  return {
    id: s.id,
    slug: s.slug || '',
    tag: industry?.name || "Tech",
    title: s.title || 'Untitled Case Study',
    excerpt: project?.summary || s.title || '',
    date: formatDate(s.createdAt),
    image: getMediaUrl(project?.coverImage) || ""
  }
}
