import Link from "next/link"
import { FiX } from "react-icons/fi"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants/nav"
import type { MobileDrawerProps } from "@/lib/types/nav"

export function MobileDrawer({ open, onClose, pathname, activeSection }: MobileDrawerProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <button
        type="button"
        aria-label="Close navigation"
        className="absolute inset-0 bg-background/40 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        className={cn(
          "absolute inset-y-0 left-0 w-4/5 max-w-xs bg-background border-r shadow-xl",
          "transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <FiX className="size-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6 text-sm">
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
                  onClick={onClose}
                  className={cn(
                    "text-muted-foreground font-medium transition-colors",
                    "hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
