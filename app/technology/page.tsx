import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { FlowStack } from "@/components/technical/flow-stack";
import { MediaFrame } from "@/components/media/media-frame";
import { SystemNav } from "@/components/technology/system-nav";
import { SpecList } from "@/components/technology/spec-list";

export const metadata: Metadata = {
  title: "Humanoid Robotics Technology | Cennzo Robotix",
  description:
    "WAFEE is built as a vertically integrated robotic architecture — mechanical systems, actuation, perception, compute & AI, control, power, thermal management, materials and software.",
};

type TechSystem = {
  id: string;
  index: string;
  name: string;
  intro: string;
  points?: string[];
  layers?: string[];
  note?: string;
};

type SystemStyle = { band: string; teal: boolean; dark: boolean };

const STYLE: Record<string, SystemStyle> = {
  mechanical: { band: "bg-graphite", teal: false, dark: false },
  actuation: { band: "", teal: false, dark: false },
  perception: { band: "bg-charcoal/40", teal: true, dark: false },
  "compute-ai": { band: "", teal: true, dark: true },
  control: { band: "bg-graphite", teal: false, dark: false },
  power: { band: "", teal: false, dark: false },
  thermal: { band: "bg-charcoal/40", teal: true, dark: false },
  software: { band: "", teal: true, dark: true },
};

const SYSTEMS: TechSystem[] = [
  {
    id: "mechanical",
    index: "01",
    name: "Mechanical Architecture",
    intro:
      "A lightweight structural system provides the mechanical foundation for the robot.",
    points: [
      "High stiffness-to-weight ratio",
      "Controlled mass distribution",
      "Serviceability",
      "Modular joint interfaces",
      "Structural redundancy where required",
      "Protection of critical internal systems",
    ],
  },
  {
    id: "actuation",
    index: "02",
    name: "Actuation",
    intro: "Humanoid performance depends on the quality of its joints.",
    points: [
      "High torque density",
      "High efficiency",
      "Backdrivability where appropriate",
      "Thermal stability",
      "Position and torque control",
      "High-speed feedback",
      "Mechanical durability",
    ],
    note: "The platform is being developed around advanced electric motor and transmission technologies, including PMSM/BLDC-class architectures and high-performance servo control.",
  },
  {
    id: "perception",
    index: "03",
    name: "Perception",
    intro:
      "A robot cannot intelligently act without understanding its environment.",
    points: [
      "RGB cameras",
      "Depth sensing",
      "LiDAR where mission requirements justify it",
      "IMU",
      "Joint encoders",
      "Force/torque sensing",
      "Tactile sensing",
      "Environmental sensors",
      "Thermal sensing",
    ],
    note: "Sensor fusion converts raw measurements into a consistent representation of the robot and its environment.",
  },
  {
    id: "compute-ai",
    index: "04",
    name: "Compute & AI",
    intro:
      "Onboard computing supports the full intelligence pipeline of the platform.",
    points: [
      "Perception",
      "Localization",
      "Mapping",
      "Motion planning",
      "Manipulation planning",
      "Predictive control",
      "Anomaly detection",
      "Natural-language interfaces",
      "Mission intelligence",
    ],
    note: "AI is treated as one layer of the robotic system — not a replacement for deterministic safety and control.",
  },
  {
    id: "control",
    index: "05",
    name: "Control",
    intro: "The control stack connects intelligence to physical action.",
    layers: [
      "Mission Layer",
      "Behavior & Task Planning",
      "Motion Planning",
      "Whole-Body Control",
      "Joint Control",
      "Motor Control",
      "Sensors & Feedback",
    ],
    note: "This architecture allows high-level intelligence to coexist with fast, deterministic low-level control.",
  },
  {
    id: "power",
    index: "06",
    name: "Power",
    intro:
      "WAFEE requires a power architecture capable of delivering high instantaneous power while maintaining safety and efficiency.",
    points: [
      "High-energy battery system",
      "Battery management system",
      "Power distribution",
      "DC/DC conversion",
      "Motor inverters",
      "Protection and isolation",
      "Current and voltage monitoring",
      "Thermal monitoring",
    ],
  },
  {
    id: "thermal",
    index: "07",
    name: "Thermal Management",
    intro:
      "Heat is one of the fundamental engineering constraints in high-performance humanoids.",
    points: [
      "Thermal conduction from heat sources",
      "Cold plates",
      "Closed-loop liquid cooling where required",
      "Heat exchangers",
      "Thermal storage",
      "Temperature and flow monitoring",
      "Localized thermal barriers",
      "Passive heat spreading",
    ],
    note: "The architecture is intended to reduce dependence on conventional exposed fans in mission-critical areas.",
  },
  {
    id: "materials",
    index: "08",
    name: "Materials & Protection",
    intro: "Material selection is mission dependent.",
    points: [
      "Titanium alloys",
      "Aluminum alloys where appropriate",
      "Carbon-fiber composites",
      "Carbon-carbon composites for specialized high-temperature zones",
      "Silicon-carbide-based ceramics/composites",
      "Inconel-class nickel alloys for localized high-temperature hardware",
      "Ceramic insulation",
      "Aerogel-based thermal insulation",
    ],
    note: "No single material is expected to solve every environmental requirement. WAFEE uses zoned material architecture based on load, temperature, pressure, corrosion and serviceability.",
  },
  {
    id: "software",
    index: "09",
    name: "Software",
    intro: "WAFEE's software architecture is designed as a modular robotics stack.",
    points: [
      "Hardware abstraction",
      "Real-time control",
      "State estimation",
      "Perception",
      "Localization and mapping",
      "Motion planning",
      "Manipulation",
      "Behavior planning",
      "Mission management",
      "Diagnostics",
      "Human-robot interaction",
      "Fleet management",
    ],
    note: "The platform is designed for continuous software evolution without requiring complete hardware redesign.",
  },
];

