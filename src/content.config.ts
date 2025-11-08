import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const intro = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/intro' }),
  schema: z.object({
    fullname: z.string(),
    link: z.string().url(),
    profession: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    jobtitle: z.string(),
    company: z.string(),
    link: z.string().url(),
    from: z.string(),
    to: z.string(),
    stack: z.array(z.string()),
  }),
});

const studies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/studies' }),
  schema: z.object({
    title: z.string(),
    organisation: z.string(),
    organisation_link: z.string().url(),
    certification_link: z.string().url().optional(),
    date: z.string(),
  }),
});

const meta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/meta' }),
  schema: z.object({
    language: z.string(),
    title: z.string(),
    keywords: z.array(z.string()),
  }),
});

export const collections = { intro, jobs, studies, meta };