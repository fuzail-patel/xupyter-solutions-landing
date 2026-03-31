import { cn } from "@/utils/common"
import Link from "next/link";

interface NavSplitLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavSplitLink({ href, label, active }: NavSplitLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative py-2 group transition-all duration-300 font-bold text-[14px] flex flex-col items-center",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <span className="relative z-10 px-1 transition-transform duration-300 group-hover:-translate-y-0.5">
        {label}
      </span>

      {/* Active/Hover Indicator - Centered Pill */}
      <span
        className={cn(
          "absolute bottom-0 h-1 rounded-full bg-primary transition-all duration-500 ease-spring",
          active 
            ? "w-4 opacity-100 translate-y-0" 
            : "w-0 opacity-0 translate-y-1 group-hover:w-2 group-hover:opacity-50 group-hover:translate-y-0"
        )}
      />
      
      {/* Subtle Glow Background */}
      <span 
        className={cn(
          "absolute inset-0 -z-10 bg-primary/5 blur-xl rounded-full transition-opacity duration-500",
          active ? "opacity-100 scale-125" : "opacity-0 group-hover:opacity-40"
        )}
      />
    </Link>
  );
}

