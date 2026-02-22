import Image from "next/image"
import Link from "next/link"
import type { FeaturedBlogCardProps } from "@/lib/types/blog"

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border/70 bg-muted/40 shadow-sm transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col gap-6 lg:flex-row"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/60 lg:w-3/5">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority
          />
        </div>

        <div className="flex w-full flex-1 flex-col justify-center gap-3 px-6 pb-6 pt-4 lg:w-2/5 lg:px-6 lg:py-6">
          <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground/80">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Featured
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              {post.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-[var(--font-satoshi)] leading-tight text-foreground transition-colors duration-150 group-hover:text-primary">
            {post.title}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground/90 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground/80">
            <span>{post.publishedAt}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <span>{post.readTime}</span>
          </div>

          <div className="mt-2 text-sm font-semibold text-primary group-hover:text-primary/90">
            Read article →
          </div>
        </div>
      </Link>
    </article>
  )
}
