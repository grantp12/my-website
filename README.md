# Grant Payne | Personal Website

Personal site for Grant Payne, a sales professional with technical capabilities. It has a resume, a projects page, and a blog.

Live site: https://my-website.grantpayne4.workers.dev

## Tech Stack

- [Astro](https://astro.build) 7 (static output, Markdown/MDX content collections)
- [Tailwind CSS](https://tailwindcss.com/) 4 with the typography plugin, configured in `src/styles/global.css`
- [DaisyUI](https://daisyui.com/) 5 (`night` theme)
- Deployed on Cloudflare

## Getting Started

Requires Node 22.12 or newer.

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (output to `dist/`) and `npm run preview`.

## Project Structure

```
├── src/
│   ├── components/     Sidebar, header, footer, cards, CV timeline
│   ├── content/blog/   Blog posts (Markdown)
│   ├── layouts/        BaseLayout, PostLayout
│   ├── lib/            createSlug helper
│   ├── pages/          index, cv, projects, 404, rss.xml, blog/
│   ├── styles/         global.css (Tailwind and DaisyUI setup)
│   ├── config.ts       Site title, description, slug and transition flags
│   └── content.config.ts  Blog post schema
├── public/             Favicon, profile photo, images, robots.txt, _headers
└── astro.config.mjs
```

## Common Edits

- **Site title and description:** `src/config.ts`
- **Sidebar links and social icons:** `src/components/SideBarMenu.astro` and `SideBarFooter.astro`
- **Resume:** `src/pages/cv.astro`
- **Projects:** `src/pages/projects.astro` (the home page shows the same cards)
- **Theme:** the `data-theme` attribute on `<html>` in `src/layouts/BaseLayout.astro`

### Adding a blog post

Add a `.md` file to `src/content/blog/` with this frontmatter (schema in `src/content.config.ts`):

```md
---
title: "Post Title"
description: "Short description"
pubDate: "Jun 9 2026"
heroImage: "/optional-image.webp"
badge: "NEW"
tags: ["optional", "tags"]
---
```

URLs are generated from the post title (`GENERATE_SLUG_FROM_TITLE` in `src/config.ts`).

## Sitemap

The sitemap is generated at build time. If the site URL changes, update `site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`.

## Credits

Built from the [Astrofy](https://github.com/manuelernestog/astrofy) template by Manuel Ernesto Garcia, used under the MIT license.

## License

MIT. See [LICENSE](LICENSE).
