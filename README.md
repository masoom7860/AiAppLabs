# AiAppLabs

Marketing site for AiAppLabs — an AI product studio. Built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Tech stack

| Concern        | Choice                              |
| -------------- | ----------------------------------- |
| Framework      | Next.js 16.2 (App Router, Turbopack)|
| UI runtime     | React 19                            |
| Styling        | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Animation      | Framer Motion, GSAP                 |
| Class utility  | `clsx` + `tailwind-merge` (`cn()` in `lib/utils.ts`) |
| Language       | TypeScript (strict)                 |

## Folder structure

```
app/                     App Router entry
  layout.tsx             Root layout, global <Metadata>, JSON-LD, fonts
  page.tsx               Home page (composes the marketing sections)
  globals.css            Tailwind v4 entry + theme tokens
  robots.ts              Generated /robots.txt
  sitemap.ts             Generated /sitemap.xml (derived from data/navigation)
  manifest.ts            Generated /manifest.webmanifest (PWA)
  opengraph-image.tsx    Dynamically generated 1200x630 OG/Twitter image
  (marketing)/           Route group reserved for standalone marketing pages

components/
  layout/                Navbar, Footer
  sections/              Home-page sections (hero, services, pricing, ...)
  ui/                    Reusable primitives (Button, SectionHeading)
  animations/            Motion-driven decorative components
  shared/                Cross-cutting shared components

config/site.ts           Single source of truth for brand/site metadata
data/                    Typed content (navigation, services, pricing, ...)
types/content.ts         Shared content types
hooks/                   Client hooks (use-scroll)
lib/utils.ts             Helpers (cn class merger)
public/                  Static assets
```

Path alias `@/*` maps to the project root (see `tsconfig.json`).

## SEO

SEO is centralized in `config/site.ts` and wired through the App Router metadata APIs:

- **Metadata** — `metadataBase`, title template, description, keywords, canonical, and robots directives in `app/layout.tsx`.
- **Open Graph / Twitter** — a branded image is generated at request/build time by `app/opengraph-image.tsx` (`next/og`); Next injects the `og:image`/`twitter:image` tags automatically.
- **robots.txt** — `app/robots.ts`, links to the sitemap.
- **sitemap.xml** — `app/sitemap.ts`, derived from `data/navigation` so it stays in sync as pages are added.
- **manifest.webmanifest** — `app/manifest.ts`.
- **Structured data** — `Organization` + `WebSite` JSON-LD injected in `app/layout.tsx`.

> Update `config/site.ts` (name, url, description, email, etc.) — every SEO surface reads from it.
>
> Note: `sitemap.ts` lists the routes declared in `data/navigation` (`/services`, `/about`, `/portfolio`, `/blog`, `/contact`). Those pages are not built yet; add them under `app/(marketing)/` as the next phase so the sitemap entries resolve.
