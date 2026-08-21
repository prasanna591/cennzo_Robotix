import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
  themeColor: "#0a0a0b",
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
      className={`${geistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
