# Syndicate Union

The official website for **Syndicate Union (SU)** — *"The Voice of Liberty"* — a player-driven
community within *Foundation: Galactic Frontier*. Built as a premium, production-quality
marketing + community site: Apple-style polish, Discord-style community usability, and
subtle sci-fi identity in royal blue and gold.

> All content (news, lore, members, staff, events, etc.) is realistic **placeholder content**
> written for this build. Replace it with real Union content via the `content/` and `data/`
> directories described below.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**, with a hand-built shadcn/ui-style component layer (`components/ui`) on
  top of Radix primitives — no dependency on the shadcn CLI/registry at build time
- **Framer Motion** for tasteful, reduced-motion-aware entrance animation
- **Lucide** icons
- **MDX** (`next-mdx-remote/rsc`) for long-form content collections (news, lore, guides, wiki)
- Deployable to **Vercel** out of the box; can also be built as a static export if needed

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Deploying

**Vercel (recommended):** import the repository at [vercel.com/new](https://vercel.com/new) —
no configuration needed, it's a standard Next.js App Router project. Push to your default
branch and Vercel will build and deploy automatically.

**Other Node hosts:** run `npm run build && npm run start` behind any reverse proxy.

## Project structure

```
app/                    Routes (App Router) — one folder per page, plus:
  layout.tsx             Root layout: fonts, ThemeProvider, Navbar, Footer, Organization JSON-LD
  sitemap.ts, robots.ts   Generated SEO endpoints
  icon.tsx, apple-icon.tsx, opengraph-image.tsx   Code-generated brand images (next/og)
  middleware.ts (repo root)  Guards /departments behind the demo auth cookie

components/
  ui/            Hand-built primitives (Button, Card, Badge, Accordion, Tabs, Dialog, Sheet,
                  Avatar, Separator, Tooltip, DropdownMenu, NavigationMenu, Pagination, Input…)
  layout/        Navbar, Footer, ThemeToggle, NewsletterForm
  sections/      Homepage sections (Hero, StatsBand, NewsGrid, FeaturedGuides…)
  common/        Cross-page building blocks (SectionHeading, ProfileCard, FaqAccordion,
                  SearchBar, EventCard, MonthCalendar, GalleryLightbox, RoadmapBoard…)
  brand/         Logo suite (horizontal/vertical/icon/monochrome/watermark) + Liberty Emblem
  graphics/      Original SVG scene library (hero backgrounds, orbital rings, fleet scenes,
                  council chamber, starfield, seeded placeholder avatars)

content/                MDX content collections (see below)
  news/  lore/  guides/  wiki/
data/                   Structured placeholder data (TypeScript, typed)
  departments.ts  staff.ts  members.ts  events.ts  roadmap.ts
  downloads.ts  faq.ts  stats.ts  timeline.ts  badges.ts  gallery.ts

lib/
  content.ts      MDX loader + zod frontmatter schemas per content type
  schema.ts       schema.org JSON-LD helpers
  site.ts         Site-wide constants: name, nav, social links, core values
  auth.ts         Demo auth session helper (see below)
  utils.ts, prng.ts
```

## Content authoring

### Adding an MDX article (news / lore / guides / wiki)

Add a new `.mdx` file to the matching folder in `content/`. The filename (minus `.mdx`) becomes
the URL slug. Each content type has a required frontmatter shape, validated with `zod` in
`lib/content.ts`:

```mdx
---
title: "Your Title"
date: "2026-08-01"          # news only
category: "Community"        # news: Community | Events | Guides | Announcements | Diplomacy
tags: ["tag-one"]             # news only
pinned: false                 # news only
author: "Your Name"           # news only
excerpt: "One-sentence summary shown on listing cards."
---

Regular MDX body content goes here.
```

- `content/lore/*.mdx` uses `chapter` (number) + `era` instead of date/category.
- `content/guides/*.mdx` uses `category`, `difficulty` (`Beginner`/`Intermediate`/`Advanced`),
  and `updated`.
- `content/wiki/*.mdx` uses `category` + `order` (controls sidebar ordering within a category).

No rebuild step beyond `next dev`/`next build` — new files are picked up automatically via
`getAllContent()` / `getContentBySlug()`.

### Editing structured data (members, staff, events, etc.)

Everything else — the member directory, staff directory, departments, events calendar,
roadmap, downloads, FAQ, homepage stats, and about/lore timeline — lives in typed arrays under
`data/*.ts`. Edit the arrays directly; TypeScript will flag anything missing.

## Design system

- **Palette:** royal blue (primary), gold (accent/CTA), navy (dark surfaces/footer), off-white/
  light grey neutrals — defined as HSL CSS variables in `app/globals.css` and mapped in
  `tailwind.config.ts`. Purple is intentionally absent.
  - Note: `--gold` is a slightly darkened "ink" shade so gold text clears WCAG AA contrast on
    light surfaces (~5.6:1). A separate `--gold-vivid` token is used for gold on permanently
    dark surfaces (hero scenes, the navy footer) and for button/badge fills and decorative
    SVG strokes, where the brighter tone is both safe and desirable.
- **Typography:** Cinzel (display, used sparingly for hero headlines and the wordmark),
  Marcellus SC (section headings), Inter (body/UI) — loaded via `next/font/google`.
- **Dark mode:** fully wired via `next-themes` and a parallel dark palette in `globals.css`
  (toggle in the navbar); ships defaulting to light per the brief's "bright, premium" direction.
- **Motion:** a single `Reveal` wrapper (`components/common/reveal.tsx`) drives scroll-in fades
  used by `SectionHeading` everywhere, plus CSS hover elevation on cards and Radix's built-in
  open/close transitions on menus, accordions, dialogs, and the mobile drawer. Everything
  respects `prefers-reduced-motion` (via `useReducedMotion()` and a global CSS override).

## Original visual assets

No raster/painted artwork is used — every visual asset is **code-generated**, keeping the
brand consistent, resolution-independent, and dependency-free:

- **Brand:** `components/brand/` — full/horizontal/vertical/icon/monochrome/watermark logo
  lockups and the Liberty Emblem, all built from one SVG mark.
- **Favicon / App icon / Open Graph image:** `app/icon.tsx`, `app/apple-icon.tsx`,
  `app/opengraph-image.tsx` use Next's built-in `next/og` `ImageResponse` to render PNGs at
  request time from JSX — no external image-generation tool required.
- **Hero art & section backgrounds:** `components/graphics/` — abstract orbital rings, a
  geometric orbital-cityscape skyline, faceted fleet-scene ships, a radial council chamber
  motif, and a deterministic starfield, composed per-page in `hero-scene.tsx`.
- **Gallery artwork & avatars:** the Gallery and Member/Staff Directories use the same
  graphics primitives (`gallery-art.tsx`, `seeded-avatar.tsx`) to stand in for community
  artwork and profile pictures, seeded deterministically per item so they're stable across
  renders without a real asset pipeline.

**Not included** (would need a human artist or an image-generation pass before shipping to
production): photographic/painted hero illustrations, specific character portraits, and any
literal game screenshots — the brief explicitly avoids using copyrighted game art, and no
image-generation tool was available in this build. The abstract SVG/CSS system above was the
agreed substitute.

## Auth architecture (demo)

`/departments` is a placeholder for future **role-gated Union Department** areas. It's guarded
by `middleware.ts` and `lib/auth.ts`, which set a plain cookie via `/login` — **this is not a
real authentication system** (no password, signing, or user database). It exists to demonstrate
where a real provider (e.g. NextAuth/Auth.js) would plug in. Do not reuse this cookie approach
for real credentials.

## Integrations

Discord, YouTube, Twitch, and Patreon are wired as static links (`lib/site.ts` → `SITE.social`)
in the footer, contact page, and events page. There's no live Discord widget/API call yet —
swap in a real integration by replacing those links/components once server credentials exist.

## SEO & accessibility

- Per-route `metadata` exports, a generated `sitemap.xml` and `robots.txt`
  (`app/sitemap.ts`/`app/robots.ts`), and `Organization`/`Article` JSON-LD
  (`lib/schema.ts` + `components/json-ld.tsx`).
- Semantic landmarks, a "skip to content" link, visible focus rings, keyboard-operable nav/
  drawer/accordions, and WCAG AA colour contrast (see the gold note above).

## Known follow-ups

- `npm audit` flags advisories in `next@14.2.x` and `next-mdx-remote@5.x` whose fixes require
  major version bumps (Next 16 / next-mdx-remote 6). Content rendered through MDX here is all
  first-party placeholder content, not user-submitted input, so exposure is low — but upgrade
  before accepting untrusted MDX or before a production launch.
- Contact/application/newsletter forms are client-side only (no backend endpoint) by design
  for this build stage — wire them to a real submission handler when one exists.
