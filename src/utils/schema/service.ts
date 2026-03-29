import { SITE_URL } from "@/lib/seo/site"

export interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export function generateServiceSchema({
  name,
  description,
  url,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Xupyter Solutions",
      "url": SITE_URL,
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "serviceType": "Software Development",
    "url": url,
  }
}
