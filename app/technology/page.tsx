import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { FlowStack } from "@/components/technical/flow-stack";
import { MediaFrame } from "@/components/media/media-frame";
import { SystemNav } from "@/components/technology/system-nav";
import { SpecList } from "@/components/technology/spec-list";
import { SystemMap } from "@/components/technology/system-map";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("techPage.meta");
  return { title: t("title"), description: t("description") };
}

type TechSystem = {
  id: string;
  index: string;
  name: string;
  intro: string;
  points?: string[];
  layers?: string[];
  note?: string;
};

export default async function TechnologyPage() {
  const t = await getTranslations("techPage");
  const systems = t.raw("systems") as TechSystem[];
  const nav = systems.map(({ id, index, name }) => ({ id, index, name }));

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={t("hero.intro")}
        meta={t("hero.meta")}
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-section md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <MediaFrame
                code="IMG-05"
                label={t("media.label")}
                ratio="21/9"
              src="/images/img-05-system-architecture.webp"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <SystemMap />

      <div className="relative">
        <SystemNav systems={nav} />
        <div className="h-10" />

        {systems.map((system) => {
          const dark = system.id === "compute-ai";
          return (
            <section
              key={system.id}
              id={system.id}
              className={`relative scroll-mt-24 overflow-hidden border-b border-black/[0.08] ${
                dark ? "dark-section" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                  dark ? "via-teal/60" : "via-accent/40"
                } to-transparent`}
              />
              <Parallax
                speed={0.18}
                className="pointer-events-none absolute -right-6 top-1/2 hidden select-none lg:block"
              >
                <span
                  aria-hidden="true"
                  className={`block font-mono text-[16rem] font-semibold leading-none ${
                    dark ? "text-white/[0.05]" : "text-black/[0.05]"
                  }`}
                >
                  {system.index}
                </span>
              </Parallax>

              <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <Reveal>
                  <p
                    className={`inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-[0.3em] ${
                      dark
                        ? "border-teal/30 bg-teal/[0.08] text-teal"
                        : "border-accent/25 bg-accent/[0.05] text-accent"
                    }`}
                  >
                    {system.index}
                  </p>
                  <h2 className="mt-5 text-headline font-semibold tracking-tight text-bone">
                    {system.name}
                  </h2>
                  <p className="mt-6 max-w-md text-body leading-relaxed text-mist">
                    {system.intro}
                  </p>
                </Reveal>

                <div>
                  {system.layers ? (
                    <FlowStack items={system.layers} />
                  ) : (
                    <SpecList points={system.points ?? []} dark={dark} />
                  )}
                  {system.note && (
                    <Reveal delay={0.1}>
                      <p
                        className={`mt-8 max-w-xl border-l-2 pl-6 text-sm leading-relaxed ${
                          dark
                            ? "border-teal/70 text-white/75"
                            : "border-accent/60 text-bone"
                        }`}
                      >
                        {system.note}
                      </p>
                    </Reveal>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/research" }}
        secondary={{ label: t("cta.secondary"), href: "/safety" }}
      />
    </main>
  );
}
