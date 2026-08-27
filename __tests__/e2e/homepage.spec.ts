import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads successfully", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
  });

  test("has correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Cennzo Robotix/);
  });

  test("has correct meta description", async ({ page }) => {
    await page.goto("/");
    const description = await page.getAttribute('meta[name="description"]', "content");
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(0);
  });

  test("renders the CENNZO wordmark", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("CENNZO")).toBeVisible();
  });

  test("renders the ROBOTIX subtitle", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("ROBOTIX")).toBeVisible();
  });

  test("has navigation links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "About" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Technology" }).first()).toBeVisible();
  });

  test("has a contact link in the header", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Contact" }).first()).toBeVisible();
  });

  test("renders main content sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();
  });

  test("has a footer", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Innovate · Automate · Elevate")).toBeVisible();
  });

  test("has structured data (JSON-LD)", async ({ page }) => {
    await page.goto("/");
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();
    const data = JSON.parse(jsonLd!);
    expect(data["@type"]).toBe("Organization");
    expect(data.name).toBe("Cennzo Robotix");
  });
});

test.describe("Navigation", () => {
  test("navigates to About page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });

  test("navigates to Technology page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Technology" }).first().click();
    await expect(page).toHaveURL(/\/technology/);
  });

  test("navigates to WAFEE page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "WAFEE" }).first().click();
    await expect(page).toHaveURL(/\/wafee/);
  });

  test("navigates to Applications page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Applications" }).first().click();
    await expect(page).toHaveURL(/\/applications/);
  });

  test("navigates to Contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contact" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("navigates home via wordmark", async ({ page }) => {
    await page.goto("/about");
    await page.getByText("CENNZO").click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Page Routes", () => {
  const routes = [
    "/",
    "/about",
    "/wafee",
    "/technology",
    "/applications",
    "/industries",
    "/contact",
    "/research",
    "/safety",
    "/partnerships",
    "/investors",
    "/careers",
    "/legal",
    "/platform",
  ];

  for (const route of routes) {
    test(`${route} returns 200`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe("404 Page", () => {
  test("shows 404 for non-existent routes", async ({ page }) => {
    const response = await page.goto("/non-existent-page");
    expect(response?.status()).toBe(404);
  });
});

test.describe("Accessibility", () => {
  test("has lang attribute on html element", async ({ page }) => {
    await page.goto("/");
    const lang = await page.getAttribute("html", "lang");
    expect(lang).toBeTruthy();
  });

  test("has aria-label on primary navigation", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('nav[aria-label="Primary"]')).toBeVisible();
  });

  test("has aria-label on mobile navigation when menu is open", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.locator('nav[aria-label="Mobile"]')).toBeVisible();
  });

  test("has proper heading hierarchy", async ({ page }) => {
    await page.goto("/");
    const h1 = await page.locator("h1").count();
    expect(h1).toBeGreaterThanOrEqual(1);
  });
});

test.describe("Performance", () => {
  test("does not have console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });
    await page.goto("/");
    await page.waitForTimeout(2000);
    expect(errors).toHaveLength(0);
  });
});
