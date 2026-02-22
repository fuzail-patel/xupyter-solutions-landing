import { cn } from "@/lib/utils";

interface EyeBrowProps {
  text: string;
  className?: string;
  showDot?: Boolean;
}

export default function EyeBrow({ text, className, showDot=true }: EyeBrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-muted-foreground",
        className
      )}
    >
      {showDot && <span className="size-2.5 rounded-full bg-primary shrink-0" />}
      <span>{text}</span>
    </div>
  );
}
