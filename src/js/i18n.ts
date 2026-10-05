/**
 * * i18n primitives — the locale facts + URL helpers every page and section shares.
 *
 * The site is bilingual: Spanish is the default locale at the root, English is prefixed (`/en/...`).
 * Astro's own `i18n` block (astro.config.mjs) owns routing; this module owns the two things Astro
 * doesn't give us: resolving the active locale from a URL and rewriting a path into another locale
 * (the language switcher + the hreflang alternates in BaseHead).
 *
 * Framework-free and importable from anywhere (astro files, .ts endpoints, tests).
 */

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const locales = Object.keys(languages) as Lang[];

/** The active locale for a URL: the first path segment when it is a known locale, else the default. */
export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split("/").filter(Boolean)[0];
  if (first && first in languages) return first as Lang;
  return defaultLang;
}

/** Prefix a root-relative path with a locale (`/sobre-mi/` → `/en/sobre-mi/`). Default locale stays bare. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/**
 * Rewrite the CURRENT pathname to another locale, for the language switcher: strip any existing
 * locale prefix, then re-add the target one. Trailing-slash style is preserved (the site builds with
 * `trailingSlash: "always"`).
 */
export function switchLocalePath(pathname: string, lang: Lang): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && segments[0] in languages) segments.shift();
  const rest = segments.length ? `/${segments.join("/")}/` : "/";
  return lang === defaultLang ? rest : `/${lang}${rest}`;
}
