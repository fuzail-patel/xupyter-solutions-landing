import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 items-baseline-last">
          <div className="space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Xupyter logo"
                width={100}
                height={24}
                className="h-10 w-auto"
                priority
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
                  Bengaluru, India
                </p>
                <p className="text-xs text-muted-foreground">
                  Remote-first team
                </p>
              </div>
              <div className="space-y-1">
                <a
                  href="mailto:hello@xupyter.com"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  contact@xupyter.in
                </a>
                <p className="text-xs text-muted-foreground">
                  Typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-foreground/90">
              Services
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-foreground/90">
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
            <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-foreground/90">
              Company
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-foreground/90">
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
              <Link
                href="/careers"
                className="hover:text-foreground hover:underline underline-offset-4 transition-colors"
              >
                Careers
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-foreground/90">
              Resources
            </h3>
            <nav className="flex flex-col gap-1.5 text-sm text-foreground/90">
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

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col gap-4 items-center justify-between text-xs text-muted-foreground md:flex-row">
          <p className="text-center md:text-left">© 2026 Xupyter Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/xupyter-solutions/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors group"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
