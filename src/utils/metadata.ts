import { SITE_URL } from "@/lib/seo/site"

export { SITE_URL }
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Xupyter Solutions",
  "legalName": "Xupyter Solutions Pvt Ltd",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/brand/logo.jpg`,
  "sameAs": [
    "https://in.linkedin.com/company/xupyter-solutions",
    "https://www.instagram.com/xupyter.solutions.ai/",
    "https://www.facebook.com/people/Xupyter-Solutions-Pvt-Ltd/61586004966522/"
  ],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Xupyter Solutions",
  "url": SITE_URL,
}
