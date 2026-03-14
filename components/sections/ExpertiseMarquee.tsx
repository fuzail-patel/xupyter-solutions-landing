"use client";

import Marquee from "react-fast-marquee";
import { useSectionReveal } from "@/lib/hooks/useSectionReveal";
import { animateFade } from "@/lib/animations";

export function ExpertiseMarquee() {
  const { ref, style } = useSectionReveal<HTMLDivElement>({
    autoAnimate: false,
    onReveal: (el) => {
      animateFade(el);
    },
    initialStyles: {
      opacity: 0,
    },
  });

  const items = [
    "ERP Systems",
    "CRM Platforms",
    "Internal Business Tools",
    "AI Agents",
    "AI Automation",
    "Workflow Automation",
    "Odoo Customization",
    "Zoho Integrations",
    "SAP Integrations",
    "API Integrations",
    "Payment Integrations",
    "Cloud Infrastructure",
    "Data Pipelines",
    "Admin & Operations Dashboards",
    "Enterprise Integrations",
    "Custom SaaS Platforms",
  ];

  return (
    <div ref={ref} style={style} className="pb-8 pt-4">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 text-center lg:text-left">
          Platforms & Systems We Work With
        </p>
      </div>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover
        autoFill
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-10 text-muted-foreground text-lg font-bold tracking-wide"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}