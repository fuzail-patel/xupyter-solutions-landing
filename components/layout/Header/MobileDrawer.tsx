import Link from "next/link"
import Image from "next/image"
import { FiX, FiArrowRight, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants/nav"
import type { MobileDrawerProps } from "@/lib/types/nav"
import ScheduleCallButton from "@/components/shared/ScheduleCallButton"

export function MobileDrawer({ open, onClose, pathname, activeSection }: MobileDrawerProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-500",
        open
          ? "visible opacity-100"
          : "invisible opacity-0"
      )}
    >
      {/* Heavy Blur Background */}
      <div 
        className={cn(
          "absolute inset-0 bg-background/98 backdrop-blur-3xl transition-all duration-700",
          open ? "opacity-100" : "opacity-0"
        )} 
      />

      <div
        className={cn(
          "relative h-full flex flex-col transition-all duration-500 overflow-y-auto",
          open ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Navigation Header */}
        <div className="flex items-center justify-between px-8 py-8 h-25">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Xupyter logo"
              width={100}
              height={24}
              className="h-10 w-auto grayscale"
            />
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform active:scale-90"
          >
            <FiX className="size-6 transition-transform group-hover:rotate-90" />
          </button>
        </div>

        <div className="flex-1 flex flex-col md:flex-row px-8 pb-12 gap-12">
          {/* Main Navigation Section */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mb-10 block">
              Navigation
            </span>
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((item, index) => {
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
                      "group relative flex items-center gap-6 text-4xl font-black transition-all duration-300 tracking-tight",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground/30 hover:text-foreground"
                    )}
                    style={{ 
                      transitionDelay: `${index * 50 + 200}ms`,
                      transform: open ? 'translateX(0)' : 'translateX(-40px)',
                      opacity: open ? 1 : 0
                    }}
                  >
                    <span className="text-sm font-mono text-primary/60">
                      (0{index + 1})
                    </span>
                    {item.label}
                    <div className={cn(
                      "h-1 bg-primary transition-all duration-500",
                      isActive ? "w-12" : "w-0 group-hover:w-8"
                    )} />
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
