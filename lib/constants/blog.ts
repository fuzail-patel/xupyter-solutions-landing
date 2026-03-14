import type { BlogPost } from "@/lib/types/blog"

export const BLOG_CATEGORIES = [
  "All",
  "Architecture",
  "Engineering",
  "AI & ML",
  "Strategy",
  "DevOps",
  "FinTech",
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: "architect-saas-mvp",
    title: "How to Architect a SaaS MVP That Won't Collapse at 1,000 Users",
    excerpt:
      "The architecture decisions you make at week 2 will haunt you at month 12. Here's the blueprint we use for every SaaS MVP to ensure horizontal scalability and data integrity.",
    category: "Architecture",
    readTime: "7 min read",
    publishedAt: "Mar 07, 2026",
    image: "/images/blog/saas-architecture.jpg",
    featured: true,
    author: { name: "Nadia Osei" },
  },
  {
    slug: "erp-integration-patterns",
    title: "Enterprise ERP Integration: 4 Patterns for Modernizing Legacy Systems",
    excerpt:
      "Connecting modern web apps to legacy SAP or Odoo systems requires a structured approach to middleware and data synchronization. We break down the most resilient patterns.",
    category: "Engineering",
    readTime: "9 min read",
    publishedAt: "Mar 04, 2026",
    image: "/images/blog/erp.jpg",
    featured: false,
    author: { name: "Marcus Chen" },
  },
  {
    slug: "ai-agents-business-operations",
    title: "AI Agents in the Wild: Automating Complex Business Workflows",
    excerpt:
      "LLMs are more than just chatbots. Learn how we use AI agents to handle document processing, automated dispatching, and intelligent inventory alerts.",
    category: "AI & ML",
    readTime: "8 min read",
    publishedAt: "Feb 28, 2026",
    image: "/images/blog/background-jobs.jpg",
    featured: false,
    author: { name: "Sarah Jenkins" },
  },
  {
    slug: "fintech-infrastructure-security",
    title: "Building for FinTech: Security and Compliance in System Architecture",
    excerpt:
      "When building financial software, security isn't a feature—it's the foundation. A look at PCI compliance, encryption at rest, and immutable audit trails.",
    category: "FinTech",
    readTime: "10 min read",
    publishedAt: "Feb 20, 2026",
    image: "/images/blog/fintech.jpg",
    featured: false,
    author: { name: "James Wilson" },
  },
  {
    slug: "devops-for-scale",
    title: "Zero-Downtime Deployments: A Guide for High-Traffic Internal Tools",
    excerpt:
      "Internal tools are mission-critical. Here's how to build a CI/CD pipeline that ensures your operations never stop, even during major updates.",
    category: "DevOps",
    readTime: "6 min read",
    publishedAt: "Feb 12, 2026",
    image: "/images/blog/multi-tenant-saas.jpg",
    featured: false,
    author: { name: "Elena Rodriguez" },
  },
  {
    slug: "technical-strategy-startups",
    title: "The CTO's Guide to Technical Strategy Before Series A",
    excerpt:
      "Avoiding the 'rewrite trap'. How to make strategic technical decisions that balance immediate speed with long-term architectural stability.",
    category: "Strategy",
    readTime: "7 min read",
    publishedAt: "Feb 05, 2026",
    image: "/images/blog/audit-ready.jpg",
    featured: false,
    author: { name: "David Miller" },
  },
]
