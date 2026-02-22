"use client"

import { getCalApi } from "@calcom/embed-react"

import { CtaButton } from "@/components/shared/CtaButton"
import type { ScheduleCallButtonProps } from "@/lib/types/ui"

export default function ScheduleCallButton({
  variant = "primary",
  className,
}: ScheduleCallButtonProps) {
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
      Book a Strategy Call
    </CtaButton>
  )
}
