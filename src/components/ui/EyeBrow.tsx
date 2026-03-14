import { cn } from "@/utils/common"
import type { EyebrowProps } from "@/types/ui";

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
