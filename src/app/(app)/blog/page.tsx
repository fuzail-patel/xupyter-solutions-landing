import { BlogListingPage } from "@/components/blog"
import { getPosts, getTags } from "@/lib/cms-client"
import { BLOG_CATEGORIES } from "@/lib/constants/blog"
import { getDisplayPosts } from "@/utils/blog/mapPost"
import { pageSEO } from "@/lib/seo/pages"
import { Metadata } from "next"
import { Suspense } from "react"

export async function generateMetadata(): Promise<Metadata> {
  return pageSEO.blog
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

  const [postsData, tagsData] = await Promise.all([
    getPosts({
      sort: '-publishedAt',
      where,
      limit: postsLimit,
    }).catch(() => ({ docs: [], totalDocs: 0 })),
    getTags().catch(() => ({ docs: [], totalDocs: 0 })),
  ])

  const posts = getDisplayPosts(postsData.docs)
  const categoryNames = tagsData.docs.map((t) => t.name).filter(Boolean)
  const categories =
    categoryNames.length > 0
      ? ["All", ...categoryNames.sort((a, b) => a.localeCompare(b))]
      : [...BLOG_CATEGORIES]

  return (
    <main className="flex flex-col">
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
        <BlogListingPage categories={categories} posts={posts} totalPosts={postsData.totalDocs || posts.length} />
      </Suspense>
    </main>
  )
}

