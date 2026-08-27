"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MaskLines } from "@/components/motion/mask-lines";
import { Reveal } from "@/components/motion/reveal";
import { ENVIRONMENTS } from "@/lib/content/site";

const ENV_KEYS = {
  earth: { name: "earthName", domain: "earthDomain", desc: "earthDesc" },
  water: { name: "waterName", domain: "waterDomain", desc: "waterDesc" },
  fire: { name: "fireName", domain: "fireDomain", desc: "fireDesc" },
  air: { name: "airName", domain: "airDomain", desc: "airDesc" },
  space: { name: "spaceName", domain: "spaceDomain", desc: "spaceDesc" },
} as const;

const STATUS_KEYS: Record<string, string> = {
  "PRIMARY DEVELOPMENT": "statusPrimary",
  "ENGINEERING ROADMAP": "statusRoadmap",
  RESEARCH: "statusResearch",
  "LONG-TERM VISION": "statusVision",
};

const STATUS_STYLE: Record<string, string> = {
  "PRIMARY DEVELOPMENT": "border-accent/30 bg-accent/[0.06] text-accent",
  "ENGINEERING ROADMAP": "border-black/[0.12] bg-black/[0.03] text-mist",
  RESEARCH: "border-teal/30 bg-teal/[0.06] text-teal",
  "LONG-TERM VISION": "border-teal/30 bg-teal/[0.06] text-teal",
};

export function EnvironmentsSection() {
  const reduced = useReducedMotion();
  const tHome = useTranslations("home");

  return (
    <section id="environments" className="relative border-b border-black/[0.08]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <Reveal mode="fadeIn">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {tHome("envEyebrow")}
          </p>
        </Reveal>

        <h2 className="mt-8 max-w-3xl text-display font-semibold tracking-[-0.02em] text-bone">
          <MaskLines lines={[tHome("envTitle1"), tHome("envTitle2")]} lineClassName="text-bone" />
        </h2>

        <p className="mt-6 max-w-xl font-mono text-[10px] uppercase leading-loose tracking-[0.22em] text-faint">
          {tHome("envScrollA")}
          <span className="text-accent">{tHome("envScrollB")}</span>
        </p>

        <div className="mt-16">
          {ENVIRONMENTS.map((env, i) => (
            <div
              key={env.id}
              className="sticky mb-10 last:mb-0"
              style={{ top: `${88 + i * 26}px`, zIndex: i + 1 }}
            >
              <motion.article
                initial={reduced ? false : { opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid overflow-hidden rounded-3xl border border-black/[0.08] bg-graphite shadow-lift lg:min-h-[440px] lg:grid-cols-2"
              >
                <div className="relative order-2 flex flex-col justify-center p-8 md:p-14 lg:order-1">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-6 top-4 select-none font-mono text-[6rem] font-semibold leading-none text-black/[0.04] md:text-[8rem]"
                  >
                    {env.index}
                  </span>
                  <span
                    className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] ${
                      STATUS_STYLE[env.status] ?? STATUS_STYLE["ENGINEERING ROADMAP"]
                    }`}
                  >
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-current" />
                    {tHome(STATUS_KEYS[env.status] ?? "statusRoadmap")}
                  </span>
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                    {env.index} / 05 — {tHome(ENV_KEYS[env.id as keyof typeof ENV_KEYS].domain)}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-tight text-bone md:text-5xl">
                    {tHome(ENV_KEYS[env.id as keyof typeof ENV_KEYS].name)}
                  </h3>
                  <p className="mt-5 max-w-md text-body leading-relaxed text-mist">
                    {tHome(ENV_KEYS[env.id as keyof typeof ENV_KEYS].desc)}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-8 h-px w-24 origin-left bg-gradient-to-r from-accent to-teal"
                  />
                </div>

                <div className="relative order-1 min-h-[280px] overflow-hidden bg-charcoal/50 md:min-h-[360px] lg:order-2 lg:min-h-[440px]">
                  <Image
                    src={`/images/img-env-${env.id}.webp`}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-graphite to-transparent lg:hidden" />
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        <Reveal mode="fadeIn">
          <p className="mx-auto mt-12 max-w-2xl text-center font-mono text-[10px] leading-relaxed tracking-[0.08em] text-faint">
            {tHome("envDisclaimer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
