import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    className,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      description: "Deep-tech robotics company building WAFEE.",
      tagline: "Innovate · Automate · Elevate",
      explore: "Explore",
      company: "Company",
      legal: "Legal",
      follow: "Follow",
      rights: "© 2026 Cennzo Robotix. All rights reserved.",
      mission: "Built for the world's hardest environments.",
      linkHome: "Home",
      linkAbout: "About",
      linkWafee: "WAFEE",
      linkTechnology: "Technology",
      linkApplications: "Applications",
      linkPlatform: "Platform",
      linkResearch: "Research",
      linkSafety: "Safety",
      linkIndustries: "Industries",
      linkPartnerships: "Partnerships",
      linkInvestors: "Investors",
      linkCareers: "Careers",
      linkContact: "Contact",
      legalPrivacy: "Privacy Policy",
      legalTerms: "Terms of Use",
      legalAI: "Responsible AI",
      legalCompliance: "Compliance",
    };
    return translations[key] || key;
  },
}));

let SiteFooter: React.ComponentType;

beforeEach(async () => {
  vi.clearAllMocks();
  const mod = await import("@/components/navigation/site-footer");
  SiteFooter = mod.SiteFooter;
});

describe("SiteFooter", () => {
  it("renders the CENNZO ROBOTIX wordmark", () => {
    render(<SiteFooter />);
    expect(screen.getByText("CENNZO")).toBeInTheDocument();
    expect(screen.getByText("ROBOTIX")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/Innovate · Automate · Elevate/)).toBeInTheDocument();
  });

  it("renders the copyright notice", () => {
    render(<SiteFooter />);
    expect(screen.getByText(/© 2026 Cennzo Robotix/)).toBeInTheDocument();
  });

  it("renders explore links", () => {
    render(<SiteFooter />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders legal links", () => {
    render(<SiteFooter />);
    const privacyLink = screen.getByRole("link", { name: "Privacy Policy" });
    expect(privacyLink).toHaveAttribute("href", "/privacy-policy");
  });

  it("renders company section links", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: "Platform" })).toHaveAttribute("href", "/platform");
    expect(screen.getByRole("link", { name: "Careers" })).toHaveAttribute("href", "/careers");
  });

  it("renders social media labels", () => {
    render(<SiteFooter />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("YouTube")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
  });
});
