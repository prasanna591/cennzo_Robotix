const { chromium } = require("@playwright/test");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.locator('h2:has-text("Built For The Mission")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "why2.png", clip: { x: 20, y: 330, width: 1400, height: 470 } });
  await browser.close();
})();