import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Planning",
      "Waterfalls",
      "Wild swimming",
      "Gorges",
      "WWI history",
      "Activities",
    ]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCredit: z.string().optional(),
    heroCreditUrl: z.string().optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
