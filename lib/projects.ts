export type ContentBlock =
  | { type: 'text'; heading?: string; body: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'image-grid'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

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
        body: 'Full-time Product & UX/UI Designer and Market Operations Lead for Pixmancer AI, an AI painting and photo editing app under Royalforce. The product covers iOS, Android, and Web, serving global users with AI generation and photo editing — launched across the US, Canada, and Brazil.',
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
        body: 'UX/UI Design — Mobile onboarding flows, navigation bar, results/sharing/settings/referral pages, activity banners, landing pages, and custom product modules.\n\nProduct Iteration — Tracked TestFlight version testing, reported bugs, compiled requirements and issue lists, participated in sprint planning and UI reviews.\n\nBusiness Support — Produced promotional videos, multilingual marketing materials, SEO blog writing, SEMrush keyword research, and affiliate marketing setup.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/features.png',
        alt: 'Pixmancer core features: Image to Video, Photo Enhancement, AI Video Generator, AI Photo Filters',
        caption: 'Core product features — AI Magic, Photo Enhancement, Video Generator, Style Transfer',
      },
      {
        type: 'text',
        heading: 'Core Problem',
        body: 'Through competitive benchmarking (Remini, AI Mirror), user interviews, and social media research, we identified four key pain points in the AI photo editing space:\n\n60% of new users dropped off on first use — overwhelmed by complexity, unable to find features they wanted.\n\n32% of users gave up after the first editing step — friction in the core flow pushed them away before they got value.\n\nCross-platform fragmentation — inconsistent experiences across devices created re-learning friction for returning users.\n\nZero brand awareness — as a cold-start product, there was no organic traffic or existing user trust to build on.',
      },
      {
        type: 'text',
        heading: 'Design Solution: Onboarding A/B Test',
        body: 'To address high new-user drop-off and a complex core editing flow, we designed two competing onboarding approaches and validated them with a 14-day small-scale A/B test before full rollout.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/plan-a.png',
        alt: 'Plan A: multi-step onboarding with full feature access and forced paywall',
        caption: 'Plan A (Control) — Multi-step welcome dialogs + long editing flow + hard paywall',
      },
      {
        type: 'text',
        heading: 'Plan A — Control',
        body: 'Core Design: Multi-step welcome dialogs + fully open long-path editing flow.\n\nUser Flow: Launch → multiple welcome screens (must complete all steps) → template selection → preview → upload → blurry result → paywall to see high-res → mandatory subscription modal.\n\nDesign Premise: Full feature introduction upfront, aligned with industry-standard onboarding logic — let users understand all capabilities before taking action.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/plan-b.png',
        alt: 'Plan B: single-step onboarding with 3-step core flow and 7-day free trial',
        caption: 'Plan B (Experiment) — Minimal single-step guide + 3-step core loop + soft 7-day trial',
      },
      {
        type: 'text',
        heading: 'Plan B — Experiment',
        body: 'Core Design: Minimal single-step welcome + 3-step closed-loop core flow + soft conversion via 7-day free VIP trial.\n\nUser Flow: Launch → 1-page welcome (1 tap to enter) → lightweight feature preview with "Try Now" → 3-step edit loop (select photo → choose AI effect → save result) → no forced paywall, soft 7-day trial CTA instead.\n\nDesign Logic:\n— Highlight core action buttons, hide non-essential features to reduce cognitive load\n— Add AI before/after preview so users quickly perceive product value\n— Replace hard paywall with 7-day free trial to lower the decision barrier and lay groundwork for subscription conversion\n— Reorder home features by beginner priority, surfacing high-frequency, low-barrier AI templates first',
      },
      {
        type: 'table',
        headers: ['Metric', 'Plan A', 'Plan B', 'Change'],
        rows: [
          ['Onboarding completion rate', '52%', '87%', '+35%'],
          ['First core feature usage', '48%', '76%', '+28%'],
          ['7-day retention rate', '12%', '22%', '+10%'],
          ['Core task time', '120s', '72s', '-40%'],
          ['7-day free trial claim rate', '—', '62%', '—'],
          ['Subscription conversion rate', '3.2%', '7.8%', '+143%'],
        ],
      },
      {
        type: 'text',
        heading: 'Post-Launch Optimizations',
        body: 'Based on test results, Plan B was fully rolled out with three additional improvements:\n\n1. Streamlined the 7-day free trial claim flow to reduce friction and improve claim rate.\n2. Added a beginner task system with points rewards to guide progressive feature exploration and improve retention.\n3. Optimized AI generation loading speed to reduce wait time and improve overall experience.',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/multiplatform.jpg',
        alt: 'Multi-platform design system across iOS, Android, tablet, and Web',
        caption: 'Unified design system — iOS, Android, iPad, and Web',
      },
      {
        type: 'text',
        heading: 'Multi-Platform Design System',
        body: 'To fix cross-platform experience fragmentation, we built a complete design system covering color, typography, components, and interaction logic — simultaneously delivering:\n\n1. Full-platform UI for iOS/Android mobile, iPad, and Web\n2. Device-specific interaction adaptations to keep user habits consistent across platforms\n3. Visual consistency across activity banners and multilingual materials to strengthen brand recognition',
      },
      {
        type: 'text',
        heading: 'Product Iteration & Quality',
        body: 'For high-frequency iteration, we built a complete test → feedback → close-loop process:\n\n1. Daily TestFlight version testing — proactively identifying bugs and experience issues, syncing with the team\n2. Weekly sprint planning and UI reviews — staying aligned with development, rapidly responding to design change requests\n3. 100% on-time design delivery — all version feedback closed',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/growth.png',
        alt: 'Social media brand accounts on TikTok, Instagram, and Pinterest',
        caption: 'Building brand presence across TikTok, Instagram, YouTube, and Xiaohongshu',
      },
      {
        type: 'text',
        heading: 'Global Cold-Start Growth',
        body: 'With zero initial traffic, we built a full-channel growth system:\n\n1. Launched and managed brand accounts on TikTok, Instagram, YouTube, and Xiaohongshu with daily multilingual content\n2. Coordinated influencer partnerships across the US, Canada, and Brazil\n3. Produced promotional videos and multilingual materials; executed SEO blog writing and keyword optimization to boost organic reach',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/influencer.png',
        alt: 'Pixmancer influencer collaboration brief for Xiaohongshu',
        caption: 'Influencer partnership brief — Pixmancer × Xiaohongshu',
      },
      {
        type: 'text',
        heading: 'Key Learnings',
        body: 'This project gave me complete ownership of a 0-to-1 AI product launch. Two core takeaways:\n\nUser-pain-point-driven design — I learned to start from real user pain points and let research drive decisions, not feature accumulation. In a high-frequency iteration environment, this means constantly balancing design quality, development cost, and user experience.\n\nFull-chain commercial thinking — Beyond pure design, I integrated product, development, marketing, and operations into a single coherent strategy. Real design work isn\'t just making screens — it\'s understanding how design decisions connect to business outcomes.',
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
