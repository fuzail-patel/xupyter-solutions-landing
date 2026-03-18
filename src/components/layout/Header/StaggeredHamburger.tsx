
"use client"

import { cn } from "@/utils/common"

interface StaggeredHamburgerProps {
  open: boolean
  toggle: () => void
}

export function StaggeredHamburger({
  open,
  toggle,
}: StaggeredHamburgerProps) {
  return (
    <button
      onClick={toggle}
      className={cn(
        "group relative h-12 w-12 transition-all",
        "flex items-center justify-center"
      )}
      aria-label="Toggle navigation"
    >
      <div className="space-y-2">
        <span
          className={cn(
            "block h-0.5 bg-current transition-all duration-300 ease-in-out",
            open ? "w-6 translate-y-3 rotate-45" : "w-6"
          )}
        />
        <span
          className={cn(
            "block h-0.5 bg-current transition-all duration-300 ease-in-out",
            open ? "w-6 opacity-0" : "w-8"
          )}
        />
        <span
          className={cn(
            "block h-0.5 bg-current transition-all duration-300 ease-in-out",
            open ? "w-6 -translate-y-3 -rotate-45" : "w-6"
          )}
        />
      </div>
    </button>
  )
}
