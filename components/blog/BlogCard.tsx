import Image from "next/image"
import Link from "next/link"

import type { BlogPost } from "@/types/blog"

type BlogCardProps = {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-transform duration-150 ease-out hover:-translate-y-0.5">
          <div className="relative aspect-[16/9] bg-muted/50">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
              {post.category}
            </span>
            <h3 className="mt-3 text-base md:text-lg font-semibold font-[var(--font-satoshi)] text-foreground transition-colors duration-150 group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[0.78rem] text-muted-foreground/80">
              <span>{post.publishedAt}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

