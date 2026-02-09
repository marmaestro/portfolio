import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

/*const blog = defineCollection({
    loader: glob({ pattern: '**!/[^_]*.{md,mdx}', base: '~/../content/blog' }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        date: z.date(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.string().array()
    })
});*/

const portfolio = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: '~/../content/portfolio' }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        date: z.date(),
        author: z.string(),
        source: z.object({
            item: z.string(),
            url: z.string()
        }),
        image: z.string(),
        roles: z.string().array(),
        tags: z.string().array(),
        pinned: z.boolean(),
        lang: z.enum(['en', 'es']),
    })
})

export const collections = {
    /*'blog': blog,*/
    'portfolio': portfolio,
};