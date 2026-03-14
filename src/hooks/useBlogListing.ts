import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { Post } from "@/payload-types"
import type { Category } from "@/types/blog"

export type UseBlogListingResult = {
  searchTerm: string
  setSearchTerm: (v: string) => void
  selectedCategory: Category
  setSelectedCategory: (v: Category) => void
  visibleCount: number
  setVisibleCount: (v: number) => void
  hasMore: boolean
  handleLoadMore: () => void
  handleCategoryChange: (c: Category) => void
  handleClearFilters: () => void
}

export function useBlogListing(posts: Post[], totalPosts: number): UseBlogListingResult {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialSearch = searchParams.get("search") ?? ""
  const initialCategory =
    (searchParams.get("category") as Category | null) ?? "All"
  const initialLimit = Number(searchParams.get("limit") ?? "6")
  
  const POSTS_LIMIT = 6

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(initialCategory)
  const [visibleCount, setVisibleCount] = useState(initialLimit)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 400) // Slightly longer debounce for server-side
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
    if (visibleCount > POSTS_LIMIT) {
      params.set("limit", String(visibleCount))
    }
    const queryString = params.toString()
    const next = queryString ? `${pathname}?${queryString}` : pathname
    router.replace(next, { scroll: false })
  }, [debouncedSearch, selectedCategory, visibleCount, pathname, router])

  const hasMore = visibleCount < totalPosts

  function handleCategoryChange(category: Category) {
    setSelectedCategory(category)
    setVisibleCount(POSTS_LIMIT)
  }

  function handleLoadMore() {
    setVisibleCount(prev => prev + POSTS_LIMIT)
  }

  function handleClearFilters() {
    setSearchTerm("")
    setDebouncedSearch("")
    setSelectedCategory("All")
    setVisibleCount(POSTS_LIMIT)
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    visibleCount,
    setVisibleCount,
    hasMore,
    handleLoadMore,
    handleCategoryChange,
    handleClearFilters,
  }
}
