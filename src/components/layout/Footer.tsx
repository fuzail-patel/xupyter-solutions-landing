import { FOOTER_COMPANY_LINKS, FOOTER_RESOURCES_LINKS, FOOTER_SERVICES_LINKS, FOOTER_SOCIALS_LINKS } from "@/lib/constants/footer"
import { ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiFacebook, SiInstagram } from "react-icons/si"

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 items-center">
          <div className="space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/brand/logo.jpg"
                alt="Xupyter logo"
                width={100}
                height={24}
                className="h-10 w-auto"
                preload
              />
            </Link>
            <p className="text-sm text-foreground/90 max-w-xs leading-relaxed">
              We design and build scalable business systems —
              ERP, CRM, automation, and custom platforms.
              Architecture-led. Built to last.
            </p>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Xupyter Solutions Pvt Ltd
                </p>
                <p className="text-xs text-muted-foreground">
                  Bharuch, Gujarat, India
                </p>
              </div>
              <div className="space-y-1">
                <a
                  href="mailto:contact@xupyter.in"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  contact@xupyter.in
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-foreground/90">
              Services
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-foreground/90">
              {FOOTER_SERVICES_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-foreground/90">
              Company
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-foreground/90">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-foreground/90">
              Resources
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-foreground/90">
              {FOOTER_RESOURCES_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col gap-4 items-center justify-between text-xs text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">© 2026 Xupyter Solutions. All rights reserved.</p>
          <nav className="flex items-center gap-4" aria-label="Social and external links">
            {FOOTER_SOCIALS_LINKS.map((item) => {
              const iconClass = "w-4 h-4 group-hover:scale-110 transition-transform shrink-0"
              const linkProps = {
                key: item.href,
                href: item.href,
                target: "_blank" as const,
                rel: "noopener noreferrer",
                className: "text-muted-foreground hover:text-primary transition-colors group",
                "aria-label": `${item.label} (opens in new tab)`,
              }
              if (item.label === "LinkedIn") {
                return (
                  <a {...linkProps}>
                    <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )
              }
              if (item.label === "Clutch") return <a {...linkProps}><ExternalLink className={iconClass} aria-hidden /></a>
              if (item.label === "Instagram") return <a {...linkProps}><SiInstagram className={iconClass} aria-hidden /></a>
              if (item.label === "Facebook") return <a {...linkProps}><SiFacebook className={iconClass} aria-hidden /></a>
              if (item.label === "Website") return <a {...linkProps}><Globe className={iconClass} aria-hidden /></a>
              return null
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
