import { Footer, Header } from "@/components/layout"
import { Open_Sans, Sora } from "next/font/google"
import type { Metadata } from "next"
import "../globals.css"

/**
 * Display font — Sora
 * Used for all headings (h1–h6) via --font-sora CSS variable
 */
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})


const plusJakartaSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Xupyter Solutions Pvt Ltd",
  description: "",
  icons: './logo.jpg'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = process.env.NEXT_PUBLIC_CURRENT_THEME ?? "dark"

  return (
    <html lang="en" className={theme}>
      <body className={`${sora.className} ${plusJakartaSans.variable} antialiased`}>
        <Header />
        <div className="pt-15">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
