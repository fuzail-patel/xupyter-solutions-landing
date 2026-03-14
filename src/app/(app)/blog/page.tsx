import { BlogListingPage } from "@/components/blog"
import { Header } from "@/components/layout"
import { getPosts } from "@/lib/cms-client"
import { getMediaUrl } from "@/utils/common"
import { Metadata } from "next"
import { Suspense } from "react"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Insights | Technical perspectives from our engineering and architecture team",
    description: "Deep dives and notes from our team on systems, architecture, and automation.",
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string; limit?: string }>
}) {
  const { search, category, limit } = await searchParams
  const postsLimit = Number(limit) || 6

  const where: any = {}
  
  if (search) {
    where.or = [
      { title: { contains: search } },
      { excerpt: { contains: search } },
    ]
  }

  if (category && category !== "All") {
    where.and = [
      ...(where.and || []),
      {
        'tags.name': {
          equals: category,
        },
      },
    ]
  }

  const postsData = await getPosts({
    sort: '-publishedAt',
    where,
    limit: postsLimit,
  })
  
  const posts = postsData.docs

  return (
    <main className="flex flex-col">
      <Header />
      <Suspense
        key={`${search}-${category}-${postsLimit}`}
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
        <BlogListingPage posts={posts} totalPosts={postsData.totalDocs} />
      </Suspense>
    </main>
  )
}

