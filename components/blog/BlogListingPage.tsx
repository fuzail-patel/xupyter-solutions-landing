"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { BlogCard, Pagination } from "@/components/blog"
import type { BlogPost, Category } from "@/lib/types/blog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useBlogListing } from "@/lib/hooks/useBlogListing"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogListingPageProps {
  posts: BlogPost[]
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

  // Find the featured post from the provided posts
  const globalFeaturedPost = posts.find(post => post.featured) || null

  // Determine if we should show the featured section
  // Only show when "All" category is selected and no search is active
  const showFeaturedSection = 
    selectedCategory === "All" && 
    searchTerm === "" && 
    globalFeaturedPost !== null

  const featuredPost = showFeaturedSection ? globalFeaturedPost : null
  
  // Regular posts: exclude the featured post from the grid if it's currently being shown as featured
  const regularPosts = featuredPost 
    ? posts.filter(p => p.slug !== featuredPost.slug)
    : posts

  return (
    <div className="bg-background min-h-screen pt-25">
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
                <span className="h-[1px] w-8 bg-primary/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Featured</span>
              </div>
              
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1] group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed mb-10 max-w-3xl line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </Link>

              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-border/40">
                  {featuredPost.author?.avatar && <AvatarImage src={featuredPost.author.avatar} />}
                  <AvatarFallback className="text-xs bg-muted">
                    {featuredPost.author?.name?.split(' ').map(n => n[0]).join('') || 'TM'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {featuredPost.author?.name || "Team Member"}
                  </div>
                  <div className="text-[12px] text-muted-foreground/60 flex items-center gap-2">
                    <time dateTime={featuredPost.publishedAt}>{featuredPost.publishedAt}</time>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
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
