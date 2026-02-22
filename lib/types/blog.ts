export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  image: string
  featured?: boolean
}

export type Category =
  | "All"
  | "System Architecture"
  | "Internal Tools"
  | "Automation Infrastructure"

export type BlogCardProps = {
  post: BlogPost
}

export type FeaturedBlogCardProps = {
  post: BlogPost
}

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type BlogFilterProps = {
  categories?: Category[]
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
  resultCount: number
  searchQuery?: string
}

export type BlogArticlePageProps = {
  params: {
    slug: string
  }
}

export type TocItem = {
  id: string
  label: string
  level: 2 | 3
}
