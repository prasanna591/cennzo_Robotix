import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { MediaFrame } from "@/components/media/media-frame";
import { BackgroundObjects } from "@/components/decor/background-objects";
import { SpecList } from "@/components/technology/spec-list";
import { DomainGrid } from "@/components/applications/domain-grid";
import { ScaleMedia } from "@/components/applications/scale-media";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("appsPage.meta");
  return { title: t("title"), description: t("description") };
}

type Tone = {
  chip: string;
  chipActive: string;
  dot: string;
  hairline: string;
  ghost: string;
  bar: string;
  noteBorder: string;
};

const DOMAIN_IMAGES: Record<string, string> = {
  "industrial-inspection": "/images/img-d1-inspection.webp",
  "energy-utilities": "/images/img-d2-energy.webp",
  "disaster-response": "/images/img-d3-disaster.webp",
  "fire-hazardous": "/images/img-d4-fire.webp",
  "marine-offshore": "/images/img-d5-marine.webp",
  mining: "/images/img-d6-mining.webp",
  logistics: "/images/img-d7-logistics.webp",
  "defense-research": "/images/img-d8-defense.webp",
  "space-robotics": "/images/img-d9-space.webp",
};

const TONES: Record<string, Tone> = {
  "industrial-inspection": {
    chip: "border-blue-500/30 bg-blue-500/[0.06] text-blue-600",
    chipActive: "group-hover:border-blue-500/40 group-hover:text-blue-600",
    dot: "bg-blue-500/40 group-hover:bg-blue-600",
    hairline: "via-blue-500/50",
    ghost: "text-blue-600/[0.07]",
    bar: "bg-gradient-to-r from-blue-600 to-cyan-500",
    noteBorder: "border-blue-500/60",
  },
  "energy-utilities": {
    chip: "border-amber-500/30 bg-amber-500/[0.07] text-amber-600",
    chipActive: "group-hover:border-amber-500/40 group-hover:text-amber-600",
    dot: "bg-amber-500/40 group-hover:bg-amber-600",
    hairline: "via-amber-500/50",
    ghost: "text-amber-500/[0.09]",
    bar: "bg-gradient-to-r from-amber-500 to-orange-500",
    noteBorder: "border-amber-500/60",
  },
  "disaster-response": {
    chip: "border-rose-500/30 bg-rose-500/[0.06] text-rose-600",
    chipActive: "group-hover:border-rose-500/40 group-hover:text-rose-600",
    dot: "bg-rose-500/40 group-hover:bg-rose-600",
    hairline: "via-rose-500/50",
    ghost: "text-rose-600/[0.07]",
    bar: "bg-gradient-to-r from-rose-600 to-red-500",
    noteBorder: "border-rose-500/60",
  },
  "fire-hazardous": {
    chip: "border-orange-500/30 bg-orange-500/[0.07] text-orange-600",
    chipActive: "group-hover:border-orange-500/40 group-hover:text-orange-600",
    dot: "bg-orange-500/40 group-hover:bg-orange-600",
    hairline: "via-orange-500/50",
    ghost: "text-orange-500/[0.09]",
    bar: "bg-gradient-to-r from-orange-600 to-amber-500",
    noteBorder: "border-orange-500/60",
  },
  "marine-offshore": {
    chip: "border-cyan-500/30 bg-cyan-500/[0.06] text-cyan-700",
    chipActive: "group-hover:border-cyan-500/40 group-hover:text-cyan-700",
    dot: "bg-cyan-500/40 group-hover:bg-cyan-600",
    hairline: "via-cyan-500/50",
    ghost: "text-cyan-600/[0.08]",
    bar: "bg-gradient-to-r from-cyan-600 to-sky-500",
    noteBorder: "border-cyan-500/60",
  },
  mining: {
    chip: "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-700",
    chipActive: "group-hover:border-emerald-500/40 group-hover:text-emerald-700",
    dot: "bg-emerald-500/40 group-hover:bg-emerald-600",
    hairline: "via-emerald-500/50",
    ghost: "text-emerald-600/[0.08]",
    bar: "bg-gradient-to-r from-emerald-600 to-teal",
    noteBorder: "border-emerald-500/60",
  },
  logistics: {
    chip: "border-violet-500/30 bg-violet-500/[0.06] text-violet-600",
    chipActive: "group-hover:border-violet-500/40 group-hover:text-violet-600",
    dot: "bg-violet-500/40 group-hover:bg-violet-600",
    hairline: "via-violet-500/50",
    ghost: "text-violet-600/[0.07]",
    bar: "bg-gradient-to-r from-violet-600 to-purple-500",
    noteBorder: "border-violet-500/60",
  },
  "defense-research": {
    chip: "border-indigo-500/30 bg-indigo-500/[0.06] text-indigo-600",
    chipActive: "group-hover:border-indigo-500/40 group-hover:text-indigo-600",
    dot: "bg-indigo-500/40 group-hover:bg-indigo-600",
    hairline: "via-indigo-500/50",
    ghost: "text-indigo-600/[0.07]",
    bar: "bg-gradient-to-r from-indigo-600 to-blue-500",
    noteBorder: "border-indigo-500/60",
  },
  "space-robotics": {
    chip: "border-fuchsia-400/30 bg-fuchsia-400/[0.08] text-fuchsia-300",
    chipActive: "",
    dot: "bg-fuchsia-400/50 group-hover:bg-fuchsia-300",
    hairline: "via-fuchsia-400/50",
    ghost: "text-white/[0.05]",
    bar: "bg-gradient-to-r from-fuchsia-500 to-violet-500",
    noteBorder: "border-fuchsia-400/60",
  },
};

