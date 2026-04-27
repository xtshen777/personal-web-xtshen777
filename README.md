[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9Yu-ry0Z)

# Lucia Shen — Personal Portfolio

A personal portfolio website built with Next.js 14 and Tailwind CSS, showcasing work in product management, UX/UI design, and marketing.

**Live site:** https://xtshen777.github.io/personal-web-xtshen777/

## Prerequisites

- Node.js 20 or higher
- npm 9 or higher

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Run tests

```bash
npm test
```

## Build

```bash
npm run build
```

Output is written to `out/` as static HTML.

## Deploy

Deployment is automatic. Push to the `main` branch and GitHub Actions builds and publishes to GitHub Pages.

To enable GitHub Pages:
1. Go to the repo **Settings → Pages**
2. Set source to **GitHub Actions**

## Adding project content

Project data lives in `lib/projects.ts`. For each project:
1. Add cover image to `public/projects/[slug]/cover.jpg`
2. Fill in the `sections` array with `text`, `image`, or `image-grid` blocks
3. Add detail images to `public/projects/[slug]/`
4. Swap the placeholder `<div>` in `ProjectContent.tsx` for `<Image>` tags

## Resume

Place your resume PDF at `public/resume.pdf` to enable the download button.
