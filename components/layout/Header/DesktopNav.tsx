import Link from "next/link"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants/nav"
import type { DesktopNavProps } from "@/lib/types/nav"

export function DesktopNav({ pathname, activeSection }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm">
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
              "relative py-1.5 text-muted-foreground transition-colors duration-300",
              "hover:text-foreground",
              "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all after:duration-300",
              "hover:after:w-full",
              isActive && "text-foreground after:w-full"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
