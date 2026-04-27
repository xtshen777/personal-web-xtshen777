# Personal Website Design Spec
**Date:** 2026-04-26  
**Project:** luciashenxt personal web (TECHIN510 assignment)

---

## Goals

1. Submit a code-based personal website to GitHub Classroom by 2026-05-04
2. Replace the messy multi-page Wix site with a clean, unified single-page portfolio
3. Target audience: PM / UX design / marketing hiring managers and PhD admissions

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 (App Router) | Component structure, static export, ecosystem |
| Styling | Tailwind CSS | Fast, consistent, no style drift |
| Deployment | GitHub Pages via GitHub Actions | Assignment requirement, zero manual steps |
| Language | TypeScript | Type safety, standard for Next.js projects |

**Static export config:** `output: 'export'` in `next.config.ts`, `basePath: '/personal-web-xtshen777'`  
**Deploy trigger:** push to `main` → GitHub Actions builds → publishes to `gh-pages` branch

---

## File Structure

```
personal-web-xtshen777/
├── app/
│   ├── layout.tsx          # Global layout, fonts, metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # Tailwind base + custom gradient utilities
├── app/
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic project detail page
├── components/
│   ├── Navbar.tsx          # Fixed top nav with smooth scroll links
│   ├── Hero.tsx            # Name, title, tagline, CTA buttons
│   ├── About.tsx           # Bio, stats, skills tags
│   ├── Projects.tsx        # Filterable project card grid
│   ├── Resume.tsx          # Timeline + download button
│   ├── Contact.tsx         # Email/LinkedIn/phone + mailto form
│   └── projects/
│       ├── ProjectHero.tsx     # Cover image + title + meta
│       ├── ProjectOverview.tsx # Role, tools, year, summary
│       ├── ProjectContent.tsx  # Flexible content blocks
│       └── ProjectNav.tsx      # Prev/next project navigation
├── lib/
│   └── projects.ts         # Project data (slug, content, images)
├── public/
│   ├── resume.pdf          # Downloadable resume
│   └── projects/           # Project cover + detail images
│       ├── menobook/
│       ├── floraverse/
│       └── ...
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment workflow
└── README.md               # Setup and run instructions
```

---

## Page Sections

### 1. Navbar
- Fixed top, white background with subtle shadow on scroll
- Links: About · Projects · Resume · Contact
- Right side: `Resume` download button (gradient border style)
- Smooth scroll to each section anchor

### 2. Hero
- Full viewport height
- **Gradient text** on name "Lucia Shen" using purple→pink→blue gradient
- Role line: `Product Manager · UX/UI Designer · Marketer`
- Tagline: `"2+ years building user-centered products across US, Canada & Brazil"`
- Two CTA buttons: `View My Work` (filled, gradient) · `Get In Touch` (outlined)
- Subtle background: very light lavender `#F7F5FF`

### 3. About
- White background
- Left: 3–4 sentence bio (English, adapted from Framer site Chinese content)
- Right: 4 stat highlights in a 2×2 grid:
  - 2+ Years Experience
  - 10+ Products Shipped
  - 500K+ Content Impressions
  - 3 Countries
- Below: skill/tool tags (pill style, lavender background):
  - Product Strategy · User Research · Figma · Axure · Prototyping · Adobe CC · Growth Strategy · Cross-functional Leadership

### 4. Projects
- Background: `#F7F5FF` (alternates with white)
- Filter tag bar: `All` · `UX/UI` · `Marketing` · `Art & Design`
- 6–8 project cards in a responsive grid (3-col desktop, 2-col tablet, 1-col mobile)
- Card: cover image → hover overlay shows title + category tag
- Clicking a card navigates to `/projects/[slug]` (in-site detail page)

**Curated project list:**

| Project | Category | Source |
|---------|----------|--------|
| MenoBook | UX/UI | Wix |
| FloraVerse | UX/UI | Wix |
| EYEconic | UX/UI | Both |
| Pixmancer | UX/UI | Framer |
| Whatsdeal | UX/UI | Framer |
| Three Wishes | Marketing | Wix |
| Hyundai Ioniq5 | Marketing | Wix |
| Marshall Brand | Marketing | Wix |
| Selected Works | Art & Design | Wix (consolidated Fine Arts + Professional) |

### 5. Resume
- White background
- Short timeline: 2–3 most recent education/work entries (year, title, org, one-line description)
- `Download Resume` button (gradient fill) linking to `public/resume.pdf`

### 6. Project Detail Page (`/projects/[slug]`)

Each project has its own static page generated from `lib/projects.ts` data.

**Layout (top to bottom):**
1. **ProjectHero** — full-width cover image, project title, category tag
2. **ProjectOverview** — 4-column meta strip: Role · Tools · Year · Duration
3. **ProjectContent** — flexible content blocks in order:
   - Problem Statement (text)
   - Research / Discovery (text + images)
   - Design Process (wireframes, iterations)
   - Final Solution (high-fidelity mockups / screens)
   - Results & Impact (metrics or outcomes if available)
4. **ProjectNav** — `← Previous Project` / `Next Project →` links at the bottom

**Data structure per project in `lib/projects.ts`:**
```ts
{
  slug: string           // URL path, e.g. "menobook"
  title: string
  category: "UX/UI" | "Marketing" | "Art & Design"
  year: string
  role: string
  tools: string[]
  duration: string
  coverImage: string     // path in /public/projects/[slug]/
  summary: string        // 1–2 sentence description for card
  sections: {
    type: "text" | "image" | "image-grid"
    heading?: string
    body?: string
    src?: string | string[]
    caption?: string
  }[]
}
```

**Content to be filled in** by user for each of the 9 projects before or after initial build.

### 7. Contact
- Background: `#F7F5FF`
- Heading + short invite line
- Icon + text rows: email · LinkedIn · phone
- Simple mailto contact form (name, email, message) — no backend needed
- Footer inside this section: © 2026 Lucia Shen

---

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| `bg-white` | `#FFFFFF` | Primary section backgrounds |
| `bg-mist` | `#F7F5FF` | Alternate section backgrounds |
| `text-deep` | `#1A1A2E` | Headings and body text |
| `text-muted` | `#6B7280` | Secondary text, captions |
| Gradient | `#A78BFA → #EC8FBC → #93C5FD` | Hero text, buttons, tags, accents |

Gradient utility class in `globals.css`:
```css
.gradient-text {
  background: linear-gradient(135deg, #A78BFA, #EC8FBC, #93C5FD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | DM Sans | 700 |
| Body | Inter | 400 / 500 |

Both loaded via `next/font/google`.

---

## Responsive Breakpoints

- Mobile: 1 column, hamburger menu
- Tablet (md): 2-column project grid
- Desktop (lg+): 3-column project grid, side-by-side About layout

---

## GitHub Pages Deployment

`deploy.yml` workflow:
1. Trigger: push to `main`
2. Steps: checkout → install Node → `npm run build` → upload `out/` → deploy to `gh-pages`
3. Live URL: `https://xtshen777.github.io/personal-web-xtshen777/`

---

## README Requirements (assignment)

The README must include:
- Project description
- Prerequisites (Node.js 18+)
- Local dev: `npm install` → `npm run dev`
- Build: `npm run build`
- Deploy: automatic via GitHub Actions on push to main
- Live URL

---

## Out of Scope

- CMS or database (all content is hardcoded)
- Dark mode toggle
- Multi-language support
- Backend contact form (mailto is sufficient)
- CMS or backend (project content hardcoded in `lib/projects.ts`)
- Backend contact form (mailto is sufficient)
