import Link from "next/link"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import type { CtaButtonProps } from "@/types/ui"

export function CtaButton({
  variant,
  href,
  className,
  children,
  icon,
  iconPlacement = "right",
  buttonType,
  disabled,
  onClick,
}: CtaButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 group transition-all duration-200 font-bold",
    {
      "h-14 px-8 rounded-xl bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5":
        variant === "primary",
      "h-14 px-7 rounded-xl border border-border bg-transparent hover:bg-accent":
        variant === "secondary",
      "h-10 px-5 rounded-md bg-primary text-primary-foreground shadow-sm hover:shadow-md":
        variant === "header",
    },
    className
  )

  const defaultIcon = {
    primary: (
      <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
    ),
    secondary: (
      <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    ),
    header: (
      <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    ),
  }[variant]

  const finalIcon = icon ?? defaultIcon

  const content = (
    <>
      {iconPlacement === "left" && finalIcon}
      {children}
      {iconPlacement === "right" && finalIcon}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={buttonType ?? "button"}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