type Domain = {
  id: string;
  index: string;
  name: string;
  tag: string;
  intro: string;
  missions: string[];
  note?: string;
};

export default async function ApplicationsPage() {
  const t = await getTranslations("appsPage");
  const domains = t.raw("domains") as Domain[];

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={t("hero.intro")}
        meta={t("hero.meta")}
      />

      <section className="relative overflow-hidden border-b border-black/[0.08] py-section">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <MediaFrame
                code="IMG-06"
                label={t("media.label")}
                ratio="21/9"
              src="/images/img-06-mission-configs.webp"
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
          className="hairline-spectrum absolute inset-x-0 top-0 h-px opacity-70"
        />
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow={t("matrix.eyebrow")}
            lines={[t("matrix.line1"), t("matrix.line2")]}
            body={<p>{t("matrix.body")}</p>}
          />
          <div className="mt-14">
            <DomainGrid
              domains={domains.map((d) => ({
                id: d.id,
                index: d.index,
                name: d.name,
                tag: d.tag,
                missions: d.missions.length,
                img: DOMAIN_IMAGES[d.id],
                bar: TONES[d.id].bar,
                chip: `${TONES[d.id].chip} ${TONES[d.id].chipActive}`,
              }))}
            />
          </div>
        </div>
      </section>

      {domains.map((domain, i) => {
        const odd = i % 2 === 1;
        const tone = TONES[domain.id];
        const frontier = domain.id === "space-robotics";
        return (
          <section
            key={domain.id}
            id={domain.id}
            className={`relative scroll-mt-24 overflow-hidden border-b border-black/[0.08] ${
              frontier ? "dark-section" : "bg-void"
            }`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${tone.hairline} to-transparent`}
            />
            <Parallax
              speed={0.18}
              className="pointer-events-none absolute -right-6 top-1/2 hidden select-none lg:block"
            >
              <span
                aria-hidden="true"
                className={`block font-mono text-[16rem] font-semibold leading-none ${tone.ghost}`}
              >
                {domain.index}
              </span>
            </Parallax>

            <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              <Reveal className={odd ? "lg:order-2" : ""}>
                <span
                  className={`inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] ${tone.chip}`}
                >
                  {domain.index} / 09
                  <span aria-hidden="true" className="h-px w-5 bg-current opacity-50" />
                  {domain.tag}
                </span>
                <h2 className="mt-5 text-headline font-semibold tracking-tight text-bone">
                  {domain.name}
                </h2>
                <p className="mt-6 max-w-md text-body leading-relaxed text-mist">
                  {domain.intro}
                </p>

                {domain.missions.length > 0 && (
                  <div className="mt-8 max-w-xl">
                    <SpecList
                      points={domain.missions}
                      dark={frontier}
                      dotClass={tone.dot}
                    />
                  </div>
                )}

                {domain.note && (
                  <Reveal delay={0.1}>
                    <p
                      className={`mt-8 max-w-xl border-l-2 pl-6 font-mono text-[11px] leading-relaxed tracking-[0.06em] ${tone.noteBorder} ${
                        frontier ? "text-white/60" : "text-faint"
                      }`}
                    >
                      {domain.note}
                    </p>
                  </Reveal>
                )}
              </Reveal>

              <ScaleMedia className={odd ? "lg:order-1" : ""}>
                <Reveal delay={0.1}>
                  <MediaFrame
                    code={`IMG-D${i + 1}`}
                    label={`${domain.name} — ${t("domainMediaSuffix")}`}
                    ratio="4/3"
                  />
                </Reveal>
              </ScaleMedia>
            </div>
          </section>
        );
      })}

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/contact" }}
        secondary={{ label: t("cta.secondary"), href: "/partnerships" }}
      />
    </main>
  );
}
