import { SmartImage } from "@/components/ui"
import { getPosts } from "@/lib/cms-client"
import { Post } from "@/payload-types"
import { getMediaUrl } from "@/utils/common"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/constants/blog"
import { mapConstantToDisplayPost } from "@/utils/blog/mapPost"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const postsData = await getPosts({
    where: {
      slug: {
        equals: slug,
      },
    },
  }).catch(() => ({ docs: [] }))
  
  let post = postsData.docs[0] as Post

  if (!post) {
    const constantPost = blogPosts.find(p => p.slug === slug)
    if (constantPost) {
      return {
        title: `${constantPost.title} | Insights`,
        description: constantPost.excerpt,
      }
    }
    return {}
  }

  return {
    title: `${post?.title || 'Insight'} | Insights`,
    description: post?.excerpt || '',
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Fetch the current post
  const postsData = await getPosts({
    where: {
      slug: {
        equals: slug,
      },
    },
  }).catch(() => ({ docs: [] }))
  
  let post = postsData.docs[0] as Post
  let isConstant = false

  if (!post) {
    const constantPost = blogPosts.find(p => p.slug === slug)
    if (constantPost) {
      // Map constant to a Post-like object for the template
      const displayPost = mapConstantToDisplayPost(constantPost, 0)
      post = {
        id: 0,
        slug: displayPost.slug,
        title: displayPost.title,
        excerpt: displayPost.excerpt,
        content: { root: { children: [], direction: 'ltr', format: '', indent: 0, type: 'root', version: 1 } },
        author: { name: displayPost.authorName } as any,
        tags: [{ name: displayPost.category }] as any,
        publishedAt: displayPost.publishedAt,
        readTime: displayPost.readTime,
        coverImage: displayPost.image as any,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      }
      isConstant = true
    } else {
      notFound()
    }
  }

  // Fetch all posts to determine related, previous, and next
  const allPostsData = await getPosts({
    sort: '-publishedAt',
  }).catch(() => ({ docs: [] }))
  
  const allPosts = allPostsData.docs as Post[]

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const previousPost = currentIndex > 1 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const relatedPosts = allPosts
    .filter((p) => p.slug && p.slug !== post.slug)
    .slice(0, 3)

  const publishedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : 'Recently'

  return (
    <main className="flex flex-col">
      <article className="bg-background">
        <header className="bg-background">
          <div className="max-w-3xl mx-auto px-6 pt-10 pb-6 sm:pt-12 sm:pb-8 md:pt-14 md:pb-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {(post.tags?.[0] && typeof post.tags[0] === 'object' && post.tags[0] !== null) ? post.tags[0].name : 'Insights'}
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              {post.title || 'Untitled Post'}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground/90">
              {post.excerpt || ''}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground/80">
              <span>By {(post.author && typeof post.author === 'object' && post.author !== null) ? post.author.name : 'Xupyter Systems'}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              <span>{publishedDate}</span>
              {post.readTime && (
                <>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>
          <div className="max-w-3xl mx-auto px-6 pb-8 sm:pb-10 md:pb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/60">
              <SmartImage
                src={getMediaUrl(post.coverImage) || ""}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 960px, 100vw"
                preload
              />
            </div>
          </div>
        </header>

        <section className="py-10 sm:py-12 md:py-14">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.1fr)]">
              <div className="max-w-3xl prose prose-sm sm:prose-base dark:prose-invert">
                <RichText content={post.content} />
              </div>

              <aside className="hidden lg:block">
              </aside>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="bg-muted/30">
            <div className="max-w-6xl mx-auto px-6 py-10 sm:py-12 md:py-14">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
                    Related articles
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground/90">
                    Continue exploring systems, architecture, and
                    automation topics.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex items-start gap-3 rounded-lg border border-border/60 bg-background px-3 py-3 transition-colors hover:border-primary/50"
                  >
                    <div className="relative h-14 w-20 overflow-hidden rounded-md bg-muted/60">
                      <SmartImage
                        src={getMediaUrl(related.coverImage) || ""}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-150 group-hover:scale-[1.03]"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {(related.tags?.[0] && typeof related.tags[0] === 'object') ? related.tags[0].name : 'Insights'}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary">
                        {related.title}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        {new Date(related.publishedAt as string).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-background">
          <div className="max-w-3xl mx-auto px-6 py-8 sm:py-10 md:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                {previousPost && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                      Previous article
                    </p>
                    <Link
                      href={`/blog/${previousPost.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {previousPost.title}
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex-1 text-left sm:text-right">
                {nextPost && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
                      Next article
                    </p>
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {nextPost.title}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

// Helper component for Payload Lexical RichText
function RichText({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) return null

  return (
    <div className="space-y-4">
      {content.root.children.map((node: any, i: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={i}>
              {node.children?.map((child: any, j: number) => {
                if (child.format & 1) return <strong key={j}>{child.text}</strong>
                if (child.format & 2) return <em key={j}>{child.text}</em>
                return child.text
              })}
            </p>
          )
        }
        if (node.type === 'heading') {
          const Tag = node.tag as any
          return (
            <Tag key={i} className="text-foreground font-bold">
              {node.children?.map((child: any, j: number) => child.text)}
            </Tag>
          )
        }
        if (node.type === 'list') {
          const Tag = node.tag === 'ol' ? 'ol' : 'ul'
          return (
            <Tag key={i} className="list-inside list-disc space-y-2">
              {node.children?.map((item: any, j: number) => (
                <li key={j}>
                  {item.children?.map((child: any, k: number) => child.text)}
                </li>
              ))}
            </Tag>
          )
        }
        return null
      })}
    </div>
  )
}
