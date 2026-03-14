"use client"
import { CtaButton } from "@/components/ui"
import { getCalApi } from "@calcom/embed-react"


import type { ScheduleCallButtonProps } from "@/types/shared"

export default function ScheduleCallButton({
  variant = "primary",
  className,
  children = "Book a Strategy Call",
}: ScheduleCallButtonProps & { children?: React.ReactNode }) {
  const openCal = async () => {
    const cal = await getCalApi()

    const isDark = document.documentElement.classList.contains("dark")

    cal("ui", {
      theme: isDark ? "dark" : "light",
      styles: {
        branding: { brandColor: "#000000" },
      },
    })

    cal("modal", {
      calLink:
        process.env.NEXT_PUBLIC_CAL_LINK ?? "xupyter-solutions/30min",
    })
  }

  return (
    <CtaButton
      variant={variant}
      className={className}
      onClick={openCal}
    >
      {children}
    </CtaButton>
  )
}
