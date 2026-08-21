import Link from "next/link";
import type { ReactNode } from "react";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

const BASE =
  "group inline-flex items-center gap-3 px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300";

const VARIANTS = {
  primary:
    "bg-ember text-void hover:bg-[#ff6a45] cursor-pointer",
  ghost:
    "border border-steel text-bone hover:border-faint hover:bg-white/[0.04] cursor-pointer",
} as const;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}
