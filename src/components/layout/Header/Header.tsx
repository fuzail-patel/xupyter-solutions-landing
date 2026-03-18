'use client'
import { DesktopNav } from "./DesktopNav"
import { MobileDrawer } from "./MobileDrawer"
import { useHeaderScroll } from "@/hooks/useHeaderScroll"
import { cn } from "@/utils/common"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { StaggeredHamburger } from "./StaggeredHamburger"
import { animateFade } from "@/utils/animations"

import Image from "next/image"
import Link from "next/link"

import { ScheduleCallButton } from "@/components/shared"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { scrolled, activeSection } = useHeaderScroll(pathname)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const isHome = pathname === "/"

  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  useEffect(() => {
    if (isHome && headerRef.current) {
      animateFade(headerRef.current, {
        translateY: [-12, 0],
        duration: 100,
        delay: 50,
      })
    }
  }, [isHome])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        ref={headerRef}
        style={isHome ? { opacity: 0, transform: "translateY(-12px)" } : {}}
        className={cn(
          "transition-all duration-500",
          scrolled
            /* glassmorphism — frosted dark glass on scroll */
            ? "bg-[#0c0c13]/70 backdrop-blur-xl border-b border-white/6 shadow-[0_4px_24px_rgba(1,31,91,0.25)]"
            /* transparent — visually part of hero gradient at top */
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-25 items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/brand/logo.jpg"
                alt="Xupyter logo"
                width={100}
                height={24}
                className="h-12 w-auto"
                preload
              />
            </Link>

            <DesktopNav pathname={pathname} activeSection={activeSection} />

            <div className="hidden lg:flex">
              <ScheduleCallButton variant="header" className="h-11 text-sm py-6" />
            </div>

            <div className="flex items-center lg:hidden ml-auto">
              <StaggeredHamburger
                open={open}
                toggle={() => setOpen((value) => !value)}
              />
            </div>
          </div>
        </div>
      </div>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
        activeSection={activeSection}
      />
    </header>
  )
}
