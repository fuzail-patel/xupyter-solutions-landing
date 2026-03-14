import { NAV_LINKS } from "@/lib/constants/nav"
import type { DesktopNavProps } from "@/types/navigation"
import NavSplitLink from "@/components/ui/NavSplitLink"

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
          <NavSplitLink
            key={item.label}
            href={item.href}
            label={item.label}
            active={isActive}
          />
        )
      })}
    </nav>
  )
}


