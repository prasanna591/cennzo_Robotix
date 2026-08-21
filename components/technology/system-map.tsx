"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

type GroupId = "mind" | "core" | "limbs" | "frame" | "software";

const GROUPS: {
  id: GroupId;
  index: string;
  label: string;
  systems: string[];
  target: string;
  desc: string;
}[] = [
  {
    id: "mind",
    index: "A",
    label: "Perception & Intelligence",
    systems: ["03 · Perception", "04 · Compute & AI"],
    target: "perception",
    desc: "Sensor suite and onboard compute — how WAFEE understands and decides.",
  },
  {
    id: "core",
    index: "B",
    label: "Power & Thermal",
    systems: ["06 · Power", "07 · Thermal"],
    target: "power",
    desc: "Energy delivery and heat extraction — the endurance of the machine.",
  },
  {
    id: "limbs",
    index: "C",
    label: "Actuation & Control",
    systems: ["02 · Actuation", "05 · Control"],
    target: "actuation",
    desc: "Joints and the control stack — how intelligence becomes motion.",
  },
  {
    id: "frame",
    index: "D",
    label: "Structure & Materials",
    systems: ["01 · Mechanical", "08 · Materials"],
    target: "mechanical",
    desc: "Skeleton and skin — zoned materials for load, heat and pressure.",
  },
  {
    id: "software",
    index: "E",
    label: "Software Layer",
    systems: ["09 · Software"],
    target: "software",
    desc: "The modular stack flowing through every subsystem.",
  },
];

