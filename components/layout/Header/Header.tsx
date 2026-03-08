'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"

import ScheduleCallButton from "@/components/shared/ScheduleCallButton"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/constants/nav"
import { DesktopNav } from "./DesktopNav"
import { MobileDrawer } from "./MobileDrawer"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 40)

      if (pathname !== "/") {
        return
      }

      const scrollPosition = currentScrollY + window.innerHeight / 3
      let currentSection = "home"

      for (const link of NAV_LINKS) {
        let sectionId: string | null = null

        if (link.href.startsWith("#")) {
          sectionId = link.href.slice(1)
        } else if (link.href.startsWith("/#")) {
          sectionId = link.href.slice(2)
        }

        if (!sectionId) {
          continue
        }

        const element = document.getElementById(sectionId)

        if (!element) {
          continue
        }

        const rect = element.getBoundingClientRect()
        const top = currentScrollY + rect.top
        const bottom = top + element.offsetHeight

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = sectionId
          break
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            /* glassmorphism — frosted dark glass on scroll */
            ? "bg-[#0c0c13]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(1,31,91,0.25)]"
            /* transparent — visually part of hero gradient at top */
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-25 items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Xupyter logo"
                width={100}
                height={24}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <DesktopNav pathname={pathname} activeSection={activeSection} />

            <div className="hidden lg:flex">
              <ScheduleCallButton variant="secondary" className="h-11 text-sm py-6" />
            </div>

            <div className="flex items-center lg:hidden ml-auto">
              <button
                type="button"
                aria-label="Toggle navigation"
                onClick={() => setOpen((value) => !value)}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                <FiMenu className="size-5 transition-transform group-hover:rotate-12" />
              </button>
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
