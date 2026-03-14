import { NAV_LINKS } from "@/lib/constants/nav"
import { useEffect, useState } from "react"

export const useHeaderScroll = (pathname: string) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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

  return { scrolled, activeSection }
}
