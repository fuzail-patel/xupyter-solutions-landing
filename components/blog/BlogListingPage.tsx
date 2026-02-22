"use client"

// import Image from "next/image"
// import Link from "next/link"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { BlogCard, FeaturedBlogCard, Pagination } from "@/components/blog"
import type { BlogPost } from "@/lib/types/blog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useBlogListing } from "@/lib/hooks/useBlogListing"

interface BlogListingPageProps {
  posts: BlogPost[]
}

export default function BlogListingPage({ posts }: BlogListingPageProps) {
  const {
    featuredPost,
    otherPosts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    clampedPage,
    totalPages,
    paginatedPosts,
    filteredPosts,
    handleCategoryChange,
    handlePageChange,
    handleClearFilters,
  } = useBlogListing(posts)

  return (
    <>
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <header className="py-6 sm:py-8 md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  Our Blogs
                </h1>
                <p className="max-w-xl text-sm sm:text-base text-muted-foreground/90">
                  Deep dives and notes from our team on systems, architecture, and automation.
                </p>
              </div>
              <div className="relative w-full max-w-xs md:max-w-sm ms-auto">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                    // setCurrentPage(1)
                  }}
                  placeholder="Search by title, topic, or category"
                  className="h-12 pl-12"
                />
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="bg-background py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <FeaturedBlogCard post={featuredPost} />
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.1fr)]">
            <div>
              <div className="mb-4 text-xs sm:text-sm text-muted-foreground/90">
                {filteredPosts.length} post
                {filteredPosts.length === 1 ? "" : "s"}
                {/* {debouncedSearch.trim() ? ` matching “${debouncedSearch.trim()}”` : ""} */}
              </div>
              {filteredPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                  <Pagination currentPage={clampedPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-border/70 bg-muted/20 px-6 py-10 sm:px-8 sm:py-12">
                  <p className="text-sm sm:text-base text-muted-foreground/90">
                    No posts found. Try adjusting your search or choosing a different category.
                  </p>
                  <div className="mt-6">
                    <Button type="button" variant="outline" onClick={handleClearFilters}>
                      Clear filters
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <aside className="hidden space-y-8 border-l border-border/60 pl-8 lg:block">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                  Categories
                </h2>
                <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground/90">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("All")}
                    className={
                      selectedCategory === "All"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>All topics</span>
                    <span className="text-xs text-muted-foreground/80">{otherPosts.length}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("System Architecture")}
                    className={
                      selectedCategory === "System Architecture"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>System Architecture</span>
                    <span className="text-xs text-muted-foreground/80">
                      {otherPosts.filter((post) => post.category === "System Architecture").length}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("Internal Tools")}
                    className={
                      selectedCategory === "Internal Tools"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>Internal Tools</span>
                    <span className="text-xs text-muted-foreground/80">
                      {otherPosts.filter((post) => post.category === "Internal Tools").length}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("Automation Infrastructure")}
                    className={
                      selectedCategory === "Automation Infrastructure"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>Automation Infrastructure</span>
                    <span className="text-xs text-muted-foreground/80">
                      {otherPosts.filter((post) => post.category === "Automation Infrastructure").length}
                    </span>
                  </button>
                </div>
              </div>

              {/* <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">Recent posts</h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground/90">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group flex items-start gap-3 rounded-lg border border-border/60 bg-background px-3 py-3 transition-colors hover:border-primary/50"
                    >
                      <div className="relative h-12 w-16 overflow-hidden rounded-md bg-muted/60">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-150 group-hover:scale-[1.03]"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-1">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary">{post.title}</p>
                        <p className="text-xs text-muted-foreground/80">{post.publishedAt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div> */}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
