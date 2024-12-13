import { z, reference, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.yml", base: "./src/content/authors/" }),
  schema: z.object({
    name: z.string(),
    site: z.string().url(),
  }),
});

const scripts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/scripts" }),
  schema: z.object({
    title: z.string(),
    author: reference("authors"),
    description: z.string(),
    categories: z.array(z.string()),
    edited: z.boolean(),
    source: z.string().url().optional(),
  }),
});

const FAQ = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/FAQ/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.date(),
    source: z.string().url().optional(),
  }),
});

export const collections = {
  authors,
  scripts,
  FAQ,
};
