import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

type SectionElement = "section" | "div"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  as?: SectionElement
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    children,
    className,
    containerClassName,
    as: Component = "section",
    ...rest
  },
  ref
) {
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={cn("py-16", className)}
      {...rest}
    >
      <div className={cn("max-w-7xl mx-auto px-6", containerClassName)}>
        {children}
      </div>
    </Component>
  )
})

export default Section
