import type { FloatingFieldProps } from "@/lib/types/ui"

export function FloatingField({ id, label, children }: FloatingFieldProps) {
  return (
    <div className="relative w-full">
      {children}

      <label
        htmlFor={id}
        className="
          pointer-events-none
          absolute left-0
          top-4
          text-base
          font-semibold
          text-muted-foreground/60
          transition-all duration-200
          
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base
          
          peer-focus:-top-3
          peer-focus:text-xs
          peer-focus:uppercase
          peer-focus:tracking-wider
          peer-focus:text-primary
          peer-focus:font-bold
          
          /* Keep label floated if placeholder is NOT shown (i.e., there is text) */
          peer-[:not(:placeholder-shown)]:-top-3
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:uppercase
          peer-[:not(:placeholder-shown)]:tracking-wider
          peer-[:not(:placeholder-shown)]:font-bold
        "
      >
        {label}
      </label>
    </div>
  )
}
