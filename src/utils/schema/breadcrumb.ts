import { SITE_URL } from "@/lib/seo/site"

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  }
}

export function generateServiceBreadcrumb(serviceTitle: string, slug: string) {
  return generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/#services` },
    { name: serviceTitle, url: `${SITE_URL}/services/${slug}` },
  ])
}

export function generateBlogBreadcrumb(postTitle: string, slug: string) {
  return generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Insights", url: `${SITE_URL}/blog` },
    { name: postTitle, url: `${SITE_URL}/blog/${slug}` },
  ])
}

export function generatePortfolioBreadcrumb(projectTitle: string, slug: string) {
  return generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Portfolio", url: `${SITE_URL}/portfolio` },
    { name: projectTitle, url: `${SITE_URL}/portfolio/${slug}` },
  ])
}

export function generateCaseStudyBreadcrumb(caseStudyTitle: string, slug: string) {
  return generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Portfolio", url: `${SITE_URL}/portfolio` },
    { name: caseStudyTitle, url: `${SITE_URL}/case-studies/${slug}` },
  ])
}
