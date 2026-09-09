"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { drawStroke, viewportOnce } from "@/lib/animations";

type NotEnoughItem = {
  label: string;
  body: string;
  icon: ReactNode;
};

const ICONS: ReactNode[] = [
  <path key="bolt" d="M13 2 L5 13 H11 L9 22 L19 9 H12 Z" strokeWidth="1.3" strokeLinejoin="round" />,
  <>
    <rect key="chip-r" x="5" y="5" width="14" height="14" rx="2" strokeWidth="1.3" />
    <path key="chip-p" d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" strokeWidth="1.3" />
  </>,
  <>
    <path key="shield-a" d="M12 2 L21 6 V12 C21 17 17 20.5 12 22 C7 20.5 3 17 3 12 V6 Z" strokeWidth="1.3" strokeLinejoin="round" />
    <path key="shield-b" d="M8.5 12 l2.5 2.5 L16 9.5" strokeWidth="1.3" strokeLinecap="round" />
  </>,
];

export function ApproachDiagram() {
  const reduced = useReducedMotion();
  const t = useTranslations("aboutApproach");
  const notEnough = t.raw("notEnough") as Omit<NotEnoughItem, "icon">[];
  const items: NotEnoughItem[] = notEnough.map((item, i) => ({
    ...item,
    icon: ICONS[i],
  }));

  return (
    <div className="mt-8">
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={reduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-graphite p-8 shadow-soft"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 group-hover:scale-x-100"
            />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8 text-faint transition-colors duration-300 group-hover:text-accent" aria-hidden="true">
              {item.icon}
            </svg>
            <h3 className="relative mt-6 inline-block text-lg font-semibold tracking-tight text-mist">
              {item.label}
              <motion.span
                aria-hidden="true"
                initial={reduced ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.65, 0, 0.35, 1] }}
                className="absolute left-0 top-1/2 h-[2px] w-full origin-left bg-accent/70"
              />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-faint">{item.body}</p>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.25em] text-accent">
              {t("notEnoughTag")}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-6 overflow-hidden rounded-3xl bg-ink p-8 shadow-lift md:p-12"
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.18),transparent_68%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,168,168,0.12),transparent_68%)] blur-2xl"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
              {t("synthesis.eyebrow")}
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              {t("synthesis.linePre")}{" "}
              <span className="text-teal">{t("synthesis.lineAccent")}</span>
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              {t("synthesis.body")}
            </p>
          </div>

          <motion.svg
            viewBox="0 0 520 260"
            fill="none"
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            aria-hidden="true"
          >
            {[52, 130, 208].map((y, i) => (
              <g key={y}>
                <circle cx="46" cy={y} r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
                <circle cx="46" cy={y} r="2.5" fill="rgba(255,255,255,0.55)" />
                <motion.path
                  d={`M60 ${y} C 180 ${y}, 240 130, 356 130`}
                  stroke={i === 1 ? "rgba(0,168,168,0.85)" : "rgba(21,94,239,0.75)"}
                  strokeWidth="1.6"
                  variants={drawStroke}
                  custom={i}
                />
              </g>
            ))}
            <motion.circle
              cx="392"
              cy="130"
              r="26"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.4"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              style={{ transformOrigin: "392px 130px" }}
            />
            <motion.circle
              cx="392"
              cy="130"
              r="38"
              stroke="rgba(21,94,239,0.35)"
              strokeWidth="1"
              strokeDasharray="3 6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.8, delay: 1.3 },
                },
              }}
            />
            <motion.text
              x="392"
              y="135"
              textAnchor="middle"
              className="fill-white font-mono text-[11px] tracking-[0.2em]"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, delay: 1.4 } },
              }}
            >
              WAFEE
            </motion.text>
            {(["labelA", "labelB", "labelC"] as const).map((key, i) => (
              <motion.text
                key={key}
                x="46"
                y={[52, 130, 208][i] + 30}
                textAnchor="middle"
                className="fill-white/40 font-mono text-[8px] uppercase tracking-[0.18em]"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 + i * 0.15 } },
                }}
              >
                {t(`synthesis.${key}`)}
              </motion.text>
            ))}
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
