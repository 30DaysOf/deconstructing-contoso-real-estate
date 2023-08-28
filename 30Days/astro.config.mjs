import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	integrations: [
		// https://starlight.astro.build/reference/configuration/
		starlight({
			title: 'Deconstructed',
			description: 'Learn to build & deploy an enterprise-grade composable architecture on Azure - by deconstructing an open-source reference sample.',
			tableOfContents: { 
				minHeadingLevel: 2, 
				maxHeadingLevel: 3,
			},
			social: {
				github: 'https://github.com/30DaysOf/deconstructing-contoso-real-estate',
			},
			logo: {
				src: './src/assets/contoso-logo.svg'
			},
			sidebar: [
				{
					label: 'Contoso Real Estate',
					autogenerate: { directory: 'contoso' },
					/*
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/specification/example/' },
					],
					*/
				},
				{
					label: 'Lab Guide: Lessons',
					autogenerate: { directory: 'lessons' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
