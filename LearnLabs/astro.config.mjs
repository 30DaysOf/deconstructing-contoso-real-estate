import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	site: 'https://30DaysOf.github.io',
	base: `/deconstructing-contoso-real-estate`,
	trailingSlash: 'always',

	integrations: [
		starlight({
			title: 'Deconstructed',
			description: 'Learn to build & deploy an enterprise-grade composable architecture on Azure - by deconstructing an open-source reference sample.',
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3
			},
			social: {
				github: 'https://github.com/30DaysOf/deconstructing-contoso-real-estate'
			},
			logo: {
				src: './src/assets/img/contoso-logo.svg'
			},
			sidebar: [
				{
					label: 'M1: Understand Specification',
					collapsed: true,
					autogenerate: {
						directory: '1-contoso'
					},
				},
				{
					label: 'M2: Setup Dev Environment',
					collapsed: true,
					autogenerate: {
						directory: '2-codespaces'
					}
				},
				{
					label: 'M3: Unpack The Blog',
					collapsed: true,
					autogenerate: {
						directory: '3-blog'
					}
				},
				{
					label: 'M4: Unpack The Portal',
					collapsed: true,
					autogenerate: {
						directory: '4-portal'
					}
				},
				{
					label: 'M5: Add Authentication',
					collapsed: true,
					autogenerate: {
						directory: '5-auth'
					},
				},
				{
					label: 'M6: Add Payments',
					collapsed: true,
					autogenerate: {
						directory: '6-payments'
					}
				},
				{
					label: 'M7: Deploy To Azure',
					collapsed: true,
					autogenerate: {
						directory: '7-deploy'
					}
				},
				{
					label: 'M8: Add Test Automation',
					collapsed: true,
					autogenerate: {
						directory: '8-playwright'
					}
				},
				{
					label: 'M9: View Documentation',
					collapsed: true,
					autogenerate: {
						directory: '9-documentation'
					}
				},
				{
					label: 'M10: Extend Scenarios',
					collapsed: true,
					autogenerate: {
						directory: '10-extension'
					}
				},
				/*
				{
				  label: 'Module Title',
				  collapsed: false,
				  items: [
					// Each item here is one entry in the navigation menu.
					{ label: 'Unit Title', link: '/module-path/unit-path/' },
				  ],
				},
				*/
			],
		}),
	],
});
