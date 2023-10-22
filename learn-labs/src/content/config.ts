import { defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';


// Configures Astro Content Collections
// https://docs.astro.build/en/guides/content-collections/
export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	//i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
