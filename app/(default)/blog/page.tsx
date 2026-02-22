import { Suspense } from "react"
import Header from "@/components/layout/Header"
import { BlogListingPage } from "@/components/blog"
import { blogPosts } from "@/lib/constants/blog"

export default function BlogPage() {
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
        <BlogListingPage posts={blogPosts} />
      </Suspense>
    </main>
  )
}
