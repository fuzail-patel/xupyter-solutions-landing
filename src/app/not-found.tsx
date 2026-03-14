import Link from 'next/link'
import { Header, Footer } from "@/components/layout"
import { Open_Sans, Sora } from "next/font/google"
import { CtaButton } from '@/components/ui'
import "./globals.css"

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

export default function NotFound() {
  const theme = process.env.NEXT_PUBLIC_CURRENT_THEME ?? "dark"

  return (
    <html lang="en" className={theme}>
      <body className={`${sora.className} ${plusJakartaSans.variable} antialiased`}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-foreground sm:text-7xl">
              404
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-medium">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaButton
                variant='secondary'
                href="/portfolio"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                View our work
              </CtaButton>
              <CtaButton href="/" variant="primary">
                Back to Home
              </CtaButton>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
