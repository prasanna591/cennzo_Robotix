import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("loads successfully", async ({ page }) => {
    const response = await page.goto("/contact");
    expect(response?.status()).toBe(200);
  });

  test("renders the contact form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("form")).toBeVisible();
  });

  test("has required form fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test("shows validation error for empty name on blur", async ({ page }) => {
    await page.goto("/contact");
    const nameInput = page.getByLabel(/name/i);
    await nameInput.click();
    await nameInput.blur();
    await expect(page.getByText(/required/i)).toBeVisible();
  });

  test("shows validation error for invalid email", async ({ page }) => {
    await page.goto("/contact");
    const emailInput = page.getByLabel(/email/i);
    await emailInput.fill("not-an-email");
    await emailInput.blur();
    await expect(page.getByText(/invalid/i)).toBeVisible();
  });

  test("shows validation error for short message", async ({ page }) => {
    await page.goto("/contact");
    const messageInput = page.getByLabel(/message/i);
    await messageInput.fill("Short");
    await messageInput.blur();
    await expect(page.getByText(/short/i)).toBeVisible();
  });

  test("has a submit button", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("button", { name: /send/i })).toBeVisible();
  });
});

test.describe("About Page", () => {
  test("loads successfully", async ({ page }) => {
    const response = await page.goto("/about");
    expect(response?.status()).toBe(200);
  });

  test("renders page content", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("main")).toBeVisible();
  });
});

test.describe("Technology Page", () => {
  test("loads successfully", async ({ page }) => {
    const response = await page.goto("/technology");
    expect(response?.status()).toBe(200);
  });

  test("renders page content", async ({ page }) => {
    await page.goto("/technology");
    await expect(page.locator("main")).toBeVisible();
  });
});

test.describe("WAFEE Page", () => {
  test("loads successfully", async ({ page }) => {
    const response = await page.goto("/wafee");
    expect(response?.status()).toBe(200);
  });

  test("renders page content", async ({ page }) => {
    await page.goto("/wafee");
    await expect(page.locator("main")).toBeVisible();
  });
});
