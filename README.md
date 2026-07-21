# Syndicate Union

The official website for **Syndicate Union (SU)** — *"The Voice of Liberty"* — a player-driven
community within *Foundation: Galactic Frontier*. Built as a premium, production-quality
marketing + community site: Apple-style polish, Discord-style community usability, and
subtle sci-fi identity in royal blue and gold.

> All content (news, lore, members, staff, events, etc.) is realistic **placeholder content**
> written for this build, migrated into Postgres and editable through the built-in **/admin**
> CMS described below.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Postgres** + **Drizzle ORM** for all site content, with a lightweight custom-built admin
  CMS at `/admin` (own login, no NextAuth) for editing it
- **Tailwind CSS**, with a hand-built shadcn/ui-style component layer (`components/ui`) on
  top of Radix primitives — no dependency on the shadcn CLI/registry at build time
- **Framer Motion** for tasteful, reduced-motion-aware entrance animation
- **Lucide** icons
- **MDX** (`next-mdx-remote/rsc`) for long-form content collections (news, lore, guides, wiki)
- Deployable to **Vercel** out of the box; can also be built as a static export if needed

## Getting started

```bash
npm install
```

Create a Postgres database (local or hosted — e.g. Vercel Postgres/Neon) and copy
`.env.local.example` to `.env.local`, filling in `DATABASE_URL` and a generated `SESSION_SECRET`:

```bash
cp .env.local.example .env.local
# then edit .env.local
```

Push the schema and seed the placeholder content, then create your first admin login:

```bash
npm run db:push                                        # create tables from lib/db/schema.ts
npm run db:seed                                         # migrate data/*.ts + content/**/*.mdx into Postgres
npm run admin:create -- --name "Your Name" --email you@example.com --password "a-strong-password"
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site, or
[http://localhost:3000/admin/login](http://localhost:3000/admin/login) to sign in to the CMS.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
npm run db:studio  # Drizzle Studio — browse/edit tables directly
```

## Deploying

