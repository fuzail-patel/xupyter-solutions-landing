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
        "relative py-1 group transition-all duration-300 font-medium text-sm",
        active ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
      )}
    >
      <span className="relative z-10 block px-1">
        {label}
      </span>

      {/* Underline indicator */}
      <span
        className={cn(
          "absolute left-0 bottom-0 h-[0.5px] bg-primary transition-all duration-300 ease-out rounded-full",
          active 
            ? "w-full opacity-100" 
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40"
        )}
      />
      
      {/* Subtle background glow for active item */}
      {active && (
        <span className="absolute inset-0 -z-0 bg-primary/5 blur-md rounded-lg scale-110" />
      )}
    </Link>
  );
}

