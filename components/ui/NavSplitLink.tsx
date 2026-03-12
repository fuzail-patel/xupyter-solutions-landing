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
      className={`relative inline-flex flex-col items-center overflow-hidden 
        h-[1.4em] leading-[1.4em] pb-3 group ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {/* Original text — slides out upward on hover */}
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full">
        {label}
      </span>

      {/* Duplicate text — slides in from below on hover */}
      <span
        aria-hidden="true"
        className="absolute top-full left-0 w-full text-center text-white block 
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
          group-hover:-translate-y-full"
      >
        {label}
      </span>

      {/* Dot indicator — springs up on hover, always visible if active */}
      <span
        className={` 
          absolute -bottom-1 left-1/2 -translate-x-1/2 
          w-1.25 h-1.25 rounded-full 
          transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
          ${active
            ? "bg-primary shadow-[0_0_6px_#a78bfa] scale-100"
            : "bg-primary shadow-[0_0_8px_#7c6cff] scale-0 group-hover:scale-100"
          } 
        `}
      />
    </Link>
  );
}
