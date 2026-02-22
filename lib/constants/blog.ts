import type { BlogPost } from "@/lib/types/blog"

export const BLOG_CATEGORIES = [
  "All",
  "System Architecture",
  "Internal Tools",
  "Automation Infrastructure",
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-scalable-saas-architecture",
    title: "Designing Scalable SaaS Architecture from Day One",
    excerpt:
      "How to structure your SaaS backend, database, and deployment strategy for long-term scalability.",
    category: "System Architecture",
    readTime: "8 min read",
    publishedAt: "Jan 12, 2026",
    image: "/images/blog/saas-architecture.jpg",
    featured: true,
  },
  {
    slug: "custom-erp-vs-off-the-shelf",
    title: "Custom ERP vs Off-the-Shelf Systems",
    excerpt:
      "When building your own internal system makes more sense than buying existing tools.",
    category: "Internal Tools",
    readTime: "6 min read",
    publishedAt: "Jan 5, 2026",
    image: "/images/blog/erp.jpg",
    featured: false,
  },
  {
    slug: "orchestrating-background-jobs-in-business-systems",
    title: "Orchestrating Background Jobs in Business Systems",
    excerpt:
      "Patterns for scheduling, retries, and observability when your workflows span multiple services.",
    category: "Automation Infrastructure",
    readTime: "9 min read",
    publishedAt: "Dec 18, 2025",
    image: "/images/blog/background-jobs.jpg",
    featured: false,
  },
  {
    slug: "designing-audit-ready-internal-systems",
    title: "Designing Audit-Ready Internal Systems",
    excerpt:
      "How to approach logging, traceability, and permissions in systems that regulators care about.",
    category: "System Architecture",
    readTime: "7 min read",
    publishedAt: "Dec 2, 2025",
    image: "/images/blog/audit-ready.jpg",
    featured: false,
  },
  {
    slug: "multi-tenant-saas-data-isolation",
    title: "Multi-Tenant SaaS Data Isolation Patterns",
    excerpt:
      "Exploring schema, database, and cluster-level isolation strategies for serious SaaS platforms.",
    category: "SaaS Architecture",
    readTime: "10 min read",
    publishedAt: "Nov 17, 2025",
    image: "/images/blog/multi-tenant-saas.jpg",
    featured: false,
  },
]
