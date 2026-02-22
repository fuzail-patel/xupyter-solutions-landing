import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import type { BlogPost, Category } from "@/lib/types/blog"

export type UseBlogListingResult = {
  featuredPost: BlogPost
  otherPosts: BlogPost[]
  searchTerm: string
  setSearchTerm: (v: string) => void
  selectedCategory: Category
  setSelectedCategory: (v: Category) => void
  currentPage: number
  setCurrentPage: (v: number) => void
  filteredPosts: BlogPost[]
  paginatedPosts: BlogPost[]
  totalPages: number
  clampedPage: number
  recentPosts: BlogPost[]
  handleCategoryChange: (c: Category) => void
  handlePageChange: (p: number) => void
  handleClearFilters: () => void
}

export function useBlogListing(posts: BlogPost[]): UseBlogListingResult {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialSearch = searchParams.get("search") ?? ""
  const initialCategory =
    (searchParams.get("category") as Category | null) ?? "All"
  const initialPage = Number(searchParams.get("page") ?? "1") || 1

  const featuredPost = posts.find((post) => post.featured) ?? posts[0]
  const otherPosts = posts.filter((post) => post.slug !== featuredPost.slug)

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

  const POSTS_PER_PAGE = 6
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const clampedPage = Math.min(Math.max(currentPage, 1), totalPages || 1)

  const paginatedPosts = useMemo(() => {
    const startIndex = (clampedPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, clampedPage])

  const recentPosts = otherPosts
    .slice()
    .sort((a, b) => a.publishedAt.localeCompare(b.publishedAt))
    .slice(0, 3)

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

  return {
    featuredPost,
    otherPosts,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    filteredPosts,
    paginatedPosts,
    totalPages,
    clampedPage,
    recentPosts,
    handleCategoryChange,
    handlePageChange,
    handleClearFilters,
  }
}
