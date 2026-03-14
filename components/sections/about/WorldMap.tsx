"use client"

import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Numeric IDs for highlighted regions (India, Europe, Middle East)
const HIGHLIGHTED_IDS = [
  "356", // India
  "826", // UK
  "250", // France
  "276", // Germany
  "380", // Italy
  "724", // Spain
  "528", // Netherlands
  "756", // Switzerland
  "752", // Sweden
  "578", // Norway
  "682", // Saudi Arabia
  "784", // UAE
  "634", // Qatar
  "414", // Kuwait
  "512", // Oman
  "792", // Turkey
  "818", // Egypt
  "400", // Jordan
  "368", // Iraq
]

/**
 * WorldMap component implementing an interactive SVG map using react-simple-maps.
 * Highlights India, Europe, and Middle East regions by default.
 */
export default function WorldMap() {
  return (
    <div className="w-full bg-white rounded-[2rem] overflow-hidden aspect-video border border-border/40 shadow-sm">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
          center: [20, 10],
        }}
        className="w-full h-full"
      >
        <ZoomableGroup center={[20, 10]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = HIGHLIGHTED_IDS.includes(geo.id)
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "#6B3FA0" : "#ddd8f5"}
                    stroke="#ffffff"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: isHighlighted ? "#5a3487" : "#cfc9f0" },
                      pressed: { outline: "none" },
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}
