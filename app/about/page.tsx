import type { Metadata } from "next";
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
import { VALUES } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About Cennzo Robotix | Deep-Tech Robotics Company",
  description:
    "Cennzo Robotix is a deep-tech robotics company developing intelligent humanoid systems for demanding real-world environments.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        lines={["Engineering Intelligence", "For The *Real World.*"]}
        intro={
          <>
            Cennzo Robotix is a deep-tech robotics company focused on developing
            intelligent humanoid systems for demanding real-world environments.
          </>
        }
      />

      <section className="relative overflow-hidden border-b border-black/[0.08]">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal mode="fadeIn">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Who We Are
            </p>
          </Reveal>

          <h2 className="mt-8 max-w-5xl text-headline font-semibold leading-[1.08] tracking-[-0.02em] text-bone md:text-display">
            <ScrollFillText
              lines={[
                "We exist to put intelligence",
                "where humans *cannot safely go.*",
              ]}
            />
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-body leading-relaxed text-mist">
                We combine robotics, artificial intelligence, mechanical
                engineering, embedded systems, advanced materials, energy systems
                and autonomous control into integrated robotic platforms.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-body leading-relaxed text-mist">
                Our flagship platform,{" "}
                <span className="font-semibold text-bone">WAFEE</span>, represents
                our vision of a humanoid machine capable of adapting across
                multiple mission environments.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <StatBand
          stats={[
            {
              value: 7,
              suffix: "",
              label: "engineering disciplines",
              sub: "From actuation and materials to AI and autonomous control.",
            },
            {
              value: 5,
              suffix: "",
              label: "mission domains",
              sub: "Land, sea, fire, air — and eventually, space.",
            },
            {
              value: 9,
              suffix: "",
              label: "system attributes",
              sub: "The defining traits of the WAFEE reference architecture.",
            },
            {
              value: 6,
              suffix: "",
              label: "core values",
              sub: "The principles every engineering decision must satisfy.",
            },
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
                label="Inside the Cennzo Robotix Lab — Concept Visualization"
                ratio="16/9"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-[10px] uppercase leading-loose tracking-[0.25em] text-faint">
              Where disciplines converge
              <span className="block text-accent">— one team, one machine.</span>
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
            eyebrow="Our Approach"
            lines={["System Integration", "Is The *Breakthrough.*"]}
            body={
              <p>
                We believe the future of robotics will not be defined by one
                breakthrough component. It will be defined by system
                integration.
              </p>
            }
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
          <SectionHeading eyebrow="Our Values" lines={["What We *Hold To.*"]} />
          <StaggerGroup
            stagger={0.07}
            className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {VALUES.map((value, i) => (
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
        lines={["Bold Enough To Imagine", "*The Impossible.*"]}
        body="Disciplined enough to prove it."
        primary={{ label: "Partner With Us", href: "/partnerships" }}
        secondary={{ label: "Meet WAFEE", href: "/wafee" }}
      />
    </main>
  );
}
