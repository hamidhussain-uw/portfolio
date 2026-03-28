import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Root-relative logo path (SVG/PNG), e.g. /images/projects/acme-mark.svg */
		image: z
			.string()
			.regex(/^\//, 'image must be a root-relative path (start with /)'),
		category: z.enum(['ui-automation', 'api-testing', 'manual']),
		repoUrl: z
			.string()
			.regex(/^https:\/\/.+/, 'repoUrl must start with https://')
			.optional(),
		role: z.string().optional(),
		stack: z.array(z.string()).optional(),
		featured: z.boolean().optional(),
		order: z.number().optional(),
		qualityReport: z
			.object({
				coverage: z.string(),
				summary: z.string(),
				frameworks: z.array(z.enum(['playwright', 'cypress'])).optional(),
			})
			.optional(),
	}),
});

export const collections = { projects };
