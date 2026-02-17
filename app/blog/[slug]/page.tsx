import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogCard from "@/components/blog/BlogCard"
import { SectionHeader } from "@/components/custom/SectionHeader"
import Header from "@/components/layout/Header"
import StrategyCallBooking from "@/components/StrategyCallBooking"
import type { BlogPost } from "@/types/blog"
import { blogPosts } from "@/data/blog"

type BlogArticlePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({
  params,
}: BlogArticlePageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug)

  if (!post) {
    return {}
  }

  const title = `${post.title} | Xupyter Blog`
  const description = post.excerpt

  return {
    title,
    description,
  }
}

export default function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  let post = blogPosts.find(
    (item) => item.slug === params.slug
  ) as BlogPost | undefined

  // if (!post) {
  //   notFound()
  // }

  // temporarily setting static post for page view
  if (!post) {
    post = blogPosts[0]
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)

  return (
    <main className="flex flex-col">
      <Header />

      <article className="bg-background">
        <header className="border-b border-border/60">
          <div className="max-w-5xl mx-auto px-6">
            <div className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                {post.category}
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold font-[var(--font-satoshi)] tracking-tight leading-tight text-foreground">
                {post.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground/90 max-w-xl">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground/80">
                <span>By Xupyter Systems</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span>{post.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 pb-10 sm:pb-12 md:pb-14">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted/60">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
                priority
              />
            </div>
          </div>
        </header>

        <section className="py-10 sm:py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6">
            {renderArticleBody(post.slug)}
          </div>
        </section>
      </article>

      <section className="border-t border-border/60 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6 py-10 sm:py-12 md:py-14">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm sm:text-base font-semibold text-foreground">
                Planning a scalable system?
              </p>
              <p className="mt-1 text-sm text-muted-foreground/90">
                Book a strategy call and we&apos;ll map the architecture with you.
              </p>
            </div>
            <div className="mt-3 sm:mt-0">
              <StrategyCallBooking variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              title="Related articles"
              description="Continue exploring systems, architecture, and automation topics."
              align="left"
              size="md"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

function renderArticleBody(slug: string) {
  switch (slug) {
    case "designing-scalable-saas-architecture":
      return (
        <>
          <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Most scalability problems are design problems, not infrastructure problems. If the
            boundaries, data flows, and failure modes are unclear, no amount of servers will fix
            it. The goal is to get the architecture right early, so each new feature has a clear
            place to live.
          </p>

          <h2 className="mt-8 text-xl sm:text-2xl font-semibold font-[var(--font-satoshi)] text-foreground">
            Start with responsibilities, not microservices
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Before splitting into services, define the responsibilities of your system in plain
            language. Each responsibility should map to a capability that matters to the business,
            like billing, access control, or reporting. Prematurely chopping these into separate
            services usually creates more complexity than it removes.
          </p>

          <h3 className="mt-6 text-base sm:text-lg font-semibold text-foreground">
            A simple framing
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            <li>What does this part of the system own?</li>
            <li>What does it need to know about other parts?</li>
            <li>What happens when it is down or degraded?</li>
          </ul>

          <blockquote className="mt-6 border-l-2 border-border/80 pl-4 text-sm sm:text-base italic text-muted-foreground/90">
            A scalable architecture is one where a single change has a predictable blast radius.
          </blockquote>

          <h2 className="mt-8 text-xl sm:text-2xl font-semibold font-[var(--font-satoshi)] text-foreground">
            Make data flows explicit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Most real-world SaaS systems are built around a handful of core flows: onboarding new
            accounts, provisioning access, billing, and ongoing operations. Each of these flows
            touches multiple components and data stores. Mapping those flows explicitly is the
            fastest way to spot coupling and bottlenecks.
          </p>

          <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-950 px-5 py-4 text-xs sm:text-sm leading-relaxed text-slate-100">
            <code>
              {`onboardCustomer() {
  createAccountRecord()
  provisionTenantResources()
  issueInitialAccess()
  scheduleBilling()
}`}
            </code>
          </pre>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Each step above should be idempotent, observable, and safe to retry. That constraint
            alone will push the architecture toward clearer boundaries and more robust behavior
            under load.
          </p>

          <h2 className="mt-8 text-xl sm:text-2xl font-semibold font-[var(--font-satoshi)] text-foreground">
            Design for operational visibility
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            A scalable system is one that operators can reason about quickly when something looks
            off. That means designing with metrics, logs, and traces in mind instead of bolting
            them on later.
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            <li>Model key business events explicitly, not just technical ones.</li>
            <li>Emit structured logs with stable, queryable fields.</li>
            <li>Prefer fewer, high-quality dashboards over dozens of noisy ones.</li>
          </ul>
        </>
      )
    default:
      return (
        <>
          <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            This article walks through the practical trade-offs involved in designing systems that
            need to be both reliable for operations and flexible for future change. The focus is on
            boundaries, data flows, and failure handling, rather than on specific tools.
          </p>

          <h2 className="mt-8 text-xl sm:text-2xl font-semibold font-[var(--font-satoshi)] text-foreground">
            Establish clear system boundaries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Start by defining the handful of core responsibilities your system has. Everything else
            is a supporting concern. This framing helps keep new requirements from leaking into the
            wrong part of the system and preserves long-term clarity.
          </p>

          <h3 className="mt-6 text-base sm:text-lg font-semibold text-foreground">
            Questions to ask
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            <li>What promises does this system make to upstream and downstream consumers?</li>
            <li>What data is authoritative here, and what is derived?</li>
            <li>Which failures are acceptable, and which are not?</li>
          </ul>

          <blockquote className="mt-6 border-l-2 border-border/80 pl-4 text-sm sm:text-base italic text-muted-foreground/90">
            Good architecture turns vague requirements into concrete trade-offs the team can
            discuss.
          </blockquote>

          <h2 className="mt-8 text-xl sm:text-2xl font-semibold font-[var(--font-satoshi)] text-foreground">
            Treat automation as part of the system
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            Background jobs, integrations, and scheduled tasks are often what make a system feel
            &quot;automated&quot; to the business. They should be designed with the same level of
            care as the core application, with clear ownership, observability, and failure
            semantics.
          </p>

          <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-950 px-5 py-4 text-xs sm:text-sm leading-relaxed text-slate-100">
            <code>
              {`processAutomationTask(task) {
  validateInput(task)
  fetchRequiredData()
  performAction()
  emitBusinessEvent()
}`}
            </code>
          </pre>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            When these steps are explicit, you gain the ability to reason about impact, add
            observability at each boundary, and evolve the implementation without changing the
            behavior that the business relies on.
          </p>
        </>
      )
  }
}

