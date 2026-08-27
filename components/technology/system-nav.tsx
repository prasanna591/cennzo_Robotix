"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type NavSystem = { id: string; index: string; name: string };

export function SystemNav({
  systems,
}: {
  systems: NavSystem[];
}) {
  const [active, setActive] = useState(systems[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    systems.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      const first = document.getElementById(systems[0]?.id ?? "");
      const last = document.getElementById(systems[systems.length - 1]?.id ?? "");
      if (!first || !last) return;
      const start = first.offsetTop;
      const end = last.offsetTop + last.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(window.scrollY - start, 0), Math.max(end - start, 1));
      setProgress(passed / Math.max(end - start, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [systems]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[84px] z-40 mx-auto w-full max-w-[1440px] px-6 md:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white/80 shadow-lift backdrop-blur-xl">
        <div className="flex items-center gap-1 overflow-x-auto p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="ml-2 hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] text-faint md:block">
            Systems
          </span>
          {systems.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-mist hover:bg-charcoal hover:text-bone"
                }`}
              >
                <span className={isActive ? "text-teal" : "text-faint group-hover:text-accent"}>
                  {s.index}
                </span>
                <span className="hidden lg:inline">{s.name}</span>
              </button>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent to-teal transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  );
}
