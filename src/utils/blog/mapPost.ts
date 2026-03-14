import { getMediaUrl } from "@/utils/common"
import type { Post, Author, Tag } from "@/payload-types"
import { blogPosts } from "@/lib/constants/blog"
import type { DisplayPost, BlogPost } from "@/types/blog"

export const mapCMSToDisplayPost = (post: Post): DisplayPost => {
  const category = (typeof post.tags?.[0] === 'object' && post.tags[0] !== null) 
    ? (post.tags[0] as Tag).name 
    : 'Insight'
  
  const author = (typeof post.author === 'object' && post.author !== null) 
    ? (post.author as Author)
    : null

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    category,
    authorName: author?.name || 'Xupyter Team',
    authorAvatar: author ? getMediaUrl(author.avatar) : undefined,
    publishedAt: post.publishedAt || '',
    readTime: post.readTime || '5 min read',
    image: getMediaUrl(post.coverImage),
    featured: !!post.featured,
  }
}

export const mapConstantToDisplayPost = (p: BlogPost, idx: number): DisplayPost => ({
  id: p.slug || idx,
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  authorName: p.author?.name || 'Xupyter Team',
  authorAvatar: undefined, // Or a default if we have one
  publishedAt: p.publishedAt,
  readTime: p.readTime,
  image: p.image,
  featured: !!p.featured,
})

export const getDisplayPosts = (posts: Post[] = []): DisplayPost[] => {
  if (posts.length > 0) {
    return posts.map(mapCMSToDisplayPost)
  }
  return blogPosts.map((p, idx) => mapConstantToDisplayPost(p, idx))
}
