import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/motion/reveal";
import { MediaFrame } from "@/components/media/media-frame";
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
        lines={["Engineering Intelligence", "For The Real World."]}
        intro={
          <>
            Cennzo Robotix is a deep-tech robotics company focused on developing
            intelligent humanoid systems for demanding real-world environments.
          </>
        }
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-body leading-relaxed text-mist">
              We combine robotics, artificial intelligence, mechanical
              engineering, embedded systems, advanced materials, energy systems
              and autonomous control into integrated robotic platforms.
            </p>
            <p className="mt-6 text-body leading-relaxed text-mist">
              Our flagship platform, WAFEE, represents our vision of a humanoid
              machine capable of adapting across multiple mission environments.
            </p>
          </Reveal>

          <StaggerGroup stagger={0.1} className="grid gap-px overflow-hidden rounded-2xl border border-black/[0.1] bg-black/[0.1] shadow-soft sm:grid-cols-2">
            <StaggerItem>
              <article className="h-full bg-graphite p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  Mission
                </p>
                <p className="mt-4 text-sm leading-relaxed text-bone">
                  To develop intelligent machines that extend human capability,
                  improve operational safety and enable access to environments
                  that are difficult, dangerous or inefficient for people.
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="h-full bg-graphite p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  Vision
                </p>
                <p className="mt-4 text-sm leading-relaxed text-bone">
                  A world where intelligent robots work alongside humanity —
                  taking on dangerous, repetitive, inaccessible and technically
                  demanding missions.
                </p>
              </article>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <Reveal>
            <MediaFrame
              code="IMG-03"
              label="Inside the Cennzo Robotix Lab — Concept Visualization"
              ratio="16/9"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading
            eyebrow="Our Approach"
            lines={["System Integration", "Is The Breakthrough."]}
            body={
              <>
                <p>
                  We believe the future of robotics will not be defined by one
                  breakthrough component. It will be defined by system
                  integration.
                </p>
                <p className="mt-4">
                  A powerful motor is not enough. A sophisticated AI model is not
                  enough. A strong chassis is not enough.
                </p>
                <p className="mt-4 text-bone">
                  A useful robot emerges when mechanics, electronics, energy,
                  software, intelligence, perception and safety operate as one
                  system. That is the engineering philosophy behind WAFEE.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-section md:px-10">
          <SectionHeading eyebrow="Our Values" lines={["What We Hold To."]} />
          <StaggerGroup
            stagger={0.07}
            className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {VALUES.map((value, i) => (
              <StaggerItem key={value.title}>
                <div className="group border-t border-black/[0.12] pt-6 transition-colors duration-300 hover:border-accent">
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

      <CTASection
        lines={["Bold Enough To Imagine", "The Impossible."]}
        body="Disciplined enough to prove it."
        primary={{ label: "Partner With Us", href: "/partnerships" }}
        secondary={{ label: "Meet WAFEE", href: "/wafee" }}
      />
    </main>
  );
}
