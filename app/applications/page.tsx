import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { MediaFrame } from "@/components/media/media-frame";

export const metadata: Metadata = {
  title: "Humanoid Robots for Industry, Hazardous Environments & Infrastructure | Cennzo Robotix",
  description:
    "Potential WAFEE applications across industrial inspection, energy, disaster response, hazardous environments, marine, mining, logistics, defense research and space robotics.",
};

const DOMAINS = [
  {
    id: "industrial-inspection",
    index: "01",
    name: "Industrial Inspection",
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
    intro:
      "Extreme environments require specialized robotic architectures. WAFEE's long-term roadmap includes high-temperature mission configurations using specialized thermal protection, insulation and cooling architectures.",
    note: "Temperature ratings will be published only after validation under defined exposure conditions.",
  },
  {
    id: "marine-offshore",
    index: "05",
    name: "Marine & Offshore",
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
        lines={["Robots Where People", "Should Not Have To Go."]}
        intro="From industrial inspection to planetary research — potential mission domains for the WAFEE platform."
        meta="Applications represent engineering roadmap areas, not current commercial deployments."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-section md:px-10">
          <Reveal>
            <MediaFrame
              code="IMG-06"
              label="WAFEE Mission Configurations — Concept Plate"
              ratio="21/9"
            />
          </Reveal>
        </div>
      </section>

      {DOMAINS.map((domain) => (
        <section
          key={domain.id}
          id={domain.id}
          className="relative scroll-mt-24 overflow-hidden border-b border-black/[0.08]"
        >
          <Parallax
            speed={0.18}
            className="pointer-events-none absolute -right-6 top-1/2 hidden select-none lg:block"
          >
            <span
              aria-hidden="true"
              className="block font-mono text-[16rem] font-semibold leading-none text-black/[0.05]"
            >
              {domain.index}
            </span>
          </Parallax>
          <div className="relative mx-auto grid w-full max-w-[1440px] gap-8 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.3em] text-accent">
                {domain.index} / 09
              </p>
              <h2 className="mt-4 text-headline font-semibold uppercase tracking-tight text-bone">
                {domain.name}
              </h2>
              <p className="mt-6 max-w-md text-body leading-relaxed text-mist">
                {domain.intro}
              </p>
            </Reveal>
            <div>
              {domain.missions && (
                <ul className="grid gap-x-10 sm:grid-cols-2">
                  {domain.missions.map((mission) => (
                    <li
                      key={mission}
                      className="flex items-start gap-3 border-b border-black/[0.08] py-3.5 text-sm leading-relaxed text-mist"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {mission}
                    </li>
                  ))}
                </ul>
              )}
              {domain.note && (
                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-xl border-l-2 border-accent/60 pl-6 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-faint">
                    {domain.note.toUpperCase()}
                  </p>
                </Reveal>
              )}
              {(domain.id === "fire-hazardous" || domain.id === "space-robotics") && (
                <Reveal delay={0.15} className="mt-10">
                  <MediaFrame
                    code={domain.id === "fire-hazardous" ? "IMG-07" : "IMG-08"}
                    label={
                      domain.id === "fire-hazardous"
                        ? "High-Temperature Mission Concept"
                        : "Space Robotics Research Concept"
                    }
                    ratio="16/9"
                  />
                </Reveal>
              )}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        lines={["Have A Hard Problem?", "Let's Engineer The Answer."]}
        body="Bring your mission to the platform."
        primary={{ label: "Start a Conversation", href: "/contact" }}
        secondary={{ label: "Partner With Us", href: "/partnerships" }}
      />
    </main>
  );
}
