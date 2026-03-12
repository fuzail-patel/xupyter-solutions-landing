import { Suspense } from "react"
import { Metadata } from "next"
import Header from "@/components/layout/Header"
import { BlogListingPage } from "@/components/blog"
import { getPosts } from "@/lib/cms-client"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Insights | Technical perspectives from our engineering and architecture team",
    description: "Deep dives and notes from our team on systems, architecture, and automation.",
  }
}

export default async function BlogPage() {
  const postsData = await getPosts({
    sort: '-publishedAt',
  })
  
  const posts = postsData.docs.map((doc: any) => ({
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.tags?.[0]?.name || 'Uncategorized',
    publishedAt: new Date(doc.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }),
    image: doc.coverImage?.url || '/fallback-image.png',
    featured: doc.featured,
  }))

  return (
    <main className="flex flex-col">
      <Header />
      <Suspense
        fallback={
          <section className="bg-background py-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="h-6 w-48 rounded bg-muted/40" />
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="h-48 rounded-lg bg-muted/30" />
                <div className="h-48 rounded-lg bg-muted/30" />
                <div className="h-48 rounded-lg bg-muted/30" />
              </div>
            </div>
          </section>
        }
      >
        <BlogListingPage posts={posts} />
      </Suspense>
    </main>
  )
}
