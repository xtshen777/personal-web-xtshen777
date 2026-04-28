export type ContentBlock =
  | { type: 'text'; heading?: string; body: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image-grid'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'stats'; items: { value: string; label: string }[] }

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
    year: '2025',
    role: 'Product & UX/UI Designer · Market Operations',
    tools: ['Figma', 'A/B Testing', 'Product Strategy', 'Social Media'],
    duration: '8 months',
    coverImage: '/projects/pixmancer/cover.jpg',
    summary: 'An AI painting and photo editing app for global users across iOS, Android, and Web — shipped across the US, Canada, and Brazil.',
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'Full-time Product & UX/UI Designer and Market Operations Lead for Pixmancer AI, an AI painting and photo editing product under Royalforce. The app spans iOS, Android, and Web platforms, serving global users across the US, Canada, and Brazil.',
      },
      {
        type: 'stats',
        items: [
          { value: '+35%', label: 'Onboarding completion rate' },
          { value: '500K+', label: 'Content impressions' },
          { value: '3', label: 'Countries' },
          { value: '100%', label: 'Design delivery rate' },
        ],
      },
      {
        type: 'text',
        heading: 'My Role',
        body: 'UX/UI Design — Owned the full design system: mobile onboarding flows, navigation, results/sharing/settings pages, activity banners, landing pages, and custom product modules.\n\nProduct Iteration — Managed TestFlight version tracking, bug reporting and triage, requirement documentation, sprint participation, and UI review cycles.\n\nCompetitive Analysis — Benchmarked against leading AI photo tools (Remini, AI Mirror) to identify gaps and inform design decisions.\n\nMarket Operations — Built and managed brand presence on TikTok, Instagram, YouTube, and Xiaohongshu. Produced daily multilingual content and coordinated influencer partnerships across three markets.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/onboarding-ab.jpg',
        alt: 'A/B test onboarding flows — Plan A vs Plan B',
        caption: 'A/B test: multi-step guide (Plan A) vs. single-step immersive flow (Plan B)',
      },
      {
        type: 'text',
        heading: 'Key Challenge: Onboarding Drop-off',
        body: 'Early data showed significant drop-off during onboarding. The original flow forced users through five steps and a mandatory subscription prompt before they could experience the product.\n\nWe designed two competing approaches and ran a 14-day A/B test with a 50/50 user split:\n\nPlan A (Control) — Multi-step welcome dialogs, five-step editing workflow, forced membership prompt.\n\nPlan B (Optimized) — Single-step introduction, three-step core flow, 7-day free VIP trial with soft conversion instead of a paywall.\n\nPlan B won across all engagement metrics. By reducing cognitive load, showcasing AI effects upfront, and lowering the decision barrier through a free trial, onboarding completion improved by 35%.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/multiplatform.jpg',
        alt: 'Multi-platform design system across iOS, Android, and Web',
        caption: 'Unified design system covering iOS, Android, tablet, and Web',
      },
      {
        type: 'text',
        heading: 'Multi-Platform Design System',
        body: 'Established unified design specifications covering color, typography, component libraries, and interaction logic — keeping the experience consistent across iOS, Android, tablet, and Web while adapting to each platform\'s native patterns.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/growth.jpg',
        alt: 'Social media and growth marketing content',
        caption: 'Growth strategy: multilingual content across TikTok, Instagram, YouTube, and Xiaohongshu',
      },
      {
        type: 'text',
        heading: 'Growth & Operations',
        body: 'Beyond design, I led the go-to-market execution: launching four social media channels, producing multilingual promotional content, optimizing SEO blog posts, and managing influencer partnerships across the US, Canada, and Brazil. This generated 500K+ content impressions and directly supported the product\'s international growth.',
      },
      {
        type: 'text',
        heading: 'What I Learned',
        body: 'This role taught me to think across the full product lifecycle — from research-backed design decisions to growth execution. The biggest shift was learning to resist feature accumulation and instead focus on reducing friction at every step. Good design and good operations reinforce each other: the cleaner the onboarding, the better the content performs.',
      },
    ],
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
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
