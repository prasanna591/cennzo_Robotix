import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
import { HorizontalShowcase, type ShowcaseItem } from "@/components/sections/horizontal-showcase";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("industriesPage.meta");
  return { title: t("title"), description: t("description") };
}

export default async function IndustriesPage() {
  const t = await getTranslations("industriesPage");
  const showcaseItems: ShowcaseItem[] = (
    t.raw("showcase.items") as { title: string; body: string }[]
  ).map((item) => ({
    title: item.title,
    tag: t("showcase.tag"),
    body: item.body,
  }));

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
      />

      <HorizontalShowcase
        eyebrow={t("showcase.eyebrow")}
        lines={[t("showcase.line1"), t("showcase.line2")]}
        items={showcaseItems}
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <MediaFrame
              code="IMG-09"
              label={t("media.label")}
              ratio="21/9"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-headline font-semibold leading-tight tracking-[-0.01em] text-bone">
              {t("value.title1")}
              <span className="mt-2 block text-mist">{t("value.title2")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-l-2 border-accent pl-8">
              <p className="text-body leading-relaxed text-mist">
                {t("value.quote1")}
              </p>
              <p className="mt-4 text-body leading-relaxed text-bone">
                {t("value.quote2")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/contact" }}
        secondary={{ label: t("cta.secondary"), href: "/applications" }}
      />
    </main>
  );
}
