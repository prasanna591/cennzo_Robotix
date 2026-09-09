"use client";

import { useTranslations } from "next-intl";
import { HorizontalShowcase } from "@/components/sections/horizontal-showcase";

const PRINCIPLE_KEYS = ["principle1", "principle2", "principle3", "principle4"] as const;

const PRINCIPLE_IMAGES = [
  "/new_image/human-compactability.jpeg",
  "/new_image/modularity.jpeg",
  "/new_image/intelligence.jpeg",
  "/new_image/resiliance.jpeg",
];

export function WhySection() {
  const t = useTranslations("home");

  const items = PRINCIPLE_KEYS.map((key, i) => ({
    title: t(`${key}Title`),
    tag: String(i + 1).padStart(2, "0"),
    body: t(`${key}Desc`),
    img: PRINCIPLE_IMAGES[i],
  }));

  return (
    <HorizontalShowcase
      eyebrow={t("whyEyebrow")}
      lines={[t("whyL1"), t("whyL2")]}
      items={items}
      headingScale="headline"
    >
      <p className="mt-2 max-w-2xl text-body leading-relaxed text-mist">
        {t("whyBodyPre")}
        <span className="font-semibold text-bone">{t("whyBodyBold")}</span>
        {t("whyBodyPost")}
      </p>
    </HorizontalShowcase>
  );
}
