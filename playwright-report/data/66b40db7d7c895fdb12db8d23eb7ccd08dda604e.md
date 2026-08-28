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
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
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
  6 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
      - button "Open menu" [ref=e9] [cursor=pointer]
  - main [ref=e13]:
    - generic [ref=e19]:
      - paragraph [ref=e20]:
        - generic [ref=e22]: Contact
      - heading "L e t ' s B u i l d W h a t C o m e s N e x t ." [level=1] [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: L
              - generic [ref=e28]: e
              - generic [ref=e29]: t
              - generic [ref=e30]: "'"
              - generic [ref=e31]: s
            - generic [ref=e33]:
              - generic [ref=e34]: B
              - generic [ref=e35]: u
              - generic [ref=e36]: i
              - generic [ref=e37]: l
              - generic [ref=e38]: d
          - generic [ref=e40]:
            - generic [ref=e41]:
              - generic [ref=e42]: W
              - generic [ref=e43]: h
              - generic [ref=e44]: a
              - generic [ref=e45]: t
            - generic [ref=e47]:
              - generic [ref=e48]: C
              - generic [ref=e49]: o
              - generic [ref=e50]: m
              - generic [ref=e51]: e
              - generic [ref=e52]: s
            - generic [ref=e54]:
              - generic [ref=e55]: "N"
              - generic [ref=e56]: e
              - generic [ref=e57]: x
              - generic [ref=e58]: t
              - generic [ref=e59]: .
      - generic [ref=e61]: Whether you are an industrial operator, technology partner, researcher, investor or engineer, we would like to hear from you.
      - paragraph [ref=e62]: Have a hard problem? Let's engineer the answer.
    - generic [ref=e65]:
      - generic [ref=e66]:
        - paragraph [ref=e68]: Contact For
        - list [ref=e70]:
          - listitem [ref=e71]: WAFEE demonstrations
          - listitem [ref=e73]: Technology partnerships
          - listitem [ref=e75]: Industrial pilots
          - listitem [ref=e77]: Research collaboration
          - listitem [ref=e79]: Investment discussions
          - listitem [ref=e81]: Component partnerships
          - listitem [ref=e83]: Careers
          - listitem [ref=e85]: Media
        - paragraph [ref=e88]: Cennzo RobotixIntelligent Machines for the Real World.
      - generic [ref=e91]:
        - generic [ref=e92]:
          - generic [ref=e93]: Name *
          - textbox "Name *" [ref=e94]:
            - /placeholder: Your full name
        - generic [ref=e95]:
          - generic [ref=e96]: Company
          - textbox "Company" [ref=e97]:
            - /placeholder: Organization
        - generic [ref=e98]:
          - generic [ref=e99]: Email *
          - textbox "Email *" [ref=e100]:
            - /placeholder: name@company.com
        - generic [ref=e101]:
          - generic [ref=e102]: Phone
          - textbox "Phone" [ref=e103]:
            - /placeholder: +1 000 000 0000
        - generic [ref=e104]:
          - generic [ref=e105]: Country
          - textbox "Country" [ref=e106]
        - generic [ref=e107]:
          - generic [ref=e108]: Organization Type
          - combobox "Organization Type" [ref=e109]:
            - option "Select type" [disabled] [selected]
            - option "Industrial Operator"
            - option "Technology Company"
            - option "Research Institution"
            - option "Government / Public Sector"
            - option "Investor"
            - option "Individual"
            - option "Other"
        - generic [ref=e110]:
          - generic [ref=e111]: Area of Interest
          - combobox "Area of Interest" [ref=e112]:
            - option "Select area" [disabled] [selected]
            - option "WAFEE demonstrations"
            - option "Technology partnerships"
            - option "Industrial pilots"
            - option "Research collaboration"
            - option "Investment discussions"
            - option "Component partnerships"
            - option "Careers"
            - option "Media"
        - generic [ref=e113]:
          - generic [ref=e114]:
            - generic [ref=e115]: Message *
            - generic [ref=e116]: 0 / 1000
          - textbox "Message *" [ref=e117]:
            - /placeholder: Tell us about your mission, project or interest.
        - button "Start a Conversation" [ref=e119] [cursor=pointer]
  - contentinfo [ref=e123]:
    - generic [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - link "Cennzo Robotix — Home" [ref=e128] [cursor=pointer]:
            - /url: /
            - generic [ref=e129]: CENNZO
            - generic [ref=e130]: ROBOTIX
          - paragraph [ref=e131]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e132]: Innovate · Automate · Elevate
        - generic [ref=e133]:
          - paragraph [ref=e134]: Explore
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Home" [ref=e137] [cursor=pointer]:
                - /url: /
            - listitem [ref=e138]:
              - link "About" [ref=e139] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e140]:
              - link "WAFEE" [ref=e141] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e142]:
              - link "Technology" [ref=e143] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e144]:
              - link "Applications" [ref=e145] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e146]:
          - paragraph [ref=e147]: Company
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Platform" [ref=e150] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e151]:
              - link "Research & Engineering" [ref=e152] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e153]:
              - link "Validation & Safety" [ref=e154] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e155]:
              - link "Industries" [ref=e156] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e157]:
              - link "Partnerships" [ref=e158] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e159]:
              - link "Investors" [ref=e160] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e161]:
              - link "Careers" [ref=e162] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e163]:
              - link "Contact" [ref=e164] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e165]:
          - generic [ref=e166]:
            - paragraph [ref=e167]: Legal
            - list [ref=e168]:
              - listitem [ref=e169]:
                - link "Privacy Policy" [ref=e170] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e171]:
                - link "Terms of Use" [ref=e172] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e173]:
                - link "Responsible AI & Robotics" [ref=e174] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e175]:
                - link "Safety & Compliance" [ref=e176] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e177]:
            - paragraph [ref=e178]: Follow
            - list [ref=e179]:
              - listitem [ref=e180]: LinkedIn
              - listitem [ref=e181]: YouTube
              - listitem [ref=e182]: Instagram
              - listitem [ref=e183]: X
      - paragraph [ref=e185]: Cennzo Robotix
      - generic [ref=e186]:
        - paragraph [ref=e187]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e188]: UTC 11:28:34 · 24.71°N 46.68°E
        - paragraph [ref=e190]: The future belongs to machines that can understand the world, move through it and act within it.
  - button "Back to top" [ref=e191] [cursor=pointer]
  - dialog "Choose your language" [ref=e199]:
    - generic [ref=e201]:
      - paragraph [ref=e202]: System Setup · 01
      - heading "Choose your language" [level=2] [ref=e203]
      - paragraph [ref=e204]: Select a language for Cennzo Robotix. You can change it anytime.
      - generic [ref=e205]:
        - button "English English" [ref=e206] [cursor=pointer]:
          - generic [ref=e207]: English
          - generic [ref=e208]: English
        - button "हिन्दी Hindi" [ref=e209] [cursor=pointer]:
          - generic [ref=e210]: हिन्दी
          - generic [ref=e211]: Hindi
        - button "தமிழ் Tamil" [ref=e212] [cursor=pointer]:
          - generic [ref=e213]: தமிழ்
          - generic [ref=e214]: Tamil
        - button "日本語 Japanese" [ref=e215] [cursor=pointer]:
          - generic [ref=e216]: 日本語
          - generic [ref=e217]: Japanese
        - button "中文 Chinese" [ref=e218] [cursor=pointer]:
          - generic [ref=e219]: 中文
          - generic [ref=e220]: Chinese
        - button "Français French" [ref=e221] [cursor=pointer]:
          - generic [ref=e222]: Français
          - generic [ref=e223]: French
        - button "Español Spanish" [ref=e224] [cursor=pointer]:
          - generic [ref=e225]: Español
          - generic [ref=e226]: Spanish
      - button "Continue in English" [ref=e227] [cursor=pointer]
  - alert [ref=e228]
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