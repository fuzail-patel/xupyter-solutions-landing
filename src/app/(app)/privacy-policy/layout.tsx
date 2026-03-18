import { pageSEO } from "@/lib/seo/pages"
import type { Metadata } from "next"

export const metadata: Metadata = pageSEO.privacyPolicy

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
