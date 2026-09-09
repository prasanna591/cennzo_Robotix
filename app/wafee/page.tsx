import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { HudPanel } from "@/components/technical/hud-panel";
import { StatBand } from "@/components/technical/stat-band";
import { HorizontalShowcase, type ShowcaseItem } from "@/components/sections/horizontal-showcase";
import { PhilosophyList } from "@/components/wafee/philosophy-list";
import { OverviewSection } from "@/components/wafee/overview-section";
import { EnvironmentsSection } from "@/components/wafee/environments-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Spotlight } from "@/components/motion/spotlight";
import { Parallax } from "@/components/motion/parallax";
import { MediaFrame } from "@/components/media/media-frame";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { IMAGES } from "@/lib/content/images";

const SHOWCASE_IMAGES = [
  IMAGES.welcomeScene,
  IMAGES.underwater,
  IMAGES.wafeeCinematic,
  IMAGES.airFlying,
  IMAGES.spaceTwo,
];

const CAPABILITY_IMAGES = [
  "/new_image/mobility.jpeg",
  "/new_image/manipulation.jpeg",
  "/new_image/perception.jpeg",
  "/new_image/autonomy.jpeg",
  "/new_image/telemetry.jpeg",
  "/new_image/collabration.jpeg",
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("wafeePage.meta");
  return { title: t("title"), description: t("description") };
}

type StatCopy = { label: string; sub: string };
type SpecCopy = { label: string; value: string; note: string };
type CapabilityCopy = { index: string; name: string; description: string };

export default async function WafeePage() {
  const t = await getTranslations("wafeePage");
  const stats = t.raw("stats.items") as StatCopy[];
  const specs = t.raw("reference.specs") as SpecCopy[];
  const capabilities = t.raw("capabilities.items") as CapabilityCopy[];

  const domainItems: ShowcaseItem[] = (
    t.raw("showcase.items") as { title: string; tag: string; body: string }[]
  ).map((item, i) => ({
    title: item.title,
    tag: item.tag,
    body: item.body,
    img: SHOWCASE_IMAGES[i],
  }));

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={<>{t("hero.intro")}</>}
        meta={t("hero.meta")}
      />

      <section className="relative border-b border-black/[0.08]">
        <StatBand
          stats={[
            { value: 178, suffix: "", label: stats[0].label, sub: stats[0].sub },
            { value: 5, suffix: "", label: stats[1].label, sub: stats[1].sub },
            { value: 6, suffix: "", label: stats[2].label, sub: stats[2].sub },
            { value: 9, suffix: "", label: stats[3].label, sub: stats[3].sub },
          ]}
        />
      </section>

      <OverviewSection />

      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto grid w-full max-w-[1440px] gap-16 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow={t("philosophy.eyebrow")} lines={[t("philosophy.line1"), t("philosophy.line2")]} />
            <PhilosophyList />
          </div>
          <div className="flex items-center lg:pt-24">
            <HudPanel className="w-full" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-black/[0.08] py-section">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <MediaFrame
                code="IMG-04"
                label={t("media.label")}
                ratio="3/2"
                tag="Reference"
                src="/new_image/wafee_five%20elemnet.png"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-[10px] uppercase leading-loose tracking-[0.25em] text-faint">
              {t("media.captionA")}
              <span className="block text-accent">{t("media.captionB")}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <HorizontalShowcase
        eyebrow={t("showcase.eyebrow")}
        lines={[t("showcase.line1"), t("showcase.line2")]}
        items={domainItems}
      />

      <EnvironmentsSection />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("reference.eyebrow")}
            lines={[t("reference.line1"), t("reference.line2")]}
          />
          <StaggerGroup stagger={0.04} className="mt-8 border-t border-black/[0.1]">
            {specs.map((spec) => (
              <StaggerItem key={spec.label}>
                <div className="group relative grid grid-cols-[110px_1fr] items-baseline gap-x-6 border-b border-black/[0.1] px-2 py-6 transition-colors duration-300 hover:bg-graphite md:grid-cols-[200px_260px_1fr] md:px-4 md:py-7">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-teal transition-transform duration-500 ease-out group-hover:scale-y-100"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {spec.label}
                  </span>
                  <span className="text-lg font-semibold tracking-tight text-bone md:text-2xl">
                    {spec.value}
                  </span>
                  <span className="col-span-2 text-sm text-mist md:col-span-1">
                    {spec.note}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl font-mono text-[10px] leading-relaxed tracking-[0.08em] text-faint">
              {t("reference.disclaimer")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08] bg-charcoal/50">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("capabilities.eyebrow")}
            lines={[t("capabilities.line1"), t("capabilities.line2")]}
          />
          <Spotlight>
            <StaggerGroup
              stagger={0.07}
              className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-3"
            >
              {capabilities.map((capability, i) => (
                <StaggerItem key={capability.index}>
                  <TiltCard className="h-full">
                    <article className="spotlight-card group relative flex h-full flex-col overflow-hidden bg-graphite transition-colors duration-500 hover:bg-charcoal/60">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 z-10 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
                      />
                      <div className="relative h-44 shrink-0 overflow-hidden md:h-52">
                        <Image
                          src={CAPABILITY_IMAGES[i]}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-8 md:p-10">
                        <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                          {capability.index}
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
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Spotlight>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-black/[0.08] bg-graphite p-8 shadow-soft md:flex-row md:items-center md:p-10">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                {t("capabilities.tag")}
              </span>
              <p className="text-sm leading-relaxed text-mist">
                {t("capabilities.note")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/platform" }}
        secondary={{ label: t("cta.secondary"), href: "/contact" }}
      />
    </main>
  );
}