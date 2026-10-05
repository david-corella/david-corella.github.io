/**
 * * Locale resolver for the typed site config.
 *
 * The config data lives in src/config/locales/<lang>.ts; this module is the one place a component
 * asks "give me the data for the active locale" without importing a locale directly. Astro's
 * `i18n` block owns routing (astro.config.mjs); @js/i18n owns URL/path helpers.
 */
import { defaultLang, type Lang } from "@js/i18n";

import * as en from "./locales/en";
import * as es from "./locales/es";

const content = { es, en } as const;

/** The full content module for a locale (siteData, portfolioData, navItems, legalData). */
export function localeContent(lang: Lang) {
  return content[lang] ?? content[defaultLang];
}

export const getSiteData = (lang: Lang) => localeContent(lang).siteData;
export const getPortfolioData = (lang: Lang) => localeContent(lang).portfolioData;
export const getNavItems = (lang: Lang) => localeContent(lang).navItems;
export const getLegalData = (lang: Lang) => localeContent(lang).legalData;

/** Locale facts for `<html lang>` / `og:locale` / Intl formatting. */
export function localeMeta(lang: Lang): { htmlLang: string; ogLocale: string; intlLocale: string } {
  return lang === "en"
    ? { htmlLang: "en", ogLocale: "en_US", intlLocale: "en-US" }
    : { htmlLang: "es", ogLocale: "es_MX", intlLocale: "es-MX" };
}
