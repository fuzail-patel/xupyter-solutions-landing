import { Card, CardContent, Avatar, AvatarImage, AvatarFallback } from "@/components/ui"
import { StarIcon } from "@heroicons/react/24/solid"

interface TextCardProps {
  name: string
  role?: string
  content: string
  rating?: number
  avatar?: string
}

export function TextCard({
  name,
  role,
  content,
  rating = 5,
  avatar,
}: TextCardProps) {
  return (
    <Card className="h-full rounded-2xl border border-white/5 bg-background/60 backdrop-blur-lg p-0">
      <CardContent className="p-6 flex flex-col justify-between h-full">

        <div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {content}
          </p>

        </div>

        <div className="mt-8  pt-4 flex items-center gap-6 justify-between">
          <div className="flex items-center gap-3">
            <Avatar size="lg" className="border border-white/10 bg-muted">
              {avatar && <AvatarImage src={avatar} alt={name} className="object-cover" />}
              <AvatarFallback className="bg-primary/10 text-primary font-bold">
                {name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-semibold text-foreground">
                {name}
              </div>
              {role && (
                <div className="text-xs text-muted-foreground">
                  {role}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${i < rating
                  ? "text-primary"
                  : "text-muted-foreground/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
