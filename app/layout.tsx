import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";
import { ScrollProgress } from "@/components/technical/scroll-progress";
import { Cursor } from "@/components/technical/cursor";
import { Preloader } from "@/components/motion/preloader";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { BackToTop } from "@/components/navigation/back-to-top";
import { FilmGrain } from "@/components/decor/film-grain";
import { CircuitSpine } from "@/components/decor/circuit-spine";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://cennzorobotix.com"),
  title: {
    default: "Cennzo Robotix | Deep-Tech Humanoid Robotics & Intelligent Machines",
    template: "%s | Cennzo Robotix",
  },
  description:
    "Cennzo Robotix develops advanced humanoid robots and intelligent robotic systems for industrial, hazardous and multi-environment applications. Meet WAFEE.",
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
    title: "Cennzo Robotix | Deep-Tech Humanoid Robotics & Intelligent Machines",
    description:
      "Intelligent machines for the real world. Meet WAFEE — the unified multi-environment humanoid platform.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cennzo Robotix | Deep-Tech Humanoid Robotics",
    description:
      "Intelligent machines for the real world. Meet WAFEE — the unified multi-environment humanoid platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f8fa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Preloader />
        <SmoothScroll />
        <ScrollProgress />
        <Cursor />
        <SiteHeader />
        <CircuitSpine />
        {children}
        <SiteFooter />
        <BackToTop />
        <FilmGrain />
      </body>
    </html>
  );
}
