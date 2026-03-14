"use client"
import { cn } from "@/utils/common"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"


interface Props {
  src: string
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({
  src,
  className,
  loop = true,
  autoplay = true,
}: Props) {
  return (
    <div className={cn("overflow-hidden flex items-center justify-center transform-gpu", className)}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />
    </div>
  )
}

