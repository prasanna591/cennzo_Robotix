import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { ScrollFillText } from "@/components/motion/scroll-fill-text";
import { Parallax } from "@/components/motion/parallax";
import { MediaFrame } from "@/components/media/media-frame";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { StatBand } from "@/components/technical/stat-band";
import { VisionMission } from "@/components/about/vision-mission";
import { ApproachDiagram } from "@/components/about/approach-diagram";
import { Timeline } from "@/components/about/timeline";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutPage.meta");
  return { title: t("title"), description: t("description") };
}

type StatCopy = { label: string; sub: string };

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");
  const stats = t.raw("stats.items") as StatCopy[];
  const values = t.raw("values.items") as { title: string; description: string }[];

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={<>{t("hero.intro")}</>}
      />

      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal mode="fadeIn">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {t("whoWeAre.eyebrow")}
            </p>
          </Reveal>

          <h2 className="mt-8 max-w-5xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
            <ScrollFillText
              lines={[t("whoWeAre.fill1a"), t("whoWeAre.fill1b")]}
            />
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-body leading-relaxed text-mist">
                {t("whoWeAre.para1")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-body leading-relaxed text-mist">
                {t.rich("whoWeAre.para2", {
                  wafee: (chunks) => (
                    <span className="font-semibold text-bone">{chunks}</span>
                  ),
                })}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <StatBand
          stats={[
            { value: 7, suffix: "", label: stats[0].label, sub: stats[0].sub },
            { value: 5, suffix: "", label: stats[1].label, sub: stats[1].sub },
            { value: 9, suffix: "", label: stats[2].label, sub: stats[2].sub },
            { value: 6, suffix: "", label: stats[3].label, sub: stats[3].sub },
          ]}
        />
      </section>

      <VisionMission />

      <section className="relative overflow-hidden border-b border-black/[0.08] py-section">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <MediaFrame
                code="IMG-03"
                label={t("media.label")}
                ratio="16/9"
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

      <section className="relative border-b border-black/[0.08]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("approach.eyebrow")}
            lines={[t("approach.line1"), t("approach.line2")]}
            body={<p>{t("approach.body")}</p>}
          />
          <ApproachDiagram />
        </div>
      </section>

      <section className="relative border-b border-black/[0.08] bg-charcoal/50">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading eyebrow={t("values.eyebrow")} lines={[t("values.line1"), t("values.line2")]} />
          <StaggerGroup
            stagger={0.07}
            className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {values.map((value, i) => (
              <StaggerItem key={value.title}>
                <div className="group relative border-t border-black/[0.12] pt-6 transition-all duration-500 hover:-translate-y-1 hover:border-transparent">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
                  />
                  <p className="font-mono text-[10px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-bone">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Timeline />

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/partnerships" }}
        secondary={{ label: t("cta.secondary"), href: "/wafee" }}
      />
    </main>
  );
}
