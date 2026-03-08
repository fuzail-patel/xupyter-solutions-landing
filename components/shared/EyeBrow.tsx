import { cn } from "@/lib/utils";
import type { EyebrowProps } from "@/lib/types/ui";

export default function EyeBrow({ text, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "eyebrow-pill",
        className
      )}
    >
      {text}
    </div>
  );
}