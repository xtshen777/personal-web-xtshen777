# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js 14 + Tailwind CSS single-page portfolio with project detail pages, deployed to GitHub Pages.

**Architecture:** App Router single-page home (`app/page.tsx`) assembles section components (Hero, About, Projects, Resume, Contact); dynamic route `app/projects/[slug]/page.tsx` renders project detail pages from data in `lib/projects.ts`; static export via `output: 'export'` builds to `out/` for GitHub Pages via GitHub Actions.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Jest + React Testing Library

---

## File Map

| File | Purpose |
|------|---------|
| `next.config.ts` | Static export + basePath |
| `tailwind.config.ts` | Custom colors (mist, deep, muted) + font families |
| `app/layout.tsx` | Root layout, DM Sans + Inter fonts, metadata |
| `app/page.tsx` | Home: assembles all section components |
| `app/globals.css` | Tailwind base + `.gradient-text`, `.gradient-bg`, `.gradient-border` |
| `app/projects/[slug]/page.tsx` | Dynamic project detail route with `generateStaticParams` |
| `components/Navbar.tsx` | Fixed nav, smooth scroll links, mobile hamburger |
| `components/Hero.tsx` | Full-height hero, gradient name, CTA buttons |
| `components/About.tsx` | Bio paragraphs, 4-stat grid, skill pills |
| `components/ProjectCard.tsx` | Single card: cover image + hover overlay with title/category |
| `components/Projects.tsx` | Filter bar (`All`, `UX/UI`, `Marketing`, `Art & Design`) + card grid |
| `components/Resume.tsx` | Timeline entries + PDF download button |
| `components/Contact.tsx` | Contact info rows + mailto form + footer |
| `components/projects/ProjectHero.tsx` | Detail: cover image, title, category tag |
| `components/projects/ProjectOverview.tsx` | Detail: role / tools / year / duration strip |
| `components/projects/ProjectContent.tsx` | Detail: flexible text / image / image-grid blocks |
| `components/projects/ProjectNav.tsx` | Detail: prev/next project links |
| `lib/projects.ts` | `Project` type, `ContentBlock` type, `projects` array, helper fns |
| `.github/workflows/deploy.yml` | Build + deploy to `gh-pages` branch |
| `jest.config.ts` | Jest config for Next.js App Router |
| `jest.setup.ts` | Import `@testing-library/jest-dom` |
| `__tests__/projects.test.ts` | Data validation: required fields, unique slugs |
| `__tests__/Projects.test.tsx` | Filter behavior tests |
| `__tests__/Navbar.test.tsx` | Render + link presence tests |
| `README.md` | Prerequisites, dev, build, deploy instructions |

---

### Task 1: Scaffold Next.js + configure static export + set up testing

**Files:**
- Create (via scaffold): all `app/`, `components/`, `public/` defaults
- Modify: `next.config.ts`
- Modify: `package.json` (add test script)
- Create: `jest.config.ts`
- Create: `jest.setup.ts`

- [ ] **Step 1: Scaffold Next.js in the existing directory**

```bash
cd /Users/luciashen/Desktop/TECHIN510/personal-web-xtshen777
npx create-next-app@14 . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

Expected: Next.js project files created. Say yes to any prompts about existing files. When done, `ls` should show `app/`, `components/`, `public/`, `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`.

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev
```

Expected: server running at http://localhost:3000. Kill with Ctrl+C.

- [ ] **Step 3: Replace `next.config.ts` for static export**

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-web-xtshen777' : '',
  images: { unoptimized: true },
}

export default nextConfig
```

- [ ] **Step 4: Install testing dependencies**

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

Expected: packages added to `devDependencies` in `package.json`.

- [ ] **Step 5: Create `jest.config.ts`**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default createJestConfig(config)
```

- [ ] **Step 6: Create `jest.setup.ts`**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 7: Add test script to `package.json`**

