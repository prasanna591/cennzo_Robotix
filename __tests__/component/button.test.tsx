import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/buttons/button";

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

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button href="/contact">Get in Touch</Button>);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });

  it("links to the correct href", () => {
    render(<Button href="/about">Learn More</Button>);
    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toHaveAttribute("href", "/about");
  });

  it("applies primary variant class by default", () => {
    render(<Button href="/test">Primary</Button>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("btn-primary");
  });

  it("applies ghost variant classes", () => {
    render(
      <Button href="/test" variant="ghost">
        Ghost
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link.className).toContain("border-steel");
    expect(link.className).toContain("bg-graphite/60");
  });

  it("applies light variant classes", () => {
    render(
      <Button href="/test" variant="light">
        Light
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link.className).toContain("bg-white");
    expect(link.className).toContain("shadow-soft");
  });

  it("accepts custom className", () => {
    render(
      <Button href="/test" className="extra-class">
        Custom
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link.className).toContain("extra-class");
  });

  it("renders the arrow icon", () => {
    render(<Button href="/test">Icon</Button>);
    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("has the group class for hover effects", () => {
    render(<Button href="/test">Grouped</Button>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("group");
  });
});
