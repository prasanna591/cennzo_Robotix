# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Accessibility >> has aria-label on mobile navigation when menu is open
- Location: __tests__\e2e\homepage.spec.ts:145:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /open menu/i })
    - locator resolved to <button type="button" aria-expanded="false" aria-label="Open menu" aria-controls="mobile-menu" class="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[7px] lg:hidden">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="preloader" aria-hidden="true" class="fixed inset-0 z-[95] flex flex-col items-center justify-center bg-void ">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  35 × retrying click action
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
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Cennzo Robotix — Home" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]:
          - generic [ref=e6]: CENNZO
          - generic [ref=e7]: ROBOTIX
      - button "Open menu" [ref=e8] [cursor=pointer]
  - main [ref=e12]:
    - generic [ref=e13]:
      - generic [ref=e21]:
        - paragraph [ref=e22]: WAFEE — Unified Multi-Environment Humanoid Platform
        - heading "T h e H u m a n o i d F o r T h e * H a r d P l a c e s . *" [level=1] [ref=e26]:
          - generic [ref=e27]:
            - generic [ref=e28]:
              - generic [ref=e29]:
                - generic [ref=e30]: T
                - generic [ref=e31]: h
                - generic [ref=e32]: e
              - generic [ref=e34]:
                - generic [ref=e35]: H
                - generic [ref=e36]: u
                - generic [ref=e37]: m
                - generic [ref=e38]: a
                - generic [ref=e39]: "n"
                - generic [ref=e40]: o
                - generic [ref=e41]: i
                - generic [ref=e42]: d
              - generic [ref=e44]:
                - generic [ref=e45]: F
                - generic [ref=e46]: o
                - generic [ref=e47]: r
            - generic [ref=e49]:
              - generic [ref=e50]:
                - generic [ref=e51]: T
                - generic [ref=e52]: h
                - generic [ref=e53]: e
              - generic [ref=e55]:
                - generic [ref=e56]: "*"
                - generic [ref=e57]: H
                - generic [ref=e58]: a
                - generic [ref=e59]: r
                - generic [ref=e60]: d
              - generic [ref=e62]:
                - generic [ref=e63]: P
                - generic [ref=e64]: l
                - generic [ref=e65]: a
                - generic [ref=e66]: c
                - generic [ref=e67]: e
                - generic [ref=e68]: s
                - generic [ref=e69]: .
                - generic [ref=e70]: "*"
        - paragraph [ref=e72]: WAFEE is Cennzo Robotix’s unified multi-environment humanoid platform — engineered to bring intelligent mobility, perception and manipulation into environments where conventional robots reach their limits.
        - generic [ref=e73]:
          - link "Explore WAFEE" [ref=e74] [cursor=pointer]:
            - /url: /wafee
          - link "Build the Future With Us" [ref=e78] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e84]:
        - paragraph [ref=e85]:
          - generic [ref=e86]: EARTH/
          - generic [ref=e87]: WATER/
          - generic [ref=e88]: FIRE/
          - generic [ref=e89]: AIR/
          - generic [ref=e90]: SPACE
        - generic [ref=e91]: Scroll
    - generic [ref=e96]:
      - paragraph [ref=e98]: The Mission
      - heading "Intelligence should not stop at the edge of the environment." [level=2] [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - generic [ref=e103]: Intelligence
            - generic [ref=e104]: should
            - generic [ref=e105]: not
            - generic [ref=e106]: stop
          - generic [ref=e107]:
            - generic [ref=e108]: at
            - generic [ref=e109]: the
            - generic [ref=e110]: edge
          - generic [ref=e111]:
            - generic [ref=e112]: of
            - generic [ref=e113]: the
            - generic [ref=e114]: environment.
      - generic [ref=e115]:
        - generic [ref=e116]:
          - paragraph [ref=e117]: The world’s most difficult missions are rarely confined to controlled environments.
          - paragraph [ref=e118]: Industrial facilities, disaster zones, offshore assets, infrastructure sites, extreme-temperature environments and future off-world operations demand machines that can move, perceive, decide and act with greater resilience.
          - paragraph [ref=e119]: Cennzo Robotix is developing WAFEE as a new class of humanoid robotic platform — combining human-compatible form, advanced actuation, intelligent perception, autonomous control and engineered environmental protection.
        - generic [ref=e120]:
          - paragraph [ref=e122]: Our Goal
          - paragraph [ref=e123]: Put capable machines where human exposure, operational complexity or environmental uncertainty make conventional approaches inefficient or unsafe.
    - generic [ref=e127]:
      - generic [ref=e128]:
        - generic [ref=e129]:
          - paragraph [ref=e131]: The Platform
          - heading "Meet WAFEE." [level=2] [ref=e133]
          - generic [ref=e137]:
            - paragraph [ref=e138]: WAFEE is a 178 cm-class humanoid robotic platform engineered around a modular architecture for mobility, manipulation, perception and autonomous operation.
            - paragraph [ref=e139]: Designed as a platform rather than a single-purpose machine, WAFEE can evolve across industries, mission profiles and future generations of robotic intelligence.
          - generic [ref=e140]:
            - generic [ref=e141]:
              - paragraph [ref=e142]: 0 cm
              - paragraph [ref=e143]: Humanoid-Class Height
            - generic [ref=e144]:
              - paragraph [ref=e145]: "0"
              - paragraph [ref=e146]: Mission Environments
            - generic [ref=e147]:
              - paragraph [ref=e148]: "0"
              - paragraph [ref=e149]: Core Platform Attributes
          - link "Discover the WAFEE Platform" [ref=e152] [cursor=pointer]:
            - /url: /wafee
        - generic [ref=e156]:
          - generic [ref=e159]:
            - generic [ref=e160]: "01"
            - generic [ref=e161]: Human-scale form factor
          - generic [ref=e165]:
            - generic [ref=e166]: "02"
            - generic [ref=e167]: High-performance electric actuation
          - generic [ref=e171]:
            - generic [ref=e172]: "03"
            - generic [ref=e173]: Advanced perception and sensor fusion
          - generic [ref=e177]:
            - generic [ref=e178]: "04"
            - generic [ref=e179]: AI-assisted decision making
          - generic [ref=e183]:
            - generic [ref=e184]: "05"
            - generic [ref=e185]: Modular hardware and software architecture
          - generic [ref=e189]:
            - generic [ref=e190]: "06"
            - generic [ref=e191]: Environmental protection architecture
          - generic [ref=e195]:
            - generic [ref=e196]: "07"
            - generic [ref=e197]: Mission-oriented autonomy
          - generic [ref=e201]:
            - generic [ref=e202]: "08"
            - generic [ref=e203]: Remote and autonomous operation
          - generic [ref=e207]:
            - generic [ref=e208]: "09"
            - generic [ref=e209]: Continuous health and system monitoring
      - figure "WAFEE Full-Body Platform — Concept Render Concept visualization" [ref=e212]:
        - 'button "Expand imagery: WAFEE Full-Body Platform — Concept Render" [ref=e213] [cursor=pointer]':
          - generic [ref=e215]:
            - img "WAFEE Full-Body Platform — Concept Render" [ref=e216]
            - generic [ref=e223]: CR·IMG-01
            - generic [ref=e224]: Concept
            - paragraph [ref=e226]: WAFEE Full-Body Platform — Concept Render
        - generic [ref=e227]:
          - generic [ref=e228]: WAFEE Full-Body Platform — Concept Render
          - generic [ref=e229]: Concept visualization
    - generic [ref=e232]:
      - paragraph [ref=e234]: The Journey — Five Environments
      - heading "One Platform. Multiple Worlds." [level=2] [ref=e236]:
        - generic [ref=e237]:
          - generic [ref=e238]: One Platform.
          - generic [ref=e240]: Multiple Worlds.
      - paragraph [ref=e242]: Scroll to travel the roadmap — Earth to Space.
      - generic [ref=e243]:
        - article [ref=e245]:
          - generic [ref=e246]:
            - generic: "01"
            - generic [ref=e247]: PRIMARY DEVELOPMENT
            - paragraph [ref=e249]: 01 / 05 — Industrial · Infrastructure · Disaster
            - heading "Earth" [level=3] [ref=e250]
            - paragraph [ref=e251]: Navigate industrial, infrastructure, logistics and disaster environments with human-compatible mobility and manipulation.
        - article [ref=e256]:
          - generic [ref=e257]:
            - generic: "02"
            - generic [ref=e258]: ENGINEERING ROADMAP
            - paragraph [ref=e260]: 02 / 05 — Marine · Offshore · Subsurface
            - heading "Water" [level=3] [ref=e261]
            - paragraph [ref=e262]: Enable inspection, intervention and support operations in aquatic environments through a protected robotic architecture.
        - article [ref=e267]:
          - generic [ref=e268]:
            - generic: "03"
            - generic [ref=e269]: ENGINEERING ROADMAP
            - paragraph [ref=e271]: 03 / 05 — High-Temperature · Hazardous Zones
            - heading "Fire" [level=3] [ref=e272]
            - paragraph [ref=e273]: Support operations in high-temperature and hazardous zones where direct human access is limited.
        - article [ref=e278]:
          - generic [ref=e279]:
            - generic: "04"
            - generic [ref=e280]: RESEARCH
            - paragraph [ref=e282]: 04 / 05 — Elevated · Exposed · Access-Limited
            - heading "Air" [level=3] [ref=e283]
            - paragraph [ref=e284]: Operate across elevated, exposed and difficult-to-access environments using intelligent mobility and mission-specific systems.
        - article [ref=e289]:
          - generic [ref=e290]:
            - generic: "05"
            - generic [ref=e291]: LONG-TERM VISION
            - paragraph [ref=e293]: 05 / 05 — Vacuum · Radiation · Off-World
            - heading "Space" [level=3] [ref=e294]
            - paragraph [ref=e295]: Create a pathway toward robotic operations in vacuum, extreme radiation and off-world environments.
      - paragraph [ref=e300]: WAFEE’s multi-environment vision represents a long-term engineering roadmap. Individual environmental capabilities depend on mission-specific configuration, validation and certification.
    - generic [ref=e302]:
      - generic [ref=e303]:
        - paragraph [ref=e304]: Why Cennzo
        - heading "Built For The Mission, Not The Demo." [level=2] [ref=e306]:
          - generic [ref=e307]:
            - generic [ref=e308]:
              - generic [ref=e309]: Built
              - generic [ref=e312]: For
              - generic [ref=e315]: The
              - generic [ref=e318]: Mission,
            - generic [ref=e321]:
              - generic [ref=e322]: Not
              - generic [ref=e325]: The
              - generic [ref=e328]: Demo.
        - paragraph [ref=e331]: Cennzo Robotix approaches humanoid robotics as a systems-engineering problem. Mechanical design, actuation, power, thermal management, sensing, control, AI, communications, materials and safety cannot be developed independently — so we design WAFEE as one integrated system, where every subsystem contributes to mission performance.
      - generic [ref=e333]:
        - article [ref=e334]:
          - generic [ref=e337]:
            - generic [ref=e338]: "01"
            - generic [ref=e339]: "01"
          - generic [ref=e340]:
            - heading "Human-Compatible" [level=3] [ref=e341]
            - paragraph [ref=e342]: Designed around a human-scale form factor so the robot can interact with spaces, tools and infrastructure created for people.
        - article [ref=e343]:
          - generic [ref=e346]:
            - generic [ref=e347]: "02"
            - generic [ref=e348]: "02"
          - generic [ref=e349]:
            - heading "Modular" [level=3] [ref=e350]
            - paragraph [ref=e351]: Hardware and software are designed to evolve without redesigning the entire platform.
        - article [ref=e352]:
          - generic [ref=e355]:
            - generic [ref=e356]: "03"
            - generic [ref=e357]: "03"
          - generic [ref=e358]:
            - heading "Intelligent" [level=3] [ref=e359]
            - paragraph [ref=e360]: Perception, planning and control are integrated to enable increasingly autonomous operation.
        - article [ref=e361]:
          - generic [ref=e364]:
            - generic [ref=e365]: "04"
            - generic [ref=e366]: "04"
          - generic [ref=e367]:
            - heading "Resilient" [level=3] [ref=e368]
            - paragraph [ref=e369]: The platform is being engineered around demanding environmental, thermal, mechanical and operational requirements.
        - paragraph [ref=e371]:
          - text: End of sequence
          - generic [ref=e372]: — Contact for a mission brief
    - generic [ref=e375]:
      - generic [ref=e376]:
        - generic [ref=e377]:
          - paragraph [ref=e379]:
            - generic [ref=e380]: Technology
          - heading "Engineering The Complete Machine." [level=2] [ref=e381]:
            - generic [ref=e382]:
              - generic [ref=e383]: Engineering The
              - generic [ref=e385]: Complete Machine.
        - link "Explore Our Technology" [ref=e389] [cursor=pointer]:
          - /url: /technology
      - generic [ref=e395]:
        - link "SYS·01 Mechanical Systems High-performance joints, lightweight structural architecture and precision transmission systems." [ref=e397] [cursor=pointer]:
          - /url: /technology#mechanical
          - generic [ref=e398]: SYS·01
          - heading "Mechanical Systems" [level=3] [ref=e399]
          - paragraph [ref=e400]: High-performance joints, lightweight structural architecture and precision transmission systems.
        - link "SYS·02 Actuation High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force." [ref=e402] [cursor=pointer]:
          - /url: /technology#actuation
          - generic [ref=e403]: SYS·02
          - heading "Actuation" [level=3] [ref=e404]
          - paragraph [ref=e405]: High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force.
        - link "SYS·03 Perception Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing." [ref=e407] [cursor=pointer]:
          - /url: /technology#perception
          - generic [ref=e408]: SYS·03
          - heading "Perception" [level=3] [ref=e409]
          - paragraph [ref=e410]: Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing.
        - link "SYS·04 Compute & AI Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence." [ref=e412] [cursor=pointer]:
          - /url: /technology#compute
          - generic [ref=e413]: SYS·04
          - heading "Compute & AI" [level=3] [ref=e414]
          - paragraph [ref=e415]: Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence.
        - link "SYS·05 Power High-density energy storage, intelligent power distribution and protection systems." [ref=e417] [cursor=pointer]:
          - /url: /technology#power
          - generic [ref=e418]: SYS·05
          - heading "Power" [level=3] [ref=e419]
          - paragraph [ref=e420]: High-density energy storage, intelligent power distribution and protection systems.
        - link "SYS·06 Thermal Management Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics." [ref=e422] [cursor=pointer]:
          - /url: /technology#thermal
          - generic [ref=e423]: SYS·06
          - heading "Thermal Management" [level=3] [ref=e424]
          - paragraph [ref=e425]: Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics.
        - link "SYS·07 Materials & Protection Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements." [ref=e427] [cursor=pointer]:
          - /url: /technology#materials
          - generic [ref=e428]: SYS·07
          - heading "Materials & Protection" [level=3] [ref=e429]
          - paragraph [ref=e430]: Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements.
        - link "SYS·08 Software A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications." [ref=e432] [cursor=pointer]:
          - /url: /technology#software
          - generic [ref=e433]: SYS·08
          - heading "Software" [level=3] [ref=e434]
          - paragraph [ref=e435]: A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications.
    - generic [ref=e436]:
      - generic [ref=e437]:
        - generic [ref=e438]:
          - paragraph [ref=e440]:
            - generic [ref=e441]: Applications
          - heading "From Industry To The Impossible." [level=2] [ref=e442]:
            - generic [ref=e443]:
              - generic [ref=e444]: From Industry
              - generic [ref=e446]: To The Impossible.
          - paragraph [ref=e450]: The first generation of WAFEE applications will focus on practical, measurable problems where robotic deployment can create clear safety, productivity or operational advantages.
        - link "Explore Applications" [ref=e453] [cursor=pointer]:
          - /url: /applications
      - generic [ref=e457]:
        - generic [ref=e459]:
          - generic [ref=e460]: Industrial Inspection
          - generic [ref=e463]: Hazardous-Area Operations
          - generic [ref=e466]: Disaster Response
          - generic [ref=e469]: Fire & Emergency Support
          - generic [ref=e472]: Infrastructure Inspection
          - generic [ref=e475]: Offshore & Marine Operations
          - generic [ref=e478]: Energy & Utilities
          - generic [ref=e481]: Mining & Heavy Industry
          - generic [ref=e484]: Warehouses & Logistics
          - generic [ref=e487]: Construction
          - generic [ref=e490]: Defense & Government Research
          - generic [ref=e493]: Search & Reconnaissance
          - generic [ref=e496]: Remote Maintenance
          - generic [ref=e499]: Space & Planetary Robotics Research
          - generic [ref=e502]: Industrial Inspection
          - generic [ref=e505]: Hazardous-Area Operations
          - generic [ref=e508]: Disaster Response
          - generic [ref=e511]: Fire & Emergency Support
          - generic [ref=e514]: Infrastructure Inspection
          - generic [ref=e517]: Offshore & Marine Operations
          - generic [ref=e520]: Energy & Utilities
          - generic [ref=e523]: Mining & Heavy Industry
          - generic [ref=e526]: Warehouses & Logistics
          - generic [ref=e529]: Construction
          - generic [ref=e532]: Defense & Government Research
          - generic [ref=e535]: Search & Reconnaissance
          - generic [ref=e538]: Remote Maintenance
          - generic [ref=e541]: Space & Planetary Robotics Research
        - generic [ref=e545]:
          - generic [ref=e546]: Industrial Inspection
          - generic [ref=e549]: Hazardous-Area Operations
          - generic [ref=e552]: Disaster Response
          - generic [ref=e555]: Fire & Emergency Support
          - generic [ref=e558]: Infrastructure Inspection
          - generic [ref=e561]: Offshore & Marine Operations
          - generic [ref=e564]: Energy & Utilities
          - generic [ref=e567]: Mining & Heavy Industry
          - generic [ref=e570]: Warehouses & Logistics
          - generic [ref=e573]: Construction
          - generic [ref=e576]: Defense & Government Research
          - generic [ref=e579]: Search & Reconnaissance
          - generic [ref=e582]: Remote Maintenance
          - generic [ref=e585]: Space & Planetary Robotics Research
          - generic [ref=e588]: Industrial Inspection
          - generic [ref=e591]: Hazardous-Area Operations
          - generic [ref=e594]: Disaster Response
          - generic [ref=e597]: Fire & Emergency Support
          - generic [ref=e600]: Infrastructure Inspection
          - generic [ref=e603]: Offshore & Marine Operations
          - generic [ref=e606]: Energy & Utilities
          - generic [ref=e609]: Mining & Heavy Industry
          - generic [ref=e612]: Warehouses & Logistics
          - generic [ref=e615]: Construction
          - generic [ref=e618]: Defense & Government Research
          - generic [ref=e621]: Search & Reconnaissance
          - generic [ref=e624]: Remote Maintenance
          - generic [ref=e627]: Space & Planetary Robotics Research
    - generic [ref=e633]:
      - paragraph [ref=e634]: Vision
      - heading "A future where no environment is off-limits to machines." [level=2] [ref=e637]:
        - generic [ref=e638]:
          - generic [ref=e639]:
            - generic [ref=e640]: A
            - generic [ref=e643]: future
            - generic [ref=e646]: where
            - generic [ref=e649]: "no"
            - generic [ref=e652]: environment
          - generic [ref=e655]:
            - generic [ref=e656]: is
            - generic [ref=e659]: off-limits
            - generic [ref=e662]: to
            - generic [ref=e665]: machines.
      - generic [ref=e668]:
        - paragraph [ref=e669]: Humans have always built tools to go farther, deeper, higher and closer to danger.
        - paragraph [ref=e670]: The next step is intelligent machines that can do the same with greater persistence, precision and resilience.
        - paragraph [ref=e671]: Cennzo Robotix is building toward that future.
      - figure "WAFEE in Extreme Environments — Concept Visualization Concept visualization" [ref=e674]:
        - 'button "Expand imagery: WAFEE in Extreme Environments — Concept Visualization" [ref=e675] [cursor=pointer]':
          - generic [ref=e677]:
            - img "WAFEE in Extreme Environments — Concept Visualization" [ref=e678]
            - generic [ref=e685]: CR·IMG-02
            - generic [ref=e686]: Concept
            - paragraph [ref=e688]: WAFEE in Extreme Environments — Concept Visualization
        - generic [ref=e689]:
          - generic [ref=e690]: WAFEE in Extreme Environments — Concept Visualization
          - generic [ref=e691]: Concept visualization
      - link "Join the Journey" [ref=e694] [cursor=pointer]:
        - /url: /partnerships
    - generic [ref=e704]:
      - paragraph [ref=e705]:
        - generic [ref=e707]: Cennzo Robotix
      - heading "The Next Frontier Is Not A Place. It Is A Capability." [level=2] [ref=e709]:
        - generic [ref=e710]:
          - generic [ref=e711]: The Next Frontier Is Not A Place.
          - generic [ref=e713]: It Is A Capability.
      - paragraph [ref=e715]: We are building intelligent machines for the missions that matter.
      - generic [ref=e716]:
        - link "Partner With Cennzo" [ref=e718] [cursor=pointer]:
          - /url: /contact
        - link "Explore WAFEE" [ref=e723] [cursor=pointer]:
          - /url: /wafee
  - contentinfo [ref=e727]:
    - generic [ref=e729]:
      - generic [ref=e730]:
        - generic [ref=e731]:
          - link "Cennzo Robotix — Home" [ref=e732] [cursor=pointer]:
            - /url: /
            - generic [ref=e733]: CENNZO
            - generic [ref=e734]: ROBOTIX
          - paragraph [ref=e735]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e736]: Innovate · Automate · Elevate
        - generic [ref=e737]:
          - paragraph [ref=e738]: Explore
          - list [ref=e739]:
            - listitem [ref=e740]:
              - link "Home" [ref=e741] [cursor=pointer]:
                - /url: /
            - listitem [ref=e742]:
              - link "About" [ref=e743] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e744]:
              - link "WAFEE" [ref=e745] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e746]:
              - link "Technology" [ref=e747] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e748]:
              - link "Applications" [ref=e749] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e750]:
          - paragraph [ref=e751]: Company
          - list [ref=e752]:
            - listitem [ref=e753]:
              - link "Platform" [ref=e754] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e755]:
              - link "Research & Engineering" [ref=e756] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e757]:
              - link "Validation & Safety" [ref=e758] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e759]:
              - link "Industries" [ref=e760] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e761]:
              - link "Partnerships" [ref=e762] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e763]:
              - link "Investors" [ref=e764] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e765]:
              - link "Careers" [ref=e766] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e767]:
              - link "Contact" [ref=e768] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e769]:
          - generic [ref=e770]:
            - paragraph [ref=e771]: Legal
            - list [ref=e772]:
              - listitem [ref=e773]:
                - link "Privacy Policy" [ref=e774] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e775]:
                - link "Terms of Use" [ref=e776] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e777]:
                - link "Responsible AI & Robotics" [ref=e778] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e779]:
                - link "Safety & Compliance" [ref=e780] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e781]:
            - paragraph [ref=e782]: Follow
            - list [ref=e783]:
              - listitem [ref=e784]: LinkedIn
              - listitem [ref=e785]: YouTube
              - listitem [ref=e786]: Instagram
              - listitem [ref=e787]: X
      - paragraph [ref=e789]: Cennzo Robotix
      - generic [ref=e790]:
        - paragraph [ref=e791]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e792]: UTC 11:28:23 · 24.71°N 46.68°E
        - paragraph [ref=e794]: The future belongs to machines that can understand the world, move through it and act within it.
  - dialog "Choose your language" [ref=e797]:
    - generic [ref=e799]:
      - paragraph [ref=e800]: System Setup · 01
      - heading "Choose your language" [level=2] [ref=e801]
      - paragraph [ref=e802]: Select a language for Cennzo Robotix. You can change it anytime.
      - generic [ref=e803]:
        - button "English English" [ref=e804] [cursor=pointer]:
          - generic [ref=e805]: English
          - generic [ref=e806]: English
        - button "हिन्दी Hindi" [ref=e807] [cursor=pointer]:
          - generic [ref=e808]: हिन्दी
          - generic [ref=e809]: Hindi
        - button "தமிழ் Tamil" [ref=e810] [cursor=pointer]:
          - generic [ref=e811]: தமிழ்
          - generic [ref=e812]: Tamil
        - button "日本語 Japanese" [ref=e813] [cursor=pointer]:
          - generic [ref=e814]: 日本語
          - generic [ref=e815]: Japanese
        - button "中文 Chinese" [ref=e816] [cursor=pointer]:
          - generic [ref=e817]: 中文
          - generic [ref=e818]: Chinese
        - button "Français French" [ref=e819] [cursor=pointer]:
          - generic [ref=e820]: Français
          - generic [ref=e821]: French
        - button "Español Spanish" [ref=e822] [cursor=pointer]:
          - generic [ref=e823]: Español
          - generic [ref=e824]: Spanish
      - button "Continue in English" [ref=e825] [cursor=pointer]
  - alert [ref=e826]
```

# Test source

```ts
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
> 147 |     await page.getByRole("button", { name: /open menu/i }).click();
      |                                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
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