import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
}));

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      home: "Home",
      about: "About",
      wafee: "WAFEE",
      technology: "Technology",
      applications: "Applications",
      industries: "Industries",
      contact: "Contact",
      closeMenu: "Close menu",
      openMenu: "Open menu",
    };
    return translations[key] || key;
  },
  useLocale: () => "en",
}));

vi.mock("@/hooks/use-ready", () => ({
  useReady: () => true,
}));

let SiteHeader: React.ComponentType;

beforeEach(async () => {
  vi.clearAllMocks();
  const mod = await import("@/components/navigation/site-header");
  SiteHeader = mod.SiteHeader;
});

describe("SiteHeader", () => {
  it("renders the Cennzo Robotix logo wordmark", () => {
    render(<SiteHeader />);
    expect(screen.getByText("CENNZO")).toBeInTheDocument();
    expect(screen.getByText("ROBOTIX")).toBeInTheDocument();
    const logo = document.querySelector('img[src="/logo/cennzo-icon.png"]');
    expect(logo).not.toBeNull();
  });

  it("renders the home link with correct href", () => {
    render(<SiteHeader />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders the mobile menu toggle button", () => {
    render(<SiteHeader />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);
    const closeButton = screen.getByRole("button", { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();
  });

  it("renders desktop nav links", () => {
    render(<SiteHeader />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("Applications")).toBeInTheDocument();
  });

  it("renders the contact link", () => {
    render(<SiteHeader />);
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
