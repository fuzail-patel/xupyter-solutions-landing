"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { BlogCard, Pagination } from "@/components/blog"
import { SectionHeader } from "@/components/shared"
import type { BlogPost, Category } from "@/lib/types/blog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useBlogListing } from "@/lib/hooks/useBlogListing"

interface BlogListingPageProps {
  posts: BlogPost[]
}

const CATEGORIES: Category[] = [
  "All",
  "Architecture",
  "Engineering",
  "AI & ML",
  "Strategy",
  "DevOps",
  "FinTech",
]

export default function BlogListingPage({ posts }: BlogListingPageProps) {
  const {
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
      <section className="bg-muted/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionHeader
              titlePrimary="Insights"
              description="Technical perspectives from our engineering and architecture team."
              size="md"
              accent={false}
              as="h1"
              className="mb-0 md:mb-0"
            />

            <div className="relative w-full md:max-w-xs shrink-0">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
              <Input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search articles..."
                className="h-11 pl-10 bg-input border border-border"
              />
            </div>
          </div>

          <div className="relative -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 -mb-4 scrollbar-none no-scrollbar">
              <div className="flex gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors border ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border/60 hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category === "All" ? "All Topics" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-sm text-muted-foreground/90">
              Showing {filteredPosts.length} article
              {filteredPosts.length === 1 ? "" : "s"}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination
                currentPage={clampedPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border/70 bg-muted/10 px-6 py-16 text-center">
              <p className="text-base text-muted-foreground/90">
                No articles found matching your criteria.
              </p>
              <div className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClearFilters}
                  className="rounded-full"
                >
                  Clear all filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
