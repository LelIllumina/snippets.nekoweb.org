// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import selfie from "astro-selfie";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), selfie()],
  site: "https://snippets.nekoweb.org",
  markdown: {
    shikiConfig: {
      themes: {
        light: "everforest-light",
        dark: "everforest-dark",
      },
      wrap: true,
    },
  },
});