# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Navigation >> navigates to Contact page
- Location: __tests__\e2e\homepage.spec.ts:87:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Contact' }).first()
    - locator resolved to <a href="/contact" class="group relative inline-block cursor-pointer text-[13px] text-mist transition-colors duration-300 hover:text-bone">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
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
    - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  4 × retrying click action
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
    - <button type="button" class="group cursor-pointer rounded-xl border border-black/[0.09] px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-accent/[0.05] active:translate-y-px">…</button> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
  4 × retrying click action
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
    - <button type="button" class="group cursor-pointer rounded-xl border border-black/[0.09] px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-accent/[0.05] active:translate-y-px">…</button> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
      - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <button type="button" class="group cursor-pointer rounded-xl border border-black/[0.09] px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-accent/[0.05] active:translate-y-px">…</button> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
  5 × retrying click action
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
    - <div aria-hidden="true" class="absolute inset-0 bg-bone/25 backdrop-blur-sm"></div> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
      - <button type="button" class="group cursor-pointer rounded-xl border border-black/[0.09] px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-accent/[0.05] active:translate-y-px">…</button> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
    - <button type="button" class="group cursor-pointer rounded-xl border border-black/[0.09] px-4 py-3 text-left transition-[border-color,background-color,transform] duration-200 hover:border-accent/50 hover:bg-accent/[0.05] active:translate-y-px">…</button> from <div class="fixed inset-0 z-[92] flex items-center justify-center px-4">…</div> subtree intercepts pointer events
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
      - generic [ref=e397]:
        - link "SYS·01 Mechanical Systems High-performance joints, lightweight structural architecture and precision transmission systems." [ref=e399] [cursor=pointer]:
          - /url: /technology#mechanical
          - generic [ref=e400]: SYS·01
          - heading "Mechanical Systems" [level=3] [ref=e401]
          - paragraph [ref=e402]: High-performance joints, lightweight structural architecture and precision transmission systems.
        - link "SYS·02 Actuation High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force." [ref=e404] [cursor=pointer]:
          - /url: /technology#actuation
          - generic [ref=e405]: SYS·02
          - heading "Actuation" [level=3] [ref=e406]
          - paragraph [ref=e407]: High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force.
        - link "SYS·03 Perception Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing." [ref=e409] [cursor=pointer]:
          - /url: /technology#perception
          - generic [ref=e410]: SYS·03
          - heading "Perception" [level=3] [ref=e411]
          - paragraph [ref=e412]: Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing.
        - link "SYS·04 Compute & AI Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence." [ref=e414] [cursor=pointer]:
          - /url: /technology#compute
          - generic [ref=e415]: SYS·04
          - heading "Compute & AI" [level=3] [ref=e416]
          - paragraph [ref=e417]: Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence.
        - link "SYS·05 Power High-density energy storage, intelligent power distribution and protection systems." [ref=e419] [cursor=pointer]:
          - /url: /technology#power
          - generic [ref=e420]: SYS·05
          - heading "Power" [level=3] [ref=e421]
          - paragraph [ref=e422]: High-density energy storage, intelligent power distribution and protection systems.
        - link "SYS·06 Thermal Management Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics." [ref=e424] [cursor=pointer]:
          - /url: /technology#thermal
          - generic [ref=e425]: SYS·06
          - heading "Thermal Management" [level=3] [ref=e426]
          - paragraph [ref=e427]: Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics.
        - link "SYS·07 Materials & Protection Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements." [ref=e429] [cursor=pointer]:
          - /url: /technology#materials
          - generic [ref=e430]: SYS·07
          - heading "Materials & Protection" [level=3] [ref=e431]
          - paragraph [ref=e432]: Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements.
        - link "SYS·08 Software A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications." [ref=e434] [cursor=pointer]:
          - /url: /technology#software
          - generic [ref=e435]: SYS·08
          - heading "Software" [level=3] [ref=e436]
          - paragraph [ref=e437]: A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications.
    - generic [ref=e438]:
      - generic [ref=e439]:
        - generic [ref=e440]:
          - paragraph [ref=e442]:
            - generic [ref=e443]: Applications
          - heading "From Industry To The Impossible." [level=2] [ref=e444]:
            - generic [ref=e445]:
              - generic [ref=e446]: From Industry
              - generic [ref=e448]: To The Impossible.
          - paragraph [ref=e452]: The first generation of WAFEE applications will focus on practical, measurable problems where robotic deployment can create clear safety, productivity or operational advantages.
        - link "Explore Applications" [ref=e455] [cursor=pointer]:
          - /url: /applications
      - generic [ref=e459]:
        - generic [ref=e461]:
          - generic [ref=e462]: Industrial Inspection
          - generic [ref=e465]: Hazardous-Area Operations
          - generic [ref=e468]: Disaster Response
          - generic [ref=e471]: Fire & Emergency Support
          - generic [ref=e474]: Infrastructure Inspection
          - generic [ref=e477]: Offshore & Marine Operations
          - generic [ref=e480]: Energy & Utilities
          - generic [ref=e483]: Mining & Heavy Industry
          - generic [ref=e486]: Warehouses & Logistics
          - generic [ref=e489]: Construction
          - generic [ref=e492]: Defense & Government Research
          - generic [ref=e495]: Search & Reconnaissance
          - generic [ref=e498]: Remote Maintenance
          - generic [ref=e501]: Space & Planetary Robotics Research
          - generic [ref=e504]: Industrial Inspection
          - generic [ref=e507]: Hazardous-Area Operations
          - generic [ref=e510]: Disaster Response
          - generic [ref=e513]: Fire & Emergency Support
          - generic [ref=e516]: Infrastructure Inspection
          - generic [ref=e519]: Offshore & Marine Operations
          - generic [ref=e522]: Energy & Utilities
          - generic [ref=e525]: Mining & Heavy Industry
          - generic [ref=e528]: Warehouses & Logistics
          - generic [ref=e531]: Construction
          - generic [ref=e534]: Defense & Government Research
          - generic [ref=e537]: Search & Reconnaissance
          - generic [ref=e540]: Remote Maintenance
          - generic [ref=e543]: Space & Planetary Robotics Research
        - generic [ref=e547]:
          - generic [ref=e548]: Industrial Inspection
          - generic [ref=e551]: Hazardous-Area Operations
          - generic [ref=e554]: Disaster Response
          - generic [ref=e557]: Fire & Emergency Support
          - generic [ref=e560]: Infrastructure Inspection
          - generic [ref=e563]: Offshore & Marine Operations
          - generic [ref=e566]: Energy & Utilities
          - generic [ref=e569]: Mining & Heavy Industry
          - generic [ref=e572]: Warehouses & Logistics
          - generic [ref=e575]: Construction
          - generic [ref=e578]: Defense & Government Research
          - generic [ref=e581]: Search & Reconnaissance
          - generic [ref=e584]: Remote Maintenance
          - generic [ref=e587]: Space & Planetary Robotics Research
          - generic [ref=e590]: Industrial Inspection
          - generic [ref=e593]: Hazardous-Area Operations
          - generic [ref=e596]: Disaster Response
          - generic [ref=e599]: Fire & Emergency Support
          - generic [ref=e602]: Infrastructure Inspection
          - generic [ref=e605]: Offshore & Marine Operations
          - generic [ref=e608]: Energy & Utilities
          - generic [ref=e611]: Mining & Heavy Industry
          - generic [ref=e614]: Warehouses & Logistics
          - generic [ref=e617]: Construction
          - generic [ref=e620]: Defense & Government Research
          - generic [ref=e623]: Search & Reconnaissance
          - generic [ref=e626]: Remote Maintenance
          - generic [ref=e629]: Space & Planetary Robotics Research
    - generic [ref=e635]:
      - paragraph [ref=e636]: Vision
      - heading "A future where no environment is off-limits to machines." [level=2] [ref=e639]:
        - generic [ref=e640]:
          - generic [ref=e641]:
            - generic [ref=e642]: A
            - generic [ref=e645]: future
            - generic [ref=e648]: where
            - generic [ref=e651]: "no"
            - generic [ref=e654]: environment
          - generic [ref=e657]:
            - generic [ref=e658]: is
            - generic [ref=e661]: off-limits
            - generic [ref=e664]: to
            - generic [ref=e667]: machines.
      - generic [ref=e670]:
        - paragraph [ref=e671]: Humans have always built tools to go farther, deeper, higher and closer to danger.
        - paragraph [ref=e672]: The next step is intelligent machines that can do the same with greater persistence, precision and resilience.
        - paragraph [ref=e673]: Cennzo Robotix is building toward that future.
      - figure "WAFEE in Extreme Environments — Concept Visualization Concept visualization" [ref=e676]:
        - 'button "Expand imagery: WAFEE in Extreme Environments — Concept Visualization" [ref=e677] [cursor=pointer]':
          - generic [ref=e679]:
            - img "WAFEE in Extreme Environments — Concept Visualization" [ref=e680]
            - generic [ref=e687]: CR·IMG-02
            - generic [ref=e688]: Concept
            - paragraph [ref=e690]: WAFEE in Extreme Environments — Concept Visualization
        - generic [ref=e691]:
          - generic [ref=e692]: WAFEE in Extreme Environments — Concept Visualization
          - generic [ref=e693]: Concept visualization
      - link "Join the Journey" [ref=e696] [cursor=pointer]:
        - /url: /partnerships
    - generic [ref=e706]:
      - paragraph [ref=e707]:
        - generic [ref=e709]: Cennzo Robotix
      - heading "The Next Frontier Is Not A Place. It Is A Capability." [level=2] [ref=e711]:
        - generic [ref=e712]:
          - generic [ref=e713]: The Next Frontier Is Not A Place.
          - generic [ref=e715]: It Is A Capability.
      - paragraph [ref=e717]: We are building intelligent machines for the missions that matter.
      - generic [ref=e718]:
        - link "Partner With Cennzo" [ref=e720] [cursor=pointer]:
          - /url: /contact
        - link "Explore WAFEE" [ref=e725] [cursor=pointer]:
          - /url: /wafee
  - contentinfo [ref=e729]:
    - generic [ref=e731]:
      - generic [ref=e732]:
        - generic [ref=e733]:
          - link "Cennzo Robotix — Home" [ref=e734] [cursor=pointer]:
            - /url: /
            - generic [ref=e735]: CENNZO
            - generic [ref=e736]: ROBOTIX
          - paragraph [ref=e737]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e738]: Innovate · Automate · Elevate
        - generic [ref=e739]:
          - paragraph [ref=e740]: Explore
          - list [ref=e741]:
            - listitem [ref=e742]:
              - link "Home" [ref=e743] [cursor=pointer]:
                - /url: /
            - listitem [ref=e744]:
              - link "About" [ref=e745] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e746]:
              - link "WAFEE" [ref=e747] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e748]:
              - link "Technology" [ref=e749] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e750]:
              - link "Applications" [ref=e751] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e752]:
          - paragraph [ref=e753]: Company
          - list [ref=e754]:
            - listitem [ref=e755]:
              - link "Platform" [ref=e756] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e757]:
              - link "Research & Engineering" [ref=e758] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e759]:
              - link "Validation & Safety" [ref=e760] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e761]:
              - link "Industries" [ref=e762] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e763]:
              - link "Partnerships" [ref=e764] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e765]:
              - link "Investors" [ref=e766] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e767]:
              - link "Careers" [ref=e768] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e769]:
              - link "Contact" [ref=e770] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e771]:
          - generic [ref=e772]:
            - paragraph [ref=e773]: Legal
            - list [ref=e774]:
              - listitem [ref=e775]:
                - link "Privacy Policy" [ref=e776] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e777]:
                - link "Terms of Use" [ref=e778] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e779]:
                - link "Responsible AI & Robotics" [ref=e780] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e781]:
                - link "Safety & Compliance" [ref=e782] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e783]:
            - paragraph [ref=e784]: Follow
            - list [ref=e785]:
              - listitem [ref=e786]: LinkedIn
              - listitem [ref=e787]: YouTube
              - listitem [ref=e788]: Instagram
              - listitem [ref=e789]: X
      - paragraph [ref=e791]: Cennzo Robotix
      - generic [ref=e792]:
        - paragraph [ref=e793]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e794]: UTC 11:28:18 · 24.71°N 46.68°E
        - paragraph [ref=e796]: The future belongs to machines that can understand the world, move through it and act within it.
  - button "Back to top" [ref=e797] [cursor=pointer]
  - dialog "Choose your language" [ref=e805]:
    - generic [ref=e807]:
      - paragraph [ref=e808]: System Setup · 01
      - heading "Choose your language" [level=2] [ref=e809]
      - paragraph [ref=e810]: Select a language for Cennzo Robotix. You can change it anytime.
      - generic [ref=e811]:
        - button "English English" [ref=e812] [cursor=pointer]:
          - generic [ref=e813]: English
          - generic [ref=e814]: English
        - button "हिन्दी Hindi" [ref=e815] [cursor=pointer]:
          - generic [ref=e816]: हिन्दी
          - generic [ref=e817]: Hindi
        - button "தமிழ் Tamil" [ref=e818] [cursor=pointer]:
          - generic [ref=e819]: தமிழ்
          - generic [ref=e820]: Tamil
        - button "日本語 Japanese" [ref=e821] [cursor=pointer]:
          - generic [ref=e822]: 日本語
          - generic [ref=e823]: Japanese
        - button "中文 Chinese" [ref=e824] [cursor=pointer]:
          - generic [ref=e825]: 中文
          - generic [ref=e826]: Chinese
        - button "Français French" [ref=e827] [cursor=pointer]:
          - generic [ref=e828]: Français
          - generic [ref=e829]: French
        - button "Español Spanish" [ref=e830] [cursor=pointer]:
          - generic [ref=e831]: Español
          - generic [ref=e832]: Spanish
      - button "Continue in English" [ref=e833] [cursor=pointer]
  - alert [ref=e834]
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
> 89  |     await page.getByRole("link", { name: "Contact" }).first().click();
      |                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
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