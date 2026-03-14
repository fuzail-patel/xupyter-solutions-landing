"use client"

import Link from "next/link"
import type { Post } from "@/payload-types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getMediaUrl } from "@/lib/utils"

interface FeaturedSectionProps {
  posts: Post[]
}

export function FeaturedSection({ posts }: FeaturedSectionProps) {
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const secondaryPosts = posts.filter((post) => post.slug !== featuredPost?.slug).slice(0, 3)

  if (!featuredPost) return null

  const featuredAuthorName = (typeof featuredPost.author === 'object' && featuredPost.author !== null) ? featuredPost.author.name : 'Xupyter Team'
  const featuredAuthorAvatar = (typeof featuredPost.author === 'object' && featuredPost.author !== null) ? getMediaUrl(featuredPost.author.avatar) : undefined

  return (
    <section className="border-b border-foreground bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1fr_2px_400px] lg:grid-cols-[1.5fr_2px_1fr]">
        {/* Left Column (Hero) */}
        <div className="flex flex-col justify-center px-6 md:pr-12 lg:pr-16">
          <div className="mb-6 inline-block rounded-full border border-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Featured
          </div>
          <Link href={`/blog/${featuredPost.slug || ''}`} className="group block">
            <h2 className="mb-6 text-4xl font-black leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl group-hover:text-primary transition-colors">
              {featuredPost.title || 'Untitled Post'}
            </h2>
          </Link>
          <p className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground/90 md:text-xl lg:text-2xl">
            {featuredPost.excerpt || ''}
          </p>
          {featuredPost.author && (
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-border/50">
                <AvatarImage src={featuredAuthorAvatar} alt={featuredAuthorName} />
                <AvatarFallback>{featuredAuthorName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-widest">
                  {featuredAuthorName}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {featuredPost.readTime || '5 min read'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Vertical Rule */}
        <div className="hidden h-full w-0.5 bg-foreground md:block" />

        {/* Right Column (Secondary) */}
        <div className="mt-16 flex flex-col justify-center gap-12 px-6 md:mt-0 md:pl-12 lg:pl-16">
          {secondaryPosts.map((post) => {
            const category = (typeof post.tags?.[0] === 'object' && post.tags[0] !== null) ? post.tags[0].name : 'Insight'
            const publishedAt = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently'
            
            return (
              <Link key={post.slug} href={`/blog/${post.slug || ''}`} className="group flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                  {category}
                </span>
                <h3 className="text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors md:text-2xl">
                  {post.title || 'Untitled Post'}
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  <time>{publishedAt}</time>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{post.readTime || '5 min read'}</span>
                </div>
                <div className="h-px w-full bg-border group-last:hidden" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
