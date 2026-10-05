/**
 * * Global site settings.
 *
 * Locale facts (language, BCP-47 tag) now come from the active locale via `localeMeta(lang)` in
 * `@config/i18n` — this file holds only the locale-INDEPENDENT feature switches.
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// settings that don't change between pages or locales.
// `satisfies` checks the shape while preserving the literal `true` (vs widening to boolean).
export const siteSettings = {
  useViewTransitions: true,
  // turn the decorative motion layer (scroll-reveal <Reveal>, etc.) on/off site-wide.
  // `prefers-reduced-motion` is always honored regardless (global guard in styles/motion/index.css).
  useAnimations: true,
} satisfies SiteSettingsProps;
