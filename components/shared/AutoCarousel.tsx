"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import type { AutoCarouselProps } from "@/lib/types/ui"

export default function AutoCarousel({
  slides,
  interval = 8000,
  className,
  controlsPlacement = "outside",
  pauseOnHover = true,
}: AutoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = slides.length

  useEffect(() => {
    if (!totalSlides || isPaused) return

    const start = Date.now()

    const progressInterval = window.setInterval(() => {
      const elapsed = Date.now() - start
      const ratio = Math.min(elapsed / interval, 1)
      setProgress(ratio * 100)
    }, 100)

    const slideTimeout = window.setTimeout(() => {
      setActiveIndex((current) =>
        current === totalSlides - 1 ? 0 : current + 1
      )
      setProgress(0)
    }, interval)

    return () => {
      window.clearInterval(progressInterval)
      window.clearTimeout(slideTimeout)
    }
  }, [activeIndex, totalSlides, interval, isPaused])

  if (!totalSlides) return null

  const handlePause = () => setIsPaused(true)
  const handleResume = () => setIsPaused(false)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }

  /* ---------------------------------- */
  /* Premium Dots */
  /* ---------------------------------- */

  const dots = (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className="relative flex items-center justify-center"
          >
            {isActive ? (
              <span className="relative h-2 w-8 overflow-hidden rounded-full bg-border/60">
                <span
                  className="absolute left-0 top-0 h-full bg-foreground transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </span>
            ) : (
              <span className="h-2 w-2 rounded-full bg-border/70 transition-colors duration-300 hover:bg-border" />
            )}
          </button>
        )
      })}
    </div>
  )


  const hoverHandlers = pauseOnHover
    ? {
      onMouseEnter: handlePause,
      onMouseLeave: handleResume,
      onFocusCapture: handlePause,
      onBlurCapture: handleResume,
    }
    : {}

  /* ---------------------------------- */
  /* Inside Controls */
  /* ---------------------------------- */

  if (controlsPlacement === "inside") {
    return (
      <div
        className={cn("relative h-full w-full", className)}
        {...hoverHandlers}
      >
        <div className="h-full w-full">{slides[activeIndex]}</div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <div className="pointer-events-auto flex flex-col items-center gap-4">
            {dots}
          </div>
        </div>
      </div>
    )
  }

  /* ---------------------------------- */
  /* Outside Controls */
  /* ---------------------------------- */

  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...hoverHandlers}
    >
      <div>{slides[activeIndex]}</div>

      <div className="flex flex-col items-center gap-4">
        {dots}
      </div>
    </div>
  )
}
