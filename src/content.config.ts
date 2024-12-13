import { z, reference, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const scripts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/scripts" }),
  schema: z.object({
    title: z.string(),
    author: reference("authors"),
    description: z.string(),
    categories: z.array(z.string()),
    edited: z.boolean(),
    scriptSource: z.string().url().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    site: z.string().url(),
  }),
});

const FAQ = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/FAQ" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.date(),
  }),
});

export const collections = {
  scripts,
  authors,
  FAQ,
};
