import { pageSEO } from "@/lib/seo/pages"
import type { Metadata } from "next"

export const metadata: Metadata = pageSEO.termsOfService

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
