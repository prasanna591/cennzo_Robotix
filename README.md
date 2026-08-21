# Cennzo Robotix — Website

The official website of **Cennzo Robotix**, a deep-tech robotics company building **WAFEE** — a full-size humanoid robot platform engineered for the world's hardest industrial environments.

> **Design thesis:** *Robots where people should not have to go.* Every design decision on this site serves that sentence — cinematic, technical, honest, and calm.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Design Principles](#design-principles)
3. [Design System](#design-system)
4. [Color System](#color-system)
5. [Typography](#typography)
6. [Motion & Animation System](#motion--animation-system)
7. [Complete Effects Inventory](#complete-effects-inventory)
8. [Architecture](#architecture)
9. [Component Library](#component-library)
10. [Pages](#pages)
11. [Content & Honesty Principles](#content--honesty-principles)
12. [Enhancement Log](#enhancement-log)
13. [Development](#development)

---

## Tech Stack

| Layer      | Choice                                   | Why |
|------------|------------------------------------------|-----|
| Framework  | Next.js (App Router) + React 19          | Static prerender, server components, file-based routing |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)     | Token-driven design system without config files |
| Animation  | Framer Motion + GSAP (ScrollTrigger)     | Declarative UI motion + pinned/scrubbed scroll scenes |
| Smooth scroll | Lenis                                 | Inertial scrolling synced to ScrollTrigger |
| Language   | TypeScript (strict)                      | Type-safe content models and component APIs |
| Fonts      | Space Grotesk (display) + Geist Sans (body) + Geist Mono | Engineered display voice, humanist body, technical mono |

No CMS, no external data sources — all copy lives in versioned code (`lib/content/site.ts`, page files).

---

## Design Principles

1. **Calm authority over noise.** Generous whitespace, restrained borders (`black/[0.08]` hairlines), and one idea per viewport. Color and motion are accents, never wallpaper.
2. **Engineering honesty.** The product is in development. The site never fakes deployment: statuses read `CURRENT FOCUS / NEXT / PLANNED / LONG-TERM`, imagery is labeled *"Awaiting Imagery — Concept"*, and validation claims stay qualified.
3. **Humanoid form as hero.** The WAFEE silhouette, anatomy diagrams, orbit rings, and calibration-frame motifs recur across pages — the machine is the brand.
4. **Motion with meaning.** Everything animates to explain hierarchy or physics (scale-in reveals, parallax depth, scroll-scrubbed fills). Nothing bounces for attention. All motion respects `prefers-reduced-motion`.
5. **One dark beat per journey.** Pages travel light → dark: void-light surfaces carry most content; a single dramatic ink section (Compute & AI, Vision panel, CTA finale) gives each page a climax.
6. **Color-coded storytelling.** Since the multi-hue update, color is semantic: each application domain owns a hue, each body system in the anatomy explorer owns a hue. Color teaches, not decorates.
7. **Technical mono voice.** Labels, indices, coordinates, and metadata use uppercase Geist Mono with wide tracking (`0.2em+`) — the site "speaks telemetry." Headlines set in Space Grotesk with `text-wrap: balance`.

---

## Design System

Defined once in `app/globals.css` via Tailwind v4's `@theme`.

### Surfaces

| Token       | Value     | Role                          |
|-------------|-----------|-------------------------------|
| `void`      | `#f7f8fa` | Page background               |
| `graphite`  | `#ffffff` | Cards / raised panels         |
| `charcoal`  | `#eef1f4` | Subtle tint bands             |
| `steel`     | `#e4e8ed` | Borders / dividers            |
| `ink`       | `#0b1220` | Dark sections, primary button |

### Text

| Token   | Value     | Role                    |
|---------|-----------|-------------------------|
| `bone`  | `#111318` | Headings / primary text |
| `mist`  | `#475467` | Body copy               |
| `faint` | `#6b7480` | Meta / labels           |

Both text tones are tuned to clear WCAG AA at small sizes on the void surface.

### Elevation

- `--shadow-soft` — resting cards
- `--shadow-lift` — hover / featured panels

### Dark sections

`.dark-section` is a **scoped token override**: inside it, every surface/text token flips to an ink-navy palette, so any component renders correctly in dark contexts without prop drilling.

### Signature utilities

- `.text-gradient` — blue → violet → teal gradient text
- `.hairline-spectrum` — multicolor seam line between major sections
- `.btn-primary` / `.btn-sheen` — ink button with sheen sweep on hover
- `.spotlight-card` — cursor-following radial spotlight
- `.animate-marquee` — infinite logo/tag marquee (pauses on hover)

---

## Color System

A **one-plus-many** model: blue leads, a professional hue family supports it.

- **Primary accent** `accent #155eef` — links, focus, default markers
- **Secondary** `teal #00a8a8` — software layer, secondary highlights (`~word~` marker)
- **Support hues** (Tailwind defaults): violet, amber, rose, orange, cyan, emerald, indigo, fuchsia

Semantic assignments:

| Context                  | Hue |
|--------------------------|-----|
| Industrial Inspection    | Blue |
| Energy & Utilities       | Amber |
| Disaster Response        | Rose |
| Fire & Hazardous         | Orange |
| Marine & Offshore        | Cyan |
| Mining                   | Emerald |
| Logistics                | Violet |
| Defense & Research       | Indigo |
| Space Robotics           | Fuchsia (on dark) |

Anatomy explorer groups: Mind=violet, Power core=amber (pulsing), Limbs=sky, Frame=emerald, Software=teal.

Rules: tints at ≤8% alpha for chips/glows; hue appears in chips, dots, hairlines, ghost numerals, gradients — never as full saturated backgrounds.

---

## Typography

**Font stack:** Space Grotesk drives every heading (`h1`–`h4` via `--font-display`) for an engineered, geometric voice; Geist Sans carries body copy; Geist Mono handles labels/meta/telemetry.

Fluid clamp-based scale (all tokens in `@theme`):

| Token          | Range                     | Use |
|----------------|---------------------------|-----|
| `text-hero`    | `clamp(2.75rem → 7.5rem)` | Page heroes — lh `0.97`, tracking `-0.038em` |
| `text-display` | `clamp(2.25rem → 4.5rem)`  | Section statements |
| `text-headline`| `clamp(1.75rem → 2.75rem)` | Card/section titles |
| `text-subhead` | `clamp(1.125rem → 1.375rem)`| Lede paragraphs |
| `text-label`   | `0.6875rem`, tracking `0.18em` | Mono labels |

Micro-typography rules:

- Headings are **sentence case**, tight-tracked, and set with `text-wrap: balance` (no orphan words).
- Paragraphs use `text-wrap: pretty` for even rag.
- Uppercase is reserved for mono labels/meta/buttons/nav.
- Stat numerals render in the brand gradient (`.text-gradient`); data readouts use tabular figures.
- Dark sections get a teal-tinted `::selection`.

---

## Motion & Animation System

Centralized in `lib/animations/index.ts`: `DURATION` (fast/standard/cinematic), `EASE` curves, `drawStroke`, `viewportOnce`.

**Global smooth scroll** — Lenis instance synced to GSAP ScrollTrigger (`components/motion/smooth-scroll.tsx`); exposed as `window.__lenis` for programmatic jumps.

Core patterns:

| Pattern | Component | Notes |
|---------|-----------|-------|
| Blur-in letter reveal | `BlurLines` | Hero headlines enter char-by-char from `blur(10px)`, preloader-gated; parses keyword markers |
| Text decode/scramble | `DecodeText` | Mono labels resolve from terminal glyphs on view (SSR emits real text for SEO) |
| Masked line reveals | `MaskLines` | Inline headline lines slide up from clipping masks |
| Word-by-word reveal | `WordReveal` | Statement typography |
| Scroll-scrubbed fill | `ScrollFillText` | Words illuminate as you scroll through |
| Keyword markers | `*word*` / `~word~` | Parsed by WordReveal/MaskLines/ScrollFillText/BlurLines → accent/teal |
| Scale + parallax media | `ScaleMedia` | Image scales 0.9→1 with inner zoom-out on scroll |
| Parallax wrapper | `Parallax` | Speed-based vertical drift |
| Ambient decor | `BackgroundObjects` | Multicolor orbs, rotating ring, dot grid, SYS/NAV marks |
| Horizontal scroll | `HorizontalShowcase` | GSAP pin + scrub, snap fallback <lg / reduced-motion |
| Count-up stats | `StatBand` | Spring counters on view |
| Sticky stacking cards | Environments deck | Cards stack at staggered offsets while scrolling |

Every animation checks `useReducedMotion()` and degrades to static rendering.

---

## Complete Effects Inventory

Everything the site does, grouped by mechanism.

### Global systems (every page)

| System | Effect |
|---|---|
| Lenis smooth scroll | Inertial scrolling synced to GSAP ScrollTrigger; powers all anchor jumps |
| Preloader | Ink overlay, pulsing wordmark, curtain exit; session-gated (once per visit) |
| Glass pill header | Transparent → rounded-2xl blur pill on scroll; gradient wordmark badge rotates on hover; gradient nav underlines scale in; gradient Contact pill |
| Scroll progress bar | Spring-smoothed top hairline tracking page progress |
| Custom cursor | Spring-lagged ring following pointer |
| Back-to-top | Circular SVG ring that draws with scroll progress (`pathLength` spring) |
| BackgroundObjects | Parallax multicolor orbs (blue/violet/amber), rotating dashed ring with satellite dot, masked dot grid, SYS/NAV mono marks — light & dark variants |
| FilmGrain | Fixed SVG-noise overlay (~4% opacity, 8-step jitter) — cinematic texture site-wide; freezes under reduced motion |
| CircuitSpine | Fixed left-edge trace (xl+) drawing downward with scroll via spring; gradient blue→violet→teal, glowing head dot, diamond nodes ignite at journey milestones |
| Telemetry strip | Home-hero HUD readout: PWR % / CORE °C / LINK ms random-walk values with blinking status dots — the machine feels powered on |
| Mission clock | Footer UTC clock (1s tick) + Riyadh coordinates with teal status dot |
| Page transitions | Fade/rise on route mount |

### Motion primitives (`components/motion/`)

- **Reveal** — fade + rise on viewport entry (stagger-capable)
- **MaskLines** — headline lines slide up from overflow masks
- **WordReveal** — word-by-word staggered reveal; parses `*accent*` / `~teal~` markers
- **ScrollFillText** — words illuminate faint → bone as you scroll through (scrubbed)
- **Parallax** — speed-based vertical drift wrapper
- **Magnetic** — buttons attract toward cursor (spring x/y)
- **TiltCard / Spotlight** — 3D tilt + cursor-following radial glow

### Scroll-driven effects

| Effect | Where |
|---|---|
| GSAP pinned horizontal scroll + progress bar + snap fallback | Industries sectors, Home "Why" principles |
| Sticky stacking card deck (cards pin at staggered offsets) | Home environments (5 world cards) |
| Scale-in media (0.9→1 outer + 1.14→1 inner zoom-out + drift) | All 9 application domain images |
| Scroll-fill rails (`useScroll` → `useSpring` scaleY) | Technology section line, About timeline rail |
| Ghost numerals parallax (16rem mono digits drifting) | Application domains, technology subsystems |
| Count-up stat counters (spring) | WAFEE + About stat bands |
| Hero decor parallax | Orbit rings counter-rotate, satellites orbit, decor drifts on scroll |

### Hover / interaction effects

- **SpecList rows** — slide right, dot scales 1.5×, index number fades in
- **FlowStack layers** — translate-x, diamond marker turns accent, `L#` tag reveal
- **DomainGrid cards** — lift + shadow, spectrum bar wipes across top, tag chip tints, arrow slides
- **SystemMap anatomy** — hover figure ⇄ list cross-highlight, non-active parts dim, per-group hues (violet mind / amber core pulse / sky joints / emerald frame / teal flowing data arcs), click = lenis jump
- **SystemNav pills** — IntersectionObserver scroll-spy active states
- **PhilosophyList** — big-word rows slide on hover
- **MediaFrame** — scanning line loop, corner brackets turn accent, lightbox zoom-in
- **Marquee** — infinite scroll, pauses on hover
- **Buttons** — sheen sweep, magnetic pull, gradient shift
- **Mission configurator / contact form** — AnimatePresence state swaps, SVG check draw (`pathLength`)

### Page-by-page signature

| Page | Design + animation story |
|---|---|
| `/` | Blur-in orbit-decor hero with live telemetry → ScrollFillText intro → sticky card deck → horizontal principles showcase → gradient fill-line tech rail → parallax vision → WAFEE bands → marquee → aurora CTA |
| `/about` | ScrollFill identity statement → count-up stats → negation/synthesis diagram (SVG convergence) → values hover-lift grid → sticky timeline w/ fill rail → offset Vision/Mission panels |
| `/applications` | Concept plate → mission matrix (9 color-coded cards) → nine zigzag sections, each with hue-themed chip/dots/hairline/ghost numeral + ScaleMedia image → dark fuchsia space finale |
| `/technology` | Interactive anatomy explorer → glass scroll-spy nav → 9 subsystem deep-dives with animated spec lists + flow stack → single dark Compute/AI beat |
| `/wafee` | Stat band → philosophy hover rows → horizontal five-domain showcase → spec-sheet accent sweeps → charcoal capabilities band → transparency card |
| `/industries` | Horizontal pinned sector showcase + detail grid |
| `/contact` | Split layout, mailto-compose form with animated success state |

---

## Architecture

```
app/                    # Routes (App Router, static prerender)
  about/ applications/ careers/ contact/ industries/
  partnerships/ platform/ research/ safety/ technology/ wafee/
components/
  applications/         # DomainGrid, ScaleMedia
  about/                # VisionMission, ApproachDiagram, Timeline
  buttons/ media/       # Button, MediaFrame (+ lightbox)
  decor/                # BackgroundObjects, FilmGrain, CircuitSpine
  home/                 # Hero, Intro, Environments deck, Why, Technology,
                        # Vision, Wafee bands, Applications marquee, CTA glue
  motion/               # Reveal, Parallax, MaskLines, WordReveal, BlurLines,
                        # DecodeText, ScrollFillText, Magnetic, SmoothScroll
  navigation/           # SiteHeader (glass pill), Footer (+ MissionClock), Preloader
  sections/             # PageHero, SectionHeading, CTASection,
                        # HorizontalShowcase
  technical/            # StatBand, FlowStack, Telemetry, HudPanel primitives
  technology/           # SystemNav, SpecList, SystemMap
  wafee/                # PhilosophyList
lib/
  animations/index.ts   # Motion tokens & helpers
  content/site.ts       # Single source of truth for shared copy/data
hooks/use-ready.ts      # Preloader gate ("cennzo:ready" event)
public/images/          # Placeholder plates (IMG-* codes)
spec.txt                # Original governing design spec
```

**Conventions**

- Server components by default; `"use client"` only where motion/state requires it.
- Content arrays are typed records at the top of each page — copy edits never touch JSX.
- All interactive lists/cards animate via `whileInView` + `viewportOnce`.
- Anchor jumps use the lenis pattern: `window.__lenis.scrollTo(el, { offset })`.
- Dynamic class names are forbidden in Tailwind — tone maps store **full literal class strings**.

---

## Component Library (highlights)

- **SiteHeader** — transparent → glass pill on scroll (rounded-2xl, blur, shadow); gradient wordmark badge; gradient Contact pill.
- **PageHero** — eyebrow, masked headline lines, intro, meta strip; used by every inner page.
- **MediaFrame** — the placeholder image system: grid backdrop, scanning line, corner brackets, `CR·IMG-XX` codes, lightbox on click. Honest "Awaiting Imagery" state.
- **SystemMap** (technology) — interactive SVG humanoid anatomy; hover figure ⇄ list cross-highlighting, per-group hues, click-to-jump deep dives, flowing dashed data arcs.
- **SystemNav** — sticky glass pill navigator with IntersectionObserver scroll-spy and progress hairline.
- **HorizontalShowcase** — reusable GSAP horizontal scroll scene (industries, why-section).
- **DomainGrid** — mission matrix of color-coded domain cards with lenis jump-to-section.
- **VisionMission** — offset light/dark panel pair (the company's two promises).
- **ApproachDiagram** — negation cards ("Not enough.") converging into the WAFEE synthesis node.
- **Timeline** — sticky heading + scroll-fill progress rail across development phases.
- **CTASection** — dark finale with three-color aurora wash and magnetic buttons.

---

## Pages

| Route            | Story |
|------------------|-------|
| `/`              | Hero (orbit decor) → intro statement → environments card deck → principles showcase → technology rail → vision parallax → WAFEE bands → applications marquee → CTA |
| `/about`         | Identity statement → stat band → approach diagram → values → timeline → vision & mission |
| `/applications`  | Concept plate → mission matrix → nine color-coded zigzag domains, each with scale-in concept imagery → CTA |
| `/technology`    | Anatomy explorer → sticky system nav → nine subsystem deep-dives (dark beat at Compute & AI) |
| `/wafee`         | Stat band → philosophy list → five-domain horizontal showcase → spec sheet → capabilities → transparency |
| `/industries`    | Sector horizontal showcase + detail grid |
| `/platform` `/research` `/safety` `/partnerships` `/careers` `/contact` | Supporting narratives, contact form (mailto compose), careers culture |

---

## Content & Honesty Principles

- WAFEE is an **engineering platform under development** — no implied customers, deployments, or certified capabilities.
- Roadmap language only: `CURRENT FOCUS`, `NEXT`, `PLANNED`, `LONG-TERM`.
- Environment ratings/temperature limits are explicitly gated on validation.
- Defense content framed around responsible use and applicable law.
- All imagery is placeholder-by-design until real assets exist.

---

## Enhancement Log

Recent upgrades beyond the original spec:

- **Multi-hue color system** — semantic per-domain and per-anatomy-group hues; brand gradient (blue→violet→teal) across header, hairlines, stat numerals; aurora CTA wash.
- **Applications page rebuild** — mission matrix grid, nine zigzag domain sections with hue-themed chips/dots/hairlines/ghost numerals, ScaleMedia scroll imagery in every section, dark fuchsia space finale.
- **Technology anatomy explorer** (`SystemMap`) — interactive SVG humanoid with hover cross-highlighting, per-group hues, lenis deep-dive jumps; unified calm canvas with a single dark Compute & AI beat.
- **Futuristic effects package** — film grain, text decode labels, live hero telemetry, footer mission clock, circuit spine, blur-in hero type.
- **Typography upgrade** — Space Grotesk display + Geist Mono, `text-wrap: balance/pretty`, contrast-tuned text tokens, gradient stat numerals.

---

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static prerender)
npm start       # serve production build
```

**Verification workflow used in this repo:** run `npm run build`, then boot the dev server, `Invoke-WebRequest` each route expecting `200`, grep rendered HTML for placement markers, check the dev log for errors, stop node processes.

**Accessibility:** keyboard-visible focus rings, aria-labelled controls, reduced-motion fallbacks everywhere, semantic landmarks (`main`, `nav[aria-label]`, `section` + headings).

---

*Cennzo Robotix — Innovate · Automate · Elevate.*
