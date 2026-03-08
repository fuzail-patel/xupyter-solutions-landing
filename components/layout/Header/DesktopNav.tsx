import Link from "next/link"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants/nav"
import type { DesktopNavProps } from "@/lib/types/nav"

export function DesktopNav({ pathname, activeSection }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex flex-1 items-center justify-center gap-10 text-sm font-medium tracking-tight">
      {NAV_LINKS.map((item) => {
        const isHomePage = pathname === "/"
        const isHashLink =
          item.href.startsWith("#") || item.href.startsWith("/#")

        let sectionId: string | null = null

        if (item.href.startsWith("#")) {
          sectionId = item.href.slice(1)
        } else if (item.href.startsWith("/#")) {
          sectionId = item.href.slice(2)
        }

        const isSectionActive =
          isHomePage && sectionId && activeSection === sectionId
        const isRouteActive =
          !isHashLink && pathname === item.href
        const isActive = isSectionActive || isRouteActive

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "relative py-1.5 text-muted-foreground transition-all duration-300",
              "hover:text-foreground group",
              isActive && "text-primary"
            )}
          >
            <span className={cn(
              "relative z-10 transition-transform duration-300 inline-block",
              isActive && "font-semibold"
            )}>
              {item.label}
            </span>

            {/* Simple Underline Effect */}
            <span className={cn(
              "absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300",
              "w-0 group-hover:w-full",
              isActive ? "w-full" : "w-0"
            )} />
          </Link>
        )
      })}
    </nav>
  )
}
