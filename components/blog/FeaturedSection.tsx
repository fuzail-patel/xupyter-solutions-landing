"use client"

import Link from "next/link"
import { SmartImage } from "@/components/shared"
import type { BlogPost } from "@/lib/types/blog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface FeaturedSectionProps {
  posts: BlogPost[]
}

export function FeaturedSection({ posts }: FeaturedSectionProps) {
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const secondaryPosts = posts.filter((post) => post.slug !== featuredPost?.slug).slice(0, 3)

  if (!featuredPost) return null

  return (
    <section className="border-b border-foreground bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1fr_2px_400px] lg:grid-cols-[1.5fr_2px_1fr]">
        {/* Left Column (Hero) */}
        <div className="flex flex-col justify-center px-6 md:pr-12 lg:pr-16">
          <div className="mb-6 inline-block rounded-full border border-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            Featured
          </div>
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <h2 className="mb-6 text-4xl font-black leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
          </Link>
          <p className="mb-8 max-w-xl text-lg font-medium leading-relaxed text-muted-foreground/90 md:text-xl lg:text-2xl">
            {featuredPost.excerpt}
          </p>
          {featuredPost.author && (
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-border/50">
                <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                <AvatarFallback>{featuredPost.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-widest">
                  {featuredPost.author.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Vertical Rule */}
        <div className="hidden h-full w-[2px] bg-foreground md:block" />

        {/* Right Column (Secondary) */}
        <div className="mt-16 flex flex-col justify-center gap-12 px-6 md:mt-0 md:pl-12 lg:pl-16">
          {secondaryPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                {post.category}
              </span>
              <h3 className="text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors md:text-2xl">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                <time>{post.publishedAt}</time>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>{post.readTime}</span>
              </div>
              <div className="h-[1px] w-full bg-border group-last:hidden" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
