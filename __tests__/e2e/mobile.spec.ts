import { test, expect } from "@playwright/test";

test.describe("Mobile", () => {
  test("has no horizontal page overflow on home", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1500);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);
  });

  test("has no horizontal page overflow on technology", async ({ page }) => {
    await page.goto("/technology");
    await page.waitForTimeout(1500);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);
  });

  test("horizontal showcase is natively scrollable on mobile", async ({ page }) => {
    await page.goto("/wafee");
    await page.waitForTimeout(1500);
    await page.locator("section").nth(3).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const scrollable = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll("section"));
      for (const el of els) {
        if (el.scrollWidth > el.clientWidth + 10) {
          return { found: true, label: el.className.slice(0, 40) };
        }
      }
      return { found: false, label: "" };
    });
    expect(scrollable.found).toBe(true);
  });

  test("technology page has no SVG system-anatomy figure", async ({ page }) => {
    await page.goto("/technology");
    await page.waitForTimeout(1500);
    const figures = await page
      .locator('svg[aria-label*="anatomy"], svg[aria-label*="WAFEE system"]')
      .count();
    expect(figures).toBe(0);
  });

  test("technology page shows a media image section", async ({ page }) => {
    await page.goto("/technology");
    await page.waitForTimeout(1500);
    const imgs = await page.locator("main img").count();
    expect(imgs).toBeGreaterThan(0);
  });

  test("mobile menu opens and shows nav links", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile menu only exists on touch/mobile viewports");
    await page.goto("/");
    await expect(page.locator("#preloader")).toHaveCount(0, { timeout: 15000 });
    const skip = page.getByRole("button", { name: /continue in english/i });
    if (await skip.isVisible().catch(() => false)) {
      await skip.click();
    }
    await page.getByRole("button", { name: /open menu/i }).click();
    await expect(page.locator('nav[aria-label="Mobile"]')).toBeVisible();
    const mobileNav = page.locator('nav[aria-label="Mobile"]');
    await expect(mobileNav.getByRole("link", { name: /about/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /contact/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /home/i })).toHaveCount(0);
  });

  test("header logo renders with CENNZO ROBOTIX text", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("CENNZO").first()).toBeVisible();
    await expect(page.getByText("ROBOTIX").first()).toBeVisible();
  });
});
