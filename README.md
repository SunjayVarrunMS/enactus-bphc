# Enactus BITS Hyderabad

**Live:** https://enactus-bphc.vercel.app

A site for the Enactus chapter at BITS Pilani, Hyderabad Campus — its projects,
the 2025-26 season, and how to get in touch.

Built for the Enactus BITS Hyderabad Tech Team inductions (Task A).

## Why this stack

**Next.js 16 (App Router) + TypeScript + Tailwind v4.**

- Every page is a static component with no client-side data fetching, so all four
  routes prerender at build time and ship as HTML. `next build` reports them as
  `○ (Static)`.
- `next/image` handles the report photos — it emits WebP/AVIF at the right size
  per device, and because every image carries explicit `width`/`height`, nothing
  reflows as they load.
- `next/font` self-hosts Space Grotesk and Inter, so there is no render-blocking
  request to Google and no flash of unstyled text.
- Only two components are client-side: the nav (mobile menu state) and `Reveal`
  (an `IntersectionObserver`). Everything else is a server component.

## Content is data, not markup

All copy lives in `content/` as typed modules. Pages map over it; they do not
hardcode it.

```
content/
  site.ts       chapter identity, nav, teams, partners
  projects.ts   case studies + the roster of earlier initiatives
  events.ts     the 2025-26 timeline
  impact.ts     headline numbers
  media.ts      image paths with baked-in dimensions
```

Adding next season's events means editing `events.ts`. Nobody has to touch a
component, which matters for a site handed to a new tech team every year.

## Where the content came from

Everything on the site traces back to one of three sources:

1. The chapter's **Annual Report 2025-26** (the bulk of it — projects, events,
   numbers, and all 21 photos plus the logo)
2. The chapter's **LinkedIn** page
3. The chapter's **Instagram** bio

### Content notes

A few things worth flagging rather than papering over:

- **Five projects have no published descriptions.** Medha, Vikalp, Oorja,
  Maithri and Tejas are named in the annual report and nowhere else. They are
  listed as a roster on `/projects` rather than given invented write-ups.
- **Prize figures conflict between sources.** The annual report puts Break The
  Case '25 at ₹30,000; the event's own poster and the Consulting Group's
  LinkedIn post both say ₹1.25 lakh+. The site uses ₹1.25 lakh+, since two
  primary sources agree on it.
- **The annual report PDF is gitignored.** It is an internal chapter document,
  so it does not belong in a public repo. Only the extracted images are
  committed.
- **One image was deliberately left out** — the inductions poster carries two
  members' personal phone numbers.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deployment

Hosted on Vercel and linked to this repository, so every push to `main` builds
and deploys automatically.
