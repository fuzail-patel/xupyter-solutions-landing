"use client"

import React from "react"

/**
 * MapLegend component displaying legend items for the world map.
 */
export default function MapLegend() {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-muted-foreground font-medium mt-6 px-4">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full border-2 border-[#9B8EC4] shrink-0" />
        <span>Our Client</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#6B3FA0] shrink-0" />
        <span>Global Presence</span>
      </div>
    </div>
  )
}
