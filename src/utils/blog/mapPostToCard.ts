import { getMediaUrl } from "@/utils/common"
import type { Post } from "@/payload-types"

export const mapPostToCardData = (post: Post) => {
  const imageUrl = getMediaUrl(post.coverImage)
  const category = (typeof post.tags?.[0] === 'object' && post.tags[0] !== null) ? post.tags[0].name : 'Insight'
  const authorName = (typeof post.author === 'object' && post.author !== null) ? post.author.name : 'Xupyter Team'
  const formattedDate = post.publishedAt 
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Recently'

  return {
    imageUrl,
    category,
    authorName,
    formattedDate,
    readTime: post.readTime || '5 min read'
  }
}
