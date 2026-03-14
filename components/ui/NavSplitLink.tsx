import Link from "next/link";
import { cn } from "@/lib/utils";

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
        "relative py-2 group transition-colors duration-200 font-semibold text-base",
        active ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <span className="block">
        {label}
      </span>

      {/* Dot indicator */}
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full bg-primary transition-all duration-200 ease-in-out",
          active 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"
        )}
      />
    </Link>
  );
}
