import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

const projects = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tech: z.array(z.string()),
        featured: z.boolean(),
        date: z.string().transform((str) => new Date(str)),
        github: z.string().url(),
        demo: z.string().url().nullable(),
        image: z.string()
    })
})

export const collections = { projects }