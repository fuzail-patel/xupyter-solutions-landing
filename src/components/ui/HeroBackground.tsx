"use client"

import { cn } from "@/utils/common"

interface HeroBackgroundProps {
  className?: string
  maskClassName?: string
}

export default function HeroBackground({ 
  className,
  maskClassName 
}: HeroBackgroundProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-background",
        className
      )}
      aria-hidden="true"
    >
      {/* Animated Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Glow - Bottom Left area, rotating */}
        <div 
          className="absolute -bottom-[10%] -left-[10%] w-[80%] h-[80%] rounded-full opacity-60 mix-blend-screen animate-blob-slow"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(120, 10, 10, 0.8) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Secondary Glow - Top Right area, counter-rotating */}
        <div 
          className="absolute -top-[15%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-40 mix-blend-screen animate-blob-slower"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(30, 10, 10, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        {/* Center Depth - Pulsing */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full opacity-30 animate-pulse-slow"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(60, 5, 5, 0.4) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
      </div>
      
      {/* 
        Professional fade-out mask. 
        Ensures the animated glows blend perfectly into the next sections.
      */}
      <div 
        className={cn(
          "absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-background via-background/40 to-transparent",
          maskClassName
        )}
      />
      
      {/* 
        Optional: Add a grain/noise texture for extra depth 
      */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  )
}
