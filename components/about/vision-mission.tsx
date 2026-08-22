"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { WordReveal } from "@/components/motion/word-reveal";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

function OrbitIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.1" transform="rotate(-24 12 12)" />
      <circle cx="20.6" cy="7.6" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function VisionMission() {
  const reduced = useReducedMotion();
  const t = useTranslations("aboutVm");

  const panel = (dark: boolean) => ({
    initial: reduced ? false : { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportOnce,
    transition: { duration: DURATION.cinematic, ease: EASE.out },
  });

  return (
    <section className="relative overflow-hidden border-b border-black/[0.08] py-section">
      <div
        aria-hidden="true"
        className="hairline-spectrum absolute inset-x-0 top-0 h-px opacity-70"
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {t("eyebrow")}
            </p>
            <h2 className="mt-6 max-w-2xl text-display font-semibold leading-[1.05] tracking-[-0.02em] text-bone">
              <WordReveal lines={[t("line1"), t("line2")]} />
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            {t("sideNote")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            {...panel(false)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.08] bg-graphite p-9 shadow-lift md:p-14"
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.08),transparent_68%)] blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  <TargetIcon />
                  {t("mission.label")}
                </span>
                <span className="font-mono text-[11px] tracking-[0.25em] text-faint">01</span>
              </div>
              <h3 className="mt-10 max-w-md text-2xl font-semibold leading-snug tracking-tight text-bone md:text-[1.9rem]">
                {t("mission.title1")}
                <span className="block text-mist">
                  {t("mission.titlePre")} <span className="text-accent">{t("mission.titleAccent")}</span>
                </span>
              </h3>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
                {t("mission.body")}
              </p>
            </div>
            <div className="relative mt-12 flex items-center gap-3 border-t border-black/[0.06] pt-6 font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
              {t("mission.footer")}
            </div>
          </motion.article>

          <motion.article
            {...panel(true)}
            transition={{ ...panel(true).transition, delay: 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-9 text-white shadow-lift md:p-14 lg:translate-y-12"
          >
            <div
              aria-hidden="true"
              className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,168,168,0.14),transparent_68%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_70%)] blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-teal">
                  <OrbitIcon />
                  {t("vision.label")}
                </span>
                <span className="font-mono text-[11px] tracking-[0.25em] text-white/40">02</span>
              </div>
              <h3 className="mt-10 max-w-md text-2xl font-semibold leading-snug tracking-tight md:text-[1.9rem]">
                {t("vision.title1")}
                <span className="block text-white/50">
                  {t("vision.titlePre")} <span className="text-teal">{t("vision.titleAccent")}</span>
                </span>
              </h3>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
                {t("vision.body")}
              </p>
            </div>
            <div className="relative mt-12 flex items-center gap-3 border-t border-white/[0.08] pt-6 font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-teal" />
              {t("vision.footer")}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
