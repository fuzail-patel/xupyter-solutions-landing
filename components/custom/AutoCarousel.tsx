'use client'

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import type { AutoCarouselProps } from "@/types/ui"

export function AutoCarousel({
  slides,
  interval = 8000,
  className,
  controlsPlacement = "outside",
  showProgress = true,
  pauseOnHover = true,
}: AutoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = slides.length

  useEffect(() => {
    if (!totalSlides || isPaused) {
      return
    }

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

  if (!totalSlides) {
    return null
  }

  const handlePause = () => setIsPaused(true)
  const handleResume = () => setIsPaused(false)

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }

  const dots = (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === activeIndex

        return (
          <button
            key={index}
            className={[
              "h-2 w-2 rounded-full",
              "transition-colors duration-300",
              isActive ? "bg-foreground" : "bg-border/80",
            ].join(" ")}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
          />
        )
      })}
    </div>
  )

  const progressBar = showProgress ? (
    <div className="h-0.5 w-24 md:w-32 rounded-full bg-border/60 overflow-hidden">
      <div
        className="h-full bg-foreground/80 transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  ) : null

  const hoverHandlers = pauseOnHover
    ? {
        onMouseEnter: handlePause,
        onMouseLeave: handleResume,
        onFocusCapture: handlePause,
        onBlurCapture: handleResume,
      }
    : {}

  if (controlsPlacement === "inside") {
    return (
      <div
        className={cn("relative h-full w-full", className)}
        {...hoverHandlers}
      >
        <div className="h-full w-full">{slides[activeIndex]}</div>
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <div className="pointer-events-auto flex flex-col items-center gap-3">
            {dots}
            {progressBar}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("flex flex-col gap-8", className)}
      {...hoverHandlers}
    >
      <div>{slides[activeIndex]}</div>
      <div className="flex flex-col items-center gap-3">
        {dots}
        {progressBar}
      </div>
    </div>
  )
}
