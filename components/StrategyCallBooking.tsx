"use client"

import { getCalApi } from "@calcom/embed-react"

import { CtaButton } from "@/components/custom/CtaButton"
import type { CtaVariant } from "@/types/ui"

type StrategyCallBookingProps = {
  variant?: CtaVariant
  className?: string
}

export default function StrategyCallBooking({
  variant = "primary",
  className,
}: StrategyCallBookingProps) {
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
