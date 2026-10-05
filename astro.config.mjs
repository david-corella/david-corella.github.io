// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// The production domain, which `site` below feeds to canonical, OG, JSON-LD, the sitemap,
// robots.txt and llms.txt — six things one wrong value poisons at once, and none of them visibly
// broken in review. The fallback is this site's GitHub Pages origin; set SITE_URL to override it.
const site = process.env.SITE_URL ?? "https://david-corella.github.io";

// https://astro.build/config
export default defineConfig({
  site,

  // Static output: every route prerenders to HTML and the host serves it as a static asset.
  // There is no adapter and no server route — the contact form composes a `mailto:` in the
  // browser (see src/components/Sections/Contact/Form.astro), so /contact/ prerenders like every
  // other page. This is what lets GitHub Pages serve the site.

  // One canonical URL shape: the directory build emits trailing slashes, and canonical + OG agree
  // on that shape.
  trailingSlash: "always",

  // mdx() renders .mdx content.
  // sitemap filter: never list noindex pages — the dev-only /examples catalog and 404s
  // both set `noindex` in the markup, so a sitemap entry for them would contradict it.
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/examples/") && !page.includes("/404/"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    // Stop inlining short scripts so they don't break under <ClientRouter /> view transitions.
    build: {
      assetsInlineLimit: 0,
    },
  },
});
