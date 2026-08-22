"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/buttons/button";
import { Magnetic } from "@/components/motion/magnetic";
import { DURATION, EASE, viewportOnce } from "@/lib/animations";

const DOMAIN_KEYS = [
  "domain1",
  "domain2",
  "domain3",
  "domain4",
  "domain5",
  "domain6",
  "domain7",
  "domain8",
  "domain9",
  "domain10",
  "domain11",
  "domain12",
  "domain13",
  "domain14",
] as const;

function MarqueeRow({ reverse = false, items }: { reverse?: boolean; items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden" aria-hidden="true">
      <div
        className={`flex shrink-0 items-center gap-0 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="px-6 text-[clamp(1.4rem,3vw,2.4rem)] font-semibold tracking-tight text-black/[0.18]">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ApplicationsSection() {
  const reduced = useReducedMotion();
  const t = useTranslations("home");
  const domains = DOMAIN_KEYS.map((key) => t(key));

  return (
    <section id="applications" className="relative overflow-hidden border-b border-black/[0.08]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-section md:px-10">
        <SectionHeading
          eyebrow="Applications"
          lines={[t("appsL1"), t("appsL2")]}
          body={
            <p>
              {t("appsBody")}
            </p>
          }
        />
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: DURATION.standard, ease: EASE.out, delay: 0.2 }}
          className="mt-10"
        >
          <Magnetic>
            <Button href="/applications" variant="ghost">
              {t("appsCta")}
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: DURATION.cinematic }}
        className="marquee-hover mt-12 space-y-2 border-y border-black/[0.08] py-8 md:space-y-3"
      >
        <MarqueeRow items={domains} />
        <MarqueeRow reverse items={domains} />
      </motion.div>

      <div className="h-16" aria-hidden="true" />
    </section>
  );
}
