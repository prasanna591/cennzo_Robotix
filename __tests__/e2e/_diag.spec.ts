import { test, expect } from "@playwright/test";

test("confirm tech page new elements render", async ({ page }) => {
  page.setDefaultTimeout(30000);
  await page.goto("/technology");
  await expect(page.locator("#preloader")).toHaveCount(0, { timeout: 15000 });
  const skip = page.getByRole("button", { name: /continue in english/i });
  if (await skip.isVisible().catch(() => false)) await skip.click();
  await page.waitForTimeout(800);

  const info = await page.evaluate(() => {
    // SystemsIndex rail: buttons that jump to system anchors (aria-current)
    const railButtons = Array.from(
      document.querySelectorAll('button[aria-current]') || []
    ).map((b) => b.textContent?.trim()).filter(Boolean);
    // Blueprint panels carry id="" -> check anchor targets exist
    const systemIds = ["mechanical","actuation","perception","compute-ai",
      "control","power","thermal","materials","software"];
    const idsPresent = systemIds.filter((id) => !!document.getElementById(id));
    // LayerStack: any element whose text includes Mission Layer
    const layerNodes = Array.from(document.querySelectorAll("*")).filter((el) =>
      el.children.length === 0 && el.textContent?.trim() === "Mission Layer"
    ).length;
    // Manifest heading
    const manifestHeadings = Array.from(document.querySelectorAll("h2")).map((h) =>
      h.textContent?.replace(/\s+/g, " ").trim()
    ).filter(Boolean);
    return {
      railButtons,
      idsPresent,
      layerNodes,
      headings: manifestHeadings.slice(0, 6),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  expect(info.idsPresent.length).toBe(9);
  expect(info.layerNodes).toBeGreaterThan(0);
  expect(info.railButtons.length).toBeGreaterThan(0);
});
