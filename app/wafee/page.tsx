import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { HudPanel } from "@/components/technical/hud-panel";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Spotlight } from "@/components/motion/spotlight";
import { MediaFrame } from "@/components/media/media-frame";
import {
  WAFEE_CAPABILITIES,
  REFERENCE_PLATFORM,
} from "@/lib/content/site";

export const metadata: Metadata = {
  title: "WAFEE Humanoid Robot | Cennzo Robotix",
  description:
    "Explore WAFEE, Cennzo Robotix's unified multi-environment humanoid robotics platform for intelligent mobility, manipulation, perception and autonomous operation.",
};

const PHILOSOPHY = [
  "Human-Compatible",
  "Modular",
  "Intelligent",
  "Resilient",
  "Upgradeable",
];

export default function WafeePage() {
  return (
    <main>
      <PageHero
        eyebrow="WAFEE — Unified Multi-Environment Humanoid Platform"
        lines={["A Humanoid Designed For", "The World Beyond The Lab."]}
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

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Design Philosophy" lines={["Five Words That", "Shape The Machine."]} />
            <StaggerGroup stagger={0.08} className="mt-12 space-y-1">
              {PHILOSOPHY.map((word, i) => (
                <StaggerItem key={word}>
                  <p className="border-b border-black/[0.08] py-4 text-2xl font-semibold uppercase tracking-tight text-mist transition-colors duration-300 hover:text-bone md:text-3xl">
                    <span className="mr-6 font-mono text-xs tracking-[0.25em] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {word}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <div className="flex items-center lg:pt-24">
            <HudPanel className="w-full" />
          </div>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <MediaFrame
              code="IMG-04"
              label="WAFEE Sensory Array — Close-Up Concept"
              ratio="16/9"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow="Reference Platform"
            lines={["The Architecture", "At A Glance."]}
          />
          <StaggerGroup stagger={0.04} className="mt-14 border-t border-black/[0.1]">
            {REFERENCE_PLATFORM.map((spec) => (
              <StaggerItem key={spec.label}>
                <div className="group grid grid-cols-[110px_1fr] items-baseline gap-x-6 border-b border-black/[0.1] py-5 transition-colors duration-300 hover:bg-graphite/50 md:grid-cols-[200px_260px_1fr] md:py-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {spec.label}
                  </span>
                  <span className="text-lg font-semibold uppercase tracking-tight text-bone md:text-xl">
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

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading eyebrow="Capabilities" lines={["What WAFEE", "Is Built To Do."]} />
          <Spotlight>
          <StaggerGroup
            stagger={0.07}
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2 lg:grid-cols-3"
          >
            {WAFEE_CAPABILITIES.map((capability) => (
              <StaggerItem key={capability.index}>
                <TiltCard className="h-full">
                <article className="spotlight-card group h-full bg-graphite p-8 transition-colors duration-500 hover:bg-charcoal/60 md:p-10">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-faint transition-colors duration-300 group-hover:text-accent">
                    {capability.index}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold uppercase tracking-tight text-bone">
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
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <div className="border-l-2 border-accent pl-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Important Performance Language
              </p>
              <p className="mt-4 max-w-3xl text-subhead leading-relaxed text-bone">
                WAFEE is an engineering platform under development. Environmental
                claims will be released progressively after controlled laboratory
                testing, subsystem qualification and full-system validation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={["One Platform.", "Many Missions."]}
        body="See how WAFEE adapts across mission configurations."
        primary={{ label: "Explore the Platform Architecture", href: "/platform" }}
        secondary={{ label: "Talk To Us", href: "/contact" }}
      />
    </main>
  );
}
