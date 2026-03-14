"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { label: "All Posts", href: "/blog" },
  { label: "Design", href: "/blog/category/design" },
  { label: "Engineering", href: "/blog/category/engineering" },
  { label: "Product", href: "/blog/category/product" },
  { label: "Essays", href: "/blog/category/essays" },
]

export function Masthead() {
  const pathname = usePathname()
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background/80 backdrop-blur-md">
      {/* Top Bar */}
      <div className="border-b border-border/50 px-6 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
          <div className="flex-1">{today}</div>
          <div className="flex-1 text-center hidden md:block">Xupyter Technical Journal</div>
          <div className="flex-1 text-right">Est. 2021</div>
        </div>
      </div>

      {/* Brand Center */}
      <div className="px-6 py-8 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl">
            THE BLOG
          </h1>
          <p className="mt-4 max-w-150 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
            Perspectives on Engineering, Architecture, and Digital Evolution
          </p>
        </div>
      </div>

      {/* Navigation Row */}
      <nav className="px-6 pb-6">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-8 md:gap-12">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
                {/* Dot indicator pattern */}
                <div
                  className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
