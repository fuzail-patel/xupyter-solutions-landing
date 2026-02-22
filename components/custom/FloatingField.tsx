type FloatingFieldProps = {
  id: string
  label: string
  children: React.ReactNode
}

export function FloatingField({ id, label, children }: FloatingFieldProps) {
  return (
    <div
      className="
        relative rounded-lg
        bg-input
        px-4 pt-3 pb-2
        transition-colors
      "
    >
      {children}

      <label
        htmlFor={id}
        className="
          pointer-events-none
          absolute left-4
          top-3
          text-[0.75rem]
          uppercase tracking-wide
          text-muted-foreground
          transition-all duration-150

          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:text-sm

          peer-focus:top-2
          peer-focus:translate-y-0
          peer-focus:text-xs
        "
      >
        {label}
      </label>
    </div>
  )
}
