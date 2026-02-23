"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface SmartImageProps extends ImageProps {
    fallbackSrc?: string
    containerClassName?: string
}

export function SmartImage({
    src,
    alt,
    fallbackSrc = "/fallback-image.png",
    containerClassName,
    className,
    ...props
}: SmartImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const isFill = Boolean((props as ImageProps).fill)

    return (
        <div
            className={cn(
                "relative overflow-hidden",
                isFill ? "absolute inset-0" : "",
                containerClassName
            )}
        >
            {isLoading && (
                <Skeleton className="absolute inset-0 z-10" />
            )}

            <Image
                {...props}
                src={hasError ? fallbackSrc : src}
                alt={alt}
                className={cn(
                    "transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100",
                    hasError ?? 'object-fit',
                    className
                )}
                onLoadingComplete={() => setIsLoading(false)}
                onError={() => {
                    setHasError(true)
                    setIsLoading(false)
                }}
            />
        </div>
    )
}
