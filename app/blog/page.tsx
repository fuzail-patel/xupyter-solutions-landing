import Image from "next/image"
import Link from "next/link"

import BlogCard from "@/components/blog/BlogCard"
import { SectionHeader } from "@/components/custom/SectionHeader"
import Header from "@/components/layout/Header"
import { blogPosts } from "@/data/blog"

export default function BlogListingPage() {
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const otherPosts = blogPosts.filter(
    (post) => post.slug !== featuredPost.slug
  )

  return (
    <main className="flex flex-col">
      <Header />

      <section className="border-b border-border/60 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <header className="py-12 sm:py-16 md:py-20">
            <div className="sr-only">
              <h1>
                Insights on Systems, Architecture & Automation
              </h1>
            </div>
            <SectionHeader
              title="Insights on Systems, Architecture & Automation"
              description="Practical breakdowns on building scalable SaaS, internal tools, and automation infrastructure."
              align="left"
              size="lg"
            />
          </header>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6">
          <article className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted/60">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                {featuredPost.category}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-4 group"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-[var(--font-satoshi)] leading-tight text-foreground transition-colors duration-150 group-hover:text-primary">
                  {featuredPost.title}
                </h2>
              </Link>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 max-w-xl">
                {featuredPost.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground/80">
                <span>{featuredPost.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span>{featuredPost.readTime}</span>
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90"
                >
                  Read Article
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

