import { cn } from "@/utils/common"
import type { EyebrowProps } from "@/types/ui";

export default function EyeBrow({ text, className, ...props }: EyebrowProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "eyebrow-pill",
        className
      )}
      {...props}
    >
      {text}
    </div>
  );
}
