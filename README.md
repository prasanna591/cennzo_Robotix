# Cennzo Robotix — Website

The official website of **Cennzo Robotix**, a deep-tech robotics company building **WAFEE** — a full-size humanoid robot platform engineered for the world's hardest industrial environments.

> **Design thesis:** *Robots where people should not have to go.* Every design decision on this site serves that sentence — cinematic, technical, honest, and calm. Light surfaces carry most content; a single dark CTA beat gives each journey its climax; color is used semantically, never decoratively.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Design Principles](#design-principles)
3. [Design System](#design-system)
4. [Color System](#color-system)
5. [Typography](#typography)
6. [Motion & Animation System](#motion--animation-system)
7. [Global Site Systems](#global-site-systems)
8. [Media System](#media-system)
9. [Component Library](#component-library)
10. [Pages & Routes](#pages--routes)
11. [Localization](#localization)
12. [Content & Honesty Principles](#content--honesty-principles)
13. [Architecture](#architecture)
14. [Development](#development)

---

## Tech Stack

| Layer      | Choice                                       | Why |
|------------|----------------------------------------------|-----|
| Framework  | Next.js 16 (App Router) + React 19           | Static prerender, server components, file-based routing |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`)         | Token-driven design system without config files |
| Animation  | Framer Motion + CSS keyframes                | Declarative UI motion, scroll-linked scenes, ambient loops |
| Language   | TypeScript (strict)                          | Type-safe content models and component APIs |
| i18n       | next-intl 4                                  | 7 locales, cookie-based, English-base fallback |
| Fonts      | Space Grotesk + Geist Sans + Geist Mono (+ Noto Tamil / Devanagari for localized scripts) | Engineered display voice, humanist body, technical mono |

No CMS, no external data sources. All copy lives in versioned JSON dictionaries (`messages/*.json`) and page files. The project deliberately does **not** use GSAP, Lenis, or Three.js — scroll-driven motion is implemented with Framer Motion's `useScroll`/`useSpring` primitives to keep dependencies minimal.

---

## Design Principles

1. **Calm authority over noise.** Generous whitespace, restrained `border-black/[0.08]` hairlines, and one idea per viewport. Color and motion are accents, never wallpaper.
2. **Engineering honesty.** WAFEE is under development. The site never fakes deployment: statuses read `PRIMARY DEVELOPMENT / ENGINEERING ROADMAP / RESEARCH / LONG-TERM VISION`, imagery is labeled *Concept*, and performance claims stay gated on validation.
3. **Humanoid form as hero.** The WAFEE silhouette, orbit rings, calibration frames, ghost numerals, and blueprint grids recur across pages — the machine is the brand.
4. **Motion with meaning.** Everything animates to explain hierarchy or physics (blur-in reveals, parallax depth, scroll-scrubbed fills, count-up stats). Nothing bounces for attention. All motion respects `prefers-reduced-motion`.
5. **One dark beat per journey.** Pages travel light → dark: void-light surfaces carry most content; the `dark-section` CTA finale (with aurora wash) gives each page its climax.
6. **Color-coded storytelling.** Each application domain owns a hue; each stat band label and readiness meter uses the brand family. Color teaches, not decorates.
7. **Technical mono voice.** Labels, indices, coordinates, and metadata use uppercase Geist Mono with wide tracking (`0.18em+`) — the site "speaks telemetry." Headlines are set in Space Grotesk with `text-wrap: balance`.

---

## Design System

Defined once in `app/globals.css` via Tailwind v4's `@theme`.

### Surfaces

| Token       | Value     | Role                          |
|-------------|-----------|-------------------------------|
| `void`      | `#eef3fc` | Page background (blue-tinted near-white) |
| `graphite`  | `#ffffff` | Cards / raised panels         |
| `charcoal`  | `#e4eaf6` | Subtle tint bands             |
| `steel`     | `#d6dff0` | Borders / dividers            |
| `ink`       | `#0b1220` | Dark sections, primary button |

### Text

| Token   | Value     | Role                    |
|---------|-----------|-------------------------|
| `bone`  | `#111318` | Headings / primary text |
| `mist`  | `#475467` | Body copy               |
| `faint` | `#5c6370` | Meta / labels           |

Text tones are tuned for WCAG AA on the void surface; `::selection` uses the accent blue on light and the teal on dark.

### Elevation

- `--shadow-soft` — resting cards (`0 8px 24px` at 6%)
- `--shadow-lift` — hover / featured panels (`0 16px 40px` at 10%)

### Dark sections

`.dark-section` is a **scoped token override**: inside it, every surface/text token flips to an ink-navy palette, so any component renders correctly in dark contexts without prop drilling.

### Signature utilities

- `.text-gradient` — blue → violet → teal gradient text (stat numerals)
- `.text-gradient-warm` — amber → rose → violet variant (rare, warm accents)
- `.hairline-spectrum` — multicolor seam line between major sections
- `.btn-primary` / `.btn-sheen` — ink button with sheen sweep on hover
- `.spotlight-card` — cursor-following radial spotlight (activated by `.spotlight-group`)
- `.animate-marquee` / `.animate-marquee-reverse` — endless tracks, pause on hover
- `.grain-layer` — fixed SVG-noise film grain with 8-step jitter
- `.mesh-orb` 1–4 — drifting ambient gradient orbs for the fixed background

---

## Color System

A **one-plus-many** model: blue leads, a professional hue family supports it.

- **Primary accent** `#155eef` — links, focus, active markers
- **Secondary** `#00a8a8` teal — software/alive states, `~word~` markers
- **Highlight** `#7c3aed` violet — brand gradient midpoint
- **Support hues** (Tailwind defaults): blue, amber, rose, orange, cyan, emerald, violet, indigo, fuchsia

Semantic assignments used by the Applications mission matrix:

| Domain                     | Hue |
|----------------------------|-----|
| Industrial Inspection      | Blue |
| Energy & Utilities         | Amber |
| Disaster Response          | Rose |
| Fire & Hazardous           | Orange |
| Marine & Offshore          | Cyan |
| Mining                     | Emerald |
| Logistics                  | Violet |
| Defense & Research         | Indigo |
| Space Robotics             | Fuchsia (on dark) |

Rules: chips/dots/hairlines/ghost numerals use hues at low alpha; each tone map lives as **full literal class strings** (dynamic Tailwind class names are forbidden). Hue appears in chips, dots, hairlines, ghost numerals, gradients — never as full saturated backgrounds.

---

## Typography

**Font stack:** Space Grotesk drives every heading (`h1`–`h4` via `--font-display`) for an engineered, geometric voice; Geist Sans carries body copy; Geist Mono handles labels/meta/telemetry. On localized locales, Noto Sans Tamil and Noto Sans Devanagari slot into both stacks so headings and body render native scripts.

Fluid clamp-based scale (tokens in `@theme`):

| Token          | Range                      | Use |
|----------------|----------------------------|-----|
| `text-hero`    | `clamp(2.75rem → 7.5rem)`  | Page heroes — lh `0.97`, tracking `-0.038em` |
| `text-display` | `clamp(2.25rem → 4.5rem)`  | Section statements |
| `text-headline`| `clamp(1.75rem → 2.75rem)` | Card/section titles |
| `text-subhead` | `clamp(1.125rem → 1.375rem)` | Lede paragraphs |
| `text-body`    | `1rem` (lh `1.7`)          | Paragraphs |
| `text-label`   | `0.6875rem`, tracking `0.18em` | Mono labels |

Micro-typography rules:

- Headings are **sentence case**, tight-tracked, and set with `text-wrap: balance` (no orphan words). Paragraphs use `text-wrap: pretty`.
- Uppercase is reserved for mono labels/meta/buttons/nav.
- Stat numerals render in the brand gradient (`.text-gradient`); readouts use `tabular-nums`.
- Dark sections get a teal-tinted `::selection`.

---

## Motion & Animation System

Centralized in `lib/animations/index.ts`: `DURATION` (fast/standard/cinematic), `EASE` curves, `viewportOnce`, and reusable variants (`fadeUp`, `fadeIn`, `scaleReveal`, `maskRise`, `lineDraw`, `drawStroke`, `pulseDot`, `staggerContainer`).

**Smooth scroll** — a `scroll-behavior: smooth` class on `<html>` (added via `SmoothScroll`, skipped under reduced motion). Anchor jumps use native smooth scrolling (`scrollIntoView`) with `scroll-mt` offsets.

Core patterns:

| Pattern | Component | Notes |
|---------|-----------|-------|
| Blur-in letter reveal | `BlurLines` | Hero headlines enter char-by-char from `blur(10px)`, preloader-gated; parses keyword markers |
| Text decode/scramble | `DecodeText` | Mono labels resolve from terminal glyphs on view (SSR emits real text for SEO) |
| Masked line reveals | `MaskLines` | Inline headline lines slide up from clipping masks |
| Word-by-word reveal | `WordReveal` | Statement typography |
| Scroll-scrubbed fill | `ScrollFillText` | Words illuminate faint → bone as you scroll through |
| Keyword markers | `*word*` / `~word~` | Parsed by WordReveal/MaskLines/ScrollFillText/BlurLines → accent/teal |
| Scale + parallax media | `ScaleMedia` | Image scales 0.9→1 outer, 1.14→1 inner on scroll |
| Parallax wrapper | `Parallax` | Speed-based vertical drift |
| Ambient decor | `BackgroundObjects` | Blue/violet/teal orbs, rotating ring, dot grid, SYS/NAV marks, light & dark |
| Horizontal scroll | `HorizontalShowcase` | Pinned GSAP-free scroll (sticky + scroll progress); mobile falls back to a slow marquee |
| Count-up stats | `StatBand` / `Counter` | Spring counters on view |
| Sticky stacking cards | `EnvironmentsSection` | Cards pin at staggered offsets while scrolling |
| 3D tilt + spotlight | `TiltCard` / `Spotlight` | Subtle tilt, cursor-following radial glow |
| Page transitions | `PageTransition` (in `app/template.tsx`) | Fade/rise on route mount |

Every animation checks `useReducedMotion()` (and the global CSS override short-circuits durations); reduced mode renders static, readable content.

---

## Global Site Systems

Present on every page (mounted from `app/layout.tsx`):

| System | Effect |
|---|---|
| Mesh gradient background | Four drifting ambient orbs (blue/teal/indigo/sky) fixed behind all content |
| Preloader | "Initializing WAFEE" boot sequence with progress bar + OK lines; session-gated (once per visit), rAF-driven, 4s failsafe |
| Glass pill header | Transparent → rounded-2xl blur pill on scroll; gradient nav underlines, gradient Contact pill, language switcher |
| Scroll progress bar | Spring-smoothed top hairline (blue gradient) tracking page progress |
| Custom cursor | Spring-lagged ring dot; fine-pointer + no-reduced-motion only; enlarges over interactive elements |
| Circuit spine | Fixed left-edge trace (xl+) drawing downward with scroll; bright head dot, diamond nodes |
| Film grain | Fixed SVG-noise overlay (~4% opacity, 8-step jitter) |
| Back-to-top | Circular SVG ring that draws progress (`pathLength` spring) |
| Hero telemetry | PWR / CORE / LINK random-walk readouts with blinking status dots |
| Footer mission clock | UTC clock (1s tick) + Riyadh coordinates + teal status dot |
| Page transitions | Fade/rise on route mount (`template.tsx`) |
| Language prompt | First-visit overlay to choose a language (cookie-gated, Esc/backdrop to dismiss) |

---

## Media System

`MediaFrame` is the media workhorse: a figure with an expandable button, blueprint-grid backdrop, scanning line loop, corner brackets, `CR·IMG-XX` codes, a `Concept` tag, and a lightbox on click. Assets live in `public/images/*.webp` (AI-generated concept plates). Where no asset exists the frame renders an honest *"Awaiting Imagery"* placeholder.

---

## Component Library

- **SiteHeader** — transparent → glass pill on scroll; gradient wordmark underline; animated full-screen mobile menu; language switcher.
- **PageHero** — eyebrow (decode), blur-in headline lines, intro, optional meta strip; parallax content fade; used by every inner page.
- **SectionHeading** — eyebrow + masked headline lines + optional body; left or centered.
- **CTASection** — dark finale with three-color aurora wash, magnetic buttons, masked headline.
- **MediaFrame** — see [Media System](#media-system).
- **SystemsIndex** — sticky scroll-spy rail of system indices (IntersectionObserver) used on the technology page.
- **BlueprintPanel** — technical register card: registration marks, blueprint grid, ghost index, SYS tag, readiness meter, dark variant.
- **SpecTable / LayerStack** — spec-point tables and a layered software stack (used inside BlueprintPanels).
- **SpecList** — animated mission/point lists with per-hue dots.
- **DomainGrid** — mission matrix of color-coded domain cards.
- **ScaleMedia** — scroll-driven scale + inner zoom image wrapper.
- **HorizontalShowcase** — pinned horizontal sector/domain showcase (desktop) with a slow-marquee mobile fallback.
- **HudPanel** — interactive "System Status" telemetry panel with a runnable diagnostic scramble.
- **MissionConfigurator** — environment tab switcher; animated mission-module lists.
- **StatBand / Counter** — gradient count-up stat numerals with staggered labels.
- **VisionMission / ApproachDiagram / Timeline** — the About page's offset panels, negation→synthesis SVG, sticky timeline with fill rail.
- **PhilosophyList** — big-word hover rows on the WAFEE page.
- **ContactForm** — validated mailto-compose form with animated success state.
- **Reveal / Parallax / MaskLines / WordReveal / BlurLines / DecodeText / ScrollFillText / Magnetic / TiltCard / Spotlight** — motion primitives.

---

## Pages & Routes

| Route            | Story |
|------------------|-------|
| `/`              | Hero (orbit decor + live telemetry) → intro statement → WAFEE bands → sticky environment card deck → principles → technology rail → applications marquee → vision → CTA |
| `/about`         | Identity statement → stat band → vision/mission panels → media plate → approach diagram → values grid → timeline → CTA |
| `/applications`  | Concept plate → mission matrix → nine color-coded zigzag domains with scale-in imagery + ghost numerals → dark space CTA |
| `/technology`    | Blueprint plates → sticky system index rail → nine "Technical Register" panels with readiness meters (dark Compute & AI) |
| `/wafee`         | Stat band → philosophy list → HUD panel → media plate → five-domain horizontal showcase → spec sheet → capabilities grid → transparency note |
| `/industries`    | Horizontal pinned sector showcase → media plate → humanoid-value statement → CTA |
| `/platform`      | Core platform vs mission modules → interactive mission configurator |
| `/research`      | Research domains → digital engineering tools → build/test/measure/learn cycle |
| `/safety`        | Four safety layers → validation levels → validation philosophy |
| `/partnerships`  | Partner type index → ecosystem media plate |
| `/investors`     | Value layers → investment thesis |
| `/careers`       | Open domains → culture panel |
| `/contact`       | Contact-for list + validated contact form (mailto compose) |
| `/legal`         | Privacy, terms, responsible AI, safety & compliance (single page, anchor sections) |
| `404` / `error`  | Branded not-found and error boundaries |

---

## Localization

The site ships **7 locales**: English, Hindi, Tamil, Japanese, Chinese, French, Spanish (`i18n/config.ts`). Locale is selected via the `NEXT_LOCALE` cookie:

- `LanguageSwitcher` (header pill + mobile menu) and the first-visit `LanguagePrompt` overlay.
- `LocaleLayout -> i18n/request.ts` loads the dictionary and **deep-merges it over English**, so any missing key gracefully falls back to English rather than breaking.
- English is the canonical base; `messages/<locale>.json` may contain only translated keys.

**Translation coverage:** the Home hero and the flagship routes — About, WAFEE, Technology, Applications, Industries, Contact — are fully dictionary-driven. The supporting pages (Platform, Research, Safety, Partnerships, Investors, Careers, Legal) currently render English content from their page components. Extending them is a straightforward migration to `messages/`.

---

## Content & Honesty Principles

- WAFEE is an **engineering platform under development** — no implied customers, deployments, or certified capabilities.
- Roadmap language only: `PRIMARY DEVELOPMENT`, `ENGINEERING ROADMAP`, `RESEARCH`, `LONG-TERM VISION`.
- Environment ratings/temperature limits are explicitly gated on validation.
- Defense content framed around responsible use and applicable law.
- All imagery carries a `Concept` label until real production assets exist.

---

## Architecture

```
app/                     # Routes (App Router, static prerender) + layout, globals.css,
                         # template (page transitions), sitemap/robots/manifest/OG image
  about/ applications/ careers/ contact/ industries/ investors/ legal/
  partnerships/ platform/ research/ safety/ technology/ wafee/
components/
  about/                 # VisionMission, ApproachDiagram, Timeline
  applications/          # DomainGrid, ScaleMedia
  buttons/ media/        # Button, MediaFrame (+ lightbox)
  contact/               # ContactForm (mailto compose)
  decor/                 # MeshGradient, BackgroundObjects, FilmGrain, CircuitSpine
  home/                  # Intro, Wafee, Environments deck, Why, Technology,
                         # Applications, Vision sections
  motion/                # Reveal, Parallax, MaskLines, WordReveal, BlurLines,
                         # DecodeText, ScrollFillText, Magnetic, TiltCard, Spotlight,
                         # PageTransition, Preloader, SmoothScroll
  navigation/            # SiteHeader (glass pill), SiteFooter (+ MissionClock),
                         # BackToTop, LanguageSwitcher, LanguagePrompt
  sections/              # PageHero, SectionHeading, CTASection, HorizontalShowcase
  technical/             # ScrollProgress, Cursor, StatBand, Telemetry, HudPanel,
                         # MissionConfigurator
  technology/            # SystemsIndex, BlueprintPanel, SpecTable, SpecList, LayerStack
  wafee/                 # PhilosophyList
lib/
  animations/index.ts    # Motion tokens & helpers
  content/site.ts        # Shared data (environments, principles, specs, partner types)
  text-utils.ts          # Shared copy helpers
  graphemes.ts           # Splitter for CJK/Indic scripts in animated headlines
i18n/
  config.ts              # Locales, cookie name, language metadata
  request.ts             # Per-request config, deep-merge English fallback
messages/                # en (full) + hi/ta/ja/zh/fr/es dictionaries
public/
  images/                # AI-generated concept plates (IMG-* webp)
  logo/ reference_image/ # Source/brand assets
hooks/
  use-ready.ts           # Preloader gate ("cennzo:ready" event)
```

**Conventions**

- Server components by default; `"use client"` only where motion/state requires it.
- Content arrays are typed records/`t.raw()` casts at the top of each page — copy edits never touch JSX.
- Interactive lists/cards animate via `whileInView` + `viewportOnce`.
- Dynamic class names are forbidden in Tailwind — tone maps store full literal class strings.
- Decorative imagery uses `alt=""` / `aria-hidden`; meaningful assets get real alt text.

---

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (static prerender)
npm start            # serve production build
```

**Checks**

```bash
npm run lint         # ESLint (incl. jsx-a11y, react hooks)
npm run typecheck    # tsc --noEmit
npm run test:run     # Vitest unit/component tests
npm run test:e2e     # Playwright end-to-end (desktop + mobile projects)
npm run test:ci      # lint + typecheck + unit + e2e
```

**Accessibility:** keyboard-visible focus rings (`:focus-visible`), aria-labelled controls, label-led inputs, reduced-motion fallbacks everywhere, semantic landmarks (`main`, `nav[aria-label]`, `section` + headings), and no content that depends on hover.

---

*Cennzo Robotix — Innovate · Automate · Elevate.*