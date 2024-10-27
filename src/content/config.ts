import { z, defineCollection } from "astro:content";

export const modsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    id: z.string(),
    author: z.string(),
    download: z.string(),
    source: z.string().optional()
  })
});

export const collections = {
  mods: modsCollection
};
