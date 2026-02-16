'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FiMenu, FiX } from "react-icons/fi"

import { CtaButton } from "@/components/custom/CtaButton"
import { cn } from "@/lib/utils"

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
]

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

      for (const link of links) {
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
    <header className="sticky top-0 z-40 w-full">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex h-20 items-center gap-6">
            {/* Logo */}
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

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm">
              {links.map((item) => {
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

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <CtaButton variant="header" className="h-11">
                Book a Strategy Call
              </CtaButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden ml-auto">
              <button
                type="button"
                aria-label="Toggle navigation"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <FiMenu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Close navigation"
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[80%] max-w-xs bg-background border-r shadow-xl",
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
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <FiX className="size-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-6 text-sm">
              {links.map((item) => {
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
                    onClick={() => setOpen(false)}
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

            <div className="mt-auto pt-8 hidden md:block">
              <CtaButton
                variant="header"
                className="w-full justify-center py-6"
              >
                Book a Strategy Call
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
