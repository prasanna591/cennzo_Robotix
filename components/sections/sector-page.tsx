import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { TiltCard } from "@/components/motion/tilt-card";
import { MediaFrame } from "@/components/media/media-frame";
import { MediaStrip } from "@/components/media/media-strip";
import { BackgroundObjects } from "@/components/decor/background-objects";

export type SectorNamespace =
  | "armyPage"
  | "aerospacePage"
  | "spacePage"
  | "defencePage";

type CapabilityCopy = { name: string; description: string };

export async function SectorPage({
  namespace,
  hero,
  pillarImages,
}: {
  namespace: SectorNamespace;
  hero: string;
  pillarImages: string[];
}) {
  const t = await getTranslations(namespace);
  const capabilities = t.raw("capabilities.items") as CapabilityCopy[];

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={<>{t("hero.intro")}</>}
        meta={t("hero.meta")}
      />

      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("overview.eyebrow")}
            lines={[t("overview.line1"), t("overview.line2")]}
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-body leading-relaxed text-mist">
              {t("overview.body")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("capabilities.eyebrow")}
            lines={[t("capabilities.line1"), t("capabilities.line2")]}
          />
          <Spotlight>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability, i) => (
                <TiltCard key={capability.name} className="h-full">
                  <article className="spotlight-card group relative flex h-full flex-col overflow-hidden bg-graphite transition-colors duration-500 hover:bg-charcoal/60">
                    <MediaStrip
                      src={pillarImages[i]}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                    </MediaStrip>
                    <div className="flex flex-1 flex-col p-8 md:p-9">
                      <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")} / 04
                      </p>
                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-bone md:text-2xl">
                        {capability.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-mist">
                        {capability.description}
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
              code={t("media.code")}
              label={t("media.label")}
              ratio="21/9"
              src={hero}
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/contact" }}
        secondary={{ label: t("cta.secondary"), href: "/industries" }}
      />
    </main>
  );
}