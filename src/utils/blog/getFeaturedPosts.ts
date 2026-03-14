import type { Post } from "@/payload-types"

export const getFeaturedPosts = (posts: Post[], selectedCategory: string, searchTerm: string) => {
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
    ? posts.filter(p => p.slug && p.slug !== featuredPost.slug)
    : posts

  return { featuredPost, regularPosts }
}
