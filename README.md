# 8-BitQuest

![The 8-BitQuest home, blog post and about pages](.github/preview.png)

**[Live site → david-corella.github.io](https://david-corella.github.io/)**

A **retro 8-bit, pixel-art developer-portfolio theme** built on **Astro 7 + Tailwind CSS v4 +
TypeScript (strict)**, with a CSS-first token architecture, typed config-driven content, and an
in-house UI, motion, icon and SEO stack. Headings are Press Start 2P on a black-bordered "pixel
panel" surface; every colour flows through a semantic token layer, so the committed light and dark
themes flip for free.

It ships as a **working site, not an empty skeleton** — a Home, About, Blog, Projects and a Contact
page, six sample posts and six sample projects, all reproduced from the source Figma. The site is
fully static: every route prerenders to HTML, and the contact form composes a `mailto:` in the
browser (no server, no mail keys).

## Quick start

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

It runs with no configuration and no keys — the contact form needs none at all (see
[Contact form](#contact-form)). Fill in `src/config/`, swap the sample content for your own, then
work through [Before you deploy](#before-you-deploy).

## Commands

| Command        | Action                                                  |
| :------------- | :------------------------------------------------------ |
| `pnpm install` | Install dependencies                                    |
| `pnpm dev`     | Dev server at `localhost:4321`                          |
| `pnpm build`   | Production build to `dist/` (fully static)             |
| `pnpm preview` | `astro preview` — serve the built `dist/` locally      |
| `pnpm check`   | Type-check `.astro` / `.ts` (`astro check`)             |
| `pnpm lint`    | ESLint                                                  |
| `pnpm format`  | `eslint --fix`, then Prettier                           |
| `pnpm test`    | Every `*.test.ts` self-check under `src/`               |

## Routes

| Route                  | Source                               | Built from                             |
| :--------------------- | :----------------------------------- | :------------------------------------- |
| `/`                    | `pages/index.astro`                  | `Sections/Home/*`                      |
| `/about/`              | `pages/about.astro`                  | `Sections/About/*`                     |
| `/blog/`               | `pages/blog/index.astro`             | `Sections/Blog/*` (listing)            |
| `/blog/<slug>/`        | `pages/blog/[slug].astro`            | `Sections/Blog/BlogArticle` (per post) |
| `/projects/`           | `pages/projects/index.astro`         | `Sections/Project/*` (listing)         |
| `/projects/<slug>/`    | `pages/projects/[slug].astro`        | `Sections/Project/ProjectArticle`      |
| `/contact/`            | `pages/contact.astro`                | `Sections/Contact/*` + a `mailto:` form |
| `/privacy/`, `/terms/` | `pages/privacy.astro`, `terms.astro` | `config/legalData.json.ts`             |
| `/404`                 | `pages/404.astro`                    | `Sections/NotFound/*`                  |
| `/examples/ui`         | `pages/examples/[catalog].astro`     | `Sections/UiCatalog/*` (dev-only)      |

Every route prerenders to static HTML. `/examples/ui` is a `noindex` dev-only catalog: it is excluded
from the sitemap and emits no HTML in a production build.

Generated endpoints: `/robots.txt`, `/llms.txt`, `/rss.xml`, `/sitemap-index.xml`. The first three
are hand-owned dynamic routes whose absolute URLs derive from `site`, so setting that once fixes them
together.

## Content

Collections are defined in `src/content.config.ts` (Zod), so bad frontmatter fails the build with the
entry named. Entries live one folder deep and the folder name is the slug.

| Collection | Location             | Ships with     | Holds                                                                                                                                           |
| :--------- | :------------------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog`     | `src/data/blog/`     | **6 posts**    | `title`, `description`, `authors[]` (≥1), `pubDate`, `heroImage(+alt)`, `category`, `tags`, optional `updatedDate`, `draft`                     |
| `projects` | `src/data/projects/` | **6 projects** | `title`, `description`, `tagline`, `status`, `moduleId`, `order`, `thumbnail(+alt)`, `tech[]`, `specs[]`, `features[]`, `archCaption`, `challenge`, `solution`, optional `cardTitle`, `draft` |
| `authors`  | `src/data/authors/`  | `admin`        | `name`, `authorLink`, optional `avatar` — referenced by posts as the byline                                                                     |

The samples are retro-flavoured placeholders; replace them with your own. A blog post's body is
free-form MDX (rendered through `.blog-prose`); a project's overview is MDX while its spec/feature
data is structured frontmatter.

## Configuration

Site-wide facts live typed in `src/config/`. (One-off section copy — the FAQ, the tech-stack list,
the gear table — deliberately lives as a typed literal at the top of its Section component instead:
edit the section to edit the copy. The rule: used on more than one page ⇒ it belongs in config.)

- **`siteData.json.ts`** — brand name, title, description, the author block, `sameAs` (your social
  profile URLs) and the default social image. `sameAs` does double duty: it disambiguates the JSON-LD
  `Organization` **and** it is where every social link on the site resolves from.
- **`socialData.json.ts`** — one definition per social platform (label, pixel glyph, and how its URL
  resolves out of `sameAs`), shared by the footer row, the home contact chips and the contact info
  cards. Add a platform here, then reference it from whichever section should show it.
- **`siteSettings.json.ts`** — `siteLang` / `siteLocale`, plus the feature switches
  `useViewTransitions` and `useAnimations`.
- **`legalData.json.ts`** — the terms and privacy copy, section by section.
- **`portfolioData.json.ts`** — the profile identity, biography, experience/stat values, home
  intro, and contact-facing organisation copy: the facts a buyer is expected to customise, in one
  typed place.

**Theme tokens** are CSS-first, in three layers (see `src/styles/tailwind-theme.css` +
`global.css`): palette aliases (`--color-primary-*`, `--color-base-*`) feed semantic runtime vars
(`--primary`, `--foreground`, `--outline`), which feed the utilities. Markup only ever uses
`bg-primary` / `text-foreground` / `text-base-700`, so a rebrand is one edit to the alias block and
both themes follow. The signature look — a black 4px border plus a hard offset `shadow-pixel` — is
the `ui/pixel-panel` primitive; the shadow colour is itself a theme-aware token (`--pixel-shadow`).

## What's in the box

- **39 UI primitives** (`src/components/ui/`) — button, dialog, dropdown, mega-menu, combobox, tabs,
  table, pixel-panel, theme-toggle, and the rest — each a folder with a `tailwind-variants` recipe,
  built on the token layer and zero-JS unless interaction demands it. Alongside them sit **7 internal
  entries** (`_client.ts`, `_dialog.ts`, `_listbox.ts`, `_popover.ts`, `_overlay.css`, `_field.ts`,
  `_Chevron.astro`) that the primitives share. Contract: `src/components/ui/README.md`. The theme's
  own pages use about a third of the library; the rest is stock for your customisation — browse it
  all at `/examples/ui` in dev, or trim it (see [Before you deploy](#before-you-deploy), step 6).
- **Two icon systems.** The theme's own UI runs on **18 pixel-art glyphs**
  (`src/components/svg/pixel-icons/`) behind a typed `<PixelIcon name="…" />` — the theme toggle, the
  footer social row, the tech-stack and skill-tree lists, the article navigation. Alongside it sits a
  stock library of **553 inlined 24×24 line icons** (`src/components/svg/icons/`) behind
  `<Icon name="…" />`, for your own pages; it is referenced only by the `/examples/ui` catalog, so
  deleting that catalog (step 6 below) leaves it unreferenced — keep the folder or delete it. Both are
  build-time only: icons inline into HTML and nothing lands in client JS. Licensing for both is in
  [`THIRD-PARTY.md`](./THIRD-PARTY.md).
- **87 motion utilities** (`src/styles/motion/`) — a dependency-free port of tailwind-animations plus
  scroll-driven extensions, with a global `prefers-reduced-motion` guard.
- **An owned SEO layer** — every meta/OG tag emitted natively by `BaseHead`, JSON-LD (Organization +
  WebSite site-wide, plus per-post `BlogPosting` + `BreadcrumbList`) built by typed helpers in
  `@js/schema`, and dynamic `robots.txt` / `llms.txt` / `rss.xml`. No SEO package.

The owned motion, icon and SEO layers add **no runtime dependencies**. The primitives use
`tailwind-variants` + `tailwind-merge`; content uses `@astrojs/mdx`; the two fonts are self-hosted
via `@fontsource`. The output is fully static — there is no adapter.

## Contact form

`/contact/` is a static page. Its form does not post to a backend: a small bundled script composes a
`mailto:` URL from the field values and hands it to the visitor's mail client, so the page works on
any static host (this site runs on GitHub Pages) with no keys and no server. Native HTML5 validation
(`required`, `type=email`, `minlength`/`maxlength`) checks the input first, and the destination inbox
is `author.email` in `src/config/siteData.json.ts`.

There is no spam gate and no server-side validation, because there is no server — a `mailto:` opens
the visitor's own mail client, which is where any abuse would land. The former Resend-backed Astro
action and its `src/actions/` + `src/js/{contact,resend}.ts` stack were removed when the site went
static (git history records the shape to restore them on a server host).

## Structure

```text
src/
├── components/
│   ├── Sections/<Page>/   layout-free page sections (Global/ for cross-page chrome: Header, Footer)
│   ├── Cards/             content-aware card compositions (built on ui/pixel-panel)
│   ├── ui/<name>/         the primitive library (see its README for the contract)
│   └── svg/icons/         the <Icon> system
├── config/                typed site config — the source of truth, never literals in components
├── data/<collection>/     content collections, Zod-validated
├── js/                    TypeScript utilities (schema, readingTime, nav…) + their *.test.ts
├── layouts/               BaseLayout + BaseHead (all meta/SEO tags live here)
├── pages/                 file routes — thin shells owning BaseLayout + SEO
└── styles/                global.css entry, tailwind-theme.css tokens, motion/ catalog
```

Pages are thin route shells that own `BaseLayout` + SEO and compose **Sections**; Sections build on
**ui** primitives and **Cards**. The three contracts are `Sections/README.md`, `Cards/README.md` and
`ui/README.md`.

## Deployment

The site deploys to **GitHub Pages** as a fully static build. `.github/workflows/deploy.yml` runs
`withastro/action` to build with `pnpm build` and publish `dist/` to Pages on every push to `main`;
there is no adapter and no Worker. `public/.nojekyll` keeps Pages from ignoring the `_astro/` assets.

```sh
SITE_URL=https://david-corella.github.io pnpm build   # bakes canonical/OG/sitemap URLs at build time
pnpm preview                                          # serve the built dist/ locally
```

`site` in `astro.config.mjs` defaults to `https://david-corella.github.io`; set `SITE_URL` to
override it. See `.env.example`.

**To move to a server host** — to bring back a server-side contact form, for example — add an
adapter (`@astrojs/node`, `@astrojs/netlify`, `@astrojs/vercel` or `@astrojs/cloudflare`) and set the
contact page back to `prerender = false`. Nothing else knows which host serves the build.

## Before you deploy

1. **`SITE_URL`** — your production domain, in the build environment. It defaults to
   `https://david-corella.github.io`; set it if the domain changes.
2. **Contact inbox** — `author.email` in `src/config/siteData.json.ts` is where the form's
   `mailto:` is addressed.
3. **`public/og.jpg`** — replace the placeholder with a real 1200×630 social image.
4. **`src/config/*`** — `siteData`, `portfolioData`, and the `legalData` terms/privacy copy (the last
   is placeholder text, not legal advice — have it reviewed). In `siteData`, **fill `sameAs`**: until
   you do, the footer icons and contact links point at bare platform home pages (`github.com`,
   `linkedin.com`, `discord.gg`) rather than at your profiles. Set `author.email` and, if you use it,
   `author.twitter` (empty by default, which omits `twitter:creator`).
5. **Favicons** — `public/favicon.svg` and `public/favicon.ico`.
6. **Delete the dev catalog** — `src/components/Sections/UiCatalog/` and `src/pages/examples/`, once
   you have finished picking primitives. It builds no pages in production, but Tailwind still scans its
   markup, so its demo classes sit in the stylesheet every page loads; removing it trims the shared CSS
   by roughly a quarter (re-measured on the stock catalog: 84,211 B → 64,246 B, ~11.7 KB gzip) and
   drops 75 unused `@keyframes` (90 → 15).
7. **`.claude/`** — harness settings plus two optional skills for working on the repo with Claude
   Code. Keep it if you use Claude; deleting it changes nothing at runtime.
8. **Read [`THIRD-PARTY.md`](./THIRD-PARTY.md)** — the fonts, icon sets and code ports that are *not*
   covered by [`LICENSE`](./LICENSE), including which trademarked brand marks the theme uses and the
   demo images whose provenance you need to settle before shipping commercially.

## Verifying a change

```sh
pnpm lint && pnpm check && pnpm build && pnpm test
```

The build is the real check: content-schema and config mistakes surface there. `pnpm test` runs every
`*.test.ts` under `src/` with Node's type stripping — no framework, no fixtures — and **fails if it
finds none**, so a check cannot go missing unnoticed.

## Docs

House rules live in `AGENTS.md` (which `CLAUDE.md` imports so any agent loads them). The component
contracts live next to the code they govern: `src/components/ui/README.md`,
`src/components/Sections/README.md`, `src/components/Cards/README.md`,
`src/components/svg/icons/README.md` and `src/data/README.md`. Git history records the removal of
the former i18n layer and Keystatic CMS, along with the shape to restore them if a project needs
them back.
