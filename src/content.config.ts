import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const botones = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/botones" }),
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    imagenTitulo: z.string().optional(),
    subtitulo: z.string().optional(),
    link: z.string().url(),
  }),
});

export const collections = {
  botones,
};