**Vercel (recommended):** import the repository at [vercel.com/new](https://vercel.com/new),
add `DATABASE_URL` and `SESSION_SECRET` as project environment variables, then push to your
default branch — Vercel will build and deploy automatically. Run `db:push`, `db:seed`, and
`admin:create` once against the production database (locally, pointed at the prod
`DATABASE_URL`, or via `vercel env pull`) before the first deploy.

**Other Node hosts:** run `npm run build && npm run start` behind any reverse proxy.

## Project structure

```
app/
  (site)/               Public marketing site route group — one folder per page, plus the
                         Navbar/Footer/skip-link shared layout (app/(site)/layout.tsx)
  admin/                The CMS: /admin/login, /admin (dashboard), and the generic
                         /admin/[type], /admin/[type]/new, /admin/[type]/[id] CRUD routes
  layout.tsx             Root layout: fonts, ThemeProvider, Organization JSON-LD (no chrome —
                         that's per-route-group now, so /admin gets its own header instead)
  sitemap.ts, robots.ts   Generated SEO endpoints
  icon.tsx, apple-icon.tsx, opengraph-image.tsx   Code-generated brand images (next/og)
  middleware.ts (repo root)  Guards /admin/:path* (real session) and /departments (demo cookie)

components/
  ui/            Hand-built primitives (Button, Card, Badge, Accordion, Tabs, Dialog, Sheet,
                  Avatar, Separator, Tooltip, DropdownMenu, NavigationMenu, Pagination, Input…)
  layout/        Navbar, Footer, ThemeToggle, NewsletterForm
  sections/      Homepage sections (Hero, StatsBand, NewsGrid, FeaturedGuides…)
  common/        Cross-page building blocks (SectionHeading, ProfileCard, FaqAccordion,
                  SearchBar, EventCard, MonthCalendar, GalleryLightbox, RoadmapBoard…)
  admin/         Generic CMS form/list building blocks (RecordForm, DeleteButton)
  brand/         Logo suite (horizontal/vertical/icon/monochrome/watermark) + Liberty Emblem
  graphics/      Original SVG scene library (hero backgrounds, orbital rings, fleet scenes,
                  council chamber, starfield, seeded placeholder avatars)

content/                Original MDX placeholder content — seed source only now (see below)
  news/  lore/  guides/  wiki/
data/                   Type definitions only — seed source only now (see below)
  departments.ts  staff.ts  members.ts  events.ts  roadmap.ts
  downloads.ts  faq.ts  stats.ts  timeline.ts  badges.ts  gallery.ts

lib/
  db/schema.ts    Drizzle table definitions — the source of truth for all site content
  db/client.ts    Lazily-initialized Postgres connection (via `postgres`/postgres.js)
  db/queries.ts   Typed read functions for the 12 structured content tables
  content.ts      Reads news/lore/guides/wiki from Postgres; same public API as before
  admin/          Content-type registry + generic CRUD server actions powering /admin
  admin-session.ts  Edge-safe JWT session verify (used by middleware.ts)
  admin-auth.ts     Node-only session read/write (cookies via next/headers)
  schema.ts       schema.org JSON-LD helpers
  site.ts         Site-wide constants: name, nav, social links, core values
  auth.ts         Demo auth session helper for /departments (see below)
  utils.ts, prng.ts

scripts/
  seed.ts, seed-data.ts, read-source-mdx.ts   One-time migration of data/*.ts + content/**/*.mdx
                                               into Postgres (`npm run db:seed`)
  create-admin.ts   CLI to create/update an admin login (`npm run admin:create`)
```

## Content authoring

All site content now lives in Postgres and is edited through **`/admin`** — see
[Admin CMS](#admin-cms) below. The `content/**/*.mdx` files and `data/*.ts` arrays are kept
in the repo only as the one-time seed source (`npm run db:seed`) and as TypeScript type
definitions; editing them after the initial seed has no effect on the live site.

## Admin CMS

A lightweight, config-driven CMS at `/admin`, built with Drizzle ORM (no external headless-CMS
dependency) and its own auth — deliberately not NextAuth, to keep the footprint small.

- **Login:** `/admin/login`, email + password. Accounts are created via
  `npm run admin:create -- --name "..." --email ... --password ...` — there's no public
  self-registration. Failed logins are throttled (5 attempts, then a 60s lockout per email).
- **Sessions:** a signed (HS256, `jose`) JWT in an httpOnly cookie, verified in `middleware.ts`
  without a DB round-trip, so gating `/admin/*` stays fast. Passwords are hashed with `bcryptjs`.
- **Content types:** every content type from the site — Departments, Staff, Members, Badges,
  Stats, Events, Downloads, Roadmap, Gallery, FAQ, Allies, Timeline, News, Lore, Guides, Wiki —
  is editable, driven by one registry (`lib/admin/content-types.ts`). Adding a new content type
  later means adding a Drizzle table + one registry entry, not new UI code.
- **Editing:** each record shows a "Last edited by _name_ at _time_" line (from the `updated_by`/
  `updated_at` audit columns every table carries). Saving a record calls `revalidatePath` for
  every public route that content affects, so edits go live immediately — no redeploy needed.
- **Editorial content** (news/lore/guides/wiki) is edited as raw Markdown in a plain textarea,
  matching the existing MDX format exactly.

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

## Auth architecture — /departments demo (unrelated to the CMS above)

`/departments` is a placeholder for future **role-gated Union Department** areas. It's guarded
by `middleware.ts` and `lib/auth.ts`, which set a plain cookie via `/login` — **this is not a
real authentication system** (no password, signing, or user database). It exists to demonstrate
where a real provider (e.g. NextAuth/Auth.js) would plug in. Do not reuse this cookie approach
for real credentials. It's unrelated to the `/admin` CMS auth described above, which is a real
password + signed-session system.

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
- Admin login throttling is in-memory (per server process), which is fine for a single
  long-running Node server but resets on every serverless cold start on Vercel. Swap in a
  DB- or Redis-backed counter before relying on it in that environment.
