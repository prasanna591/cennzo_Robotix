# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages.spec.ts >> Contact Page >> shows validation error for empty name on blur
- Location: __tests__\e2e\pages.spec.ts:21:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel(/name/i)
    - locator resolved to <input id="name" required="" name="name" aria-invalid="false" placeholder="Your full name" class="w-full cursor-text rounded-xl border border-steel bg-white px-4 py-3.5 text-sm text-bone placeholder:text-faint transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_1px_rgba(21,94,239,0.35),0_0_24px_rgba(21,94,239,0.12)] focus:outline-none "/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="block text-sm font-medium text-bone group-hover:text-accent">日本語</span> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="mt-6 grid grid-cols-2 gap-2">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="block text-sm font-medium text-bone group-hover:text-accent">日本語</span> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  8 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Cennzo Robotix — Home" [ref=e5] [cursor=pointer]:
        - /url: /
        - generic [ref=e6]:
          - generic [ref=e7]: CENNZO
          - generic [ref=e8]: ROBOTIX
      - navigation "Primary" [ref=e9]:
        - link "About" [ref=e10] [cursor=pointer]:
          - /url: /about
        - link "WAFEE" [ref=e11] [cursor=pointer]:
          - /url: /wafee
        - link "Technology" [ref=e12] [cursor=pointer]:
          - /url: /technology
        - link "Applications" [ref=e13] [cursor=pointer]:
          - /url: /applications
        - link "Industries" [ref=e14] [cursor=pointer]:
          - /url: /industries
        - button "Language" [ref=e17] [cursor=pointer]:
          - generic [ref=e21]: EN
        - link "Contact" [ref=e22] [cursor=pointer]:
          - /url: /contact
  - main [ref=e24]:
    - generic [ref=e25]:
      - generic:
        - generic:
          - generic: + SYS
          - generic: + NAV
      - generic [ref=e30]:
        - paragraph [ref=e31]:
          - generic [ref=e33]: Contact
        - heading "L e t ' s B u i l d W h a t C o m e s N e x t ." [level=1] [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]:
              - generic [ref=e37]:
                - generic [ref=e38]: L
                - generic [ref=e39]: e
                - generic [ref=e40]: t
                - generic [ref=e41]: "'"
                - generic [ref=e42]: s
              - generic [ref=e44]:
                - generic [ref=e45]: B
                - generic [ref=e46]: u
                - generic [ref=e47]: i
                - generic [ref=e48]: l
                - generic [ref=e49]: d
            - generic [ref=e51]:
              - generic [ref=e52]:
                - generic [ref=e53]: W
                - generic [ref=e54]: h
                - generic [ref=e55]: a
                - generic [ref=e56]: t
              - generic [ref=e58]:
                - generic [ref=e59]: C
                - generic [ref=e60]: o
                - generic [ref=e61]: m
                - generic [ref=e62]: e
                - generic [ref=e63]: s
              - generic [ref=e65]:
                - generic [ref=e66]: "N"
                - generic [ref=e67]: e
                - generic [ref=e68]: x
                - generic [ref=e69]: t
                - generic [ref=e70]: .
        - generic [ref=e72]: Whether you are an industrial operator, technology partner, researcher, investor or engineer, we would like to hear from you.
        - paragraph [ref=e73]: Have a hard problem? Let's engineer the answer.
    - generic [ref=e76]:
      - generic [ref=e77]:
        - paragraph [ref=e79]: Contact For
        - list [ref=e81]:
          - listitem [ref=e82]: WAFEE demonstrations
          - listitem [ref=e84]: Technology partnerships
          - listitem [ref=e86]: Industrial pilots
          - listitem [ref=e88]: Research collaboration
          - listitem [ref=e90]: Investment discussions
          - listitem [ref=e92]: Component partnerships
          - listitem [ref=e94]: Careers
          - listitem [ref=e96]: Media
        - paragraph [ref=e99]: Cennzo RobotixIntelligent Machines for the Real World.
      - generic [ref=e102]:
        - generic [ref=e103]:
          - generic [ref=e104]: Name *
          - textbox "Name *" [ref=e105]:
            - /placeholder: Your full name
        - generic [ref=e106]:
          - generic [ref=e107]: Company
          - textbox "Company" [ref=e108]:
            - /placeholder: Organization
        - generic [ref=e109]:
          - generic [ref=e110]: Email *
          - textbox "Email *" [ref=e111]:
            - /placeholder: name@company.com
        - generic [ref=e112]:
          - generic [ref=e113]: Phone
          - textbox "Phone" [ref=e114]:
            - /placeholder: +1 000 000 0000
        - generic [ref=e115]:
          - generic [ref=e116]: Country
          - textbox "Country" [ref=e117]
        - generic [ref=e118]:
          - generic [ref=e119]: Organization Type
          - combobox "Organization Type" [ref=e120]:
            - option "Select type" [disabled] [selected]
            - option "Industrial Operator"
            - option "Technology Company"
            - option "Research Institution"
            - option "Government / Public Sector"
            - option "Investor"
            - option "Individual"
            - option "Other"
        - generic [ref=e121]:
          - generic [ref=e122]: Area of Interest
          - combobox "Area of Interest" [ref=e123]:
            - option "Select area" [disabled] [selected]
            - option "WAFEE demonstrations"
            - option "Technology partnerships"
            - option "Industrial pilots"
            - option "Research collaboration"
            - option "Investment discussions"
            - option "Component partnerships"
            - option "Careers"
            - option "Media"
        - generic [ref=e124]:
          - generic [ref=e125]:
            - generic [ref=e126]: Message *
            - generic [ref=e127]: 0 / 1000
          - textbox "Message *" [ref=e128]:
            - /placeholder: Tell us about your mission, project or interest.
        - button "Start a Conversation" [ref=e130] [cursor=pointer]
  - contentinfo [ref=e134]:
    - generic [ref=e136]:
      - generic [ref=e137]:
        - generic [ref=e138]:
          - link "Cennzo Robotix — Home" [ref=e139] [cursor=pointer]:
            - /url: /
            - generic [ref=e140]: CENNZO
            - generic [ref=e141]: ROBOTIX
          - paragraph [ref=e142]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e143]: Innovate · Automate · Elevate
        - generic [ref=e144]:
          - paragraph [ref=e145]: Explore
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Home" [ref=e148] [cursor=pointer]:
                - /url: /
            - listitem [ref=e149]:
              - link "About" [ref=e150] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e151]:
              - link "WAFEE" [ref=e152] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e153]:
              - link "Technology" [ref=e154] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e155]:
              - link "Applications" [ref=e156] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e157]:
          - paragraph [ref=e158]: Company
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Platform" [ref=e161] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e162]:
              - link "Research & Engineering" [ref=e163] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e164]:
              - link "Validation & Safety" [ref=e165] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e166]:
              - link "Industries" [ref=e167] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e168]:
              - link "Partnerships" [ref=e169] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e170]:
              - link "Investors" [ref=e171] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e172]:
              - link "Careers" [ref=e173] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e174]:
              - link "Contact" [ref=e175] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e176]:
          - generic [ref=e177]:
            - paragraph [ref=e178]: Legal
            - list [ref=e179]:
              - listitem [ref=e180]:
                - link "Privacy Policy" [ref=e181] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e182]:
                - link "Terms of Use" [ref=e183] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e184]:
                - link "Responsible AI & Robotics" [ref=e185] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e186]:
                - link "Safety & Compliance" [ref=e187] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e188]:
            - paragraph [ref=e189]: Follow
            - list [ref=e190]:
              - listitem [ref=e191]: LinkedIn
              - listitem [ref=e192]: YouTube
              - listitem [ref=e193]: Instagram
              - listitem [ref=e194]: X
      - paragraph [ref=e196]: Cennzo Robotix
      - generic [ref=e197]:
        - paragraph [ref=e198]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e199]: UTC 11:27:58 · 24.71°N 46.68°E
        - paragraph [ref=e201]: The future belongs to machines that can understand the world, move through it and act within it.
  - button "Back to top" [ref=e202] [cursor=pointer]
  - dialog "Choose your language" [ref=e210]:
    - generic [ref=e212]:
      - paragraph [ref=e213]: System Setup · 01
      - heading "Choose your language" [level=2] [ref=e214]
      - paragraph [ref=e215]: Select a language for Cennzo Robotix. You can change it anytime.
      - generic [ref=e216]:
        - button "English English" [ref=e217] [cursor=pointer]:
          - generic [ref=e218]: English
          - generic [ref=e219]: English
        - button "हिन्दी Hindi" [ref=e220] [cursor=pointer]:
          - generic [ref=e221]: हिन्दी
          - generic [ref=e222]: Hindi
        - button "தமிழ் Tamil" [ref=e223] [cursor=pointer]:
          - generic [ref=e224]: தமிழ்
          - generic [ref=e225]: Tamil
        - button "日本語 Japanese" [ref=e226] [cursor=pointer]:
          - generic [ref=e227]: 日本語
          - generic [ref=e228]: Japanese
        - button "中文 Chinese" [ref=e229] [cursor=pointer]:
          - generic [ref=e230]: 中文
          - generic [ref=e231]: Chinese
        - button "Français French" [ref=e232] [cursor=pointer]:
          - generic [ref=e233]: Français
          - generic [ref=e234]: French
        - button "Español Spanish" [ref=e235] [cursor=pointer]:
          - generic [ref=e236]: Español
          - generic [ref=e237]: Spanish
      - button "Continue in English" [ref=e238] [cursor=pointer]
  - alert [ref=e239]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Contact Page", () => {
  4  |   test("loads successfully", async ({ page }) => {
  5  |     const response = await page.goto("/contact");
  6  |     expect(response?.status()).toBe(200);
  7  |   });
  8  | 
  9  |   test("renders the contact form", async ({ page }) => {
  10 |     await page.goto("/contact");
  11 |     await expect(page.getByRole("form")).toBeVisible();
  12 |   });
  13 | 
  14 |   test("has required form fields", async ({ page }) => {
  15 |     await page.goto("/contact");
  16 |     await expect(page.getByLabel(/name/i)).toBeVisible();
  17 |     await expect(page.getByLabel(/email/i)).toBeVisible();
  18 |     await expect(page.getByLabel(/message/i)).toBeVisible();
  19 |   });
  20 | 
  21 |   test("shows validation error for empty name on blur", async ({ page }) => {
  22 |     await page.goto("/contact");
  23 |     const nameInput = page.getByLabel(/name/i);
> 24 |     await nameInput.click();
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  25 |     await nameInput.blur();
  26 |     await expect(page.getByText(/required/i)).toBeVisible();
  27 |   });
  28 | 
  29 |   test("shows validation error for invalid email", async ({ page }) => {
  30 |     await page.goto("/contact");
  31 |     const emailInput = page.getByLabel(/email/i);
  32 |     await emailInput.fill("not-an-email");
  33 |     await emailInput.blur();
  34 |     await expect(page.getByText(/invalid/i)).toBeVisible();
  35 |   });
  36 | 
  37 |   test("shows validation error for short message", async ({ page }) => {
  38 |     await page.goto("/contact");
  39 |     const messageInput = page.getByLabel(/message/i);
  40 |     await messageInput.fill("Short");
  41 |     await messageInput.blur();
  42 |     await expect(page.getByText(/short/i)).toBeVisible();
  43 |   });
  44 | 
  45 |   test("has a submit button", async ({ page }) => {
  46 |     await page.goto("/contact");
  47 |     await expect(page.getByRole("button", { name: /send/i })).toBeVisible();
  48 |   });
  49 | });
  50 | 
  51 | test.describe("About Page", () => {
  52 |   test("loads successfully", async ({ page }) => {
  53 |     const response = await page.goto("/about");
  54 |     expect(response?.status()).toBe(200);
  55 |   });
  56 | 
  57 |   test("renders page content", async ({ page }) => {
  58 |     await page.goto("/about");
  59 |     await expect(page.locator("main")).toBeVisible();
  60 |   });
  61 | });
  62 | 
  63 | test.describe("Technology Page", () => {
  64 |   test("loads successfully", async ({ page }) => {
  65 |     const response = await page.goto("/technology");
  66 |     expect(response?.status()).toBe(200);
  67 |   });
  68 | 
  69 |   test("renders page content", async ({ page }) => {
  70 |     await page.goto("/technology");
  71 |     await expect(page.locator("main")).toBeVisible();
  72 |   });
  73 | });
  74 | 
  75 | test.describe("WAFEE Page", () => {
  76 |   test("loads successfully", async ({ page }) => {
  77 |     const response = await page.goto("/wafee");
  78 |     expect(response?.status()).toBe(200);
  79 |   });
  80 | 
  81 |   test("renders page content", async ({ page }) => {
  82 |     await page.goto("/wafee");
  83 |     await expect(page.locator("main")).toBeVisible();
  84 |   });
  85 | });
  86 | 
```