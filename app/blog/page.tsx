"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import BlogCard from "@/components/blog/BlogCard"
import type { Category } from "@/components/blog/BlogFilter"
import { FeaturedBlogCard } from "@/components/blog/FeaturedBlogCard"
import { Pagination } from "@/components/blog/Pagination"
import Header from "@/components/layout/Header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blog"

const POSTS_PER_PAGE = 6

export default function BlogListingPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialSearch = searchParams.get("search") ?? ""
  const initialCategory =
    (searchParams.get("category") as Category | null) ?? "All"
  const initialPage = Number(searchParams.get("page") ?? "1") || 1

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const otherPosts = blogPosts.filter(
    (post) => post.slug !== featuredPost.slug
  )

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(initialCategory)
  const [currentPage, setCurrentPage] = useState(initialPage)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 250)

    return () => clearTimeout(timeout)
  }, [searchTerm])

  useEffect(() => {
    const params = new URLSearchParams()

    if (debouncedSearch.trim()) {
      params.set("search", debouncedSearch.trim())
    }

    if (selectedCategory && selectedCategory !== "All") {
      params.set("category", selectedCategory)
    }

    if (currentPage > 1) {
      params.set("page", String(currentPage))
    }

    const queryString = params.toString()
    const next = queryString ? `${pathname}?${queryString}` : pathname

    router.replace(next, { scroll: false })
  }, [debouncedSearch, selectedCategory, currentPage, pathname, router])

  const filteredPosts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase()

    return otherPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase()

      if (!matchesCategory) {
        return false
      }

      if (!query) {
        return true
      }

      const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()

      return haystack.includes(query)
    })
  }, [otherPosts, debouncedSearch, selectedCategory])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  )

  const clampedPage = Math.min(
    Math.max(currentPage, 1),
    totalPages || 1
  )

  const paginatedPosts = useMemo(() => {
    const startIndex = (clampedPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(
      startIndex,
      startIndex + POSTS_PER_PAGE
    )
  }, [filteredPosts, clampedPage])

  const recentPosts = otherPosts
    .slice()
    .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))
    .slice(0, 3)

  const hasResults = filteredPosts.length > 0

  function handleCategoryChange(category: Category) {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  function handlePageChange(page: number) {
    setCurrentPage(page)
  }

  function handleClearFilters() {
    setSearchTerm("")
    setDebouncedSearch("")
    setSelectedCategory("All")
    setCurrentPage(1)
  }

  return (
    <main className="flex flex-col">
      <Header />

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <header className="py-6 sm:py-8 md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-[var(--font-satoshi)] tracking-tight text-foreground">
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
                    setCurrentPage(1)
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
                {debouncedSearch.trim()
                  ? ` matching “${debouncedSearch.trim()}”`
                  : ""}
              </div>
              {hasResults ? (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
                    {paginatedPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                  <Pagination
                    currentPage={clampedPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-border/70 bg-muted/20 px-6 py-10 sm:px-8 sm:py-12">
                  <p className="text-sm sm:text-base text-muted-foreground/90">
                    No posts found. Try adjusting your search or choosing a different category.
                  </p>
                  <div className="mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleClearFilters}
                    >
                      Clear filters
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <aside className="hidden space-y-8 border-l border-border/60 pl-8 lg:block">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
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
                    <span className="text-xs text-muted-foreground/80">
                      {otherPosts.length}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleCategoryChange("System Architecture")
                    }
                    className={
                      selectedCategory === "System Architecture"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>System Architecture</span>
                    <span className="text-xs text-muted-foreground/80">
                      {
                        otherPosts.filter(
                          (post) =>
                            post.category === "System Architecture"
                        ).length
                      }
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleCategoryChange("Internal Tools")
                    }
                    className={
                      selectedCategory === "Internal Tools"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>Internal Tools</span>
                    <span className="text-xs text-muted-foreground/80">
                      {
                        otherPosts.filter(
                          (post) => post.category === "Internal Tools"
                        ).length
                      }
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleCategoryChange("Automation Infrastructure")
                    }
                    className={
                      selectedCategory === "Automation Infrastructure"
                        ? "flex items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-foreground"
                        : "flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/30"
                    }
                  >
                    <span>Automation Infrastructure</span>
                    <span className="text-xs text-muted-foreground/80">
                      {
                        otherPosts.filter(
                          (post) =>
                            post.category ===
                            "Automation Infrastructure"
                        ).length
                      }
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                  Recent posts
                </h2>
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
                        <p className="text-sm font-medium text-foreground group-hover:text-primary">
                          {post.title}
                        </p>
                        <p className="text-xs text-muted-foreground/80">
                          {post.publishedAt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
