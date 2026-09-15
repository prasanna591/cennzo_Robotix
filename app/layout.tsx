import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Noto_Sans_Tamil,
  Noto_Sans_Devanagari,
} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { ScrollProgress } from "@/components/technical/scroll-progress";
import { Cursor } from "@/components/technical/cursor";
import { Preloader } from "@/components/motion/preloader";
import { BackToTop } from "@/components/navigation/back-to-top";
import { FilmGrain } from "@/components/decor/film-grain";
import { CircuitSpine } from "@/components/decor/circuit-spine";
import { MeshGradient } from "@/components/decor/mesh-gradient";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-tamil",
  display: "swap",
  preload: false,
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    metadataBase: new URL("https://cennzo.com"),
    title: {
      default: t("title"),
      template: "%s | Cennzo Robotix",
    },
    description: t("description"),
    keywords: [
      "humanoid robot",
      "robotics company",
      "deep-tech robotics",
      "WAFEE",
      "intelligent machines",
      "multi-environment robotics",
    ],
    openGraph: {
      type: "website",
      siteName: "Cennzo Robotix",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: "Cennzo Robotix | Deep-Tech Humanoid Robotics",
      description:
        "Intelligent machines for the real world. Meet WAFEE — the unified multi-environment humanoid platform",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#eef3fc",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cennzo Robotix",
  url: "https://cennzo.com",
  slogan: "Innovate · Automate · Elevate",
  description:
    "Deep-tech robotics company building WAFEE — a full-size humanoid robot platform engineered for the world's hardest industrial environments",
  knowsAbout: [
    "Humanoid robotics",
    "Multi-environment robotics",
    "Industrial inspection",
    "Hazardous environment operations",
    "Embodied AI",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${notoTamil.variable} ${notoDevanagari.variable}`}
    >
      <body>
        <MeshGradient />
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <ScrollProgress />
          <Cursor />
          <SiteHeader />
          <CircuitSpine />
          {children}
          <SiteFooter />
          <BackToTop />
          <FilmGrain />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
