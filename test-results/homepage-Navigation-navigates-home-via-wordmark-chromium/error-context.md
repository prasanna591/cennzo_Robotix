# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Navigation >> navigates home via wordmark
- Location: __tests__\e2e\homepage.spec.ts:93:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('CENNZO') resolved to 8 elements:
    1) <span class="text-[15px] font-semibold tracking-[0.22em] text-bone md:text-lg">CENNZO</span> aka getByRole('banner').getByRole('link', { name: 'Cennzo Robotix — Home' })
    2) <div class="mt-8 max-w-2xl text-subhead leading-relaxed text-mist">Cennzo Robotix is a deep-tech robotics company fo…</div> aka getByText('Cennzo Robotix is a deep-tech')
    3) <p class="rounded-sm bg-void/60 px-1.5 py-0.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-mist backdrop-blur-sm">Inside the Cennzo Robotix Lab — Concept Visualiza…</p> aka getByRole('button', { name: 'Expand imagery: Inside the' })
    4) <span>Inside the Cennzo Robotix Lab — Concept Visualiza…</span> aka locator('figcaption').getByText('Inside the Cennzo Robotix Lab')
    5) <span class="">Cennzo Robotix</span> aka getByRole('main').getByText('Cennzo Robotix', { exact: true })
    6) <span class="text-lg font-semibold tracking-[0.22em] text-bone">CENNZO</span> aka getByRole('contentinfo').getByRole('link', { name: 'Cennzo Robotix — Home' })
    7) <p class="whitespace-nowrap bg-[linear-gradient(180deg,rgba(37,99,235,0.22),rgba(37,99,235,0.03))] bg-clip-text text-center text-[clamp(3rem,11vw,10rem)] font-semibold uppercase leading-none tracking-[-0.02em] text-transparent">Cennzo Robotix</p> aka getByRole('contentinfo').getByText('Cennzo Robotix', { exact: true })
    8) <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">© 2026 Cennzo Robotix. All rights reserved.</p> aka getByText('© 2026 Cennzo Robotix. All')

