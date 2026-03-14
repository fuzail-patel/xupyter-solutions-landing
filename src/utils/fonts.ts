import { Open_Sans, Sora } from "next/font/google"

/**
 * Display font — Sora
 * Used for all headings (h1–h6) via --font-sora CSS variable
 */
export const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

export const plusJakartaSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})
