"use client";

import { type ReactNode } from "react";

export function BlueprintPanel({
  id,
  index,
  name,
  intro,
  children,
  note,
  dark = false,
  className = "",
  split = false,
}: {
  id?: string;
  index: string;
  name: string;
  intro: string;
  children?: ReactNode;
  note?: string;
  dark?: boolean;
  className?: string;
  split?: boolean;
}) {
  return (
    <article
      id={id}
      className={`group relative flex scroll-mt-32 flex-col overflow-hidden rounded-2xl border p-6 transition-colors duration-500 md:p-8 ${
        dark
          ? "dark-section border-white/10"
          : "border-black/[0.08] bg-graphite shadow-soft hover:border-faint"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent`}
      />

      {/* header */}
      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`font-mono text-5xl font-semibold leading-none tracking-tight md:text-6xl ${
            dark ? "text-white/[0.12]" : "text-black/[0.1]"
          }`}
        >
          {index}
        </span>
      </div>

      <div className={`relative ${split ? "lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-10" : ""}`}>
        <div>
          <h2 className="mt-4 text-headline font-semibold tracking-tight text-bone">
            {name}
          </h2>
          <p className="mt-3 max-w-2xl text-body leading-relaxed text-mist">
            {intro}
          </p>
        </div>

        {/* body */}
        <div className={split ? "mt-8 lg:mt-0" : "mt-8"}>
          {children}

          {note && (
            <p
              className={`mt-8 border-l-2 pl-5 text-sm leading-relaxed ${
                dark ? "border-teal/70 text-white/70" : "border-accent/60 text-bone"
              }`}
            >
              <span
                className={`mb-1 block font-mono text-[9px] uppercase tracking-[0.25em] ${
                  dark ? "text-teal/80" : "text-accent"
                }`}
              >
                Note
              </span>
              {note}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
