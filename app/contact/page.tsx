import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contactPage.meta");
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");
  const contactFor = t.raw("contactFor.items") as string[];

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        lines={[t("hero.line1"), t("hero.line2")]}
        intro={t("hero.intro")}
        meta={t("hero.meta")}
      />

      <section className="border-b border-black/[0.08]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-6 py-section md:px-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">
                {t("contactFor.label")}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-0">
                {contactFor.map((item) => (
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
                {t("contactFor.tagline")}
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
