"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 18 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    if (reduced) return;
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
    return unsub;
  }, [spring, reduced, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {reduced ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}

export function StatBand({
  stats,
}: {
  stats: { value: number; suffix?: string; label: string; sub: string }[];
}) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-black/[0.08] bg-graphite px-8 py-12 shadow-lift md:px-14 md:py-16"
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.08),transparent_68%)] blur-2xl"
        />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`lg:border-l lg:border-black/[0.08] lg:pl-8 ${
                i === 0 ? "lg:border-l-0 lg:pl-0" : ""
              }`}
            >
              <p className="text-5xl font-semibold tracking-tight text-bone md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function StatBandSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative -mt-10 border-b border-black/[0.08] md:-mt-16">
      {children}
    </section>
  );
}
