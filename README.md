# davidcorella.dev

Portfolio personal de **David Lopez Corella** — Ingeniero en sistemas. Construido sobre **Astro 7 + Tailwind CSS v4 + TypeScript (strict)**, totalmente
**estático** y **bilingüe (español / inglés)**.

**Creditos de Template a AstroCraftThemes https://astro.build/themes/author/3263**

## Quick start

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

No necesita configuración ni claves: el formulario de contacto no envía a ningún servidor (compone un
`mailto:` en el navegador). Edita `src/config/locales/` y el contenido en `src/data/`.

## Commands

| Command        | Action                                            |
| :------------- | :------------------------------------------------ |
| `pnpm install` | Instala dependencias                              |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321`        |
| `pnpm build`   | Build de producción a `dist/` (estático)          |
| `pnpm preview` | `astro preview` — sirve el `dist/` compilado      |
| `pnpm lint`    | ESLint                                            |
| `pnpm format`  | `eslint --fix` y Prettier                         |
| `pnpm check`   | `astro check` (comprueba tipos `.astro`/`.ts`)    |
| `pnpm test`    | Todos los `*.test.ts` bajo `src/`                 |

## Idiomas (i18n)

Bilingüe: **español por defecto en la raíz** (`/about/`, `/projects/`…) e **inglés con prefijo**
(`/en/about/`, `/en/projects/`…). El idioma se resuelve desde la URL (`@js/i18n`) y hay un selector en
el header; `BaseHead` emite `hreflang` + `x-default`.

- Textos de la interfaz (chrome): `src/js/ui.ts` + `useTranslations(lang)`.
- Copy de sección: objeto local `copy = { es, en }[lang]` al inicio de cada componente.
- Contenido: `src/data/<colección>/<lang>/<slug>/` (ES en `.../es/`, EN en `.../en/`).
- Config tipada: `src/config/locales/es.ts` y `src/config/locales/en.ts`, resueltas por `@config/i18n`.
- Las páginas EN son réplicas de las ES en `src/pages/en/` (leen el idioma de la URL).

## Rutas

| Route              | Origen                        | Contenido                                  |
| :----------------- | :---------------------------- | :----------------------------------------- |
| `/` y `/en/`       | `pages/index.astro`           | `Sections/Home/*`                          |
| `/about/`          | `pages/about.astro`           | `Sections/About/*`                         |
| `/blog/`           | `pages/blog/index.astro`      | `Sections/Blog/*` (listado)                |
| `/projects/`       | `pages/projects/index.astro`  | `Sections/Project/*` (listado)             |
| `/projects/<slug>/`| `pages/projects/[slug].astro` | `Sections/Project/ProjectArticle`          |
| `/contact/`        | `pages/contact.astro`         | `Sections/Contact/*` + formulario `mailto:`|
| `/privacy/`, `/terms/` | `pages/privacy.astro`, `terms.astro` | `src/config/locales/*` (legales)  |
| `/404`             | `pages/404.astro`             | `Sections/NotFound/*`                      |

Cada ruta existe en español (raíz) y su espejo en `/en/`. Endpoints generados: `/robots.txt`,
`/llms.txt`, `/rss.xml`, `/sitemap-index.xml` (y `/en/rss.xml`, `/en/llms.txt`).

## Contenido

Colecciones definidas en `src/content.config.ts` (Zod). Cada entrada vive en
`src/data/<colección>/<lang>/<slug>/index.mdx`.

| Colección  | Ubicación              | Contenido                                                                 |
| :--------- | :--------------------- | :------------------------------------------------------------------------ |
| `projects` | `src/data/projects/`   | **7 proyectos** por idioma (ES/EN): WLAN, monitor de red, EVENTUS, WarPark, gestión escolar, análisis de conectividad y MATETOPIA |
| `blog`     | `src/data/blog/`       | **Vacío** — incluye un borrador oculto (`draft: true`) como plantilla por idioma |
| `authors`  | `src/data/authors/`    | `admin` (David Corella) — usado por la autoría de los posts               |

## Formulario de contacto

`/contact/` es una página estática. El formulario **no envía a un servidor**: un script empaquetado
compone un `mailto:` desde los campos y abre la app de correo del visitante. Así funciona en cualquier
host estático (el sitio vive en GitHub Pages) sin claves ni servidor. El destino es `author.email` en
`src/config/locales/<lang>.ts`.

## Despliegue

El sitio se despliega en **GitHub Pages** como build 100 % estático. El workflow
`.github/workflows/deploy.yml` usa `withastro/action` para publicar `dist/` en cada push a `main`.
`public/.nojekyll` evita que Pages ignore los assets de `_astro/`.

```sh
SITE_URL=https://davidcorella.dev pnpm build   # fija canonical/OG/sitemap
pnpm preview                                   # sirve el dist/ compilado
```

`site` en `astro.config.mjs` viene por defecto de `SITE_URL` (o el origen de Pages). Para cambiar de
host, ajusta `SITE_URL` y el DNS; el build sigue siendo estático.

## Antes de publicar

1. **`SITE_URL`** — tu dominio de producción en el entorno de build.
2. **Contacto** — `author.email` en `src/config/locales/<lang>.ts` es el buzón del formulario.
3. **`public/og.jpg`** (1200×630) y avatares (`src/assets/images/`) — ya generados en estilo pixel;
   reemplázalos por los tuyos cuando quieras.
4. **`sameAs`** — tus perfiles (GitHub, LinkedIn) en `src/config/locales/<lang>.ts`.
5. **Legales** — los textos de `src/config/locales/*` son genéricos, no asesoría legal.
6. **Contenido** — sustituye los proyectos/borradores por los tuyos.

## Verificar un cambio

```sh
pnpm lint && pnpm check && pnpm build && pnpm test
```

El build es la comprobación real: los errores de esquema y de config saltan ahí. `pnpm test` corre
cada `*.test.ts` bajo `src/` con el type-stripping de Node —sin framework— y **falla si no encuentra
ninguno**.

## Docs

Las reglas del proyecto viven en `AGENTS.md` (que `CLAUDE.md` importa). Los contratos de componentes
están junto al código: `src/components/ui/README.md`, `src/components/Sections/README.md`,
`src/components/Cards/README.md`, `src/components/svg/icons/README.md` y `src/data/README.md`.
