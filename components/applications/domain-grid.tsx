"use client";

import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

export type DomainCard = {
  id: string;
  index: string;
  name: string;
  tag: string;
  missions: number;
};

export function DomainGrid({ domains }: { domains: DomainCard[] }) {
  const reduced = useReducedMotion();

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (t: HTMLElement, o?: object) => void };
      }
    ).__lenis;
    if (lenis && !reduced) lenis.scrollTo(el, { offset: -120 });
    else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((domain, i) => (
        <motion.button
          key={domain.id}
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => jump(domain.id)}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/[0.08] bg-graphite p-7 text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-faint hover:shadow-lift"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.08),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
          />
          <div className="relative flex items-start justify-between">
            <span className="font-mono text-[10px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
              {domain.index}
            </span>
            <span className="rounded-full border border-black/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-faint transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
              {domain.tag}
            </span>
          </div>
          <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-bone md:text-2xl">
            {domain.name}
          </h3>
          <div className="relative mt-6 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
              {domain.missions} mission{domain.missions === 1 ? "" : "s"}
            </span>
            <span
              aria-hidden="true"
              className={`font-mono text-lg transition-all duration-300 ${
                reduced
                  ? "text-faint"
                  : "translate-x-0 text-faint group-hover:translate-x-1.5 group-hover:text-accent"
              }`}
            >
              &rarr;
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