const NAV = SYSTEMS.map(({ id, index, name }) => ({ id, index, name }));

export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Technology"
        lines={["The Technology Stack", "Behind WAFEE."]}
        intro="WAFEE is built as a vertically integrated robotic architecture."
        meta="Every joint. Every sensor. Every line of code. One system."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-section md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <MediaFrame
                code="IMG-05"
                label="WAFEE System Architecture — Concept Diagram"
                ratio="21/9"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <div className="relative">
        <SystemNav systems={NAV} />
        <div className="h-10" />

        {SYSTEMS.map((system) => {
          const style = STYLE[system.id] ?? { band: "", teal: false, dark: false };
          return (
            <section
              key={system.id}
              id={system.id}
              className={`relative scroll-mt-24 overflow-hidden border-b border-black/[0.08] ${style.band} ${
                style.dark ? "dark-section" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                  style.teal ? "via-teal/60" : "via-accent/60"
                } to-transparent`}
              />
              <Parallax
                speed={0.18}
                className="pointer-events-none absolute -right-6 top-1/2 hidden select-none lg:block"
              >
                <span
                  aria-hidden="true"
                  className={`block font-mono text-[16rem] font-semibold leading-none ${
                    style.dark ? "text-white/[0.05]" : "text-black/[0.05]"
                  }`}
                >
                  {system.index}
                </span>
              </Parallax>

              {!style.dark && style.band === "" && (
                <div
                  aria-hidden="true"
                  className={`absolute -left-32 top-1/3 h-96 w-96 rounded-full blur-3xl ${
                    style.teal
                      ? "bg-[radial-gradient(circle,rgba(0,168,168,0.07),transparent_68%)]"
                      : "bg-[radial-gradient(circle,rgba(21,94,239,0.06),transparent_68%)]"
                  }`}
                />
              )}

              <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <Reveal>
                  <p
                    className={`inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[11px] tracking-[0.3em] ${
                      style.dark
                        ? "border-teal/30 bg-teal/[0.08] text-teal"
                        : style.teal
                          ? "border-teal/25 bg-teal/[0.05] text-teal"
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
                    <SpecList
                      points={system.points ?? []}
                      teal={style.teal}
                      dark={style.dark}
                    />
                  )}
                  {system.note && (
                    <Reveal delay={0.1}>
                      <p
                        className={`mt-8 max-w-xl border-l-2 pl-6 text-sm leading-relaxed ${
                          style.dark
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
        lines={["From First Principles", "To Field Validation."]}
        body="See how our engineering discipline turns research into mission-ready capability."
        primary={{ label: "Research & Engineering", href: "/research" }}
        secondary={{ label: "Validation & Safety", href: "/safety" }}
      />
    </main>
  );
}
