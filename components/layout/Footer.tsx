import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <p className="text-center text-xs uppercase tracking-[0.16em] text-muted-foreground mb-10">
          Built for long-term partnerships.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-lg font-semibold font-[var(--font-satoshi)]">
              Xupyter
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Architecture-first systems for real business operations.
            </p>
            <div className="text-sm text-muted-foreground">
              <a
                href="mailto:hello@xupyter.com"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                hello@xupyter.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Based in Europe. Working globally.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Services
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <Link
                href="/services/business-websites-and-digital-foundations"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Business Platforms
              </Link>
              <Link
                href="/services/custom-erp-crm-and-business-platforms"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                ERP &amp; CRM Systems
              </Link>
              <Link
                href="/services/automation-and-ai-ready-systems"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Automation &amp; AI Systems
              </Link>
              <Link
                href="/services/architecture-and-technical-strategy"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Architecture Consulting
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Company
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <Link
                href="#about"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                About
              </Link>
              <Link
                href="#work"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="#industries"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Industries
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-muted-foreground">
              Resources
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <Link
                href="/blog"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/privacy"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col gap-3 items-start justify-between text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Xupyter Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
