import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Humanoid Robots for Industry, Hazardous Environments & Infrastructure | Cennzo Robotix",
  description:
    "Potential WAFEE applications across industrial inspection, energy, disaster response, hazardous environments, marine, mining, logistics, defense research and space robotics.",
};

type Tone = {
  chip: string;
  chipActive: string;
  dot: string;
  hairline: string;
  ghost: string;
  bar: string;
  noteBorder: string;
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

const DOMAINS = [
  {
    id: "industrial-inspection",
    index: "01",
    name: "Industrial Inspection",
    tag: "Inspect",
    intro:
      "Inspect equipment, structures and facilities while reducing exposure to hazardous conditions.",
    missions: [
      "Plant inspection",
      "Asset monitoring",
      "Valve and control interaction",
      "Remote visual inspection",
      "Thermal inspection",
      "Routine maintenance support",
    ],
  },
  {
    id: "energy-utilities",
    index: "02",
    name: "Energy & Utilities",
    tag: "Sustain",
    intro:
      "Robotic systems can support inspection and maintenance across power, energy and utility infrastructure.",
    missions: [
      "Power plant inspection",
      "Substation inspection",
      "Pipeline environments",
      "Renewable energy infrastructure",
      "Remote maintenance support",
    ],
  },
  {
    id: "disaster-response",
    index: "03",
    name: "Disaster Response",
    tag: "Respond",
    intro:
      "After earthquakes, fires, industrial accidents or structural failures, access can be unpredictable and dangerous. WAFEE's humanoid form factor is intended to support operations in environments designed around humans.",
    missions: [
      "Search support",
      "Hazard mapping",
      "Remote inspection",
      "Object manipulation",
      "Access route assessment",
      "Communication relay",
    ],
  },
  {
    id: "fire-hazardous",
    index: "04",
    name: "Fire & Hazardous Environments",
    tag: "Withstand",
    intro:
      "Extreme environments require specialized robotic architectures. WAFEE's long-term roadmap includes high-temperature mission configurations using specialized thermal protection, insulation and cooling architectures.",
    missions: [] as string[],
    note: "Temperature ratings will be published only after validation under defined exposure conditions.",
  },
  {
    id: "marine-offshore",
    index: "05",
    name: "Marine & Offshore",
    tag: "Submerge",
    intro: "Robotic support for maritime and offshore assets.",
    missions: [
      "Offshore asset inspection",
      "Marine infrastructure",
      "Shipboard inspection",
      "Remote maintenance",
      "Environmental monitoring",
    ],
    note: "Deep-water operation requires dedicated pressure-rated architectures and is subject to engineering qualification.",
  },
  {
    id: "mining",
    index: "06",
    name: "Mining",
    tag: "Descend",
    intro:
      "Robotic capability for one of the most demanding industrial environments.",
    missions: [
      "Inspection",
      "Remote equipment interaction",
      "Hazard mapping",
      "Material handling",
      "Autonomous monitoring",
    ],
  },
  {
    id: "logistics",
    index: "07",
    name: "Logistics & Industrial Automation",
    tag: "Move",
    intro:
      "Humanoid robots can potentially interact with infrastructure already designed for people.",
    missions: [
      "Material movement",
      "Picking and placement",
      "Machine tending",
      "Warehouse operations",
      "Loading/unloading",
      "Flexible production support",
    ],
  },
  {
    id: "defense-research",
    index: "08",
    name: "Defense & Government Research",
    tag: "Protect",
    intro:
      "Cennzo Robotix is interested in responsible collaboration with government and research organizations for applications where robotics can improve safety, reach and operational capability.",
    missions: [
      "Hazardous inspection",
      "Disaster response",
      "Remote logistics",
      "Infrastructure support",
      "Search and reconnaissance",
      "Extreme-environment research",
    ],
    note: "All deployments are subject to applicable law, safety requirements and responsible-use principles.",
  },
  {
    id: "space-robotics",
    index: "09",
    name: "Space Robotics",
    tag: "Orbit",
    intro: "Space is a long-term research frontier for Cennzo Robotix.",
    missions: [
      "Habitat inspection",
      "Infrastructure maintenance",
      "Surface operations",
      "Cargo handling",
      "Human-machine collaboration",
      "Planetary exploration support",
    ],
    note: "Space capability requires dedicated vacuum, radiation, thermal and life-cycle qualification.",
  },
];

export default function ApplicationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Applications"
        lines={["Robots Where People", "*Should Not Have To Go.*"]}
        intro="From industrial inspection to planetary research — potential mission domains for the WAFEE platform."
        meta="Applications represent engineering roadmap areas, not current commercial deployments."
      />

      <section className="relative overflow-hidden border-b border-black/[0.08] py-section">
        <BackgroundObjects variant="light" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <Parallax speed={0.05}>
              <MediaFrame
                code="IMG-06"
                label="WAFEE Mission Configurations — Concept Plate"
                ratio="21/9"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-[10px] uppercase leading-loose tracking-[0.25em] text-faint">
              One chassis, many faces
              <span className="block text-accent">— configured per mission.</span>
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
            eyebrow="Mission Matrix"
            lines={["Nine Frontiers.", "One *Machine.*"]}
            body={
              <p>
                Every domain below is a doorway into a configuration study —
                color-coded by frontier. Select one to explore its mission profile.
              </p>
            }
          />
          <div className="mt-14">
            <DomainGrid
              domains={DOMAINS.map((d) => ({
                id: d.id,
                index: d.index,
                name: d.name,
                tag: d.tag,
                missions: d.missions.length,
                bar: TONES[d.id].bar,
                chip: `${TONES[d.id].chip} ${TONES[d.id].chipActive}`,
              }))}
            />
          </div>
        </div>
      </section>

      {DOMAINS.map((domain, i) => {
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
                    label={`${domain.name} — Mission Concept`}
                    ratio="4/3"
                  />
                </Reveal>
              </ScaleMedia>
            </div>
          </section>
        );
      })}

      <CTASection
        lines={["Have A Hard Problem?", "Let's Engineer The Answer."]}
        body="Bring your mission to the platform."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Partner With Us", href: "/partnerships" }}
      />
    </main>
  );
}
