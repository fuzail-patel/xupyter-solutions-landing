import { Footer, Header } from "@/components/layout"
import { sora, plusJakartaSans } from "@/utils/fonts"
import { organizationJsonLd, websiteJsonLd } from "@/utils/metadata"
import { siteMetadata } from "@/lib/seo/site"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = process.env.NEXT_PUBLIC_CURRENT_THEME ?? "dark"

  return (
    <html lang="en" className={theme}>
      <body className={`${sora.className} ${plusJakartaSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
