import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { MediaFrame } from "@/components/media/media-frame";
import { SystemsIndex } from "@/components/technology/systems-index";
import { BlueprintPanel } from "@/components/technology/blueprint-panel";
import { SpecTable } from "@/components/technology/spec-table";
import { LayerStack } from "@/components/technology/layer-stack";

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

// Illustrative engineering readiness per subsystem.
const READINESS: Record<string, number> = {
  mechanical: 0.85,
  actuation: 0.78,
  perception: 0.82,
  "compute-ai": 0.9,
  control: 0.88,
  power: 0.8,
  thermal: 0.76,
  materials: 0.74,
  software: 0.86,
};

export default async function TechnologyPage() {
  const t = await getTranslations("techPage");
  const systems = t.raw("systems") as TechSystem[];
  const nav = systems.map(({ id, index }) => ({ id, index }));

  const mechanical = systems.find((s) => s.id === "mechanical");
  const computeAi = systems.find((s) => s.id === "compute-ai");
  const control = systems.find((s) => s.id === "control");
  const rest = systems.filter(
    (s) => !["mechanical", "compute-ai", "control"].includes(s.id)
  );

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={t("hero.intro")}
        meta={t("hero.meta")}
      />

      {/* Blueprint archive — two editorial image plates */}
      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-section md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                <MediaFrame
                  code="IMG-05"
                  label={t("media.label")}
                  ratio="21/9"
                  src="/images/img-05-system-architecture.webp"
                />
                <MediaFrame
                  code="IMG-04"
                  label={t("media.label")}
                  ratio="21/9"
                  src="/images/img-04-sensory-closeup.webp"
                />
              </div>
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* System index rail */}
      <SystemsIndex systems={nav} />

      {/* Manifest lede */}
      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-6 py-section md:px-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              System Register
            </p>
            <h2 className="mt-5 text-display font-semibold leading-[1.05] tracking-[-0.02em] text-bone">
              Nine subsystems.{" "}
              <span className="text-accent">One machine.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-subhead leading-relaxed text-mist">
              Every joint, sensor and line of code is treated as a first-class
              engineering subsystem. Select a system to inspect its technical
              register below.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {systems.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist transition-colors duration-200 hover:text-accent"
                >
                  <span className="text-faint">{s.index}</span>
                  <span className="truncate group-hover:translate-x-1 transition-transform duration-200">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blueprint panel grid */}
      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="text-headline font-semibold tracking-tight text-bone">
                Technical Register
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
                {systems.length} sheets · v1.0 · confidential
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Featured: Mechanical Architecture */}
            {mechanical && (
              <BlueprintPanel
                id={mechanical.id}
                index={mechanical.index}
                name={mechanical.name}
                intro={mechanical.intro}
                note={mechanical.note}
                readiness={READINESS.mechanical}
              >
                <SpecTable points={mechanical.points ?? []} />
              </BlueprintPanel>
            )}

            {/* Featured (dark): Compute & AI */}
            {computeAi && (
              <BlueprintPanel
                id={computeAi.id}
                index={computeAi.index}
                name={computeAi.name}
                intro={computeAi.intro}
                note={computeAi.note}
                readiness={READINESS["compute-ai"]}
                dark
                className="lg:col-span-2 lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-10"
                split
              >
                <SpecTable points={computeAi.points ?? []} dark />
              </BlueprintPanel>
            )}

            {/* Featured: Control (layer stack) */}
            {control && (
              <BlueprintPanel
                id={control.id}
                index={control.index}
                name={control.name}
                intro={control.intro}
                note={control.note}
                readiness={READINESS.control}
                className="lg:col-span-2"
              >
                <LayerStack items={control.layers ?? []} />
              </BlueprintPanel>
            )}

            {/* Remaining systems */}
            {rest.map((system) => (
              <BlueprintPanel
                key={system.id}
                id={system.id}
                index={system.index}
                name={system.name}
                intro={system.intro}
                note={system.note}
                readiness={READINESS[system.id] ?? 0.8}
              >
                <SpecTable points={system.points ?? []} dark={false} />
              </BlueprintPanel>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        lines={[t("cta.line1"), t("cta.line2")]}
        body={t("cta.body")}
        primary={{ label: t("cta.primary"), href: "/research" }}
        secondary={{ label: t("cta.secondary"), href: "/safety" }}
      />
    </main>
  );
}
