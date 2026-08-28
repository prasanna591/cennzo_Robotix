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
    - paragraph [ref=e6]: 000%
    - paragraph [ref=e7]: Calibrating actuators ··· OK
  - banner [ref=e8]:
    - generic [ref=e9]:
      - link "Cennzo Robotix — Home" [ref=e10] [cursor=pointer]:
        - /url: /
        - generic [ref=e11]:
          - generic [ref=e12]: CENNZO
          - generic [ref=e13]: ROBOTIX
      - button "Open menu" [ref=e14] [cursor=pointer]
  - main [ref=e18]:
    - generic [ref=e24]:
      - paragraph [ref=e25]:
        - generic [ref=e27]: About Us
      - heading "E n g i n e e r i n g I n t e l l i g e n c e F o r T h e * R e a l W o r l d . *" [level=1] [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: E
              - generic [ref=e33]: "n"
              - generic [ref=e34]: g
              - generic [ref=e35]: i
              - generic [ref=e36]: "n"
              - generic [ref=e37]: e
              - generic [ref=e38]: e
              - generic [ref=e39]: r
              - generic [ref=e40]: i
              - generic [ref=e41]: "n"
              - generic [ref=e42]: g
            - generic [ref=e44]:
              - generic [ref=e45]: I
              - generic [ref=e46]: "n"
              - generic [ref=e47]: t
              - generic [ref=e48]: e
              - generic [ref=e49]: l
              - generic [ref=e50]: l
              - generic [ref=e51]: i
              - generic [ref=e52]: g
              - generic [ref=e53]: e
              - generic [ref=e54]: "n"
              - generic [ref=e55]: c
              - generic [ref=e56]: e
          - generic [ref=e58]:
            - generic [ref=e59]:
              - generic [ref=e60]: F
              - generic [ref=e61]: o
              - generic [ref=e62]: r
            - generic [ref=e64]:
              - generic [ref=e65]: T
              - generic [ref=e66]: h
              - generic [ref=e67]: e
            - generic [ref=e69]:
              - generic [ref=e70]: "*"
              - generic [ref=e71]: R
              - generic [ref=e72]: e
              - generic [ref=e73]: a
              - generic [ref=e74]: l
            - generic [ref=e76]:
              - generic [ref=e77]: W
              - generic [ref=e78]: o
              - generic [ref=e79]: r
              - generic [ref=e80]: l
              - generic [ref=e81]: d
              - generic [ref=e82]: .
              - generic [ref=e83]: "*"
      - generic [ref=e85]: Cennzo Robotix is a deep-tech robotics company focused on developing intelligent humanoid systems for demanding real-world environments.
    - generic [ref=e87]:
      - paragraph [ref=e89]: Who We Are
      - heading "We exist to put intelligence where humans *cannot safely go.*" [level=2] [ref=e91]:
        - generic [ref=e92]:
          - generic [ref=e93]:
            - generic [ref=e94]: We
            - generic [ref=e95]: exist
            - generic [ref=e96]: to
            - generic [ref=e97]: put
            - generic [ref=e98]: intelligence
          - generic [ref=e99]:
            - generic [ref=e100]: where
            - generic [ref=e101]: humans
            - generic [ref=e102]: "*cannot"
            - generic [ref=e103]: safely
            - generic [ref=e104]: go.*
      - generic [ref=e105]:
        - paragraph [ref=e107]: We combine robotics, artificial intelligence, mechanical engineering, embedded systems, advanced materials, energy systems and autonomous control into integrated robotic platforms.
        - paragraph [ref=e109]: Our flagship platform, WAFEE, represents our vision of a humanoid machine capable of adapting across multiple mission environments.
    - generic [ref=e116]:
      - generic [ref=e117]:
        - paragraph [ref=e118]: "0"
        - paragraph [ref=e119]: engineering disciplines
        - paragraph [ref=e120]: From actuation and materials to AI and autonomous control.
      - generic [ref=e121]:
        - paragraph [ref=e122]: "0"
        - paragraph [ref=e123]: mission domains
        - paragraph [ref=e124]: Land, sea, fire, air — and eventually, space.
      - generic [ref=e125]:
        - paragraph [ref=e126]: "0"
        - paragraph [ref=e127]: system attributes
        - paragraph [ref=e128]: The defining traits of the WAFEE reference architecture.
      - generic [ref=e129]:
        - paragraph [ref=e130]: "0"
        - paragraph [ref=e131]: core values
        - paragraph [ref=e132]: The principles every engineering decision must satisfy.
    - generic [ref=e135]:
      - generic [ref=e136]:
        - generic [ref=e137]:
          - paragraph [ref=e138]: Purpose
          - heading "One company. Two promises." [level=2] [ref=e140]:
            - generic [ref=e141]:
              - generic [ref=e142]:
                - generic [ref=e143]: One
                - generic [ref=e146]: company.
              - generic [ref=e149]:
                - generic [ref=e150]: Two
                - generic [ref=e153]: promises.
        - paragraph [ref=e156]: Everything we engineer — every actuator, every model, every line of code — traces back to these two commitments.
      - generic [ref=e157]:
        - article [ref=e158]:
          - generic [ref=e160]:
            - generic [ref=e161]:
              - generic [ref=e162]: Mission
              - generic [ref=e167]: "01"
            - heading "Extend human capability. Keep people out of harm's way." [level=3] [ref=e168]:
              - text: Extend human capability.
              - generic [ref=e169]: Keep people out of harm's way.
            - paragraph [ref=e170]: We build intelligent machines that go where it is difficult, dangerous or inefficient for people — improving operational safety while opening environments that were previously unreachable.
          - generic [ref=e171]: Grounded in engineering reality
        - article [ref=e173]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - generic [ref=e178]: Vision
              - generic [ref=e183]: "02"
            - heading "A world where robots and humanity work side by side." [level=3] [ref=e184]:
              - text: A world where robots and humanity
              - generic [ref=e185]: work side by side.
            - paragraph [ref=e186]: Dangerous, repetitive, inaccessible and technically demanding missions — handled by machines with persistence, precision and resilience, so people are free to aim higher.
          - generic [ref=e187]: Beyond the horizon
    - generic [ref=e190]:
      - figure "Inside the Cennzo Robotix Lab — Concept Visualization Concept visualization" [ref=e193]:
        - 'button "Expand imagery: Inside the Cennzo Robotix Lab — Concept Visualization" [ref=e194] [cursor=pointer]':
          - generic [ref=e196]:
            - img "Inside the Cennzo Robotix Lab — Concept Visualization" [ref=e197]
            - generic [ref=e204]: CR·IMG-03
            - generic [ref=e205]: Concept
            - paragraph [ref=e207]: Inside the Cennzo Robotix Lab — Concept Visualization
        - generic [ref=e208]:
          - generic [ref=e209]: Inside the Cennzo Robotix Lab — Concept Visualization
          - generic [ref=e210]: Concept visualization
      - paragraph [ref=e212]:
        - text: Where disciplines converge
        - generic [ref=e213]: — one team, one machine.
    - generic [ref=e216]:
      - generic [ref=e217]:
        - paragraph [ref=e219]:
          - generic [ref=e220]: Our Approach
        - heading "System Integration Is The Breakthrough." [level=2] [ref=e221]:
          - generic [ref=e222]:
            - generic [ref=e223]: System Integration
            - generic [ref=e225]: Is The Breakthrough.
        - paragraph [ref=e229]: We believe the future of robotics will not be defined by one breakthrough component. It will be defined by system integration.
      - generic [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e232]:
            - heading "A powerful motor" [level=3] [ref=e235]
            - paragraph [ref=e236]: Raw actuation without perception or control is just kinetic energy.
            - paragraph [ref=e237]: Not enough.
          - generic [ref=e238]:
            - heading "A sophisticated AI model" [level=3] [ref=e242]
            - paragraph [ref=e243]: Intelligence without a capable body stays trapped in the cloud.
            - paragraph [ref=e244]: Not enough.
          - generic [ref=e245]:
            - heading "A strong chassis" [level=3] [ref=e249]
            - paragraph [ref=e250]: Structure without sensing and autonomy is inert material.
            - paragraph [ref=e251]: Not enough.
        - generic [ref=e255]:
          - generic [ref=e256]:
            - paragraph [ref=e257]: The Synthesis
            - heading "A useful robot emerges when everything operates as one system." [level=3] [ref=e258]
            - paragraph [ref=e259]: Mechanics, electronics, energy, software, intelligence, perception and safety — engineered as a single integrated architecture. That is the philosophy behind WAFEE.
          - img [ref=e260]:
            - generic [ref=e273]: WAFEE
            - generic [ref=e274]: Actuation
            - generic [ref=e275]: Intelligence
            - generic [ref=e276]: Structure
    - generic [ref=e279]:
      - generic [ref=e280]:
        - paragraph [ref=e282]:
          - generic [ref=e283]: Our Values
        - heading "What We Hold To." [level=2] [ref=e284]:
          - generic [ref=e285]:
            - generic [ref=e286]: What We
            - generic [ref=e288]: Hold To.
      - generic [ref=e290]:
        - generic [ref=e292]:
          - paragraph [ref=e293]: "01"
          - heading "Engineering First" [level=3] [ref=e294]
          - paragraph [ref=e295]: We prioritize measurable performance over appearance.
        - generic [ref=e297]:
          - paragraph [ref=e298]: "02"
          - heading "Mission First" [level=3] [ref=e299]
          - paragraph [ref=e300]: Every subsystem must serve a real operational requirement.
        - generic [ref=e302]:
          - paragraph [ref=e303]: "03"
          - heading "Human Impact" [level=3] [ref=e304]
          - paragraph [ref=e305]: Technology should reduce danger and expand human capability.
        - generic [ref=e307]:
          - paragraph [ref=e308]: "04"
          - heading "Iterate Fast" [level=3] [ref=e309]
          - paragraph [ref=e310]: Build, test, measure, learn and improve.
        - generic [ref=e312]:
          - paragraph [ref=e313]: "05"
          - heading "Open Innovation" [level=3] [ref=e314]
          - paragraph [ref=e315]: The most important breakthroughs often happen across disciplines and organizations.
        - generic [ref=e317]:
          - paragraph [ref=e318]: "06"
          - heading "Responsible Autonomy" [level=3] [ref=e319]
          - paragraph [ref=e320]: Robots should operate within defined safety boundaries, with traceability and human oversight where required.
    - generic [ref=e323]:
      - generic [ref=e325]:
        - paragraph [ref=e327]:
          - generic [ref=e328]: The Road Ahead
        - heading "From Blueprint To Breach." [level=2] [ref=e329]:
          - generic [ref=e330]:
            - generic [ref=e331]: From Blueprint
            - generic [ref=e333]: To Breach.
        - paragraph [ref=e337]: Every frontier starts as a drawing. Ours is a phased engineering campaign — each stage unlocking the next, each claim earned before it is made.
      - generic [ref=e340]:
        - generic [ref=e341]:
          - generic [ref=e343]:
            - paragraph [ref=e344]: Phase 01
            - generic [ref=e345]: Current focus
          - heading "Foundation" [level=3] [ref=e346]
          - paragraph [ref=e347]: Architecture definition, reference design and the engineering doctrine behind WAFEE.
        - generic [ref=e348]:
          - generic [ref=e350]:
            - paragraph [ref=e351]: Phase 02
            - generic [ref=e352]: Next
          - heading "Development" [level=3] [ref=e353]
          - paragraph [ref=e354]: Subsystem integration — actuation, perception, compute and power — built and bench-validated as one machine.
        - generic [ref=e355]:
          - generic [ref=e357]:
            - paragraph [ref=e358]: Phase 03
            - generic [ref=e359]: Planned
          - heading "Validation" [level=3] [ref=e360]
          - paragraph [ref=e361]: Controlled laboratory testing, subsystem qualification and full-system verification against mission requirements.
        - generic [ref=e362]:
          - generic [ref=e364]:
            - paragraph [ref=e365]: Phase 04
            - generic [ref=e366]: Long-term
          - heading "Deployment" [level=3] [ref=e367]
          - paragraph [ref=e368]: Progressive environmental qualification — extending WAFEE across land, sea, fire, air and space domains.
    - generic [ref=e375]:
      - paragraph [ref=e376]:
        - generic [ref=e378]: Cennzo Robotix
      - heading "Bold Enough To Imagine The Impossible." [level=2] [ref=e380]:
        - generic [ref=e381]:
          - generic [ref=e382]: Bold Enough To Imagine
          - generic [ref=e384]: The Impossible.
      - paragraph [ref=e386]: Disciplined enough to prove it.
      - generic [ref=e387]:
        - link "Partner With Us" [ref=e389] [cursor=pointer]:
          - /url: /partnerships
        - link "Meet WAFEE" [ref=e394] [cursor=pointer]:
          - /url: /wafee
  - contentinfo [ref=e398]:
    - generic [ref=e400]:
      - generic [ref=e401]:
        - generic [ref=e402]:
          - link "Cennzo Robotix — Home" [ref=e403] [cursor=pointer]:
            - /url: /
            - generic [ref=e404]: CENNZO
            - generic [ref=e405]: ROBOTIX
          - paragraph [ref=e406]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e407]: Innovate · Automate · Elevate
        - generic [ref=e408]:
          - paragraph [ref=e409]: Explore
          - list [ref=e410]:
            - listitem [ref=e411]:
              - link "Home" [ref=e412] [cursor=pointer]:
                - /url: /
            - listitem [ref=e413]:
              - link "About" [ref=e414] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e415]:
              - link "WAFEE" [ref=e416] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e417]:
              - link "Technology" [ref=e418] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e419]:
              - link "Applications" [ref=e420] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e421]:
          - paragraph [ref=e422]: Company
          - list [ref=e423]:
            - listitem [ref=e424]:
              - link "Platform" [ref=e425] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e426]:
              - link "Research & Engineering" [ref=e427] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e428]:
              - link "Validation & Safety" [ref=e429] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e430]:
              - link "Industries" [ref=e431] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e432]:
              - link "Partnerships" [ref=e433] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e434]:
              - link "Investors" [ref=e435] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e436]:
              - link "Careers" [ref=e437] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e438]:
              - link "Contact" [ref=e439] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e440]:
          - generic [ref=e441]:
            - paragraph [ref=e442]: Legal
            - list [ref=e443]:
              - listitem [ref=e444]:
                - link "Privacy Policy" [ref=e445] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e446]:
                - link "Terms of Use" [ref=e447] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e448]:
                - link "Responsible AI & Robotics" [ref=e449] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e450]:
                - link "Safety & Compliance" [ref=e451] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e452]:
            - paragraph [ref=e453]: Follow
            - list [ref=e454]:
              - listitem [ref=e455]: LinkedIn
              - listitem [ref=e456]: YouTube
              - listitem [ref=e457]: Instagram
              - listitem [ref=e458]: X
      - paragraph [ref=e460]: Cennzo Robotix
      - generic [ref=e461]:
        - paragraph [ref=e462]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e463]: UTC --:--:-- · 24.71°N 46.68°E
        - paragraph [ref=e465]: The future belongs to machines that can understand the world, move through it and act within it.
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