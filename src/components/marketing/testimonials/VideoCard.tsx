import { Card, SmartImage } from "@/components/ui"
import { PlayCircleIcon } from "@heroicons/react/24/solid"

interface VideoCardProps {
  name: string
  videoThumbnail?: string
}

export function VideoCard({
  name,
  videoThumbnail,
}: VideoCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-2xl border border-white/5 bg-background/60 backdrop-blur-lg group cursor-pointer p-0">
      <div className="relative h-72 md:h-80">
        <SmartImage
          src={videoThumbnail || '/images/placeholders/fallback-image.png'}
          alt={name}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition">
            <PlayCircleIcon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Name */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
          <div className="text-sm font-semibold text-white">
            {name}
          </div>
        </div>
      </div>
    </Card>
  )
}
