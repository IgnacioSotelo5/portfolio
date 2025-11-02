import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'


const projects = defineCollection({
    loader: glob({ pattern: '*/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        shortDescription: z.string().optional(),
        tech: z.array(z.string()),
        featured: z.boolean().default(false),
        category: z.enum(['web', 'mobile', 'desktop', 'api', 'library', 'other']).default('web'),
        status: z.enum(['completed', 'in-progress', 'archived', 'completado', 'en progreso', 'archivado']).default('completed'),
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

const changelog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/changelog' }),
  schema: z.object({
    date: z.string().or(z.date()),
    title: z.string(),
    category: z.enum(['project', 'milestone', 'learning', 'career', 'work', 'life', 'education', 'achievement', 'proyecto', 'hito', 'aprendizaje', 'carrera', 'trabajo', 'vida', 'educacion', 'logro']),
    tags: z.array(z.string()),
    tech: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.enum(['Completado', 'En desarrollo', 'Pausado', 'Completed', 'In progress', 'Archived']).optional(),
  }),
});

export const collections = { projects, changelog }