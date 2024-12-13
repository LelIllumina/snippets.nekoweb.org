import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionNames = ["scripts", "FAQ"] as const; // List your content collections here

const pages = Object.fromEntries(
  (
    await Promise.all(
      collectionNames.map(async (collection) => {
        const entries = await getCollection(collection);
        return entries.map(({ id, data }) => [`${collection}/${id}`, data]);
      }),
    )
  ).flat(),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages: pages,

  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: { path: "public/favicon.png" },
    bgImage: { path: "src/assets/background.png", fit: "fill" },
    font: {
      title: {
        families: [
          "Lemon Milk",
          "Arial",
          "Nimbus Sans",
          "Arial Nova",
          "Helvetica Sans",
          "Roboto",
          "Inter",
          "sans-serif",
        ],
        weight: "ExtraBlack",
      },
      description: {
        families: [
          "Lexend",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial Nova",
          "Nimbus Sans",
          "Arial",
          "sans-serif",
        ],
      },
    },
    fonts: [
      "public/fonts/LEMONMILK-Bold.woff2",
      "public/fonts/lexend-v23-latin-regular.woff2",
    ],
  }),
});
