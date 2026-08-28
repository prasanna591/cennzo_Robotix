# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.ts >> Homepage >> renders the CENNZO wordmark
- Location: __tests__\e2e\homepage.spec.ts:21:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('CENNZO')
Expected: visible
Error: strict mode violation: getByText('CENNZO') resolved to 11 elements:
    1) <span class="text-[15px] font-semibold tracking-[0.22em] text-bone md:text-lg">CENNZO</span> aka getByRole('banner').getByRole('link', { name: 'Cennzo Robotix — Home' })
    2) <p class="mt-8 max-w-2xl text-subhead text-mist">WAFEE is Cennzo Robotix’s unified multi-environme…</p> aka getByText('WAFEE is Cennzo Robotix’s')
    3) <p>Cennzo Robotix is developing WAFEE as a new class…</p> aka getByText('Cennzo Robotix is developing')
    4) <p class="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-mist">…</p> aka getByText('Why Cennzo')
    5) <p class="mt-4 max-w-2xl text-body leading-relaxed text-mist">…</p> aka getByText('Cennzo Robotix approaches')
    6) <p class="text-bone">Cennzo Robotix is building toward that future.</p> aka getByText('Cennzo Robotix is building')
    7) <span class="">Cennzo Robotix</span> aka getByRole('main').getByText('Cennzo Robotix', { exact: true })
    8) <span>Partner With Cennzo</span> aka getByRole('link', { name: 'Partner With Cennzo' })
    9) <span class="text-lg font-semibold tracking-[0.22em] text-bone">CENNZO</span> aka getByRole('contentinfo').getByRole('link', { name: 'Cennzo Robotix — Home' })
    10) <p class="whitespace-nowrap bg-[linear-gradient(180deg,rgba(37,99,235,0.22),rgba(37,99,235,0.03))] bg-clip-text text-center text-[clamp(3rem,11vw,10rem)] font-semibold uppercase leading-none tracking-[-0.02em] text-transparent">Cennzo Robotix</p> aka getByRole('contentinfo').getByText('Cennzo Robotix', { exact: true })
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
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
    - generic [ref=e19]:
      - generic [ref=e27]:
        - paragraph [ref=e28]: WAFEE — Unified Multi-Environment Humanoid Platform
        - heading "T h e H u m a n o i d F o r T h e * H a r d P l a c e s . *" [level=1] [ref=e32]:
          - generic [ref=e33]:
            - generic [ref=e34]:
              - generic [ref=e35]:
                - generic [ref=e36]: T
                - generic [ref=e37]: h
                - generic [ref=e38]: e
              - generic [ref=e40]:
                - generic [ref=e41]: H
                - generic [ref=e42]: u
                - generic [ref=e43]: m
                - generic [ref=e44]: a
                - generic [ref=e45]: "n"
                - generic [ref=e46]: o
                - generic [ref=e47]: i
                - generic [ref=e48]: d
              - generic [ref=e50]:
                - generic [ref=e51]: F
                - generic [ref=e52]: o
                - generic [ref=e53]: r
            - generic [ref=e55]:
              - generic [ref=e56]:
                - generic [ref=e57]: T
                - generic [ref=e58]: h
                - generic [ref=e59]: e
              - generic [ref=e61]:
                - generic [ref=e62]: "*"
                - generic [ref=e63]: H
                - generic [ref=e64]: a
                - generic [ref=e65]: r
                - generic [ref=e66]: d
              - generic [ref=e68]:
                - generic [ref=e69]: P
                - generic [ref=e70]: l
                - generic [ref=e71]: a
                - generic [ref=e72]: c
                - generic [ref=e73]: e
                - generic [ref=e74]: s
                - generic [ref=e75]: .
                - generic [ref=e76]: "*"
        - paragraph [ref=e78]: WAFEE is Cennzo Robotix’s unified multi-environment humanoid platform — engineered to bring intelligent mobility, perception and manipulation into environments where conventional robots reach their limits.
        - generic [ref=e79]:
          - link "Explore WAFEE" [ref=e80] [cursor=pointer]:
            - /url: /wafee
          - link "Build the Future With Us" [ref=e84] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e90]:
        - paragraph [ref=e91]:
          - generic [ref=e92]: EARTH/
          - generic [ref=e93]: WATER/
          - generic [ref=e94]: FIRE/
          - generic [ref=e95]: AIR/
          - generic [ref=e96]: SPACE
        - generic [ref=e97]: Scroll
    - generic [ref=e102]:
      - paragraph [ref=e104]: The Mission
      - heading "Intelligence should not stop at the edge of the environment." [level=2] [ref=e106]:
        - generic [ref=e107]:
          - generic [ref=e108]:
            - generic [ref=e109]: Intelligence
            - generic [ref=e110]: should
            - generic [ref=e111]: not
            - generic [ref=e112]: stop
          - generic [ref=e113]:
            - generic [ref=e114]: at
            - generic [ref=e115]: the
            - generic [ref=e116]: edge
          - generic [ref=e117]:
            - generic [ref=e118]: of
            - generic [ref=e119]: the
            - generic [ref=e120]: environment.
      - generic [ref=e121]:
        - generic [ref=e122]:
          - paragraph [ref=e123]: The world’s most difficult missions are rarely confined to controlled environments.
          - paragraph [ref=e124]: Industrial facilities, disaster zones, offshore assets, infrastructure sites, extreme-temperature environments and future off-world operations demand machines that can move, perceive, decide and act with greater resilience.
          - paragraph [ref=e125]: Cennzo Robotix is developing WAFEE as a new class of humanoid robotic platform — combining human-compatible form, advanced actuation, intelligent perception, autonomous control and engineered environmental protection.
        - generic [ref=e126]:
          - paragraph [ref=e128]: Our Goal
          - paragraph [ref=e129]: Put capable machines where human exposure, operational complexity or environmental uncertainty make conventional approaches inefficient or unsafe.
    - generic [ref=e133]:
      - generic [ref=e134]:
        - generic [ref=e135]:
          - paragraph [ref=e137]: The Platform
          - heading "Meet WAFEE." [level=2] [ref=e139]
          - generic [ref=e143]:
            - paragraph [ref=e144]: WAFEE is a 178 cm-class humanoid robotic platform engineered around a modular architecture for mobility, manipulation, perception and autonomous operation.
            - paragraph [ref=e145]: Designed as a platform rather than a single-purpose machine, WAFEE can evolve across industries, mission profiles and future generations of robotic intelligence.
          - generic [ref=e146]:
            - generic [ref=e147]:
              - paragraph [ref=e148]: 0 cm
              - paragraph [ref=e149]: Humanoid-Class Height
            - generic [ref=e150]:
              - paragraph [ref=e151]: "0"
              - paragraph [ref=e152]: Mission Environments
            - generic [ref=e153]:
              - paragraph [ref=e154]: "0"
              - paragraph [ref=e155]: Core Platform Attributes
          - link "Discover the WAFEE Platform" [ref=e158] [cursor=pointer]:
            - /url: /wafee
        - generic [ref=e162]:
          - generic [ref=e165]:
            - generic [ref=e166]: "01"
            - generic [ref=e167]: Human-scale form factor
          - generic [ref=e171]:
            - generic [ref=e172]: "02"
            - generic [ref=e173]: High-performance electric actuation
          - generic [ref=e177]:
            - generic [ref=e178]: "03"
            - generic [ref=e179]: Advanced perception and sensor fusion
          - generic [ref=e183]:
            - generic [ref=e184]: "04"
            - generic [ref=e185]: AI-assisted decision making
          - generic [ref=e189]:
            - generic [ref=e190]: "05"
            - generic [ref=e191]: Modular hardware and software architecture
          - generic [ref=e195]:
            - generic [ref=e196]: "06"
            - generic [ref=e197]: Environmental protection architecture
          - generic [ref=e201]:
            - generic [ref=e202]: "07"
            - generic [ref=e203]: Mission-oriented autonomy
          - generic [ref=e207]:
            - generic [ref=e208]: "08"
            - generic [ref=e209]: Remote and autonomous operation
          - generic [ref=e213]:
            - generic [ref=e214]: "09"
            - generic [ref=e215]: Continuous health and system monitoring
      - figure "WAFEE Full-Body Platform — Concept Render Concept visualization" [ref=e218]:
        - 'button "Expand imagery: WAFEE Full-Body Platform — Concept Render" [ref=e219] [cursor=pointer]':
          - generic [ref=e221]:
            - img "WAFEE Full-Body Platform — Concept Render" [ref=e222]
            - generic [ref=e229]: CR·IMG-01
            - generic [ref=e230]: Concept
            - paragraph [ref=e232]: WAFEE Full-Body Platform — Concept Render
        - generic [ref=e233]:
          - generic [ref=e234]: WAFEE Full-Body Platform — Concept Render
          - generic [ref=e235]: Concept visualization
    - generic [ref=e238]:
      - paragraph [ref=e240]: The Journey — Five Environments
      - heading "One Platform. Multiple Worlds." [level=2] [ref=e242]:
        - generic [ref=e243]:
          - generic [ref=e244]: One Platform.
          - generic [ref=e246]: Multiple Worlds.
      - paragraph [ref=e248]: Scroll to travel the roadmap — Earth to Space.
      - generic [ref=e249]:
        - article [ref=e251]:
          - generic [ref=e252]:
            - generic: "01"
            - generic [ref=e253]: PRIMARY DEVELOPMENT
            - paragraph [ref=e255]: 01 / 05 — Industrial · Infrastructure · Disaster
            - heading "Earth" [level=3] [ref=e256]
            - paragraph [ref=e257]: Navigate industrial, infrastructure, logistics and disaster environments with human-compatible mobility and manipulation.
        - article [ref=e262]:
          - generic [ref=e263]:
            - generic: "02"
            - generic [ref=e264]: ENGINEERING ROADMAP
            - paragraph [ref=e266]: 02 / 05 — Marine · Offshore · Subsurface
            - heading "Water" [level=3] [ref=e267]
            - paragraph [ref=e268]: Enable inspection, intervention and support operations in aquatic environments through a protected robotic architecture.
        - article [ref=e273]:
          - generic [ref=e274]:
            - generic: "03"
            - generic [ref=e275]: ENGINEERING ROADMAP
            - paragraph [ref=e277]: 03 / 05 — High-Temperature · Hazardous Zones
            - heading "Fire" [level=3] [ref=e278]
            - paragraph [ref=e279]: Support operations in high-temperature and hazardous zones where direct human access is limited.
        - article [ref=e284]:
          - generic [ref=e285]:
            - generic: "04"
            - generic [ref=e286]: RESEARCH
            - paragraph [ref=e288]: 04 / 05 — Elevated · Exposed · Access-Limited
            - heading "Air" [level=3] [ref=e289]
            - paragraph [ref=e290]: Operate across elevated, exposed and difficult-to-access environments using intelligent mobility and mission-specific systems.
        - article [ref=e295]:
          - generic [ref=e296]:
            - generic: "05"
            - generic [ref=e297]: LONG-TERM VISION
            - paragraph [ref=e299]: 05 / 05 — Vacuum · Radiation · Off-World
            - heading "Space" [level=3] [ref=e300]
            - paragraph [ref=e301]: Create a pathway toward robotic operations in vacuum, extreme radiation and off-world environments.
      - paragraph [ref=e306]: WAFEE’s multi-environment vision represents a long-term engineering roadmap. Individual environmental capabilities depend on mission-specific configuration, validation and certification.
    - generic [ref=e308]:
      - generic [ref=e309]:
        - paragraph [ref=e310]: Why Cennzo
        - heading "Built For The Mission, Not The Demo." [level=2] [ref=e312]:
          - generic [ref=e313]:
            - generic [ref=e314]:
              - generic [ref=e315]: Built
              - generic [ref=e318]: For
              - generic [ref=e321]: The
              - generic [ref=e324]: Mission,
            - generic [ref=e327]:
              - generic [ref=e328]: Not
              - generic [ref=e331]: The
              - generic [ref=e334]: Demo.
        - paragraph [ref=e337]: Cennzo Robotix approaches humanoid robotics as a systems-engineering problem. Mechanical design, actuation, power, thermal management, sensing, control, AI, communications, materials and safety cannot be developed independently — so we design WAFEE as one integrated system, where every subsystem contributes to mission performance.
      - generic [ref=e339]:
        - article [ref=e340]:
          - generic [ref=e343]:
            - generic [ref=e344]: "01"
            - generic [ref=e345]: "01"
          - generic [ref=e346]:
            - heading "Human-Compatible" [level=3] [ref=e347]
            - paragraph [ref=e348]: Designed around a human-scale form factor so the robot can interact with spaces, tools and infrastructure created for people.
        - article [ref=e349]:
          - generic [ref=e352]:
            - generic [ref=e353]: "02"
            - generic [ref=e354]: "02"
          - generic [ref=e355]:
            - heading "Modular" [level=3] [ref=e356]
            - paragraph [ref=e357]: Hardware and software are designed to evolve without redesigning the entire platform.
        - article [ref=e358]:
          - generic [ref=e361]:
            - generic [ref=e362]: "03"
            - generic [ref=e363]: "03"
          - generic [ref=e364]:
            - heading "Intelligent" [level=3] [ref=e365]
            - paragraph [ref=e366]: Perception, planning and control are integrated to enable increasingly autonomous operation.
        - article [ref=e367]:
          - generic [ref=e370]:
            - generic [ref=e371]: "04"
            - generic [ref=e372]: "04"
          - generic [ref=e373]:
            - heading "Resilient" [level=3] [ref=e374]
            - paragraph [ref=e375]: The platform is being engineered around demanding environmental, thermal, mechanical and operational requirements.
        - paragraph [ref=e377]:
          - text: End of sequence
          - generic [ref=e378]: — Contact for a mission brief
    - generic [ref=e381]:
      - generic [ref=e382]:
        - generic [ref=e383]:
          - paragraph [ref=e385]:
            - generic [ref=e386]: Technology
          - heading "Engineering The Complete Machine." [level=2] [ref=e387]:
            - generic [ref=e388]:
              - generic [ref=e389]: Engineering The
              - generic [ref=e391]: Complete Machine.
        - link "Explore Our Technology" [ref=e395] [cursor=pointer]:
          - /url: /technology
      - generic [ref=e401]:
        - link "SYS·01 Mechanical Systems High-performance joints, lightweight structural architecture and precision transmission systems." [ref=e403] [cursor=pointer]:
          - /url: /technology#mechanical
          - generic [ref=e404]: SYS·01
          - heading "Mechanical Systems" [level=3] [ref=e405]
          - paragraph [ref=e406]: High-performance joints, lightweight structural architecture and precision transmission systems.
        - link "SYS·02 Actuation High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force." [ref=e408] [cursor=pointer]:
          - /url: /technology#actuation
          - generic [ref=e409]: SYS·02
          - heading "Actuation" [level=3] [ref=e410]
          - paragraph [ref=e411]: High-torque electric actuation engineered for dynamic humanoid movement, manipulation and controlled force.
        - link "SYS·03 Perception Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing." [ref=e413] [cursor=pointer]:
          - /url: /technology#perception
          - generic [ref=e414]: SYS·03
          - heading "Perception" [level=3] [ref=e415]
          - paragraph [ref=e416]: Multi-modal sensing combining vision, depth, inertial information, force/torque feedback and environmental sensing.
        - link "SYS·04 Compute & AI Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence." [ref=e418] [cursor=pointer]:
          - /url: /technology#compute
          - generic [ref=e419]: SYS·04
          - heading "Compute & AI" [level=3] [ref=e420]
          - paragraph [ref=e421]: Onboard computing architecture for perception, planning, control, diagnostics and mission intelligence.
        - link "SYS·05 Power High-density energy storage, intelligent power distribution and protection systems." [ref=e423] [cursor=pointer]:
          - /url: /technology#power
          - generic [ref=e424]: SYS·05
          - heading "Power" [level=3] [ref=e425]
          - paragraph [ref=e426]: High-density energy storage, intelligent power distribution and protection systems.
        - link "SYS·06 Thermal Management Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics." [ref=e428] [cursor=pointer]:
          - /url: /technology#thermal
          - generic [ref=e429]: SYS·06
          - heading "Thermal Management" [level=3] [ref=e430]
          - paragraph [ref=e431]: Integrated thermal architecture designed to control heat across motors, drives, compute and power electronics.
        - link "SYS·07 Materials & Protection Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements." [ref=e433] [cursor=pointer]:
          - /url: /technology#materials
          - generic [ref=e434]: SYS·07
          - heading "Materials & Protection" [level=3] [ref=e435]
          - paragraph [ref=e436]: Advanced structural and protective materials selected according to mechanical, thermal, environmental and mission requirements.
        - link "SYS·08 Software A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications." [ref=e438] [cursor=pointer]:
          - /url: /technology#software
          - generic [ref=e439]: SYS·08
          - heading "Software" [level=3] [ref=e440]
          - paragraph [ref=e441]: A layered robotics software stack connecting sensors, perception, planning, control, diagnostics and mission applications.
    - generic [ref=e442]:
      - generic [ref=e443]:
        - generic [ref=e444]:
          - paragraph [ref=e446]:
            - generic [ref=e447]: Applications
          - heading "From Industry To The Impossible." [level=2] [ref=e448]:
            - generic [ref=e449]:
              - generic [ref=e450]: From Industry
              - generic [ref=e452]: To The Impossible.
          - paragraph [ref=e456]: The first generation of WAFEE applications will focus on practical, measurable problems where robotic deployment can create clear safety, productivity or operational advantages.
        - link "Explore Applications" [ref=e459] [cursor=pointer]:
          - /url: /applications
      - generic [ref=e463]:
        - generic [ref=e465]:
          - generic [ref=e466]: Industrial Inspection
          - generic [ref=e469]: Hazardous-Area Operations
          - generic [ref=e472]: Disaster Response
          - generic [ref=e475]: Fire & Emergency Support
          - generic [ref=e478]: Infrastructure Inspection
          - generic [ref=e481]: Offshore & Marine Operations
          - generic [ref=e484]: Energy & Utilities
          - generic [ref=e487]: Mining & Heavy Industry
          - generic [ref=e490]: Warehouses & Logistics
          - generic [ref=e493]: Construction
          - generic [ref=e496]: Defense & Government Research
          - generic [ref=e499]: Search & Reconnaissance
          - generic [ref=e502]: Remote Maintenance
          - generic [ref=e505]: Space & Planetary Robotics Research
          - generic [ref=e508]: Industrial Inspection
          - generic [ref=e511]: Hazardous-Area Operations
          - generic [ref=e514]: Disaster Response
          - generic [ref=e517]: Fire & Emergency Support
          - generic [ref=e520]: Infrastructure Inspection
          - generic [ref=e523]: Offshore & Marine Operations
          - generic [ref=e526]: Energy & Utilities
          - generic [ref=e529]: Mining & Heavy Industry
          - generic [ref=e532]: Warehouses & Logistics
          - generic [ref=e535]: Construction
          - generic [ref=e538]: Defense & Government Research
          - generic [ref=e541]: Search & Reconnaissance
          - generic [ref=e544]: Remote Maintenance
          - generic [ref=e547]: Space & Planetary Robotics Research
        - generic [ref=e551]:
          - generic [ref=e552]: Industrial Inspection
          - generic [ref=e555]: Hazardous-Area Operations
          - generic [ref=e558]: Disaster Response
          - generic [ref=e561]: Fire & Emergency Support
          - generic [ref=e564]: Infrastructure Inspection
          - generic [ref=e567]: Offshore & Marine Operations
          - generic [ref=e570]: Energy & Utilities
          - generic [ref=e573]: Mining & Heavy Industry
          - generic [ref=e576]: Warehouses & Logistics
          - generic [ref=e579]: Construction
          - generic [ref=e582]: Defense & Government Research
          - generic [ref=e585]: Search & Reconnaissance
          - generic [ref=e588]: Remote Maintenance
          - generic [ref=e591]: Space & Planetary Robotics Research
          - generic [ref=e594]: Industrial Inspection
          - generic [ref=e597]: Hazardous-Area Operations
          - generic [ref=e600]: Disaster Response
          - generic [ref=e603]: Fire & Emergency Support
          - generic [ref=e606]: Infrastructure Inspection
          - generic [ref=e609]: Offshore & Marine Operations
          - generic [ref=e612]: Energy & Utilities
          - generic [ref=e615]: Mining & Heavy Industry
          - generic [ref=e618]: Warehouses & Logistics
          - generic [ref=e621]: Construction
          - generic [ref=e624]: Defense & Government Research
          - generic [ref=e627]: Search & Reconnaissance
          - generic [ref=e630]: Remote Maintenance
          - generic [ref=e633]: Space & Planetary Robotics Research
    - generic [ref=e639]:
      - paragraph [ref=e640]: Vision
      - heading "A future where no environment is off-limits to machines." [level=2] [ref=e643]:
        - generic [ref=e644]:
          - generic [ref=e645]:
            - generic [ref=e646]: A
            - generic [ref=e649]: future
            - generic [ref=e652]: where
            - generic [ref=e655]: "no"
            - generic [ref=e658]: environment
          - generic [ref=e661]:
            - generic [ref=e662]: is
            - generic [ref=e665]: off-limits
            - generic [ref=e668]: to
            - generic [ref=e671]: machines.
      - generic [ref=e674]:
        - paragraph [ref=e675]: Humans have always built tools to go farther, deeper, higher and closer to danger.
        - paragraph [ref=e676]: The next step is intelligent machines that can do the same with greater persistence, precision and resilience.
        - paragraph [ref=e677]: Cennzo Robotix is building toward that future.
      - figure "WAFEE in Extreme Environments — Concept Visualization Concept visualization" [ref=e680]:
        - 'button "Expand imagery: WAFEE in Extreme Environments — Concept Visualization" [ref=e681] [cursor=pointer]':
          - generic [ref=e683]:
            - img "WAFEE in Extreme Environments — Concept Visualization" [ref=e684]
            - generic [ref=e691]: CR·IMG-02
            - generic [ref=e692]: Concept
            - paragraph [ref=e694]: WAFEE in Extreme Environments — Concept Visualization
        - generic [ref=e695]:
          - generic [ref=e696]: WAFEE in Extreme Environments — Concept Visualization
          - generic [ref=e697]: Concept visualization
      - link "Join the Journey" [ref=e700] [cursor=pointer]:
        - /url: /partnerships
    - generic [ref=e710]:
      - paragraph [ref=e711]:
        - generic [ref=e713]: Cennzo Robotix
      - heading "The Next Frontier Is Not A Place. It Is A Capability." [level=2] [ref=e715]:
        - generic [ref=e716]:
          - generic [ref=e717]: The Next Frontier Is Not A Place.
          - generic [ref=e719]: It Is A Capability.
      - paragraph [ref=e721]: We are building intelligent machines for the missions that matter.
      - generic [ref=e722]:
        - link "Partner With Cennzo" [ref=e724] [cursor=pointer]:
          - /url: /contact
        - link "Explore WAFEE" [ref=e729] [cursor=pointer]:
          - /url: /wafee
  - contentinfo [ref=e733]:
    - generic [ref=e735]:
      - generic [ref=e736]:
        - generic [ref=e737]:
          - link "Cennzo Robotix — Home" [ref=e738] [cursor=pointer]:
            - /url: /
            - generic [ref=e739]: CENNZO
            - generic [ref=e740]: ROBOTIX
          - paragraph [ref=e741]: Building intelligent robotic systems for complex and demanding environments.
          - paragraph [ref=e742]: Innovate · Automate · Elevate
        - generic [ref=e743]:
          - paragraph [ref=e744]: Explore
          - list [ref=e745]:
            - listitem [ref=e746]:
              - link "Home" [ref=e747] [cursor=pointer]:
                - /url: /
            - listitem [ref=e748]:
              - link "About" [ref=e749] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e750]:
              - link "WAFEE" [ref=e751] [cursor=pointer]:
                - /url: /wafee
            - listitem [ref=e752]:
              - link "Technology" [ref=e753] [cursor=pointer]:
                - /url: /technology
            - listitem [ref=e754]:
              - link "Applications" [ref=e755] [cursor=pointer]:
                - /url: /applications
        - generic [ref=e756]:
          - paragraph [ref=e757]: Company
          - list [ref=e758]:
            - listitem [ref=e759]:
              - link "Platform" [ref=e760] [cursor=pointer]:
                - /url: /platform
            - listitem [ref=e761]:
              - link "Research & Engineering" [ref=e762] [cursor=pointer]:
                - /url: /research
            - listitem [ref=e763]:
              - link "Validation & Safety" [ref=e764] [cursor=pointer]:
                - /url: /safety
            - listitem [ref=e765]:
              - link "Industries" [ref=e766] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e767]:
              - link "Partnerships" [ref=e768] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e769]:
              - link "Investors" [ref=e770] [cursor=pointer]:
                - /url: /investors
            - listitem [ref=e771]:
              - link "Careers" [ref=e772] [cursor=pointer]:
                - /url: /careers
            - listitem [ref=e773]:
              - link "Contact" [ref=e774] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e775]:
          - generic [ref=e776]:
            - paragraph [ref=e777]: Legal
            - list [ref=e778]:
              - listitem [ref=e779]:
                - link "Privacy Policy" [ref=e780] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e781]:
                - link "Terms of Use" [ref=e782] [cursor=pointer]:
                  - /url: /terms-of-use
              - listitem [ref=e783]:
                - link "Responsible AI & Robotics" [ref=e784] [cursor=pointer]:
                  - /url: /responsible-ai-robotics
              - listitem [ref=e785]:
                - link "Safety & Compliance" [ref=e786] [cursor=pointer]:
                  - /url: /safety-compliance
          - generic [ref=e787]:
            - paragraph [ref=e788]: Follow
            - list [ref=e789]:
              - listitem [ref=e790]: LinkedIn
              - listitem [ref=e791]: YouTube
              - listitem [ref=e792]: Instagram
              - listitem [ref=e793]: X
      - paragraph [ref=e795]: Cennzo Robotix
      - generic [ref=e796]:
        - paragraph [ref=e797]: © 2026 Cennzo Robotix. All rights reserved.
        - paragraph [ref=e798]: UTC --:--:-- · 24.71°N 46.68°E
        - paragraph [ref=e800]: The future belongs to machines that can understand the world, move through it and act within it.
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
> 23  |     await expect(page.getByText("CENNZO")).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
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
```