// Data access for the `blog` collection — the one query behind the /blog/ listing, the home Latest
// Posts grid, the detail route's getStaticPaths, and the RSS feed, so their draft filter + sort can't
// drift. Kept separate from postCards.ts (pure mapping, no astro deps) because this imports
// `getCollection` as a value, which the type-stripped `pnpm test` can't resolve.
import { defaultLang, type Lang } from "@js/i18n";
import { type CollectionEntry, getCollection } from "astro:content";

/**
 * Published `blog` entries for a locale, newest first (by `pubDate`). Entries live at
 * src/data/blog/<lang>/<slug>/index.mdx, so id = "<lang>/<slug>".
 *
 * @param lang the active locale (defaults to Spanish)
 * @returns the non-draft post entries in listing order
 */
export async function getSortedPosts(
  lang: Lang = defaultLang,
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection(
    "blog",
    ({ data, id }) => data.draft !== true && id.startsWith(`${lang}/`),
  );
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
