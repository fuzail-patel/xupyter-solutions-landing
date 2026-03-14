"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { BlogCard } from "@/components/blog"
import type { Post } from "@/payload-types"
import type { Category, DisplayPost } from "@/types/blog"
import { Input, Button } from "@/components/ui"
import { useBlogListing } from "@/hooks/useBlogListing"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui"
import { getMediaUrl } from "@/utils/common"
import { getFeaturedPosts } from "@/utils/blog/getFeaturedPosts"

interface BlogListingPageProps {
  posts: DisplayPost[]
  totalPosts: number
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

export default function BlogListingPage({ posts, totalPosts }: BlogListingPageProps) {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    visibleCount,
    hasMore,
    handleLoadMore,
    handleCategoryChange,
    handleClearFilters,
  } = useBlogListing(posts, totalPosts)

  const { featuredPost, regularPosts } = getFeaturedPosts(posts, selectedCategory, searchTerm)

  return (    <div className="bg-background min-h-screen pt-25">
      {/* Category Navigation Bar */}
      <nav className="border-b border-border/40 sticky top-25 z-40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start md:justify-start gap-8 overflow-x-auto no-scrollbar py-4 scroll-smooth">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 whitespace-nowrap ${
                  selectedCategory === category
                    ? "text-primary"
                    : "text-muted-foreground/60 hover:text-foreground"
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Featured Post Section */}
        {featuredPost && (
          <section className="mb-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Featured</span>
              </div>
              
              <Link href={`/blog/${featuredPost.slug || ''}`} className="group block">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1] group-hover:text-primary transition-colors">
                  {featuredPost.title || 'Untitled Post'}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed mb-10 max-w-3xl line-clamp-3">
                  {featuredPost.excerpt || ''}
                </p>
              </Link>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border/60">
                    <AvatarImage src={featuredPost.authorAvatar} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">XT</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">
                      {featuredPost.authorName}
                    </span>
                    <span className="text-[11px] text-muted-foreground/60 uppercase tracking-widest font-medium">Author</span>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-border/40" />
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">
                    {featuredPost.publishedAt ? new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently'}
                  </span>
                  <span className="text-[11px] text-muted-foreground/60 uppercase tracking-widest font-medium">Published</span>
                </div>
                
                <div className="h-8 w-px bg-border/40 hidden sm:block" />
                
                <div className="hidden sm:flex flex-col">
                  <span className="text-sm font-bold text-foreground">{featuredPost.readTime || '5 min read'}</span>
                  <span className="text-[11px] text-muted-foreground/60 uppercase tracking-widest font-medium">Read Time</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search and Filters Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 pt-12 border-t border-border/40">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
              {searchTerm === "" && selectedCategory === "All" ? "Latest posts" : "Search results"}
            </h2>
            <div className="text-[13px] text-muted-foreground/60 font-medium uppercase tracking-wider">
              Showing {totalPosts} article{totalPosts === 1 ? "" : "s"}
            </div>
          </div>

          <div className="relative w-full md:max-w-xs shrink-0">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
            <Input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search insights..."
              className="h-11 pl-10 bg-input rounded-none focus-visible:ring-primary/20"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="space-y-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            
            {hasMore && (
              <div className="flex flex-col items-center">
                <div className="w-full flex items-center gap-4 mb-12">
                  <div className="h-px flex-1 bg-border/60" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 whitespace-nowrap">
                    More posts
                  </span>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                
                <button
                  onClick={handleLoadMore}
                  className="px-12 py-4 border border-foreground text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-border/60 rounded-none bg-muted/5">
            <p className="text-muted-foreground mb-8">No articles found matching your criteria.</p>
            <Button
              type="button"
              variant="outline"
              onClick={handleClearFilters}
              className="rounded-none px-8 h-11 uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
