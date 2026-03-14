import type { Metadata } from "next"

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://xupyter.in"

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xupyter Solutions",
    template: "%s | Xupyter Solutions",
  },
  description:
    "Architecture-driven web platforms, SaaS systems, and business tools built for scalability.",
  openGraph: {
    type: "website",
    siteName: "Xupyter Solutions",
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicons/favicon.ico",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
}
