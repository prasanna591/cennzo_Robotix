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
7. [Architecture](#architecture)
8. [Component Library](#component-library)
9. [Pages](#pages)
10. [Content & Honesty Principles](#content--honesty-principles)
11. [Development](#development)

---

## Tech Stack

| Layer      | Choice                                   | Why |
|------------|------------------------------------------|-----|
| Framework  | Next.js (App Router) + React 19          | Static prerender, server components, file-based routing |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)     | Token-driven design system without config files |
| Animation  | Framer Motion + GSAP (ScrollTrigger)     | Declarative UI motion + pinned/scrubbed scroll scenes |
| Smooth scroll | Lenis                                 | Inertial scrolling synced to ScrollTrigger |
| Language   | TypeScript (strict)                      | Type-safe content models and component APIs |
| Fonts      | Geist Sans + JetBrains Mono              | Engineering voice: humanist sans + technical mono |

No CMS, no external data sources — all copy lives in versioned code (`lib/content/site.ts`, page files).

---

## Design Principles

1. **Calm authority over noise.** Generous whitespace, restrained borders (`black/[0.08]` hairlines), and one idea per viewport. Color and motion are accents, never wallpaper.
2. **Engineering honesty.** The product is in development. The site never fakes deployment: statuses read `CURRENT FOCUS / NEXT / PLANNED / LONG-TERM`, imagery is labeled *"Awaiting Imagery — Concept"*, and validation claims stay qualified.
3. **Humanoid form as hero.** The WAFEE silhouette, anatomy diagrams, orbit rings, and calibration-frame motifs recur across pages — the machine is the brand.
4. **Motion with meaning.** Everything animates to explain hierarchy or physics (scale-in reveals, parallax depth, scroll-scrubbed fills). Nothing bounces for attention. All motion respects `prefers-reduced-motion`.
5. **One dark beat per journey.** Pages travel light → dark: void-light surfaces carry most content; a single dramatic ink section (Compute & AI, Vision panel, CTA finale) gives each page a climax.
6. **Color-coded storytelling.** Since the multi-hue update, color is semantic: each application domain owns a hue, each body system in the anatomy explorer owns a hue. Color teaches, not decorates.
7. **Technical mono voice.** Labels, indices, coordinates, and metadata use uppercase JetBrains Mono with wide tracking (`0.2em+`) — the site "speaks telemetry."

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
| `mist`  | `#4b5563` | Body copy               |
| `faint` | `#7a8491` | Meta / labels           |

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

Fluid clamp-based scale (all tokens in `@theme`):

| Token          | Range                     | Use |
|----------------|---------------------------|-----|
| `text-hero`    | `clamp(2.75rem → 7.5rem)` | Page heroes |
| `text-display` | `clamp(2.25rem → 4.5rem)`  | Section statements |
| `text-headline`| `clamp(1.75rem → 2.75rem)` | Card/section titles |
| `text-subhead` | `clamp(1.125rem → 1.375rem)`| Lede paragraphs |
| `text-label`   | `0.6875rem`, tracking `0.18em` | Mono labels |

Headings are **sentence case** with tight tracking (`-0.02em`); uppercase is reserved for mono labels/meta/buttons/nav.

---

## Motion & Animation System

Centralized in `lib/animations/index.ts`: `DURATION` (fast/standard/cinematic), `EASE` curves, `drawStroke`, `viewportOnce`.

**Global smooth scroll** — Lenis instance synced to GSAP ScrollTrigger (`components/motion/smooth-scroll.tsx`); exposed as `window.__lenis` for programmatic jumps.

Core patterns:

| Pattern | Component | Notes |
|---------|-----------|-------|
| Masked line reveals | `MaskLines` | Hero headlines slide up from clipping masks |
| Word-by-word reveal | `WordReveal` | Statement typography |
| Scroll-scrubbed fill | `ScrollFillText` | Words illuminate as you scroll through |
| Keyword markers | `*word*` / `~word~` | Parsed by WordReveal/MaskLines/ScrollFillText → accent/teal |
| Scale + parallax media | `ScaleMedia` | Image scales 0.9→1 with inner zoom-out on scroll |
| Parallax wrapper | `Parallax` | Speed-based vertical drift |
| Ambient decor | `BackgroundObjects` | Multicolor orbs, rotating ring, dot grid, SYS/NAV marks |
| Horizontal scroll | `HorizontalShowcase` | GSAP pin + scrub, snap fallback <lg / reduced-motion |
| Count-up stats | `StatBand` | Spring counters on view |
| Sticky stacking cards | Environments deck | Cards stack at staggered offsets while scrolling |

Every animation checks `useReducedMotion()` and degrades to static rendering.

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
  decor/                # BackgroundObjects
  home/                 # Hero, Intro, Environments deck, Why, Technology,
                        # Vision, Wafee bands, Applications marquee, CTA glue
  motion/               # Reveal, Parallax, MaskLines, WordReveal,
                        # ScrollFillText, Magnetic, SmoothScroll
  navigation/           # SiteHeader (glass pill), Footer, Preloader
  sections/             # PageHero, SectionHeading, CTASection,
                        # HorizontalShowcase
  technical/            # StatBand, FlowStack, HudPanel-style primitives
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
