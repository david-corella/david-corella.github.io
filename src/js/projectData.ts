// Data access for the `projects` collection — the one query behind the /projects/ listing, the
// home Featured Projects grid, and the detail route's getStaticPaths, so their draft filter + sort
// can't drift. Kept separate from projectCards.ts (pure mapping, no astro deps) because this imports
// `getCollection` as a value, which the type-stripped `pnpm test` can't resolve.
import { defaultLang, type Lang } from "@js/i18n";
import { type CollectionEntry, getCollection } from "astro:content";

/** Entries live at src/data/projects/<lang>/<slug>/index.mdx, so id = "<lang>/<slug>". */
export const entrySlug = (id: string): string => id.split("/").pop() ?? id;

/**
 * Published `projects` entries for a locale, sorted by `order` ascending.
 *
 * @param lang the active locale (defaults to Spanish)
 * @returns the non-draft project entries in listing order
 */
export async function getSortedProjects(
  lang: Lang = defaultLang,
): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection(
    "projects",
    ({ data, id }) => data.draft !== true && id.startsWith(`${lang}/`),
  );
  return projects.sort((a, b) => a.data.order - b.data.order);
}