export function SystemMap() {
  const [hovered, setHovered] = useState<GroupId | null>(null);
  const reduced = useReducedMotion();

  const isOn = (id: GroupId) => hovered === id;
  const dim = hovered !== null;

  const jump = (target: string) => {
    const el = document.getElementById(target);
    if (!el) return;
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (t: HTMLElement, o?: object) => void };
      }
    ).__lenis;
    if (lenis && !reduced) lenis.scrollTo(el, { offset: -140 });
    else el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  const partClass = (id: GroupId, base: string) =>
    `${base} transition-all duration-300 ${
      isOn(id)
        ? "stroke-accent opacity-100"
        : dim
          ? "stroke-black/[0.18] opacity-45"
          : "stroke-black/[0.35] opacity-90"
    }`;

  return (
    <section className="relative overflow-hidden border-b border-black/[0.08] bg-graphite">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          Interactive Anatomy
        </p>
        <h2 className="mt-6 max-w-2xl text-display font-semibold leading-[1.05] tracking-[-0.02em] text-bone">
          One body. Nine{" "}
          <span className="text-accent">systems.</span>
        </h2>
        <p className="mt-4 max-w-xl font-mono text-[10px] uppercase leading-loose tracking-[0.22em] text-faint">
          Hover the figure or the list
          <span className="text-accent"> — click to dive deeper.</span>
        </p>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-500 ${
                hovered
                  ? "bg-[radial-gradient(circle,rgba(21,94,239,0.10),transparent_65%)] opacity-100"
                  : "bg-[radial-gradient(circle,rgba(21,94,239,0.05),transparent_65%)] opacity-70"
              }`}
            />
            <svg viewBox="0 0 400 560" fill="none" className="relative w-full" role="img" aria-label="WAFEE system anatomy diagram">
              {/* structure frame guides */}
              <g
                className={`transition-opacity duration-300 ${dim && !isOn("frame") ? "opacity-30" : "opacity-100"}`}
                onMouseEnter={() => setHovered("frame")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => jump("mechanical")}
                style={{ cursor: "pointer" }}
              >
                <line x1="52" y1="30" x2="52" y2="530" strokeDasharray="2 8" strokeWidth="1" className={partClass("frame", "")} />
                <line x1="348" y1="30" x2="348" y2="530" strokeDasharray="2 8" strokeWidth="1" className={partClass("frame", "")} />
                {[70, 190, 310, 430].map((y) => (
                  <g key={y}>
                    <line x1="44" y1={y} x2="60" y2={y} strokeWidth="1" className={partClass("frame", "")} />
                    <line x1="340" y1={y} x2="356" y2={y} strokeWidth="1" className={partClass("frame", "")} />
                  </g>
                ))}
              </g>

              {/* software layer — flowing data arcs */}
              <g
                onMouseEnter={() => setHovered("software")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => jump("software")}
                style={{ cursor: "pointer" }}
              >
                <motion.path
                  d="M84 210 C 84 120, 316 120, 316 210"
                  strokeDasharray="5 7"
                  strokeWidth="1.4"
                  className={`transition-all duration-300 ${
                    isOn("software") ? "stroke-teal" : "stroke-teal/50"
                  }`}
                  animate={reduced ? undefined : { strokeDashoffset: [0, -48] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M84 330 C 84 420, 316 420, 316 330"
                  strokeDasharray="5 7"
                  strokeWidth="1.4"
                  className={`transition-all duration-300 ${
                    isOn("software") ? "stroke-teal" : "stroke-teal/50"
                  }`}
                  animate={reduced ? undefined : { strokeDashoffset: [0, 48] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
                />
              </g>

              {/* limbs */}
              <g
                onMouseEnter={() => setHovered("limbs")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => jump("actuation")}
                style={{ cursor: "pointer" }}
              >
                <path d="M126 132 L102 238" strokeLinecap="round" strokeWidth="17" className={partClass("limbs", "")} />
                <path d="M102 238 L114 326" strokeLinecap="round" strokeWidth="15" className={partClass("limbs", "")} />
                <path d="M274 132 L298 238" strokeLinecap="round" strokeWidth="17" className={partClass("limbs", "")} />
                <path d="M298 238 L286 326" strokeLinecap="round" strokeWidth="15" className={partClass("limbs", "")} />
                <circle cx="117" cy="342" r="10" strokeWidth="2" className={partClass("limbs", "")} />
                <circle cx="283" cy="342" r="10" strokeWidth="2" className={partClass("limbs", "")} />
                <path d="M176 286 L166 396" strokeLinecap="round" strokeWidth="19" className={partClass("limbs", "")} />
                <path d="M166 396 L173 496" strokeLinecap="round" strokeWidth="16" className={partClass("limbs", "")} />
                <path d="M224 286 L234 396" strokeLinecap="round" strokeWidth="19" className={partClass("limbs", "")} />
                <path d="M234 396 L227 496" strokeLinecap="round" strokeWidth="16" className={partClass("limbs", "")} />
                <ellipse cx="177" cy="512" rx="17" ry="8" strokeWidth="2" className={partClass("limbs", "")} />
                <ellipse cx="223" cy="512" rx="17" ry="8" strokeWidth="2" className={partClass("limbs", "")} />
                {[[102, 238], [298, 238], [166, 396], [234, 396]].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" className="fill-accent/70 transition-opacity duration-300" style={{ opacity: isOn("limbs") ? 1 : 0.45 }} />
                ))}
              </g>

              {/* core */}
              <g
                onMouseEnter={() => setHovered("core")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => jump("power")}
                style={{ cursor: "pointer" }}
              >
                <rect x="148" y="112" width="104" height="142" rx="20" strokeWidth="2" className={partClass("core", "")} />
                <rect x="162" y="256" width="76" height="30" rx="12" strokeWidth="1.6" className={partClass("core", "")} />
                <circle cx="200" cy="168" r="17" strokeWidth="1.6" className={partClass("core", "")} />
                <motion.circle
                  cx="200"
                  cy="168"
                  r="7"
                  className="fill-accent"
                  animate={reduced ? undefined : { opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "200px 168px", opacity: isOn("core") ? 1 : 0.7 }}
                />
              </g>

              {/* mind */}
              <g
                onMouseEnter={() => setHovered("mind")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => jump("perception")}
                style={{ cursor: "pointer" }}
              >
                <circle cx="200" cy="62" r="34" strokeWidth="2" className={partClass("mind", "")} />
                <path d="M176 56 H224" strokeWidth="1.6" className={partClass("mind", "")} />
                <path d="M182 72 Q200 82 218 72" strokeWidth="1.6" className={partClass("mind", "")} />
                <rect x="192" y="96" width="16" height="16" strokeWidth="1.6" className={partClass("mind", "")} />
                {isOn("mind") && (
                  <>
                    <circle cx="188" cy="46" r="2" fill="#155EEF" />
                    <circle cx="212" cy="46" r="2" fill="#155EEF" />
                  </>
                )}
              </g>
            </svg>
          </motion.div>

          <div className="space-y-3">
            {GROUPS.map((group, i) => {
              const active = isOn(group.id);
              return (
                <motion.button
                  key={group.id}
                  initial={reduced ? false : { opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHovered(group.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(group.id)}
                  onBlur={() => setHovered(null)}
                  onClick={() => jump(group.target)}
                  className={`group block w-full cursor-pointer rounded-2xl border p-6 text-left transition-all duration-300 ${
                    active
                      ? "border-accent/40 bg-white shadow-lift"
                      : "border-black/[0.08] bg-white/60 hover:border-faint hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300 ${
                          active
                            ? "border-accent bg-accent text-white"
                            : "border-black/[0.12] text-faint group-hover:text-bone"
                        }`}
                      >
                        {group.index}
                      </span>
                      <span className="text-lg font-semibold tracking-tight text-bone md:text-xl">
                        {group.label}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`font-mono text-lg transition-all duration-300 ${
                        active ? "translate-x-1 text-accent" : "text-faint"
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist" style={{ paddingLeft: "3.25rem" }}>
                    {group.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2" style={{ paddingLeft: "3.25rem" }}>
                    {group.systems.map((s) => (
                      <span
                        key={s}
                        className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                          active
                            ? "border-accent/30 bg-accent/[0.06] text-accent"
                            : "border-black/[0.1] text-faint"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
