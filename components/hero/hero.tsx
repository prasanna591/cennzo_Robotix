"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/buttons/button";
import { BlurLines } from "@/components/motion/blur-lines";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { Telemetry } from "@/components/technical/telemetry";
import { useReady } from "@/hooks/use-ready";
import { useMediaQuery } from "@/hooks/use-media-query";
import { DURATION, EASE } from "@/lib/animations";

const ENVIRONMENT_KEYS = ["envEarth", "envWater", "envFire", "envAir", "envSpace"] as const;

function Atmosphere() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.cinematic + 0.6, ease: EASE.out }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_72%_28%,rgba(22,22,26,0.05),transparent_70%)]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_15%_85%,rgba(37,99,235,0.10),transparent_70%)]"
        {...(reduced
          ? {}
          : {
              animate: { x: [0, 60, 0], y: [0, -30, 0] },
              transition: {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_80%_65%,rgba(37,99,235,0.08),transparent_70%)]"
        {...(reduced
          ? {}
          : {
              animate: { x: [0, -45, 0], y: [0, 25, 0] },
              transition: {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,22,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,26,0.04) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-void to-transparent" />
    </motion.div>
  );
}

function ScrollCue() {
  const t = useTranslations("hero");
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
        {t("scroll")}
      </span>
      <span className="relative h-px w-10 overflow-hidden bg-black/10">
        <motion.span
          className="absolute inset-y-0 left-0 w-full bg-accent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
        />
      </span>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const ready = useReady();
  const t = useTranslations("hero");
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0]);
  const barOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
          transition: { duration: DURATION.standard, ease: EASE.out, delay },
        };

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      <Atmosphere />
      <BackgroundObjects variant="light" />

<motion.div
          style={reduced || isMobile ? undefined : { y: contentY, opacity: contentOpacity }}
          className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pb-14 pt-[120px] md:px-10"
        >
          <div className="max-w-3xl">
          <div>
            <motion.p
              {...enter(0.2)}
              className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {t("eyebrow")}
            </motion.p>

            <h1 className="text-hero font-bold uppercase tracking-[-0.02em] text-bone">
              <BlurLines
                key={ready ? "ready" : "hold"}
                lines={[t("line1"), t("line2")]}
                delay={0.15}
                start={Boolean(ready) || Boolean(reduced)}
                lineClassName={["text-bone", "text-accent"]}
              />
            </h1>

            <motion.p
              {...enter(0.55)}
              className="mt-8 max-w-2xl text-subhead text-mist"
            >
              {t("lede")}
            </motion.p>

            <motion.div {...enter(0.7)} className="mt-12 flex flex-wrap gap-4">
              <Button href="/wafee">{t("ctaPrimary")}</Button>
              <Button href="/contact" variant="ghost">
                {t("ctaSecondary")}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={reduced ? undefined : { opacity: barOpacity }}
        className="relative border-t border-black/[0.08]"
      >
        <motion.div {...enter(0.85)}>
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-5 md:px-10">
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.24em] text-faint sm:text-[11px]">
            {ENVIRONMENT_KEYS.map((key, i) => (
              <span key={key} className="whitespace-nowrap">
                <span className="text-mist">{t(key)}</span>
                {i < ENVIRONMENT_KEYS.length - 1 && (
                  <span className="mx-2 text-black/25">/</span>
                )}
              </span>
            ))}
          </p>
          <Telemetry />
          <div className="hidden sm:block">
            <ScrollCue />
          </div>
        </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
