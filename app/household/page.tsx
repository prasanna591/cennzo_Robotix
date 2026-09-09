import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { TiltCard } from "@/components/motion/tilt-card";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { MediaFrame } from "@/components/media/media-frame";
import { IMAGES } from "@/lib/content/images";

const FEATURE_IMAGES = [
  "/new_image/home_cleaning.png",
  "/new_image/friendlyrobot.png",
  IMAGES.doctor,
  "/new_image/household.jpeg",
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("householdPage.meta");
  return { title: t("title"), description: t("description") };
}

type FeatureCopy = { name: string; description: string };

export default async function HouseholdPage() {
  const t = await getTranslations("householdPage");
  const features = t.raw("features.items") as FeatureCopy[];

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={<>{t("hero.intro")}</>}
        meta={t("hero.meta")}
        media={{ src: "/new_image/friendlyrobot.png", alt: t("hero.imageAlt"), background: true, backgroundClass: "object-right" }}
      />

      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("vision.eyebrow")}
            lines={[t("vision.line1"), t("vision.line2")]}
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-body leading-relaxed text-mist">
              {t("vision.body")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("features.eyebrow")}
            lines={[t("features.line1"), t("features.line2")]}
          />
          <Spotlight>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <TiltCard key={feature.name} className="h-full">
                  <article className="spotlight-card group relative flex h-full flex-col overflow-hidden bg-graphite transition-colors duration-500 hover:bg-charcoal/60">
                    <div className="relative h-40 shrink-0 overflow-hidden md:h-44">
                      <Image
                        src={FEATURE_IMAGES[i]}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-8 md:p-9">
                      <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")} / 04
                      </p>
                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-bone md:text-2xl">
                        {feature.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-mist">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              ))}
            </div>
          </Spotlight>
        </div>
      </section>

      <section className="border-b border-black/[0.08] bg-charcoal/50">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-section md:px-10">
          <Reveal>
            <MediaFrame
              code="IMG-07"
              label="WAFEE"
              ratio="21/9"
              tag="Reference"
              src={IMAGES.wafeeStudio}
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/contact" }}
        secondary={{ label: t("cta.secondary"), href: "/wafee" }}
      />
    </main>
  );
}