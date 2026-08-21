import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact | Cennzo Robotix",
  description:
    "Let's build what comes next. Contact Cennzo Robotix for WAFEE demonstrations, technology partnerships, industrial pilots, research collaboration, investment discussions and careers.",
};

const CONTACT_FOR = [
  "WAFEE demonstrations",
  "Technology partnerships",
  "Industrial pilots",
  "Research collaboration",
  "Investment discussions",
  "Component partnerships",
  "Careers",
  "Media",
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        lines={["Let's Build", "What Comes Next."]}
        intro="Whether you are an industrial operator, technology partner, researcher, investor or engineer, we would like to hear from you."
        meta="Have a hard problem? Let's engineer the answer."
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                Contact For
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-0">
                {CONTACT_FOR.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-black/[0.08] py-4 text-sm text-mist"
                  >
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-12 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-faint">
                Cennzo Robotix
                <br />
                Intelligent Machines for the Real World.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
