import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    author: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    seoTitle: z.string(),
    seoDescription: z.string(),
    canonicalUrl: z.string().url(),
    summary: z.string().optional(),
    targetAudience: z.string().optional(),
    ogImage: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
