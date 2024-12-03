// @ts-check
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import selfie from "astro-selfie";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    // eslint-disable-next-line no-undef
    ...(process.env.GITHUB_ACTIONS ? [] : [selfie()]), // Include selfie() only if not in GitHub Actions
  ],
  site: "https://snippets.nekoweb.org",
  markdown: {
    remarkPlugins: [remarkAlert],

    shikiConfig: {
      themes: {
        light: "everforest-light",
        dark: "everforest-dark",
      },
      wrap: true,
    },
  },
});
