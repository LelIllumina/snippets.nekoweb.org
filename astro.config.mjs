// @ts-check
import { defineConfig } from "astro/config";
import { remarkAlert } from "remark-github-blockquote-alert";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import selfie from "astro-selfie";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    // ...(process.env.GITHUB_ACTIONS ? [] : [selfie()]), // Include selfie() only if not in GitHub Actions
  ],
  site: "https://snippets.nekoweb.org",
  build: { format: "preserve" },
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
