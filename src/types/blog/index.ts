import type { Post } from "@/payload-types"

export type Category =
  | "All"
  | "Architecture"
  | "Engineering"
  | "AI & ML"
  | "Strategy"
  | "DevOps"
  | "FinTech"

export type DisplayPost = {
  id: string | number
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  image: string
  featured: boolean
  authorName: string
  authorAvatar?: string
}

export type BlogCardProps = {
  post: DisplayPost
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: Category
  readTime: string
  publishedAt: string
  image: string
  featured: boolean
  author?: { name: string }
}

export type BlogFilterProps = {
  categories?: Category[]
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
  resultCount: number
  searchQuery?: string
}

export type BlogArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export type TocItem = {
  id: string
  label: string
  level: 2 | 3
}
