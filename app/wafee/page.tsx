import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { HudPanel } from "@/components/technical/hud-panel";
import { StatBand } from "@/components/technical/stat-band";
import { HorizontalShowcase, type ShowcaseItem } from "@/components/sections/horizontal-showcase";
import { PhilosophyList } from "@/components/wafee/philosophy-list";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Spotlight } from "@/components/motion/spotlight";
import { Parallax } from "@/components/motion/parallax";
import { MediaFrame } from "@/components/media/media-frame";
import { BackgroundObjects } from "@/components/decor/background-objects";
import {
  ENVIRONMENTS,
  WAFEE_CAPABILITIES,
  REFERENCE_PLATFORM,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: "WAFEE Humanoid Robot | Cennzo Robotix",
  description:
    "Explore WAFEE, Cennzo Robotix's unified multi-environment humanoid robotics platform for intelligent mobility, manipulation, perception and autonomous operation.",
};

const STATUS_TAG: Record<string, string> = {
  earth: "Active",
  water: "Roadmap",
  fire: "Roadmap",
  air: "Research",
  space: "Vision",
};

const DOMAIN_ITEMS: ShowcaseItem[] = ENVIRONMENTS.map((env) => ({
  title: env.name,
  tag: STATUS_TAG[env.id] ?? "Concept",
  body: env.description,
}));

export default function WafeePage() {
  return (
    <main>
      <PageHero
        eyebrow="WAFEE — Unified Multi-Environment Humanoid Platform"
        lines={["A Humanoid Designed For", "The World *Beyond The Lab.*"]}
        intro={
          <>
            WAFEE is Cennzo Robotix&rsquo;s flagship humanoid robotics platform.
            Its architecture combines human-scale mobility, high-performance
            actuation, multimodal perception, intelligent control and
            environmental protection into one modular robotic system.
          </>
        }
        meta="WAFEE is an engineering platform under development."
      />

      <section className="relative border-b border-black/[0.08]">
        <StatBand
          stats={[
            {
              value: 178,
              suffix: "",
              label: "cm stature",
              sub: "Human-scale form factor built for a world sized for people.",
            },
            {
              value: 5,
              suffix: "",
              label: "mission domains",
              sub: "One architecture targeting land, sea, fire, air and space.",
            },
            {
              value: 6,
              suffix: "",
              label: "core capabilities",
              sub: "Mobility, manipulation, perception, autonomy and more.",
            },
            {
              value: 9,
              suffix: "",
              label: "system attributes",
              sub: "From electric actuation to continuous health monitoring.",
            },
          ]}
        />
      </section>

      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto grid w-full max-w-[1440px] gap-16 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Design Philosophy" lines={["Five Words That", "Shape *The Machine.*"]} />
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
                label="WAFEE Sensory Array — Close-Up Concept"
                ratio="16/9"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-[10px] uppercase leading-loose tracking-[0.25em] text-faint">
              Every sensor array is engineered to keep WAFEE aware
              <span className="block text-accent">— even when the world goes dark.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <HorizontalShowcase
        eyebrow="Mission Domains"
        lines={["One Platform.", "Five ~Frontiers.~"]}
        items={DOMAIN_ITEMS}
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow="Reference Platform"
            lines={["The Architecture", "At A Glance."]}
          />
          <StaggerGroup stagger={0.04} className="mt-14 border-t border-black/[0.1]">
            {REFERENCE_PLATFORM.map((spec) => (
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
              Published values represent the reference platform architecture.
              Performance figures are design targets unless explicitly
              identified as validated results.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08] bg-charcoal/50">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow="Capabilities"
            lines={["What WAFEE", "Is Built To *Do.*"]}
          />
          <Spotlight>
            <StaggerGroup
              stagger={0.07}
              className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-3"
            >
              {WAFEE_CAPABILITIES.map((capability) => (
                <StaggerItem key={capability.index}>
                  <TiltCard className="h-full">
                    <article className="spotlight-card group relative h-full overflow-hidden bg-graphite p-8 transition-colors duration-500 hover:bg-charcoal/60 md:p-10">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-teal transition-transform duration-700 ease-out group-hover:scale-x-100"
                      />
                      <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                        {capability.index}
                      </p>
                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-bone md:text-2xl">
                        {capability.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-mist">
                        {capability.description}
                      </p>
                    </article>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Spotlight>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-black/[0.08] bg-graphite p-8 shadow-soft md:flex-row md:items-center md:p-10">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                Transparency
              </span>
              <p className="text-sm leading-relaxed text-mist">
                WAFEE is an engineering platform under development. Environmental
                claims will be released progressively after controlled laboratory
                testing, subsystem qualification and full-system validation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={["One *Platform.*", "Many ~Missions.~"]}
        body="See how WAFEE adapts across mission configurations."
        primary={{ label: "Explore the Platform Architecture", href: "/platform" }}
        secondary={{ label: "Talk To Us", href: "/contact" }}
      />
    </main>
  );
}
