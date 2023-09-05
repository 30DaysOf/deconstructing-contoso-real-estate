import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({

  site: 'https://30DaysOf.github.io',
  base: `/deconstructing-contoso-real-estate`,

  // https://starlight.astro.build/reference/configuration/
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
        src: './src/assets/contoso-logo.svg'
      },
      sidebar: [
        {
          label: 'M1: Understand Spec',
          collapsed: false,
          autogenerate: {
            directory: '1-contoso'
          },
        },
        {
          label: 'M2: Setup Codespaces',
          collapsed: true,
          autogenerate: {
            directory: '2-codespaces'
          }
        },
        {
          label: 'M3: Deploy To Azure',
          collapsed: true,
          autogenerate: {
            directory: '3-deploy'
          }
        },
        {
          label: 'M4: Unpack The Blog',
          collapsed: true,
          autogenerate: {
            directory: '4-blog'
          }
        },
        {
          label: 'M5: Unpack The Portal',
          collapsed: true,
          autogenerate: {
            directory: '5-portal'
          }
        },
        {
          label: 'M6: Add Authentication',
          collapsed: true,
          autogenerate: {
            directory: '6-auth'
          },
        },
        {
          label: 'M7: Add Payments',
          collapsed: true,
          autogenerate: {
            directory: '7-payments'
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
      ]
    }),
    sitemap()
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});