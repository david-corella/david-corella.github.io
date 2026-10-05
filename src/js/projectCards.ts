// Shared project → card mapping for the listing grid (Sections/Project) and the home Featured
// Projects section, so the two grids can't drift. Pure data-shaping — the only runtime module the
// two Astro files import; its check lives beside it (projectCards.test.ts).
//
// All imports below are type-only, so `pnpm test` (Node type-stripping) erases them and this file
// runs with no bundler / no astro: virtual-module resolution. Keep them type-only — no `@js/i18n`
// VALUE import here (that alias doesn't resolve under plain Node); the locale prefix is inlined.
import type { ContentCardProps } from "@components/Cards/ContentCard.astro";
import type { BadgeVariant } from "@components/ui/badge";
import type { Lang } from "@js/i18n";
import type { CollectionEntry } from "astro:content";

export type ProjectStatus = "complete" | "in-progress";

/** Entries live at src/data/projects/<lang>/<slug>/index.mdx, so the slug is the last id segment. */
const slugOf = (id: string): string => id.split("/").pop() ?? id;
/** "/en" for English, "" for the default Spanish locale (whose routes are unprefixed). */
const localePrefix = (lang: Lang): string => (lang === "en" ? "/en" : "");

/**
 * A project's `status` → its retro card badge: label + a ui/badge tone.
 * COMPLETE reads green (success), IN PROGRESS amber (warning) — the Figma "Status Tag" colours.
 *
 * @param status the entry's `status` field
 * @returns the badge label (bracketed, retro) and the tone variant
 */
export function statusMeta(status: ProjectStatus): { label: string; variant: BadgeVariant } {
  return status === "complete"
    ? { label: "[Complete]", variant: "success" }
    : { label: "[In Progress]", variant: "warning" };
}

/**
 * Map a `projects` collection entry to the shared ContentCard props used by both project grids.
 * The card title falls back to the canonical `title` when the entry omits the shorter `cardTitle`.
 *
 * @param entry a `projects` collection entry
 * @param lang  the active locale (defaults to Spanish)
 * @returns props ready to spread into `<ContentCard />`
 * @example toProjectCard(entry).href; // "/projects/warpark/"
 */
export function toProjectCard(
  entry: CollectionEntry<"projects">,
  lang: Lang = "es",
): ContentCardProps {
  const { data } = entry;
  const { label, variant } = statusMeta(data.status);
  return {
    href: `${localePrefix(lang)}/projects/${slugOf(entry.id)}/`,
    image: data.thumbnail,
    imageAlt: data.thumbnailAlt,
    badgeLabel: label,
    badgeVariant: variant,
    title: data.cardTitle ?? data.title,
    description: data.description,
    tags: data.tech,
    cta: lang === "en" ? "View" : "Ver",
  };
}
