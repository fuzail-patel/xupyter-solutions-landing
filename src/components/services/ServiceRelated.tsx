"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/constants/services"
import { cn } from "@/utils/common"

export const ServiceRelated = () => {
  return (
    <section className="mt-12 md:mt-16 pt-8 border-t border-border/60">
      <div className="flex items-center justify-between mb-5 md:mb-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-muted-foreground">
          Other services
        </h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {SERVICES.slice(0, 4).map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className={cn(
              "group flex items-center justify-between rounded-[10px]",
              "border border-border/70 bg-card/70",
              "px-4 py-3 md:px-5 md:py-3.5",
              "transition-colors duration-200 hover:border-primary/70 hover:bg-card"
            )}
          >
            <span className="text-sm md:text-[15px] font-medium text-foreground">
              {service.title}
            </span>
            <ArrowRight
              size={16}
              className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
