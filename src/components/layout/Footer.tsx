import { FOOTER_COMPANY_LINKS, FOOTER_RESOURCES_LINKS, FOOTER_SERVICES_LINKS } from "@/lib/constants/footer"
import Image from "next/image"
import Link from "next/link"

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
                  href="mailto:contact@xupyter.com"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  contact@xupyter.com
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
          <div className="flex items-center gap-4">
            <a
              href="https://in.linkedin.com/company/xupyter-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors group"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/xupyter.solutions.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors group"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608S6.799 2.225 8.165 2.163C9.431 2.105 9.811 2.163 12 2.163zm0 3.589a5.248 5.248 0 1 0 0 10.496A5.248 5.248 0 0 0 12 5.752zm6.406-.994a1.298 1.298 0 1 0 0 2.596 1.298 1.298 0 0 0 0-2.596zM12 7.436a4.564 4.564 0 1 1 0 9.128 4.564 4.564 0 0 1 0-9.128z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
