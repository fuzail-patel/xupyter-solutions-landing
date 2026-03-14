import { SmartImage } from "@/components/ui"
import Link from "next/link"
import type { BlogCardProps } from "@/types/blog"

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Recently'

  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug || ''}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-none"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-none border border-transparent bg-background transition-colors duration-200">
          {/* Image/Header Area */}
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-none bg-[#F0EEE8] dark:bg-muted/30 border border-border/40">
            {post.image ? (
              <SmartImage
                src={post.image}
                alt={post.title || 'Blog Post Image'}
                fill
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              />
            ) : null}
            
            {/* Overlay Category Tag */}
            <div className="absolute left-4 top-4 z-20">
              <span className="bg-[#1A1A1A] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-none">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-1 flex-col py-6 px-1">
            <div className="flex items-center gap-2 text-[13px] text-muted-foreground/60 mb-3">
              <time dateTime={post.publishedAt || undefined}>{formattedDate}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            
            <h3 className="text-[22px] font-semibold leading-tight text-foreground transition-colors duration-200 group-hover:text-primary mb-4 line-clamp-2">
              {post.title || 'Untitled Post'}
            </h3>
            
            <p className="text-sm leading-relaxed text-muted-foreground/80 line-clamp-3 mb-8">
              {post.excerpt || ''}
            </p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground/60">
                {post.authorName}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B54728] group-hover:underline flex items-center gap-1.5 transition-all">
                Read 
                <span className="text-lg leading-none">→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