Call log:
  - waiting for getByText('CENNZO')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - paragraph [ref=e4]: Initializing WAFEE_
    - paragraph [ref=e6]: 013%
    - paragraph [ref=e7]: Spooling power core ··· OK
  - banner [ref=e8]:
    - generic [ref=e9]:
      - link "Cennzo Robotix — Home" [ref=e10] [cursor=pointer]:
        - /url: /
        - generic [ref=e11]:
          - generic [ref=e12]: CENNZO
          - generic [ref=e13]: ROBOTIX
      - navigation "Primary" [ref=e14]:
        - link "About" [ref=e15] [cursor=pointer]:
          - /url: /about
        - link "WAFEE" [ref=e17] [cursor=pointer]:
          - /url: /wafee
        - link "Technology" [ref=e18] [cursor=pointer]:
          - /url: /technology
        - link "Applications" [ref=e19] [cursor=pointer]:
          - /url: /applications
        - link "Industries" [ref=e20] [cursor=pointer]:
          - /url: /industries
        - button "Language" [ref=e23] [cursor=pointer]:
          - generic [ref=e27]: EN
        - link "Contact" [ref=e28] [cursor=pointer]:
          - /url: /contact
  - main [ref=e30]:
    - generic [ref=e31]:
      - generic:
        - generic:
          - generic: + SYS
          - generic: + NAV
      - generic [ref=e36]:
        - paragraph [ref=e37]:
          - generic [ref=e39]: "About ^}"
        - heading "E n g i n e e r i n g I n t e l l i g e n c e F o r T h e * R e a l W o r l d . *" [level=1] [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]:
              - generic [ref=e43]:
                - generic [ref=e44]: E
                - generic [ref=e45]: "n"
                - generic [ref=e46]: g
                - generic [ref=e47]: i
                - generic [ref=e48]: "n"
                - generic [ref=e49]: e
                - generic [ref=e50]: e
                - generic [ref=e51]: r
                - generic [ref=e52]: i
                - generic [ref=e53]: "n"
                - generic [ref=e54]: g
              - generic [ref=e56]:
                - generic [ref=e57]: I
                - generic [ref=e58]: "n"
                - generic [ref=e59]: t
                - generic [ref=e60]: e
                - generic [ref=e61]: l
                - generic [ref=e62]: l
                - generic [ref=e63]: i
                - generic [ref=e64]: g
                - generic [ref=e65]: e
                - generic [ref=e66]: "n"
                - generic [ref=e67]: c
                - generic [ref=e68]: e
            - generic [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e72]: F
                - generic [ref=e73]: o
                - generic [ref=e74]: r
              - generic [ref=e76]:
                - generic [ref=e77]: T
                - generic [ref=e78]: h
                - generic [ref=e79]: e
              - generic [ref=e81]:
                - generic [ref=e82]: "*"
                - generic [ref=e83]: R
                - generic [ref=e84]: e
                - generic [ref=e85]: a
                - generic [ref=e86]: l
              - generic [ref=e88]:
                - generic [ref=e89]: W
                - generic [ref=e90]: o
                - generic [ref=e91]: r
                - generic [ref=e92]: l
                - generic [ref=e93]: d
                - generic [ref=e94]: .
                - generic [ref=e95]: "*"
        - generic [ref=e97]: Cennzo Robotix is a deep-tech robotics company focused on developing intelligent humanoid systems for demanding real-world environments.
    - generic [ref=e98]:
      - generic:
        - generic:
          - generic: + SYS
          - generic: + NAV
      - generic [ref=e99]:
        - paragraph [ref=e101]: Who We Are
        - heading "We exist to put intelligence where humans *cannot safely go.*" [level=2] [ref=e103]:
          - generic [ref=e104]:
            - generic [ref=e105]:
              - generic [ref=e106]: We
              - generic [ref=e107]: exist
              - generic [ref=e108]: to
              - generic [ref=e109]: put
              - generic [ref=e110]: intelligence
            - generic [ref=e111]:
              - generic [ref=e112]: where
              - generic [ref=e113]: humans
              - generic [ref=e114]: "*cannot"
              - generic [ref=e115]: safely
              - generic [ref=e116]: go.*
        - generic [ref=e117]:
          - paragraph [ref=e119]: We combine robotics, artificial intelligence, mechanical engineering, embedded systems, advanced materials, energy systems and autonomous control into integrated robotic platforms.
          - paragraph [ref=e121]: Our flagship platform, WAFEE, represents our vision of a humanoid machine capable of adapting across multiple mission environments.
    - generic [ref=e128]:
      - generic [ref=e129]:
        - paragraph [ref=e130]: "0"
        - paragraph [ref=e131]: engineering disciplines
        - paragraph [ref=e132]: From actuation and materials to AI and autonomous control.
      - generic [ref=e133]:
        - paragraph [ref=e134]: "0"
        - paragraph [ref=e135]: mission domains
        - paragraph [ref=e136]: Land, sea, fire, air — and eventually, space.
      - generic [ref=e137]:
        - paragraph [ref=e138]: "0"
        - paragraph [ref=e139]: system attributes
        - paragraph [ref=e140]: The defining traits of the WAFEE reference architecture.
      - generic [ref=e141]:
        - paragraph [ref=e142]: "0"
        - paragraph [ref=e143]: core values
        - paragraph [ref=e144]: The principles every engineering decision must satisfy.
    - generic [ref=e147]:
      - generic [ref=e148]:
        - generic [ref=e149]:
          - paragraph [ref=e150]: Purpose
          - heading "One company. Two promises." [level=2] [ref=e152]:
            - generic [ref=e153]:
              - generic [ref=e154]:
                - generic [ref=e155]: One
                - generic [ref=e158]: company.
              - generic [ref=e161]:
                - generic [ref=e162]: Two
                - generic [ref=e165]: promises.
        - paragraph [ref=e168]: Everything we engineer — every actuator, every model, every line of code — traces back to these two commitments.
      - generic [ref=e169]:
        - article [ref=e170]:
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: Mission
              - generic [ref=e179]: "01"
            - heading "Extend human capability. Keep people out of harm's way." [level=3] [ref=e180]:
              - text: Extend human capability.
              - generic [ref=e181]: Keep people out of harm's way.
            - paragraph [ref=e182]: We build intelligent machines that go where it is difficult, dangerous or inefficient for people — improving operational safety while opening environments that were previously unreachable.
          - generic [ref=e183]: Grounded in engineering reality
        - article [ref=e185]:
          - generic [ref=e188]:
            - generic [ref=e189]:
              - generic [ref=e190]: Vision
              - generic [ref=e195]: "02"
            - heading "A world where robots and humanity work side by side." [level=3] [ref=e196]:
              - text: A world where robots and humanity
              - generic [ref=e197]: work side by side.
            - paragraph [ref=e198]: Dangerous, repetitive, inaccessible and technically demanding missions — handled by machines with persistence, precision and resilience, so people are free to aim higher.
          - generic [ref=e199]: Beyond the horizon
    - generic [ref=e201]:
      - generic:
        - generic:
          - generic: + SYS
          - generic: + NAV
      - generic [ref=e202]:
        - figure "Inside the Cennzo Robotix Lab — Concept Visualization Concept visualization" [ref=e205]:
          - 'button "Expand imagery: Inside the Cennzo Robotix Lab — Concept Visualization" [ref=e206] [cursor=pointer]':
            - generic [ref=e208]:
              - img "Inside the Cennzo Robotix Lab — Concept Visualization" [ref=e209]
              - generic [ref=e216]: CR·IMG-03
              - generic [ref=e217]: Concept
              - generic [ref=e218]:
                - paragraph [ref=e219]: Inside the Cennzo Robotix Lab — Concept Visualization
                - paragraph [ref=e220]: Expand +
          - generic [ref=e221]:
            - generic [ref=e222]: Inside the Cennzo Robotix Lab — Concept Visualization
            - generic [ref=e223]: Concept visualization
        - paragraph [ref=e225]:
          - text: Where disciplines converge
          - generic [ref=e226]: — one team, one machine.
    - generic [ref=e229]:
      - generic [ref=e230]:
        - paragraph [ref=e232]:
          - generic [ref=e233]: Our Approach
        - heading "System Integration Is The Breakthrough." [level=2] [ref=e234]:
          - generic [ref=e235]:
            - generic [ref=e236]: System Integration
            - generic [ref=e238]: Is The Breakthrough.
        - paragraph [ref=e242]: We believe the future of robotics will not be defined by one breakthrough component. It will be defined by system integration.
      - generic [ref=e243]:
        - generic [ref=e244]:
          - generic [ref=e245]:
            - heading "A powerful motor" [level=3] [ref=e248]
            - paragraph [ref=e249]: Raw actuation without perception or control is just kinetic energy.
            - paragraph [ref=e250]: Not enough.
          - generic [ref=e251]:
            - heading "A sophisticated AI model" [level=3] [ref=e255]
            - paragraph [ref=e256]: Intelligence without a capable body stays trapped in the cloud.
            - paragraph [ref=e257]: Not enough.
          - generic [ref=e258]:
            - heading "A strong chassis" [level=3] [ref=e262]
            - paragraph [ref=e263]: Structure without sensing and autonomy is inert material.
            - paragraph [ref=e264]: Not enough.
        - generic [ref=e268]:
          - generic [ref=e269]:
            - paragraph [ref=e270]: The Synthesis
            - heading "A useful robot emerges when everything operates as one system." [level=3] [ref=e271]
            - paragraph [ref=e272]: Mechanics, electronics, energy, software, intelligence, perception and safety — engineered as a single integrated architecture. That is the philosophy behind WAFEE.
          - img [ref=e273]:
            - generic [ref=e286]: WAFEE
            - generic [ref=e287]: Actuation
            - generic [ref=e288]: Intelligence
            - generic [ref=e289]: Structure
    - generic [ref=e292]:
      - generic [ref=e293]:
        - paragraph [ref=e295]:
          - generic [ref=e296]: Our Values
        - heading "What We Hold To." [level=2] [ref=e297]:
          - generic [ref=e298]:
            - generic [ref=e299]: What We
            - generic [ref=e301]: Hold To.
      - generic [ref=e303]:
        - generic [ref=e305]:
          - paragraph [ref=e306]: "01"
          - heading "Engineering First" [level=3] [ref=e307]
          - paragraph [ref=e308]: We prioritize measurable performance over appearance.
        - generic [ref=e310]:
          - paragraph [ref=e311]: "02"
          - heading "Mission First" [level=3] [ref=e312]
          - paragraph [ref=e313]: Every subsystem must serve a real operational requirement.
        - generic [ref=e315]:
          - paragraph [ref=e316]: "03"
          - heading "Human Impact" [level=3] [ref=e317]
          - paragraph [ref=e318]: Technology should reduce danger and expand human capability.
        - generic [ref=e320]:
          - paragraph [ref=e321]: "04"
          - heading "Iterate Fast" [level=3] [ref=e322]
          - paragraph [ref=e323]: Build, test, measure, learn and improve.
        - generic [ref=e325]:
          - paragraph [ref=e326]: "05"
          - heading "Open Innovation" [level=3] [ref=e327]
          - paragraph [ref=e328]: The most important breakthroughs often happen across disciplines and organizations.
        - generic [ref=e330]:
          - paragraph [ref=e331]: "06"
          - heading "Responsible Autonomy" [level=3] [ref=e332]
          - paragraph [ref=e333]: Robots should operate within defined safety boundaries, with traceability and human oversight where required.
    - generic [ref=e336]:
      - generic [ref=e338]:
        - paragraph [ref=e340]:
          - generic [ref=e341]: The Road Ahead
        - heading "From Blueprint To Breach." [level=2] [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]: From Blueprint
            - generic [ref=e346]: To Breach.
        - paragraph [ref=e350]: Every frontier starts as a drawing. Ours is a phased engineering campaign — each stage unlocking the next, each claim earned before it is made.
      - generic [ref=e353]:
        - generic [ref=e354]:
          - generic [ref=e356]:
            - paragraph [ref=e357]: Phase 01
            - generic [ref=e358]: Current focus
          - heading "Foundation" [level=3] [ref=e359]
          - paragraph [ref=e360]: Architecture definition, reference design and the engineering doctrine behind WAFEE.
        - generic [ref=e361]:
          - generic [ref=e363]:
            - paragraph [ref=e364]: Phase 02
            - generic [ref=e365]: Next
          - heading "Development" [level=3] [ref=e366]
          - paragraph [ref=e367]: Subsystem integration — actuation, perception, compute and power — built and bench-validated as one machine.
        - generic [ref=e368]:
          - generic [ref=e370]:
            - paragraph [ref=e371]: Phase 03
            - generic [ref=e372]: Planned
          - heading "Validation" [level=3] [ref=e373]
          - paragraph [ref=e374]: Controlled laboratory testing, subsystem qualification and full-system verification against mission requirements.
        - generic [ref=e375]:
          - generic [ref=e377]:
            - paragraph [ref=e378]: Phase 04
            - generic [ref=e379]: Long-term
          - heading "Deployment" [level=3] [ref=e380]
          - paragraph [ref=e381]: Progressive environmental qualification — extending WAFEE across land, sea, fire, air and space domains.
    - generic [ref=e382]:
      - generic [ref=e383]:
        - generic:
          - generic:
            - generic: + SYS
            - generic: + NAV
      - generic [ref=e388]:
        - paragraph [ref=e389]:
          - generic [ref=e391]: Cennzo Robotix
        - heading "Bold Enough To Imagine The Impossible." [level=2] [ref=e393]:
          - generic [ref=e394]:
            - generic [ref=e395]: Bold Enough To Imagine
            - generic [ref=e397]: The Impossible.
        - paragraph [ref=e399]: Disciplined enough to prove it.
        - generic [ref=e400]:
          - link "Partner With Us" [ref=e402] [cursor=pointer]:
            - /url: /partnerships
          - link "Meet WAFEE" [ref=e407] [cursor=pointer]:
            - /url: /wafee
  - contentinfo [ref=e411]:
    - generic [ref=e413]:
      - generic [ref=e414]:
        - generic [ref=e415]:
          - link "Cennzo Robotix — Home" [ref=e416] [cursor=pointer]:
            - /url: /
            - generic [ref=e417]: CENNZO
            - generic [ref=e418]: ROBOTIX
          - paragraph [ref=e419]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e420]: Innovate · Automate · Elevate
        - generic [ref=e421]:
          - paragraph [ref=e422]: Explore
          - list [ref=e423]:
            - listitem [ref=e424]:
              - link "Home" [ref=e425] [cursor=pointer]:
                - /url: /
            - listitem [ref=e426]:
              - link "About" [ref=e427] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e428]:
              - link "WAFEE" [ref=e429] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e430]:
              - link "Technology" [ref=e431] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e432]:
              - link "Applications" [ref=e433] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e434]:
          - paragraph [ref=e435]: Company
          - list [ref=e436]:
            - listitem [ref=e437]:
              - link "Platform" [ref=e438] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e439]:
              - link "Research & Engineering" [ref=e440] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e441]:
              - link "Validation & Safety" [ref=e442] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e443]:
              - link "Industries" [ref=e444] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e445]:
              - link "Partnerships" [ref=e446] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e447]:
              - link "Investors" [ref=e448] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e449]:
              - link "Careers" [ref=e450] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e451]:
              - link "Contact" [ref=e452] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e453]:
          - generic [ref=e454]:
            - paragraph [ref=e455]: Legal
            - list [ref=e456]:
              - listitem [ref=e457]:
                - link "Privacy Policy" [ref=e458] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e459]:
                - link "Terms of Use" [ref=e460] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e461]:
                - link "Responsible AI & Robotics" [ref=e462] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e463]:
                - link "Safety & Compliance" [ref=e464] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e465]:
            - paragraph [ref=e466]: Follow
            - list [ref=e467]:
              - listitem [ref=e468]: LinkedIn
              - listitem [ref=e469]: YouTube
              - listitem [ref=e470]: Instagram
              - listitem [ref=e471]: X
      - paragraph [ref=e473]: Cennzo Robotix
      - generic [ref=e474]:
        - paragraph [ref=e475]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e476]: UTC 11:27:17 · 24.71°N 46.68°E
        - paragraph [ref=e478]: The future belongs to machines that can understand the world, move through it and act within it.
  - alert [ref=e479]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.describe("Homepage", () => {
  4   |   test("loads successfully", async ({ page }) => {
  5   |     const response = await page.goto("/");
  6   |     expect(response?.status()).toBe(200);
  7   |   });
  8   | 
  9   |   test("has correct title", async ({ page }) => {
  10  |     await page.goto("/");
  11  |     await expect(page).toHaveTitle(/Cennzo Robotix/);
  12  |   });
  13  | 
  14  |   test("has correct meta description", async ({ page }) => {
  15  |     await page.goto("/");
  16  |     const description = await page.getAttribute('meta[name="description"]', "content");
  17  |     expect(description).toBeTruthy();
  18  |     expect(description!.length).toBeGreaterThan(0);
  19  |   });
  20  | 
  21  |   test("renders the CENNZO wordmark", async ({ page }) => {
  22  |     await page.goto("/");
  23  |     await expect(page.getByText("CENNZO")).toBeVisible();
  24  |   });
  25  | 
  26  |   test("renders the ROBOTIX subtitle", async ({ page }) => {
  27  |     await page.goto("/");
  28  |     await expect(page.getByText("ROBOTIX")).toBeVisible();
  29  |   });
  30  | 
  31  |   test("has navigation links", async ({ page }) => {
  32  |     await page.goto("/");
  33  |     await expect(page.getByRole("link", { name: "About" }).first()).toBeVisible();
  34  |     await expect(page.getByRole("link", { name: "Technology" }).first()).toBeVisible();
  35  |   });
  36  | 
  37  |   test("has a contact link in the header", async ({ page }) => {
  38  |     await page.goto("/");
  39  |     await expect(page.getByRole("link", { name: "Contact" }).first()).toBeVisible();
  40  |   });
  41  | 
  42  |   test("renders main content sections", async ({ page }) => {
  43  |     await page.goto("/");
  44  |     await expect(page.locator("main")).toBeVisible();
  45  |   });
  46  | 
  47  |   test("has a footer", async ({ page }) => {
  48  |     await page.goto("/");
  49  |     await expect(page.getByText("Innovate · Automate · Elevate")).toBeVisible();
  50  |   });
  51  | 
  52  |   test("has structured data (JSON-LD)", async ({ page }) => {
  53  |     await page.goto("/");
  54  |     const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  55  |     expect(jsonLd).toBeTruthy();
  56  |     const data = JSON.parse(jsonLd!);
  57  |     expect(data["@type"]).toBe("Organization");
  58  |     expect(data.name).toBe("Cennzo Robotix");
  59  |   });
  60  | });
  61  | 
  62  | test.describe("Navigation", () => {
  63  |   test("navigates to About page", async ({ page }) => {
  64  |     await page.goto("/");
  65  |     await page.getByRole("link", { name: "About" }).first().click();
  66  |     await expect(page).toHaveURL(/\/about/);
  67  |   });
  68  | 
  69  |   test("navigates to Technology page", async ({ page }) => {
  70  |     await page.goto("/");
  71  |     await page.getByRole("link", { name: "Technology" }).first().click();
  72  |     await expect(page).toHaveURL(/\/technology/);
  73  |   });
  74  | 
  75  |   test("navigates to WAFEE page", async ({ page }) => {
  76  |     await page.goto("/");
  77  |     await page.getByRole("link", { name: "WAFEE" }).first().click();
  78  |     await expect(page).toHaveURL(/\/wafee/);
  79  |   });
  80  | 
  81  |   test("navigates to Applications page", async ({ page }) => {
  82  |     await page.goto("/");
  83  |     await page.getByRole("link", { name: "Applications" }).first().click();
  84  |     await expect(page).toHaveURL(/\/applications/);
  85  |   });
  86  | 
  87  |   test("navigates to Contact page", async ({ page }) => {
  88  |     await page.goto("/");
  89  |     await page.getByRole("link", { name: "Contact" }).first().click();
  90  |     await expect(page).toHaveURL(/\/contact/);
  91  |   });
  92  | 
  93  |   test("navigates home via wordmark", async ({ page }) => {
  94  |     await page.goto("/about");
> 95  |     await page.getByText("CENNZO").click();
      |                                    ^ Error: locator.click: Error: strict mode violation: getByText('CENNZO') resolved to 8 elements:
  96  |     await expect(page).toHaveURL("/");
  97  |   });
  98  | });
  99  | 
  100 | test.describe("Page Routes", () => {
  101 |   const routes = [
  102 |     "/",
  103 |     "/about",
  104 |     "/wafee",
  105 |     "/technology",
  106 |     "/applications",
  107 |     "/industries",
  108 |     "/contact",
  109 |     "/research",
  110 |     "/safety",
  111 |     "/partnerships",
  112 |     "/investors",
  113 |     "/careers",
  114 |     "/legal",
  115 |     "/platform",
  116 |   ];
  117 | 
  118 |   for (const route of routes) {
  119 |     test(`${route} returns 200`, async ({ page }) => {
  120 |       const response = await page.goto(route);
  121 |       expect(response?.status()).toBe(200);
  122 |     });
  123 |   }
  124 | });
  125 | 
  126 | test.describe("404 Page", () => {
  127 |   test("shows 404 for non-existent routes", async ({ page }) => {
  128 |     const response = await page.goto("/non-existent-page");
  129 |     expect(response?.status()).toBe(404);
  130 |   });
  131 | });
  132 | 
  133 | test.describe("Accessibility", () => {
  134 |   test("has lang attribute on html element", async ({ page }) => {
  135 |     await page.goto("/");
  136 |     const lang = await page.getAttribute("html", "lang");
  137 |     expect(lang).toBeTruthy();
  138 |   });
  139 | 
  140 |   test("has aria-label on primary navigation", async ({ page }) => {
  141 |     await page.goto("/");
  142 |     await expect(page.locator('nav[aria-label="Primary"]')).toBeVisible();
  143 |   });
  144 | 
  145 |   test("has aria-label on mobile navigation when menu is open", async ({ page }) => {
  146 |     await page.goto("/");
  147 |     await page.getByRole("button", { name: /open menu/i }).click();
  148 |     await expect(page.locator('nav[aria-label="Mobile"]')).toBeVisible();
  149 |   });
  150 | 
  151 |   test("has proper heading hierarchy", async ({ page }) => {
  152 |     await page.goto("/");
  153 |     const h1 = await page.locator("h1").count();
  154 |     expect(h1).toBeGreaterThanOrEqual(1);
  155 |   });
  156 | });
  157 | 
  158 | test.describe("Performance", () => {
  159 |   test("does not have console errors", async ({ page }) => {
  160 |     const errors: string[] = [];
  161 |     page.on("console", (msg) => {
  162 |       if (msg.type() === "error") {
  163 |         errors.push(msg.text());
  164 |       }
  165 |     });
  166 |     await page.goto("/");
  167 |     await page.waitForTimeout(2000);
  168 |     expect(errors).toHaveLength(0);
  169 |   });
  170 | });
  171 | 
```