"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
import {
  SectionEyebrow,
  SectionRail,
} from "@/components/sections/section-eyebrow";
import { IMAGES } from "@/lib/content/images";

export function ImpactSection() {
  const t = useTranslations("home");

  return (
    <section className="relative border-b border-black/[0.08] bg-graphite">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent"
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
        <Reveal mode="fadeIn">
          <SectionEyebrow>{t("impactEyebrow")}</SectionEyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-3xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
            {t("impactL1")} <span className="text-mist">{t("impactL2")}</span>
          </h2>
        </Reveal>
        <SectionRail />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-8">
          <Reveal delay={0.1}>
            <MediaFrame
              code="IMG-07"
              label={t("impactEducationLabel")}
              ratio="4/3"
              tag="Reference"
              src={IMAGES.education}
            />
          </Reveal>
          <Reveal delay={0.2}>
            <MediaFrame
              code="IMG-08"
              label={t("impactDoctorLabel")}
              ratio="4/3"
              tag="Reference"
              src={IMAGES.homecareScene}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}