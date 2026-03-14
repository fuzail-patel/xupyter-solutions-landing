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
      "The architecture decisions you make at week 2 will haunt you at month 12. Here's the blueprint we use for every SaaS MVP.",
    category: "Architecture",
    readTime: "7 min read",
    publishedAt: "Mar 07, 2026",
    image: "/images/blog/saas-architecture.jpg",
    featured: true,
    author: { name: "Nadia Osei" },
  },
  {
    slug: "mern-vs-laravel",
    title: "MERN vs Laravel: Choosing the Right Stack for Your Startup",
    excerpt:
      "It's not about which is better — it's about which is right for your team, timeline, and product. A practical breakdown.",
    category: "Engineering",
    readTime: "5 min read",
    publishedAt: "Mar 01, 2026",
    image: "/images/blog/erp.jpg",
    featured: false,
    author: { name: "Marcus Chen" },
  },
  {
    slug: "adding-ai-to-your-product",
    title: "Adding AI to Your Product Without Rebuilding Everything",
    excerpt:
      "LLM integration doesn't require a rewrite. Here are 4 patterns for embedding AI into existing products with minimal disruption.",
    category: "AI & ML",
    readTime: "6 min read",
    publishedAt: "Feb 22, 2026",
    image: "/images/blog/background-jobs.jpg",
    featured: false,
    author: { name: "Sarah Jenkins" },
  },
  {
    slug: "true-cost-of-technical-debt",
    title: "The True Cost of Technical Debt (and How to Pay It Down)",
    excerpt:
      "Most startups know they have tech debt. Few know how to measure it. Here's our framework for auditing and remediating it.",
    category: "Strategy",
    readTime: "8 min read",
    publishedAt: "Feb 15, 2026",
    image: "/images/blog/audit-ready.jpg",
    featured: false,
    author: { name: "David Miller" },
  },
  {
    slug: "devops-strategy-before-series-a",
    title: "Why Your Startup Needs a DevOps Strategy Before Series A",
    excerpt:
      "Investors look at infrastructure stability. Here's how to build a deployment pipeline that holds up under due diligence.",
    category: "DevOps",
    readTime: "5 min read",
    publishedAt: "Feb 08, 2026",
    image: "/images/blog/multi-tenant-saas.jpg",
    featured: false,
    author: { name: "Elena Rodriguez" },
  },
  {
    slug: "building-for-fintech",
    title: "Building for FinTech: What Makes Financial Software Different",
    excerpt:
      "Compliance, audit trails, transaction integrity — FinTech products have unique requirements. Here's what to plan for from day one.",
    category: "FinTech",
    readTime: "7 min read",
    publishedAt: "Feb 01, 2026",
    image: "/images/blog/fintech.jpg",
    featured: false,
    author: { name: "James Wilson" },
  },
  {
    slug: "serverless-scaling-patterns",
    title: "Serverless Scaling Patterns: Beyond the Basics",
    excerpt:
      "Scaling serverless isn't just about 'it scales for you.' Learn about cold starts, database connection pooling, and concurrency limits.",
    category: "Architecture",
    readTime: "9 min read",
    publishedAt: "Jan 25, 2026",
    image: "/images/blog/serverless.jpg",
    featured: false,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Scale Applications",
    excerpt:
      "Generic types, utility types, and strict mode — how to keep your TypeScript codebase clean as it grows to 100k+ lines.",
    category: "Engineering",
    readTime: "6 min read",
    publishedAt: "Jan 18, 2026",
    image: "/images/blog/typescript.jpg",
    featured: false,
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance: A Practical Guide",
    excerpt:
      "Memoization, code splitting, and windowing — how to keep your React app snappy even with complex data visualizations.",
    category: "Engineering",
    readTime: "5 min read",
    publishedAt: "Jan 11, 2026",
    image: "/images/blog/react-perf.jpg",
    featured: false,
  },
  {
    slug: "kubernetes-for-startups",
    title: "Is Kubernetes Overkill for Your Startup?",
    excerpt:
      "A honest look at when you should adopt K8s and when you're better off with simpler alternatives like ECS or App Runner.",
    category: "DevOps",
    readTime: "8 min read",
    publishedAt: "Jan 04, 2026",
    image: "/images/blog/k8s.jpg",
    featured: false,
  },
  {
    slug: "product-led-growth-engineering",
    title: "The Engineering Side of Product-Led Growth",
    excerpt:
      "Building self-serve onboarding, usage tracking, and automated trials — how engineering enables PLG strategies.",
    category: "Strategy",
    readTime: "7 min read",
    publishedAt: "Dec 28, 2025",
    image: "/images/blog/plg.jpg",
    featured: false,
  },
]
