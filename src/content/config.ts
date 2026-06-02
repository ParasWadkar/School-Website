import { defineCollection, z } from 'astro:content';

const notices = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    attachment: z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    image: z.string(),
    caption: z.string(),
    album: z.string().default('General'),
  })),
});

export const collections = { notices, events, gallery };
