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

  test("horizontal showcase auto-scrolls as a continuous marquee on mobile", async ({
    page,
    isMobile,
  }) => {
    test.skip(!isMobile, "Marquee auto-scroll only runs on mobile viewports");
    await page.goto("/wafee");
    await expect(page.locator("#preloader")).toHaveCount(0, { timeout: 15000 });
    const skip = page.getByRole("button", { name: /continue in english/i });
    if (await skip.isVisible().catch(() => false)) await skip.click();

    const state = () =>
      page.evaluate(() => {
        const track = Array.from(
          document.querySelectorAll('[class*="will-change-transform"]')
        ).find((el) => el.getAttribute("class")?.includes("w-max"));
        if (!track) return null;
        return {
          transform: getComputedStyle(track).transform,
          cardCount: track.querySelectorAll("article").length,
        };
      });

    await page.waitForTimeout(400);
    const s0 = await state();
    await page.waitForTimeout(1200);
    const s1 = await state();

    expect(s0).toBeTruthy();
    // Two copies of the card set for a seamless marquee loop.
    expect(s0!.cardCount).toBeGreaterThanOrEqual(2);
    // The track must be actively scrolling (transform changed over time).
    expect(s0!.transform).not.toBe(s1!.transform);
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
