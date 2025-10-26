import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

const projects = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        shortDescription: z.string().optional(),
        tech: z.array(z.string()),
        featured: z.boolean().default(false),
        category: z.enum(['web', 'mobile', 'desktop', 'api', 'library', 'other']).default('web'),
        status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
        date: z.string().transform((str) => new Date(str)),
        repositories: z.array(z.object({
            name: z.string(),
            url: z.string().url(),
            type: z.enum(['frontend', 'backend', 'fullstack', 'mobile', 'other']).default('fullstack')
        })),
        demo: z.string().url().optional(),
        website: z.string().url().optional(),
        image: z.string(),
        gallery: z.array(z.string()).optional(),
        priority: z.number().min(0).max(10).default(5),
        tags: z.array(z.string()).default([])
    })
})

export const collections = { projects }