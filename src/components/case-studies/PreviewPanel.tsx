import { SmartImage } from "@/components/ui"

export const PreviewPanel = ({ src, alt }: { src: string, alt: string }) => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-background">
      <div className="relative w-full h-full">
        <SmartImage
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        {/* Subtle overlay for better integration */}
        <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
