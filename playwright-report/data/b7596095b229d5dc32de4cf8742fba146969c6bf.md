# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Navigation >> navigates to WAFEE page
- Location: __tests__\e2e\homepage.spec.ts:75:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'WAFEE' }).first()
    - locator resolved to <a href="/wafee" class="btn-sheen group inline-flex items-center gap-3 rounded-xl px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 active:translate-y-px btn-primary text-white cursor-pointer hover:-translate-y-0.5 ">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="flex flex-col items-center">…</div> from <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="flex flex-col items-center">…</div> from <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> subtree intercepts pointer events
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
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
    - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="block text-sm font-medium text-bone group-hover:text-accent">தமிழ்</span> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  2 × retrying click action
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
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
      - <span class="block text-sm font-medium text-bone group-hover:text-accent">தமிழ்</span> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span class="block text-sm font-medium text-bone group-hover:text-accent">தமிழ்</span> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
    - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
    - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  2 × retrying click action
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
      - <div class="p-7 sm:p-8">…</div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span class="block text-sm font-medium text-bone group-hover:text-accent">தமிழ்</span> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

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
    - generic [ref=e14]:
      - generic [ref=e22]:
        - paragraph [ref=e23]: WAFEE — Unified Multi-Environment Humanoid Platform
        - heading "T h e H u m a n o i d F o r T h e * H a r d P l a c e s . *" [level=1] [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e29]:
              - generic [ref=e30]:
                - generic [ref=e31]: T
                - generic [ref=e32]: h
                - generic [ref=e33]: e
              - generic [ref=e35]:
                - generic [ref=e36]: H
                - generic [ref=e37]: u
                - generic [ref=e38]: m
                - generic [ref=e39]: a
                - generic [ref=e40]: "n"
                - generic [ref=e41]: o
                - generic [ref=e42]: i
                - generic [ref=e43]: d
              - generic [ref=e45]:
                - generic [ref=e46]: F
                - generic [ref=e47]: o
                - generic [ref=e48]: r
            - generic [ref=e50]:
              - generic [ref=e51]:
                - generic [ref=e52]: T
                - generic [ref=e53]: h
                - generic [ref=e54]: e
              - generic [ref=e56]:
                - generic [ref=e57]: "*"
                - generic [ref=e58]: H
                - generic [ref=e59]: a
                - generic [ref=e60]: r
                - generic [ref=e61]: d
              - generic [ref=e63]:
                - generic [ref=e64]: P
                - generic [ref=e65]: l
                - generic [ref=e66]: a
                - generic [ref=e67]: c
                - generic [ref=e68]: e
                - generic [ref=e69]: s
                - generic [ref=e70]: .
                - generic [ref=e71]: "*"
        - paragraph [ref=e73]: WAFEE is Cennzo Robotix’s unified multi-environment humanoid platform — engineered to bring intelligent mobility, perception and manipulation into environments where conventional robots reach their limits.
        - generic [ref=e74]:
          - link "Explore WAFEE" [ref=e75] [cursor=pointer]:
            - /url: /wafee
          - link "Build the Future With Us" [ref=e79] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e85]:
        - paragraph [ref=e86]:
          - generic [ref=e87]: EARTH/
          - generic [ref=e88]: WATER/
          - generic [ref=e89]: FIRE/
          - generic [ref=e90]: AIR/
          - generic [ref=e91]: SPACE
        - generic [ref=e92]: Scroll
    - generic [ref=e97]:
      - paragraph [ref=e99]: The Mission
      - heading "Intelligence should not stop at the edge of the environment." [level=2] [ref=e101]:
        - generic [ref=e102]:
          - generic [ref=e103]:
            - generic [ref=e104]: Intelligence
            - generic [ref=e105]: should
            - generic [ref=e106]: not
            - generic [ref=e107]: stop
          - generic [ref=e108]:
            - generic [ref=e109]: at
            - generic [ref=e110]: the
            - generic [ref=e111]: edge
          - generic [ref=e112]:
            - generic [ref=e113]: of
            - generic [ref=e114]: the
            - generic [ref=e115]: environment.
      - generic [ref=e116]:
        - generic [ref=e117]:
          - paragraph [ref=e118]: The world’s most difficult missions are rarely confined to controlled environments.
          - paragraph [ref=e119]: Industrial facilities, disaster zones, offshore assets, infrastructure sites, extreme-temperature environments and future off-world operations demand machines that can move, perceive, decide and act with greater resilience.
          - paragraph [ref=e120]: Cennzo Robotix is developing WAFEE as a new class of humanoid robotic platform — combining human-compatible form, advanced actuation, intelligent perception, autonomous control and engineered environmental protection.
        - generic [ref=e121]:
          - paragraph [ref=e123]: Our Goal
          - paragraph [ref=e124]: Put capable machines where human exposure, operational complexity or environmental uncertainty make conventional approaches inefficient or unsafe.
    - generic [ref=e128]:
      - generic [ref=e129]:
        - generic [ref=e130]:
          - paragraph [ref=e132]: The Platform
          - heading "Meet WAFEE." [level=2] [ref=e134]
          - generic [ref=e138]:
            - paragraph [ref=e139]: WAFEE is a 178 cm-class humanoid robotic platform engineered around a modular architecture for mobility, manipulation, perception and autonomous operation.
            - paragraph [ref=e140]: Designed as a platform rather than a single-purpose machine, WAFEE can evolve across industries, mission profiles and future generations of robotic intelligence.
          - generic [ref=e141]:
            - generic [ref=e142]:
              - paragraph [ref=e143]: 0 cm
              - paragraph [ref=e144]: Humanoid-Class Height
            - generic [ref=e145]:
              - paragraph [ref=e146]: "0"
              - paragraph [ref=e147]: Mission Environments
            - generic [ref=e148]:
              - paragraph [ref=e149]: "0"
              - paragraph [ref=e150]: Core Platform Attributes
          - link "Discover the WAFEE Platform" [ref=e153] [cursor=pointer]:
            - /url: /wafee
        - generic [ref=e157]:
          - generic [ref=e160]:
            - generic [ref=e161]: "01"
            - generic [ref=e162]: Human-scale form factor
          - generic [ref=e166]:
            - generic [ref=e167]: "02"
            - generic [ref=e168]: High-performance electric actuation
          - generic [ref=e172]:
            - generic [ref=e173]: "03"
            - generic [ref=e174]: Advanced perception and sensor fusion
          - generic [ref=e178]:
            - generic [ref=e179]: "04"
            - generic [ref=e180]: AI-assisted decision making
          - generic [ref=e184]:
            - generic [ref=e185]: "05"
            - generic [ref=e186]: Modular hardware and software architecture
          - generic [ref=e190]:
            - generic [ref=e191]: "06"
            - generic [ref=e192]: Environmental protection architecture
          - generic [ref=e196]:
            - generic [ref=e197]: "07"
            - generic [ref=e198]: Mission-oriented autonomy
          - generic [ref=e202]:
            - generic [ref=e203]: "08"
            - generic [ref=e204]: Remote and autonomous operation
          - generic [ref=e208]:
            - generic [ref=e209]: "09"
            - generic [ref=e210]: Continuous health and system monitoring
      - figure "WAFEE Full-Body Platform — Concept Render Concept visualization" [ref=e213]:
        - 'button "Expand imagery: WAFEE Full-Body Platform — Concept Render" [ref=e214] [cursor=pointer]':
          - generic [ref=e216]:
            - img "WAFEE Full-Body Platform — Concept Render" [ref=e217]
            - generic [ref=e224]: CR·IMG-01
            - generic [ref=e225]: Concept
            - paragraph [ref=e227]: WAFEE Full-Body Platform — Concept Render
        - generic [ref=e228]:
          - generic [ref=e229]: WAFEE Full-Body Platform — Concept Render
          - generic [ref=e230]: Concept visualization
    - generic [ref=e233]:
      - paragraph [ref=e235]: The Journey — Five Environments
      - heading "One Platform. Multiple Worlds." [level=2] [ref=e237]:
        - generic [ref=e238]:
          - generic [ref=e239]: One Platform.
          - generic [ref=e241]: Multiple Worlds.
      - paragraph [ref=e243]: Scroll to travel the roadmap — Earth to Space.
      - generic [ref=e244]:
        - article [ref=e246]:
          - generic [ref=e247]:
            - generic: "01"
            - generic [ref=e248]: PRIMARY DEVELOPMENT
            - paragraph [ref=e250]: 01 / 05 — Industrial · Infrastructure · Disaster
            - heading "Earth" [level=3] [ref=e251]
            - paragraph [ref=e252]: Navigate industrial, infrastructure, logistics and disaster environments with human-compatible mobility and manipulation.
        - article [ref=e257]:
          - generic [ref=e258]:
            - generic: "02"
            - generic [ref=e259]: ENGINEERING ROADMAP
            - paragraph [ref=e261]: 02 / 05 — Marine · Offshore · Subsurface
            - heading "Water" [level=3] [ref=e262]
            - paragraph [ref=e263]: Enable inspection, intervention and support operations in aquatic environments through a protected robotic architecture.
        - article [ref=e268]:
          - generic [ref=e269]:
            - generic: "03"
            - generic [ref=e270]: ENGINEERING ROADMAP
            - paragraph [ref=e272]: 03 / 05 — High-Temperature · Hazardous Zones
            - heading "Fire" [level=3] [ref=e273]
            - paragraph [ref=e274]: Support operations in high-temperature and hazardous zones where direct human access is limited.
        - article [ref=e279]:
          - generic [ref=e280]:
            - generic: "04"
            - generic [ref=e281]: RESEARCH
            - paragraph [ref=e283]: 04 / 05 — Elevated · Exposed · Access-Limited
            - heading "Air" [level=3] [ref=e284]
            - paragraph [ref=e285]: Operate across elevated, exposed and difficult-to-access environments using intelligent mobility and mission-specific systems.
        - article [ref=e290]:
          - generic [ref=e291]:
            - generic: "05"
            - generic [ref=e292]: LONG-TERM VISION
            - paragraph [ref=e294]: 05 / 05 — Vacuum · Radiation · Off-World
            - heading "Space" [level=3] [ref=e295]
            - paragraph [ref=e296]: Create a pathway toward robotic operations in vacuum, extreme radiation and off-world environments.
      - paragraph [ref=e301]: WAFEE’s multi-environment vision represents a long-term engineering roadmap. Individual environmental capabilities depend on mission-specific configuration, validation and certification.
    - generic [ref=e303]:
      - generic [ref=e304]:
        - paragraph [ref=e305]: Why Cennzo
        - heading "Built For The Mission, Not The Demo." [level=2] [ref=e307]:
          - generic [ref=e308]:
            - generic [ref=e309]:
              - generic [ref=e310]: Built
              - generic [ref=e313]: For
              - generic [ref=e316]: The
              - generic [ref=e319]: Mission,
            - generic [ref=e322]:
              - generic [ref=e323]: Not
              - generic [ref=e326]: The
              - generic [ref=e329]: Demo.
        - paragraph [ref=e332]: Cennzo Robotix approaches humanoid robotics as a systems-engineering problem. Mechanical design, actuation, power, thermal management, sensing, control, AI, communications, materials and safety cannot be developed independently — so we design WAFEE as one integrated system, where every subsystem contributes to mission performance.
      - generic [ref=e334]:
        - article [ref=e335]:
          - generic [ref=e338]:
            - generic [ref=e339]: "01"
            - generic [ref=e340]: "01"
          - generic [ref=e341]:
            - heading "Human-Compatible" [level=3] [ref=e342]
            - paragraph [ref=e343]: Designed around a human-scale form factor so the robot can interact with spaces, tools and infrastructure created for people.
        - article [ref=e344]:
          - generic [ref=e347]:
            - generic [ref=e348]: "02"
            - generic [ref=e349]: "02"
          - generic [ref=e350]:
            - heading "Modular" [level=3] [ref=e351]
            - paragraph [ref=e352]: Hardware and software are designed to evolve without redesigning the entire platform.
        - article [ref=e353]:
          - generic [ref=e356]:
            - generic [ref=e357]: "03"
            - generic [ref=e358]: "03"
          - generic [ref=e359]:
            - heading "Intelligent" [level=3] [ref=e360]
            - paragraph [ref=e361]: Perception, planning and control are integrated to enable increasingly autonomous operation.
        - article [ref=e362]:
          - generic [ref=e365]:
            - generic [ref=e366]: "04"
            - generic [ref=e367]: "04"
          - generic [ref=e368]:
            - heading "Resilient" [level=3] [ref=e369]
            - paragraph [ref=e370]: The platform is being engineered around demanding environmental, thermal, mechanical and operational requirements.
        - paragraph [ref=e372]:
          - text: End of sequence
          - generic [ref=e373]: — Contact for a mission brief
    - generic [ref=e376]:
      - generic [ref=e377]:
        - generic [ref=e378]:
          - paragraph [ref=e380]:
            - generic [ref=e381]: Technology
          - heading "Engineering The Complete Machine." [level=2] [ref=e382]:
            - generic [ref=e383]:
              - generic [ref=e384]: Engineering The
              - generic [ref=e386]: Complete Machine.
        - link "Explore Our Technology" [ref=e390] [cursor=pointer]:
          - /url: /technology
      - generic [ref=e396]:
        - link "SYS·01 Mechanical Systems High-performance joints, lightweight structural architecture and precision transmission systems." [ref=e398] [cursor=pointer]:
          - /url: /technology#mechanical
          - generic [ref=e399]: SYS·01
          - heading "Mechanical Systems" [level=3] [ref=e400]
          - paragraph [ref=e401]: High-performance joints, lightweight structural architecture and precision transmission systems.
        - link "SYS·02 Actuation High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force." [ref=e403] [cursor=pointer]:
          - /url: /technology#actuation
          - generic [ref=e404]: SYS·02
          - heading "Actuation" [level=3] [ref=e405]
          - paragraph [ref=e406]: High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force.
        - link "SYS·03 Perception Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing." [ref=e408] [cursor=pointer]:
          - /url: /technology#perception
          - generic [ref=e409]: SYS·03
          - heading "Perception" [level=3] [ref=e410]
          - paragraph [ref=e411]: Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing.
        - link "SYS·04 Compute & AI Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence." [ref=e413] [cursor=pointer]:
          - /url: /technology#compute
          - generic [ref=e414]: SYS·04
          - heading "Compute & AI" [level=3] [ref=e415]
          - paragraph [ref=e416]: Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence.
        - link "SYS·05 Power High-density energy storage, intelligent power distribution and protection systems." [ref=e418] [cursor=pointer]:
          - /url: /technology#power
          - generic [ref=e419]: SYS·05
          - heading "Power" [level=3] [ref=e420]
          - paragraph [ref=e421]: High-density energy storage, intelligent power distribution and protection systems.
        - link "SYS·06 Thermal Management Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics." [ref=e423] [cursor=pointer]:
          - /url: /technology#thermal
          - generic [ref=e424]: SYS·06
          - heading "Thermal Management" [level=3] [ref=e425]
          - paragraph [ref=e426]: Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics.
        - link "SYS·07 Materials & Protection Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements." [ref=e428] [cursor=pointer]:
          - /url: /technology#materials
          - generic [ref=e429]: SYS·07
          - heading "Materials & Protection" [level=3] [ref=e430]
          - paragraph [ref=e431]: Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements.
        - link "SYS·08 Software A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications." [ref=e433] [cursor=pointer]:
          - /url: /technology#software
          - generic [ref=e434]: SYS·08
          - heading "Software" [level=3] [ref=e435]
          - paragraph [ref=e436]: A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications.
    - generic [ref=e437]:
      - generic [ref=e438]:
        - generic [ref=e439]:
          - paragraph [ref=e441]:
            - generic [ref=e442]: Applications
          - heading "From Industry To The Impossible." [level=2] [ref=e443]:
            - generic [ref=e444]:
              - generic [ref=e445]: From Industry
              - generic [ref=e447]: To The Impossible.
          - paragraph [ref=e451]: The first generation of WAFEE applications will focus on practical, measurable problems where robotic deployment can create clear safety, productivity or operational advantages.
        - link "Explore Applications" [ref=e454] [cursor=pointer]:
          - /url: /applications
      - generic [ref=e458]:
        - generic [ref=e460]:
          - generic [ref=e461]: Industrial Inspection
          - generic [ref=e464]: Hazardous-Area Operations
          - generic [ref=e467]: Disaster Response
          - generic [ref=e470]: Fire & Emergency Support
          - generic [ref=e473]: Infrastructure Inspection
          - generic [ref=e476]: Offshore & Marine Operations
          - generic [ref=e479]: Energy & Utilities
          - generic [ref=e482]: Mining & Heavy Industry
          - generic [ref=e485]: Warehouses & Logistics
          - generic [ref=e488]: Construction
          - generic [ref=e491]: Defense & Government Research
          - generic [ref=e494]: Search & Reconnaissance
          - generic [ref=e497]: Remote Maintenance
          - generic [ref=e500]: Space & Planetary Robotics Research
          - generic [ref=e503]: Industrial Inspection
          - generic [ref=e506]: Hazardous-Area Operations
          - generic [ref=e509]: Disaster Response
          - generic [ref=e512]: Fire & Emergency Support
          - generic [ref=e515]: Infrastructure Inspection
          - generic [ref=e518]: Offshore & Marine Operations
          - generic [ref=e521]: Energy & Utilities
          - generic [ref=e524]: Mining & Heavy Industry
          - generic [ref=e527]: Warehouses & Logistics
          - generic [ref=e530]: Construction
          - generic [ref=e533]: Defense & Government Research
          - generic [ref=e536]: Search & Reconnaissance
          - generic [ref=e539]: Remote Maintenance
          - generic [ref=e542]: Space & Planetary Robotics Research
        - generic [ref=e546]:
          - generic [ref=e547]: Industrial Inspection
          - generic [ref=e550]: Hazardous-Area Operations
          - generic [ref=e553]: Disaster Response
          - generic [ref=e556]: Fire & Emergency Support
          - generic [ref=e559]: Infrastructure Inspection
          - generic [ref=e562]: Offshore & Marine Operations
          - generic [ref=e565]: Energy & Utilities
          - generic [ref=e568]: Mining & Heavy Industry
          - generic [ref=e571]: Warehouses & Logistics
          - generic [ref=e574]: Construction
          - generic [ref=e577]: Defense & Government Research
          - generic [ref=e580]: Search & Reconnaissance
          - generic [ref=e583]: Remote Maintenance
          - generic [ref=e586]: Space & Planetary Robotics Research
          - generic [ref=e589]: Industrial Inspection
          - generic [ref=e592]: Hazardous-Area Operations
          - generic [ref=e595]: Disaster Response
          - generic [ref=e598]: Fire & Emergency Support
          - generic [ref=e601]: Infrastructure Inspection
          - generic [ref=e604]: Offshore & Marine Operations
          - generic [ref=e607]: Energy & Utilities
          - generic [ref=e610]: Mining & Heavy Industry
          - generic [ref=e613]: Warehouses & Logistics
          - generic [ref=e616]: Construction
          - generic [ref=e619]: Defense & Government Research
          - generic [ref=e622]: Search & Reconnaissance
          - generic [ref=e625]: Remote Maintenance
          - generic [ref=e628]: Space & Planetary Robotics Research
    - generic [ref=e634]:
      - paragraph [ref=e635]: Vision
      - heading "A future where no environment is off-limits to machines." [level=2] [ref=e638]:
        - generic [ref=e639]:
          - generic [ref=e640]:
            - generic [ref=e641]: A
            - generic [ref=e644]: future
            - generic [ref=e647]: where
            - generic [ref=e650]: "no"
            - generic [ref=e653]: environment
          - generic [ref=e656]:
            - generic [ref=e657]: is
            - generic [ref=e660]: off-limits
            - generic [ref=e663]: to
            - generic [ref=e666]: machines.
      - generic [ref=e669]:
        - paragraph [ref=e670]: Humans have always built tools to go farther, deeper, higher and closer to danger.
        - paragraph [ref=e671]: The next step is intelligent machines that can do the same with greater persistence, precision and resilience.
        - paragraph [ref=e672]: Cennzo Robotix is building toward that future.
      - figure "WAFEE in Extreme Environments — Concept Visualization Concept visualization" [ref=e675]:
        - 'button "Expand imagery: WAFEE in Extreme Environments — Concept Visualization" [ref=e676] [cursor=pointer]':
          - generic [ref=e678]:
            - img "WAFEE in Extreme Environments — Concept Visualization" [ref=e679]
            - generic [ref=e686]: CR·IMG-02
            - generic [ref=e687]: Concept
            - paragraph [ref=e689]: WAFEE in Extreme Environments — Concept Visualization
        - generic [ref=e690]:
          - generic [ref=e691]: WAFEE in Extreme Environments — Concept Visualization
          - generic [ref=e692]: Concept visualization
      - link "Join the Journey" [ref=e695] [cursor=pointer]:
        - /url: /partnerships
    - generic [ref=e705]:
      - paragraph [ref=e706]:
        - generic [ref=e708]: Cennzo Robotix
      - heading "The Next Frontier Is Not A Place. It Is A Capability." [level=2] [ref=e710]:
        - generic [ref=e711]:
          - generic [ref=e712]: The Next Frontier Is Not A Place.
          - generic [ref=e714]: It Is A Capability.
      - paragraph [ref=e716]: We are building intelligent machines for the missions that matter.
      - generic [ref=e717]:
        - link "Partner With Cennzo" [ref=e719] [cursor=pointer]:
          - /url: /contact
        - link "Explore WAFEE" [ref=e724] [cursor=pointer]:
          - /url: /wafee
  - contentinfo [ref=e728]:
    - generic [ref=e730]:
      - generic [ref=e731]:
        - generic [ref=e732]:
          - link "Cennzo Robotix — Home" [ref=e733] [cursor=pointer]:
            - /url: /
            - generic [ref=e734]: CENNZO
            - generic [ref=e735]: ROBOTIX
          - paragraph [ref=e736]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e737]: Innovate · Automate · Elevate
        - generic [ref=e738]:
          - paragraph [ref=e739]: Explore
          - list [ref=e740]:
            - listitem [ref=e741]:
              - link "Home" [ref=e742] [cursor=pointer]:
                - /url: /
            - listitem [ref=e743]:
              - link "About" [ref=e744] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e745]:
              - link "WAFEE" [ref=e746] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e747]:
              - link "Technology" [ref=e748] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e749]:
              - link "Applications" [ref=e750] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e751]:
          - paragraph [ref=e752]: Company
          - list [ref=e753]:
            - listitem [ref=e754]:
              - link "Platform" [ref=e755] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e756]:
              - link "Research & Engineering" [ref=e757] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e758]:
              - link "Validation & Safety" [ref=e759] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e760]:
              - link "Industries" [ref=e761] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e762]:
              - link "Partnerships" [ref=e763] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e764]:
              - link "Investors" [ref=e765] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e766]:
              - link "Careers" [ref=e767] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e768]:
              - link "Contact" [ref=e769] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e770]:
          - generic [ref=e771]:
            - paragraph [ref=e772]: Legal
            - list [ref=e773]:
              - listitem [ref=e774]:
                - link "Privacy Policy" [ref=e775] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e776]:
                - link "Terms of Use" [ref=e777] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e778]:
                - link "Responsible AI & Robotics" [ref=e779] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e780]:
                - link "Safety & Compliance" [ref=e781] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e782]:
            - paragraph [ref=e783]: Follow
            - list [ref=e784]:
              - listitem [ref=e785]: LinkedIn
              - listitem [ref=e786]: YouTube
              - listitem [ref=e787]: Instagram
              - listitem [ref=e788]: X
      - paragraph [ref=e790]: Cennzo Robotix
      - generic [ref=e791]:
        - paragraph [ref=e792]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e793]: UTC 11:28:18 · 24.71°N 46.68°E
        - paragraph [ref=e795]: The future belongs to machines that can understand the world, move through it and act within it.
  - dialog "Choose your language" [ref=e798]:
    - generic [ref=e800]:
      - paragraph [ref=e801]: System Setup · 01
      - heading "Choose your language" [level=2] [ref=e802]
      - paragraph [ref=e803]: Select a language for Cennzo Robotix. You can change it anytime.
      - generic [ref=e804]:
        - button "English English" [ref=e805] [cursor=pointer]:
          - generic [ref=e806]: English
          - generic [ref=e807]: English
        - button "हिन्दी Hindi" [ref=e808] [cursor=pointer]:
          - generic [ref=e809]: हिन्दी
          - generic [ref=e810]: Hindi
        - button "தமிழ் Tamil" [ref=e811] [cursor=pointer]:
          - generic [ref=e812]: தமிழ்
          - generic [ref=e813]: Tamil
        - button "日本語 Japanese" [ref=e814] [cursor=pointer]:
          - generic [ref=e815]: 日本語
          - generic [ref=e816]: Japanese
        - button "中文 Chinese" [ref=e817] [cursor=pointer]:
          - generic [ref=e818]: 中文
          - generic [ref=e819]: Chinese
        - button "Français French" [ref=e820] [cursor=pointer]:
          - generic [ref=e821]: Français
          - generic [ref=e822]: French
        - button "Español Spanish" [ref=e823] [cursor=pointer]:
          - generic [ref=e824]: Español
          - generic [ref=e825]: Spanish
      - button "Continue in English" [ref=e826] [cursor=pointer]
  - alert [ref=e827]
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
> 77  |     await page.getByRole("link", { name: "WAFEE" }).first().click();
      |                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  95  |     await page.getByText("CENNZO").click();
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