# acre.homes

Static Astro site for **ACRE — Property Problem Specialists**. The consumer-facing brand layer of **Aspen Custom Ranch Enterprises, LLC** in the Mid-Willamette Valley.

Built to ship on Netlify. Designed to be edited by Marty without a build engineer in the room.

## Stack

- **[Astro 4](https://astro.build)** — static site generator, no client-side framework
- **Vanilla CSS** with CSS variables — no Tailwind, no preprocessor, easy to edit
- **Netlify** for hosting, form handling, DNS, and CI
- **Netlify Forms** for the diagnostic-request lead capture (no backend)
- **JSON-LD schema** on the homepage and SEO landing pages for rich-result eligibility

## Running locally

You need Node 20 or higher. Install it from [nodejs.org](https://nodejs.org/) or with Homebrew (`brew install node@20`).

```bash
cd acre-homes-website
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`. Edits to `.astro` files hot-reload.

```bash
npm run build       # produces ./dist
npm run preview     # serves ./dist locally to sanity-check production output
```

## Deploying to Netlify

1. Push this directory to a Git repo (GitHub, GitLab, or Bitbucket).
2. In the [Netlify dashboard](https://app.netlify.com), choose **Add new site → Import an existing project**.
3. Point it at the repo. Netlify auto-detects the `netlify.toml` and uses `npm run build` / `dist`.
4. Add `acre.homes` as a custom domain in **Site Settings → Domain Management**. Netlify will walk you through the DNS records.
5. Once DNS resolves and SSL provisions (~5 minutes), the new site is live.

**Forms:** the contact form in `/contact/` uses Netlify Forms. Submissions appear in **Forms** in the Netlify dashboard. To get email notifications, set up form notifications in **Site Settings → Forms → Form notifications** with `marty@acre.homes` as the recipient.

## Placeholders to fill in before launch

Search the codebase for these tokens and replace with real values:

| Token | Where | What to replace with |
|---|---|---|
| `541.000.0000` / `+15410000000` | Footer | Oregon-local phone number once acquired |
| `/og-default.png` | BaseLayout | Add an Open Graph preview image (1200×630px) to `public/` |

CCB# 250993 is already wired in across the site (footer, about page, homepage trust strip, pre-listing FAQ).

You can grep remaining placeholders fast:

```bash
grep -rn '541\.000\.0000\|og-default' src/
```

## Editing content

- **Homepage:** `src/pages/index.astro`
- **About Marty:** `src/pages/about.astro`
- **For Realtors:** `src/pages/for-realtors.astro`
- **Contact / Same-Day Diagnostic:** `src/pages/contact.astro`
- **SEO landing — Foundation Repair Corvallis:** `src/pages/foundation-repair-corvallis.astro`
- **SEO landing — Pre-Listing Repairs:** `src/pages/pre-listing-repairs.astro`
- **Header / Footer / Sticky CTA:** `src/components/`
- **Design tokens (colors, fonts, spacing):** `src/styles/global.css` — change the values in `:root` and they propagate everywhere

## What to ship in v2

These were intentionally cut from v1 to ship fast. Add when you're ready:

- Additional SEO landing pages: drainage, structural, mold/hazmat, hillside retaining walls, septic
- Project gallery / case studies (need photos)
- Owner's Rep dedicated page (currently rolled into homepage `/contact/?service=owners-rep` link)
- General Contractor dedicated page (currently rolled into homepage `/contact/?service=gc` link)
- A Buzzwood Village section — *or, more likely, a separate buzzwoodvillage.com property*
- Calendly embed for self-serve diagnostic booking
- Plausible or Fathom analytics

## Brand notes

- **acre.homes** = consumer-facing brand. The site you're looking at.
- **acre-mgt.com** = ACRE Consulting (B2B fractional COO / AI ops for builders). Separate audience, separate URL, separate site. Do not cross-link from this site without thought.
- **Aspen Custom Ranch Enterprises, LLC** = the legal entity that holds the contractor license and insurance. Appears in the footer and about page.
- **MK Interiors + Grounds (martinkribs.com)** = retired. Set up a 301 redirect from `martinkribs.com` → `acre.homes` once you take down the Squarespace.

## Repo discipline

- Branch off `main` for content changes; merge via PR to keep a clean history.
- Don't commit `.env` files or `node_modules` — `.gitignore` handles both.
- Image assets: drop into `public/` and reference as `/filename.ext` from `.astro` files.

---

Last updated: 2026-06-25
