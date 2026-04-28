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
        body: 'Full-time Product & UX/UI Designer and Market Operations Lead for Pixmancer AI, an AI painting and photo editing product under Royalforce. Responsible for end-to-end design and go-to-market execution across iOS, Android, and Web for global users.',
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
        heading: 'What I Did',
        body: 'UX/UI Design — Mobile onboarding flows, navigation, results/sharing/settings pages, activity banners, landing pages, and custom product modules.\n\nProduct Iteration — TestFlight testing oversight, bug triage, requirement documentation, and sprint participation.\n\nCompetitive Analysis — Benchmarked against Remini and AI Mirror to identify design gaps and prioritize improvements.\n\nMarket Operations — Built social media presence across TikTok, Instagram, YouTube, and Xiaohongshu; coordinated influencer partnerships across three markets.',
      },
      {
        type: 'text',
        heading: 'A/B Test: Onboarding Redesign',
        body: 'The team designed two onboarding approaches — a conventional multi-step guide versus a streamlined single-step immersive experience. After 14 days of split testing, the optimized single-step flow demonstrated superior engagement and was rolled out across all platforms, lifting onboarding completion by 35%.',
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
