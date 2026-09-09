import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { MissionConfigurator } from "@/components/technical/mission-configurator";
import { MediaStrip } from "@/components/media/media-strip";
import { IMAGES } from "@/lib/content/images";

export const metadata: Metadata = {
  title: "Platform Architecture",
  description:
    "One robot. Many mission configurations. WAFEE is designed around a common core platform with mission-specific modules",
};

const CORE = [
  "Humanoid structure",
  "Actuation",
  "Compute",
  "Power",
  "Sensors",
  "Control",
  "Communications",
  "Safety systems",
];

const MODULES = [
  "Inspection payloads",
  "Thermal sensing",
  "Environmental sensing",
  "Manipulation tools",
  "Communication modules",
  "Navigation payloads",
  "Specialized end effectors",
  "Mission-specific protective systems",
];

function ModuleList({
  eyebrow,
  title,
  items,
  accent = false,
  img,
}: {
  eyebrow: string;
  title: string;
  items: readonly string[];
  accent?: boolean;
  img?: string;
}) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-black/[0.1] bg-graphite shadow-soft">
      {img ? (
        <MediaStrip src={img} sizes="(max-width: 1024px) 100vw, 50vw">
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
        </MediaStrip>
      ) : null}
      <div className="p-8 md:p-12">
        <p
          className={`font-mono text-[10px] uppercase tracking-[0.25em] ${
            accent ? "text-accent" : "text-mist"
          }`}
        >
          {eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-bone">
          {title}
        </h2>
        <StaggerGroup stagger={0.05} className="mt-8">
          {items.map((item) => (
            <StaggerItem key={item}>
              <p className="flex items-center gap-4 border-b border-black/[0.08] py-3.5 text-sm text-mist">
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 shrink-0 rounded-full ${
                    accent ? "bg-accent" : "bg-faint"
                  }`}
                />
                {item}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform Architecture"
        lines={["One Robot", "Many Mission Configurations"]}
        intro="WAFEE is designed around a common core platform with mission-specific modules"
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <StaggerGroup
            stagger={0.12}
            className="grid gap-6 lg:grid-cols-2"
          >
            <StaggerItem>
              <ModuleList
                eyebrow="Common Core"
                title="Core Platform"
                items={CORE}
                img={IMAGES.breakdown}
              />
            </StaggerItem>
            <StaggerItem>
              <ModuleList
                eyebrow="Mission-Specific"
                title="Mission Modules"
                items={MODULES}
                accent
                img={IMAGES.concept}
              />
            </StaggerItem>
          </StaggerGroup>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-16 max-w-2xl text-center text-subhead leading-relaxed text-bone">
              This architecture allows Cennzo Robotix to develop one core robotic
              intelligence platform while adapting the machine for different
              industries.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <MissionConfigurator />
          </Reveal>
        </div>
      </section>

      <CTASection
        lines={["Configured For", "The Mission"]}
        body="Discuss a mission configuration for your industry"
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Industries", href: "/industries" }}
      />
    </main>
  );
}
