import type { PixelIconName } from "@components/svg/pixel-icons";
import type { Lang } from "@js/i18n";
import { socialUrl } from "@js/social";

import { getSiteData } from "./i18n";
import { type SocialPlatformProps } from "./types/configDataTypes";

/**
 * * Social platforms — one definition per platform, resolved against the locale's `siteData.sameAs`.
 *
 * `match` is the host substring(s) that identify the platform inside `sameAs`; `fallback` is where the
 * link points when `sameAs` has no match (a bare platform home page, never a dead personal profile).
 * The labels are proper nouns and read the same in both locales.
 */
export const socialPlatforms = {
  github: {
    label: "GitHub",
    icon: "github",
    match: "github.com",
    fallback: "https://github.com/",
  },
  linkedin: {
    label: "LinkedIn",
    icon: "linkedin",
    match: "linkedin.com",
    fallback: "https://www.linkedin.com/",
  },
  instagram: {
    label: "Instagram",
    icon: "instagram",
    match: "instagram.com",
    fallback: "https://www.instagram.com/",
  },
  twitter: {
    label: "Twitter/X",
    icon: "twitter",
    match: ["x.com", "twitter.com"],
    fallback: "https://x.com/",
  },
  youtube: {
    label: "YouTube",
    icon: "youtube",
    match: "youtube.com",
    fallback: "https://www.youtube.com/",
  },
  discord: {
    label: "Discord",
    match: ["discord.gg", "discord.com"],
    fallback: "https://discord.gg/",
  },
} as const satisfies Record<string, SocialPlatformProps>;

export type SocialPlatform = keyof typeof socialPlatforms;

/** Platforms that have a pixel glyph, so a section can render one as an icon or a chip. */
export type IconSocialPlatform = {
  [K in SocialPlatform]: (typeof socialPlatforms)[K] extends { icon: PixelIconName } ? K : never;
}[SocialPlatform];

/**
 * Resolve a platform's destination URL for a locale. Twitter/X additionally prefers
 * `siteData.author.twitter` when set, because a handle is more specific than a sameAs host match.
 */
export function socialHref(platform: SocialPlatform, lang: Lang): string {
  const siteData = getSiteData(lang);
  const { match, fallback } = socialPlatforms[platform];
  if (platform === "twitter" && siteData.author.twitter) {
    return `https://x.com/${siteData.author.twitter}`;
  }
  return socialUrl(siteData.sameAs, match, fallback);
}

/** A platform's label + glyph + resolved href — the shape the footer row and home chips render. */
export function socialLink(
  platform: IconSocialPlatform,
  lang: Lang,
): {
  name: PixelIconName;
  label: string;
  href: string;
} {
  const { label, icon } = socialPlatforms[platform];
  return { name: icon, label, href: socialHref(platform, lang) };
}
