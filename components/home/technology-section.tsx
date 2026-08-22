"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const SYSTEM_KEYS = [
  { id: "mechanical", name: "techMechanicalName", summary: "techMechanicalSummary" },
  { id: "actuation", name: "techActuationName", summary: "techActuationSummary" },
  { id: "perception", name: "techPerceptionName", summary: "techPerceptionSummary" },
  { id: "compute", name: "techComputeName", summary: "techComputeSummary" },
  { id: "power", name: "techPowerName", summary: "techPowerSummary" },
  { id: "thermal", name: "techThermalName", summary: "techThermalSummary" },
  { id: "materials", name: "techMaterialsName", summary: "techMaterialsSummary" },
  { id: "software", name: "techSoftwareName", summary: "techSoftwareSummary" },
] as const;

export function TechnologySection() {
  const reduced = useReducedMotion();
  const t = useTranslations("home");
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="technology" className="relative border-b border-black/[0.08] bg-charcoal/50">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Technology"
            lines={[t("techL1"), t("techL2")]}
          />
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="shrink-0"
          >
            <Magnetic>
              <Button href="/technology" variant="ghost">
                {t("techCta")}
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        <div ref={listRef} className="relative mt-10 border-t border-black/[0.1] pl-6 md:pl-10">
          <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-black/[0.08]" />
          <motion.div
            aria-hidden="true"
            style={reduced ? { scaleY: 1 } : { scaleY: fill }}
            className="absolute bottom-0 left-0 top-0 w-[2px] origin-top bg-gradient-to-b from-accent to-teal"
          />
          <StaggerGroup stagger={0.06}>
          {SYSTEM_KEYS.map((system, i) => (
            <StaggerItem key={system.id}>
              <Link
                href={`/technology#${system.id}`}
                className="group relative grid cursor-pointer grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-black/[0.1] py-6 transition-colors duration-300 md:grid-cols-[80px_1fr_1.2fr_auto] md:py-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="font-mono text-[11px] tracking-[0.2em] text-faint transition-colors duration-300 group-hover:text-accent">
                  SYS·{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-mist transition-colors duration-300 group-hover:text-bone md:text-2xl">
                  {t(system.name)}
                </h3>
                <p className="col-span-2 max-w-xl text-sm leading-relaxed text-faint transition-colors duration-300 group-hover:text-mist md:col-span-1">
                  {t(system.summary)}
                </p>
                <span
                  aria-hidden="true"
                  className="hidden justify-self-end font-mono text-lg text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:block"
                >
                  →
                </span>
              </Link>
            </StaggerItem>
          ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