In the `"scripts"` section, add:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 14 + configure static export + jest"
```

---

### Task 2: GitHub Actions deployment workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

```bash
mkdir -p .github/workflows
```

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify build works locally**

```bash
npm run build
```

Expected: `out/` directory created with static HTML files. No errors.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions deploy workflow for GitHub Pages"
```

---

### Task 3: Layout, fonts, global styles, Tailwind config

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: '#F7F5FF',
        deep: '#1A1A2E',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply text-deep antialiased;
  }
}

@layer utilities {
  .gradient-text {
    background: linear-gradient(135deg, #A78BFA, #EC8FBC, #93C5FD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-bg {
    background: linear-gradient(135deg, #A78BFA, #EC8FBC, #93C5FD);
  }

  .gradient-border {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box,
                linear-gradient(135deg, #A78BFA, #EC8FBC, #93C5FD) border-box;
  }
}
```

- [ ] **Step 3: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucia Shen | Portfolio',
  description: 'Product Manager · UX/UI Designer · Marketer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="bg-white font-sans">
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify dev server still works**

```bash
npm run dev
```

Expected: no errors. Kill with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "feat: configure Tailwind custom colors, gradient utilities, DM Sans + Inter fonts"
```

---

### Task 4: Project data types + `lib/projects.ts` (TDD)

**Files:**
- Create: `__tests__/projects.test.ts`
- Create: `lib/projects.ts`

- [ ] **Step 1: Write the failing test**

Create `__tests__/projects.test.ts`:

```ts
import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects'

describe('projects data', () => {
  it('has exactly 9 projects', () => {
    expect(projects).toHaveLength(9)
  })

  it('every project has all required fields', () => {
    for (const p of projects) {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(['UX/UI', 'Marketing', 'Art & Design']).toContain(p.category)
      expect(p.year).toBeTruthy()
      expect(p.role).toBeTruthy()
      expect(p.tools.length).toBeGreaterThan(0)
      expect(p.duration).toBeTruthy()
      expect(p.coverImage).toBeTruthy()
      expect(p.summary).toBeTruthy()
    }
  })

  it('all slugs are unique', () => {
    const slugs = projects.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('getProjectBySlug returns the correct project', () => {
    const p = getProjectBySlug('menobook')
    expect(p?.title).toBe('MenoBook')
  })

  it('getProjectBySlug returns undefined for unknown slug', () => {
    expect(getProjectBySlug('nonexistent')).toBeUndefined()
  })

  it('getAdjacentProjects returns prev and next', () => {
    const { prev, next } = getAdjacentProjects('floraverse')
    expect(prev?.slug).toBe('menobook')
    expect(next?.slug).toBe('eyeconic')
  })

  it('getAdjacentProjects returns null prev for first project', () => {
    const { prev } = getAdjacentProjects('menobook')
    expect(prev).toBeNull()
  })

  it('getAdjacentProjects returns null next for last project', () => {
    const { next } = getAdjacentProjects('selected-works')
    expect(next).toBeNull()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern=projects.test
```

Expected: FAIL — `Cannot find module '@/lib/projects'`

- [ ] **Step 3: Create `lib/projects.ts`**

```ts
export type ContentBlock =
  | { type: 'text'; heading?: string; body: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image-grid'; images: { src: string; alt: string; caption?: string }[] }

export interface Project {
  slug: string
  title: string
  category: 'UX/UI' | 'Marketing' | 'Art & Design'
  year: string
  role: string
  tools: string[]
  duration: string
  coverImage: string
  summary: string
  sections: ContentBlock[]
}

export const projects: Project[] = [
  {
    slug: 'menobook',
    title: 'MenoBook',
    category: 'UX/UI',
    year: '2024',
    role: 'UX Designer & Researcher',
    tools: ['Figma', 'User Research', 'Prototyping', 'Usability Testing'],
    duration: '3 months',
    coverImage: '/projects/menobook/cover.jpg',
    summary: 'A digital companion app helping women navigate menopause with personalized tracking and community support.',
    sections: [],
  },
  {
    slug: 'floraverse',
    title: 'FloraVerse',
    category: 'UX/UI',
    year: '2023',
    role: 'UX/UI Designer',
    tools: ['Figma', 'Prototyping', 'Interaction Design'],
    duration: '2 months',
    coverImage: '/projects/floraverse/cover.jpg',
    summary: 'An immersive plant-care app combining AR features with community-driven gardening advice.',
    sections: [],
  },
  {
    slug: 'eyeconic',
    title: 'EYEconic',
    category: 'UX/UI',
    year: '2023',
    role: 'Product Designer',
    tools: ['Figma', 'User Research', 'Interactive Displays'],
    duration: '3 months',
    coverImage: '/projects/eyeconic/cover.jpg',
    summary: 'An interactive retail display system redesigning the in-store eyewear shopping experience.',
    sections: [],
  },
  {
    slug: 'pixmancer',
    title: 'Pixmancer',
    category: 'UX/UI',
    year: '2024',
    role: 'Product Manager & Designer',
    tools: ['Figma', 'AI/ML Concepts', 'Product Strategy'],
    duration: '4 months',
    coverImage: '/projects/pixmancer/cover.jpg',
    summary: 'An AI-powered photo editing app that transforms amateur photos into professional-quality visuals.',
    sections: [],
  },
  {
    slug: 'whatsdeal',
    title: 'Whatsdeal',
    category: 'UX/UI',
    year: '2023',
    role: 'Product Manager',
    tools: ['Figma', 'Axure', 'User Research', 'Growth Strategy'],
    duration: '3 months',
    coverImage: '/projects/whatsdeal/cover.jpg',
    summary: 'A deals aggregation platform connecting budget-conscious shoppers with real-time local promotions.',
    sections: [],
  },
  {
    slug: 'three-wishes',
    title: 'Three Wishes',
    category: 'Marketing',
    year: '2023',
    role: 'Marketing Strategist',
    tools: ['Market Research', 'Campaign Planning', 'Adobe CC'],
    duration: '6 weeks',
    coverImage: '/projects/three-wishes/cover.jpg',
    summary: 'A full-funnel marketing proposal for a wellness brand entering the Gen Z market.',
    sections: [],
  },
  {
    slug: 'hyundai-ioniq5',
    title: 'Hyundai Ioniq5',
    category: 'Marketing',
    year: '2022',
    role: 'Brand Strategist',
    tools: ['Market Analysis', 'Positioning Strategy', 'Deck Design'],
    duration: '5 weeks',
    coverImage: '/projects/hyundai-ioniq5/cover.jpg',
    summary: 'Strategic positioning plan for the Ioniq5 targeting early EV adopters in North America.',
    sections: [],
  },
  {
    slug: 'marshall-brand',
    title: 'Marshall Brand Revitalization',
    category: 'Marketing',
    year: '2022',
    role: 'Marketing Strategist',
    tools: ['Brand Audit', 'Consumer Research', 'Creative Direction'],
    duration: '4 weeks',
    coverImage: '/projects/marshall-brand/cover.jpg',
    summary: 'A brand revitalization strategy reconnecting Marshall with younger audio enthusiasts.',
    sections: [],
  },
  {
    slug: 'selected-works',
    title: 'Selected Works',
    category: 'Art & Design',
    year: '2019–2023',
    role: 'Artist & Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Traditional Media'],
    duration: 'Ongoing',
    coverImage: '/projects/selected-works/cover.jpg',
    summary: 'A curated collection of fine art, illustration, and graphic design spanning exhibitions and commercial projects.',
    sections: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex(p => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern=projects.test
```

Expected: PASS — 8 tests pass.

- [ ] **Step 5: Commit**

```bash
git add lib/projects.ts __tests__/projects.test.ts
git commit -m "feat: add project data types and 9 project entries with helper functions"
```

---

### Task 5: Navbar component (TDD)

**Files:**
- Create: `__tests__/Navbar.test.tsx`
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/Navbar.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders site logo/name', () => {
    render(<Navbar />)
    expect(screen.getByText('Lucia Shen')).toBeInTheDocument()
  })

  it('nav links point to correct anchors', () => {
    render(<Navbar />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '#projects')
    expect(screen.getByText('Resume').closest('a')).toHaveAttribute('href', '#resume')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern=Navbar.test
```

Expected: FAIL — `Cannot find module '@/components/Navbar'`

- [ ] **Step 3: Create `components/Navbar.tsx`**

```tsx
'use client'

import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg gradient-text">
          Lucia Shen
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-deep transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-sm px-4 py-1.5 rounded-full font-medium text-deep gradient-border hover:opacity-80 transition-opacity"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="w-6 h-0.5 bg-deep block" />
          <span className="w-6 h-0.5 bg-deep block" />
          <span className="w-6 h-0.5 bg-deep block" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-deep"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="/resume.pdf" download className="text-sm font-medium gradient-text">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern=Navbar.test
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx __tests__/Navbar.test.tsx
git commit -m "feat: add Navbar with smooth scroll links and mobile menu"
```

---

### Task 6: Hero section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-mist flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-muted text-sm tracking-widest uppercase mb-4">
          Hello, I&apos;m
        </p>
        <h1 className="font-display font-bold text-6xl md:text-8xl leading-tight mb-6">
          <span className="gradient-text">Lucia Shen</span>
        </h1>
        <p className="text-deep text-xl md:text-2xl font-medium mb-4">
          Product Manager · UX/UI Designer · Marketer
        </p>
        <p className="text-muted text-lg max-w-xl mb-10">
          2+ years building user-centered products across US, Canada &amp; Brazil.
          I turn complex problems into clear, impactful experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full gradient-border text-deep font-medium hover:opacity-80 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with gradient name and CTA buttons"
```

---

### Task 7: About section

**Files:**
- Create: `components/About.tsx`

- [ ] **Step 1: Create `components/About.tsx`**

```tsx
const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Products Shipped' },
  { value: '500K+', label: 'Content Impressions' },
  { value: '3', label: 'Countries' },
]

const SKILLS = [
  'Product Strategy', 'User Research', 'Figma', 'Axure',
  'Prototyping', 'Adobe Creative Cloud', 'Growth Strategy',
  'Cross-functional Leadership', 'Marketing', 'Brand Design',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Bio */}
          <div className="md:col-span-3 space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m Lucia Shen, a product manager and UX/UI designer with a
              background spanning product strategy, visual design, and marketing.
              I specialize in the full product lifecycle — from user research and
              ideation to high-fidelity prototypes and go-to-market execution.
            </p>
            <p>
              Over the past two years I&apos;ve shipped 10+ products and generated
              500,000+ content impressions across cross-regional markets in the US,
              Canada, and Brazil. I&apos;m currently pursuing my M.S. in Technology
              Innovation at the University of Washington.
            </p>
            <p>
              I believe great products live at the intersection of thoughtful design
              and measurable impact — and I bring both to every project I touch.
            </p>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-mist rounded-2xl p-6 text-center">
                <p className="font-display font-bold text-4xl gradient-text mb-1">
                  {value}
                </p>
                <p className="text-muted text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3">
          {SKILLS.map(skill => (
            <span
              key={skill}
              className="px-4 py-2 bg-mist rounded-full text-sm text-deep font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat: add About section with bio, stats grid, and skill pills"
```

---

### Task 8: ProjectCard + Projects section with filter (TDD)

**Files:**
- Create: `__tests__/Projects.test.tsx`
- Create: `components/ProjectCard.tsx`
- Create: `components/Projects.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/Projects.test.tsx`:

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Projects from '@/components/Projects'

describe('Projects', () => {
  it('renders project cards', () => {
    render(<Projects />)
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0)
  })

  it('renders all four filter buttons', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'UX/UI' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Art & Design' })).toBeInTheDocument()
  })

  it('filtering by UX/UI shows fewer cards than All', () => {
    render(<Projects />)
    const allCount = screen.getAllByRole('article').length
    fireEvent.click(screen.getByRole('button', { name: 'UX/UI' }))
    const filteredCount = screen.getAllByRole('article').length
    expect(filteredCount).toBeLessThan(allCount)
  })

  it('clicking All after filtering restores full list', () => {
    render(<Projects />)
    const allCount = screen.getAllByRole('article').length
    fireEvent.click(screen.getByRole('button', { name: 'UX/UI' }))
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('article').length).toBe(allCount)
  })

  it('filtered cards all belong to the selected category', () => {
    render(<Projects />)
    fireEvent.click(screen.getByRole('button', { name: 'Marketing' }))
    screen.getAllByRole('article').forEach(card => {
      expect(card.getAttribute('data-category')).toBe('Marketing')
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern=Projects.test
```

Expected: FAIL — `Cannot find module '@/components/Projects'`

- [ ] **Step 3: Create `components/ProjectCard.tsx`**

```tsx
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      role="article"
      data-category={project.category}
      className="group relative rounded-2xl overflow-hidden bg-mist aspect-[4/3]"
    >
      <div className="absolute inset-0 bg-gray-200">
        {/* Replace with <Image> once cover images are added */}
        <div className="w-full h-full gradient-bg opacity-30" />
      </div>

      {/* Hover overlay */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest mb-1">
          {project.category}
        </span>
        <h3 className="text-white font-display font-bold text-xl">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm mt-1 line-clamp-2">
          {project.summary}
        </p>
      </Link>
    </article>
  )
}
```

- [ ] **Step 4: Create `components/Projects.tsx`**

```tsx
'use client'

import { useState } from 'react'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'

type Filter = 'All' | 'UX/UI' | 'Marketing' | 'Art & Design'
const FILTERS: Filter[] = ['All', 'UX/UI', 'Marketing', 'Art & Design']

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-12">
          Selected <span className="gradient-text">Work</span>
        </h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'gradient-bg text-white'
                  : 'bg-white text-muted hover:text-deep'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
npm test -- --testPathPattern=Projects.test
```

Expected: PASS — 5 tests pass.

- [ ] **Step 6: Commit**

```bash
git add components/ProjectCard.tsx components/Projects.tsx __tests__/Projects.test.tsx
git commit -m "feat: add Projects section with category filter and card grid"
```

---

### Task 9: Resume section

**Files:**
- Create: `components/Resume.tsx`

- [ ] **Step 1: Create `components/Resume.tsx`**

```tsx
const TIMELINE = [
  {
    year: '2024–Present',
    title: 'M.S. Technology Innovation',
    org: 'University of Washington',
    description: 'Human-computer interaction, product design, and emerging technology.',
  },
  {
    year: '2022–2024',
    title: 'Product Manager & UX Designer',
    org: '[Your Company]',
    description: 'Led full product lifecycle for 10+ features across US, Canada, and Brazil markets.',
  },
  {
    year: '2020–2022',
    title: 'Marketing & Brand Designer',
    org: '[Your Company]',
    description: 'Generated 500K+ content impressions through integrated visual campaigns.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-16">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-mist ml-4 space-y-12 mb-14">
          {TIMELINE.map(({ year, title, org, description }) => (
            <div key={title} className="relative pl-8">
              {/* Dot */}
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full gradient-bg" />
              <p className="text-xs text-muted uppercase tracking-widest mb-1">{year}</p>
              <h3 className="font-display font-bold text-xl text-deep">{title}</h3>
              <p className="text-muted font-medium mb-1">{org}</p>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
        >
          Download Full Resume ↓
        </a>
      </div>
    </section>
  )
}
```

> **Note:** Replace `[Your Company]` entries with actual employer names before launch.

- [ ] **Step 2: Commit**

```bash
git add components/Resume.tsx
git commit -m "feat: add Resume section with timeline and PDF download button"
```

---

### Task 10: Contact + Footer

**Files:**
- Create: `components/Contact.tsx`

- [ ] **Step 1: Create `components/Contact.tsx`**

```tsx
const CONTACT_LINKS = [
  { label: 'Email', value: 'xtshen777@gmail.com', href: 'mailto:xtshen777@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/xtshen', href: 'https://linkedin.com/in/xtshen' },
  { label: 'Phone', value: '(647) 832-5782', href: 'tel:+16478325782' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl text-deep mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted text-lg mb-14 max-w-lg">
          Open to new opportunities, collaborations, and interesting conversations.
          Drop me a line.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {CONTACT_LINKS.map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-deep font-medium hover:opacity-70 transition-opacity"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Mailto form */}
          <form
            action="mailto:xtshen777@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep placeholder-muted focus:outline-none focus:border-violet-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep placeholder-muted focus:outline-none focus:border-violet-400 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep placeholder-muted focus:outline-none focus:border-violet-400 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/60 text-center text-muted text-sm">
          © 2026 Lucia Shen · Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: add Contact section with info links, mailto form, and footer"
```

---

### Task 11: Home page assembly

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
```

- [ ] **Step 2: Run the dev server and manually verify**

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- Navbar is fixed at top with all links visible
- Hero has gradient name, role line, two CTA buttons
- About shows bio, stats grid (2×2), skill pills
- Projects shows filter bar + 9 project cards
- Filter buttons narrow the card list correctly
- Resume shows 3 timeline entries + download button
- Contact shows info links + form + footer

Kill with Ctrl+C.

- [ ] **Step 3: Run all tests**

```bash
npm test
```

Expected: all tests pass.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble home page with all sections"
```

---

### Task 12: Project detail page components (TDD)

**Files:**
- Create: `__tests__/ProjectDetail.test.tsx`
- Create: `components/projects/ProjectHero.tsx`
- Create: `components/projects/ProjectOverview.tsx`
- Create: `components/projects/ProjectContent.tsx`
- Create: `components/projects/ProjectNav.tsx`

- [ ] **Step 1: Create components directory**

```bash
mkdir -p components/projects
```

- [ ] **Step 2: Write the failing test**

Create `__tests__/ProjectDetail.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectContent from '@/components/projects/ProjectContent'
import ProjectNav from '@/components/projects/ProjectNav'
import { projects } from '@/lib/projects'

const mockProject = projects[0] // menobook

describe('ProjectHero', () => {
  it('renders project title', () => {
    render(<ProjectHero title={mockProject.title} category={mockProject.category} coverImage={mockProject.coverImage} />)
    expect(screen.getByRole('heading', { name: mockProject.title })).toBeInTheDocument()
  })

  it('renders category tag', () => {
    render(<ProjectHero title={mockProject.title} category={mockProject.category} coverImage={mockProject.coverImage} />)
    expect(screen.getByText(mockProject.category)).toBeInTheDocument()
  })
})

describe('ProjectOverview', () => {
  it('renders role, year, and duration', () => {
    render(
      <ProjectOverview
        role={mockProject.role}
        tools={mockProject.tools}
        year={mockProject.year}
        duration={mockProject.duration}
      />
    )
    expect(screen.getByText(mockProject.role)).toBeInTheDocument()
    expect(screen.getByText(mockProject.year)).toBeInTheDocument()
    expect(screen.getByText(mockProject.duration)).toBeInTheDocument()
  })
})

describe('ProjectContent', () => {
  it('renders a text block with heading', () => {
    render(
      <ProjectContent
        sections={[{ type: 'text', heading: 'Problem', body: 'The challenge was...' }]}
      />
    )
    expect(screen.getByText('Problem')).toBeInTheDocument()
    expect(screen.getByText('The challenge was...')).toBeInTheDocument()
  })
})

describe('ProjectNav', () => {
  it('renders next project link', () => {
    render(<ProjectNav prev={null} next={projects[1]} />)
    expect(screen.getByText(projects[1].title)).toBeInTheDocument()
  })

  it('renders prev project link', () => {
    render(<ProjectNav prev={projects[0]} next={null} />)
    expect(screen.getByText(projects[0].title)).toBeInTheDocument()
  })

  it('does not render prev when null', () => {
    render(<ProjectNav prev={null} next={projects[1]} />)
    expect(screen.queryByText('← Previous')).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 3: Run test to verify it fails**

```bash
npm test -- --testPathPattern=ProjectDetail.test
```

Expected: FAIL — modules not found.

- [ ] **Step 4: Create `components/projects/ProjectHero.tsx`**

```tsx
interface Props {
  title: string
  category: string
  coverImage: string
}

export default function ProjectHero({ title, category, coverImage }: Props) {
  return (
    <div className="relative w-full aspect-[16/7] bg-mist overflow-hidden">
      {/* Cover image placeholder — replace background div with <Image> once images are added */}
      <div className="absolute inset-0 gradient-bg opacity-20" />

      <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
        <span className="text-xs uppercase tracking-widest text-deep/60 mb-3">
          {category}
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-deep">
          {title}
        </h1>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Create `components/projects/ProjectOverview.tsx`**

```tsx
interface Props {
  role: string
  tools: string[]
  year: string
  duration: string
}

const META = [
  { label: 'Role', key: 'role' as const },
  { label: 'Year', key: 'year' as const },
  { label: 'Duration', key: 'duration' as const },
]

export default function ProjectOverview({ role, tools, year, duration }: Props) {
  const values = { role, year, duration }

  return (
    <div className="border-y border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {META.map(({ label, key }) => (
          <div key={key}>
            <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
            <p className="text-deep font-medium">{values[key]}</p>
          </div>
        ))}
        <div>
          <p className="text-xs text-muted uppercase tracking-widest mb-1">Tools</p>
          <p className="text-deep font-medium">{tools.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 6: Create `components/projects/ProjectContent.tsx`**

```tsx
import { ContentBlock } from '@/lib/projects'

interface Props {
  sections: ContentBlock[]
}

export default function ProjectContent({ sections }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      {sections.map((block, i) => {
        if (block.type === 'text') {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-4">
                  {block.heading}
                </h2>
              )}
              <p className="text-muted leading-relaxed whitespace-pre-line">{block.body}</p>
            </div>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={i}>
              <div className="w-full rounded-2xl bg-mist aspect-video gradient-bg opacity-30" />
              {/* Replace div above with <Image src={block.src} alt={block.alt} ... /> once images are placed in /public */}
              {block.caption && (
                <figcaption className="text-center text-muted text-sm mt-3">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )
        }

        if (block.type === 'image-grid') {
          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              {block.images.map((img, j) => (
                <figure key={j}>
                  <div className="w-full rounded-xl bg-mist aspect-video gradient-bg opacity-30" />
                  {img.caption && (
                    <figcaption className="text-center text-muted text-xs mt-2">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )
        }

        return null
      })}

      {sections.length === 0 && (
        <p className="text-muted text-center py-12">
          Case study content coming soon.
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 7: Create `components/projects/ProjectNav.tsx`**

```tsx
import Link from 'next/link'
import { Project } from '@/lib/projects'

interface Props {
  prev: Project | null
  next: Project | null
}

export default function ProjectNav({ prev, next }: Props) {
  return (
    <div className="border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col"
          >
            <span className="text-xs text-muted uppercase tracking-widest mb-1 group-hover:text-deep transition-colors">
              ← Previous
            </span>
            <span className="font-display font-bold text-lg text-deep group-hover:gradient-text transition-all">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end"
          >
            <span className="text-xs text-muted uppercase tracking-widest mb-1 group-hover:text-deep transition-colors">
              Next →
            </span>
            <span className="font-display font-bold text-lg text-deep group-hover:gradient-text transition-all">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 8: Run test to verify it passes**

```bash
npm test -- --testPathPattern=ProjectDetail.test
```

Expected: PASS — all tests pass.

- [ ] **Step 9: Commit**

```bash
git add components/projects/ __tests__/ProjectDetail.test.tsx
git commit -m "feat: add project detail page components (Hero, Overview, Content, Nav)"
```

---

### Task 13: Project detail dynamic route

**Files:**
- Create: `app/projects/[slug]/page.tsx`

- [ ] **Step 1: Create directory**

```bash
mkdir -p "app/projects/[slug]"
```

- [ ] **Step 2: Create `app/projects/[slug]/page.tsx`**

```tsx
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug, getAdjacentProjects } from '@/lib/projects'
import Navbar from '@/components/Navbar'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import ProjectContent from '@/components/projects/ProjectContent'
import ProjectNav from '@/components/projects/ProjectNav'
import Link from 'next/link'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | Lucia Shen`,
    description: project.summary,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  const { prev, next } = getAdjacentProjects(params.slug)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProjectHero
          title={project.title}
          category={project.category}
          coverImage={project.coverImage}
        />
        <ProjectOverview
          role={project.role}
          tools={project.tools}
          year={project.year}
          duration={project.duration}
        />
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-muted leading-relaxed text-lg max-w-3xl">
            {project.summary}
          </p>
        </div>
        <ProjectContent sections={project.sections} />
        <ProjectNav prev={prev} next={next} />

        <div className="py-8 text-center">
          <Link
            href="/#projects"
            className="text-sm text-muted hover:text-deep transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify build succeeds with static params**

```bash
npm run build
```

Expected: `out/projects/menobook/index.html`, `out/projects/floraverse/index.html`, etc. all generated. No errors.

- [ ] **Step 4: Test navigation in dev server**

```bash
npm run dev
```

Open http://localhost:3000, click a project card, verify it navigates to `/projects/[slug]` and shows title, overview strip, and "Case study content coming soon." message. Kill with Ctrl+C.

- [ ] **Step 5: Commit**

```bash
git add app/projects/
git commit -m "feat: add project detail dynamic route with static params generation"
```

---

### Task 14: README + final verification

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Replace `README.md`**

```markdown
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9Yu-ry0Z)

# Lucia Shen — Personal Portfolio

A personal portfolio website built with Next.js 14 and Tailwind CSS, showcasing work in product management, UX/UI design, and marketing.

**Live site:** https://xtshen777.github.io/personal-web-xtshen777/

## Prerequisites

- Node.js 18 or higher
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

To enable GitHub Pages manually:
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
```

- [ ] **Step 2: Run full test suite**

```bash
npm test
```

Expected: all tests pass.

- [ ] **Step 3: Run final build**

```bash
npm run build
```

Expected: `out/` generated with no errors. Check that `out/projects/` has all 9 project folders.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: update README with setup, run, deploy, and content instructions"
```

- [ ] **Step 5: Push to trigger deployment**

```bash
git push origin main
```

Expected: GitHub Actions workflow runs, site deploys to `https://xtshen777.github.io/personal-web-xtshen777/`.

---

## Post-launch content checklist

These items complete the site but don't block the initial deploy:

- [ ] Upload `public/resume.pdf`
- [ ] Add cover images for all 9 projects in `public/projects/[slug]/cover.jpg`
- [ ] Fill in `sections` arrays in `lib/projects.ts` with case study content and images
- [ ] Update `[Your Company]` placeholders in `components/Resume.tsx`
- [ ] Go to repo **Settings → Pages → Source: GitHub Actions** to enable hosting
