# Website: Under the Hood

This website is built with [Astro/Starlight](https://starlight.astro.build/) - a documentation-focused static site generator that handles site navigation, search, i18, SEO and more. Here are [some reasons why Astro is a good choice](https://docs.astro.build/en/concepts/why-astro/) for static sites. Starlight also has [the lowest environmental impact](https://starlight.astro.build/environmental-impact/) compared to others.


## 1. Site Setup 🎬

The site was setup using the following command. This starts a wizard that walks you through the process, then scaffolds the basic site.

```bash
npm create astro@latest -- --template starlight
```

Astro and Starlight are evolving fast. Let's keep the dependency updated by running this command periodically to update `package.json`.

```bash
npm install @astrojs/starlight@latest --save
```

The default project has a structure like this. 

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

 - **File-based Routing** - Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name. _Example: the "src/content/docs/about.md" file contents are served at the "/about" route_
 - **Accessing Images** - Static assets like images [can be stored in two places](https://docs.astro.build/en/guides/images/) - `src/` or `/public`. The first are optimized by Astro before serving, while the latter are served as is. In Starlight: 
    - Add your assets into `src/assets` and reference them in Markdown using _relative_ links.
    - Add pre-optimized static assets like favicons in `public/` and reference them using _routes_ (maps to `/<asset-name>`)
 

## 2. Site Commands 

Run these from the root of the site, from any terminal.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm install @astrojs/starlight@latest --save` |  Update to latest Astro / Starlight release |
| | |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
