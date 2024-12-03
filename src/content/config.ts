import { z, reference, defineCollection } from "astro:content";

const scripts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: reference("authors"),
    categories: z.array(z.string()),
    edited: z.boolean(),
    scriptSource: z.string().url().optional(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    site: z.string().url(),
  }),
});

export const collections = {
  scripts,
  authors,
};
