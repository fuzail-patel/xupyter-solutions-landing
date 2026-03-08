"use client"

import React from "react"
import { User, Target, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "who-we-are", label: "Who we are?", icon: User },
  { id: "mission", label: "Our Mission", icon: Target },
  { id: "values", label: "Our Values", icon: Leaf },
]

interface AboutTabsProps {
  activeTab: string
  setActiveTab: (id: string) => void
}

/**
 * AboutTabs component displaying a horizontal row of clickable tab buttons.
 */
export default function AboutTabs({ activeTab, setActiveTab }: AboutTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4 mt-8 px-4 w-full">
      {TABS.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 gap-2",
              isActive
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                : "bg-card text-muted-foreground border-border hover:bg-muted/50 hover:border-border/80"
            )}
          >
            <div
              className={cn(
                "p-2 rounded-xl transition-colors",
                isActive ? "bg-white/10" : "bg-muted/50"
              )}
            >
              <Icon className={cn("size-5", isActive ? "text-primary-foreground" : "text-primary")} />
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">
              {tab.label}
            </span>
            {isActive && (
              <div className="h-0.5 w-8 bg-white/40 rounded-full mt-1 animate-in fade-in slide-in-from-bottom-1" />
            )}
          </button>
        )
      })}
    </div>
  )
}
