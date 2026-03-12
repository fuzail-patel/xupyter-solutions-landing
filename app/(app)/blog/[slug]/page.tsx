import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import { blogPosts } from "@/lib/constants/blog"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: any): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Insights`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({
  params,
}: any) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="flex flex-col">
        <Header />
        <section className="py-20 text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link href="/blog" className="mt-4 text-primary hover:underline">Back to blog</Link>
        </section>
      </main>
    )
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex >= 0 && currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <main className="flex flex-col">
      <Header />

      <article className="bg-background">
        <header className="bg-background">
          <div className="max-w-3xl mx-auto px-6 pt-10 pb-6 sm:pt-12 sm:pb-8 md:pt-14 md:pb-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
              {post.category}
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground">
              {post.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground/90">
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
          <div className="max-w-3xl mx-auto px-6 pb-8 sm:pb-10 md:pb-12">
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

        <section className="py-10 sm:py-12 md:py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.1fr)]">
              <div className="max-w-3xl prose prose-sm sm:prose-base dark:prose-invert">
                {/* For static data, we just show the excerpt for now */}
                <p>{post.excerpt}</p>
              </div>

              <aside className="hidden lg:block">
              </aside>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="bg-muted/30">
            <div className="max-w-6xl mx-auto px-6 py-10 sm:py-12 md:py-14">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
                    Related articles
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground/90">
                    Continue exploring systems, architecture, and
                    automation topics.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {relatedPosts.map((related: any) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex items-start gap-3 rounded-lg border border-border/60 bg-background px-3 py-3 transition-colors hover:border-primary/50"
                  >
                    <div className="relative h-14 w-20 overflow-hidden rounded-md bg-muted/60">
                      <Image
                        src={related.image || '/fallback-image.png'}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-150 group-hover:scale-[1.03]"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                        {related.category || 'Uncategorized'}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary">
                        {related.title}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        {related.publishedAt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-background">
          <div className="max-w-3xl mx-auto px-6 py-8 sm:py-10 md:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                {previousPost && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                      Previous article
                    </p>
                    <Link
                      href={`/blog/${previousPost.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {previousPost.title}
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex-1 text-left sm:text-right">
                {nextPost && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                      Next article
                    </p>
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {nextPost.title}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
