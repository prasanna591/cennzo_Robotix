"use client";

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
  "btn-sheen group inline-flex items-center gap-3 rounded-xl px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 active:translate-y-px";

const VARIANTS = {
  primary: "btn-primary text-white cursor-pointer hover:-translate-y-0.5",
  light:
    "bg-white text-[#0b1220] shadow-soft cursor-pointer hover:-translate-y-0.5 hover:bg-charcoal hover:text-bone hover:shadow-lift",
  ghost:
    "border border-steel bg-graphite/60 text-bone cursor-pointer hover:-translate-y-0.5 hover:border-faint hover:bg-graphite hover:shadow-soft",
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
