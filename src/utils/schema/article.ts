import { SITE_URL } from "@/lib/seo/site"

export interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  authorName: string
  url: string
}

export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Xupyter Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/brand/logo.jpg`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
  }
}
