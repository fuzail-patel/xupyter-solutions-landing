import Link from "next/link"
import { SmartImage } from "@/components/shared"
import type { BlogCardProps } from "@/lib/types/blog"

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
          {post.image && (
            <div className="relative aspect-21/9 w-full overflow-hidden border-b border-border/50 bg-muted/30">
              <SmartImage
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full border border-primary px-2.5 py-0.5 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary line-clamp-2 min-h-[3.5rem]">
              {post.title}
            </h3>
            
            <p className="mt-3 text-sm text-muted-foreground/90 line-clamp-1">
              {post.excerpt}
            </p>
            
            <div className="mt-auto pt-6 flex items-center gap-3 text-xs font-medium text-muted-foreground/70">
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
