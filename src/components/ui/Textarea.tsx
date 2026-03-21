import { cn } from "@/utils/common"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const textareaVariants = cva(
  "flex w-full text-sm text-foreground transition-colors ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "min-h-20 rounded-md border border-input bg-background px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        minimal:
          "min-h-36 bg-transparent border-0 border-b-[0.5px] border-border px-0 text-base font-semibold focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none focus:border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }

