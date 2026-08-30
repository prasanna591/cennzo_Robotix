"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type NavSystem = { id: string; index: string };

export function SystemsIndex({ systems }: { systems: NavSystem[] }) {
  const [active, setActive] = useState(systems[0]?.id ?? "");
  const reduced = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    systems.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [systems]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[76px] z-40 border-b border-black/[0.08] bg-void/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-3 overflow-x-auto px-6 py-3 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.25em] text-faint">
          System&nbsp;Index
        </span>
        <span aria-hidden="true" className="hidden h-3 w-px shrink-0 bg-black/10 sm:block" />
        <div className="flex items-center gap-1">
          {systems.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => jump(s.id)}
                aria-current={isActive ? "true" : undefined}
                className={`flex shrink-0 cursor-pointer items-center justify-center rounded-md px-2 py-1 font-mono text-[10px] tracking-[0.14em] transition-colors duration-200 ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-mist hover:bg-charcoal hover:text-bone"
                }`}
              >
                {s.index}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
