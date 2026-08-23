"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type NavSystem = { id: string; index: string; name: string };

export function SystemRail({ systems }: { systems: NavSystem[] }) {
  const [active, setActive] = useState(systems[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const sections = systems
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((el) => activeObserver.observe(el));

    const rangeObserver = new IntersectionObserver(
      (entries) => {
        setVisible(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: "-5% 0px -5% 0px" }
    );
    sections.forEach((el) => rangeObserver.observe(el));

    const onScroll = () => {
      const first = sections[0];
      const last = sections[sections.length - 1];
      const start = first.offsetTop;
      const end = last.offsetTop + last.offsetHeight - window.innerHeight;
      setProgress(
        Math.min(Math.max(window.scrollY - start, 0), Math.max(end - start, 1)) /
          Math.max(end - start, 1)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      activeObserver.disconnect();
      rangeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [systems]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div
      aria-label="Systems quick navigation"
      className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center transition-all duration-500 lg:flex ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
      }`}
    >
      <span aria-hidden="true" className="h-8 w-px bg-gradient-to-b from-transparent to-black/25" />
      <div className="relative flex flex-col items-center py-1">
        <div
          aria-hidden="true"
          className="absolute bottom-1 left-1/2 top-1 w-px -translate-x-1/2 bg-black/[0.08]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1 left-1/2 top-1 w-[2px] origin-top bg-gradient-to-b from-accent to-teal transition-transform duration-150"
          style={{ transform: `translateX(-50%) scaleY(${progress})` }}
        />
        {systems.map((s) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => jump(s.id)}
              title={s.name}
              aria-label={`Jump to ${s.name}`}
              aria-current={isActive ? "true" : undefined}
              className={`group relative z-10 grid h-7 w-7 cursor-pointer place-items-center rounded-full border font-mono text-[8px] tracking-[0.08em] backdrop-blur-sm transition-all duration-300 ${
                isActive
                  ? "scale-110 border-transparent bg-ink text-white shadow-lift"
                  : "border-black/[0.12] bg-white/70 text-faint hover:border-accent/40 hover:text-accent"
              }`}
            >
              {s.index}
              <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md border border-white/10 bg-ink px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
                {s.name}
              </span>
            </button>
          );
        })}
      </div>
      <span aria-hidden="true" className="h-8 w-px bg-gradient-to-t from-transparent to-black/25" />
    </div>
  );
}
