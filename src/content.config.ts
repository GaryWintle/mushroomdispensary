import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    order: z.number().optional(),
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      "psilocybin",
      "lsd",
      "dmt",
      "plant-medicine",
      "kratom",
      "merchandise",
    ]),
    tagline: z.string(),
    image: z.string(),
    experience: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    safetyNote: z.string().optional(),
    mailOrder: z.boolean().default(false),
    userGuide: z.string().optional(),
  }),
});

export const collections = { products };
