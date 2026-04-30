export type ContentBlock =
  | { type: 'text'; heading?: string; body?: string }
  | { type: 'image'; src: string; alt: string; caption?: string; contained?: boolean }
  | { type: 'image-grid'; images: { src: string; alt: string; caption?: string }[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'pain-points'; heading?: string; intro: string; problems: { stat: string; description: string; colors?: { name: string; hex: string }[] }[]; solutions: { title: string }[] }
  | { type: 'takeaway-list'; heading?: string; items: { title: string; body: string }[] }
  | { type: 'carousel'; heading?: string; variant?: 'iphone' | 'screen'; slides: { title: string; description: string; src: string; alt: string }[] }
  | { type: 'image-text'; heading?: string; body: string; image: { src: string; alt: string }; imageSize?: 'narrow' | 'medium' | 'wide' }

export interface Project {
  slug: string
  title: string
  category: 'UX/UI' | 'Product' | 'Marketing' | 'Art & Design'
  extraCategories?: ('UX/UI' | 'Product' | 'Marketing' | 'Art & Design')[]
  tagline?: string
  year: string
  time?: string
  role: string
  tools: string[]
  duration: string
  coverImage: string
  coverPosition?: string
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
    title: 'EYEconic Interactive Screen',
    category: 'UX/UI',
    extraCategories: ['Product', 'Marketing'],
    tagline: 'UX/UI  |  Product  |  Marketing',
    year: '2024',
    time: 'Aug – Dec 2024',
    role: 'Independent Lead · Product & UI Designer · Marketing Strategist',
    tools: ['Figma', 'User Research', 'Accessibility Design', 'Brand Strategy'],
    duration: '5 months',
    coverImage: '/projects/eyeconic/cover.jpg',
    coverPosition: '50% 58%',
    summary: 'EYEconic is an AI-driven digital wardrobe app serving 300M+ color vision deficient users globally. This project delivered a full-chain offline interactive screen for high-traffic shopping mall environments, creating an immersive experience-education-conversion loop to drive APP downloads and brand awareness.',
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'EYEconic is an AI-driven digital wardrobe app serving the 300M+ people globally with color vision deficiency. Through image recognition and color contrast analysis, it solves the core pain points of clothing color identification and outfit matching for colorblind users, helping them make independent fashion decisions and rebuild dressing confidence.\n\nThis project was a full-chain engagement: I independently completed user research, brand marketing strategy, and the complete product design of an offline interactive screen, ultimately delivering an immersive product suited for shopping mall deployment. The result achieved both an offline experience loop for the APP\'s core features and the brand\'s commercial goals of awareness building and user acquisition.',
      },
      {
        type: 'stats',
        items: [
          { value: '90%', label: 'User onboarding success rate' },
          { value: '100%', label: 'Color vision adaptation coverage' },
          { value: '82%', label: 'Willingness to download APP' },
          { value: '3,000+', label: 'Simulated experience sessions' },
        ],
      },
      {
        type: 'text',
        heading: 'My Role',
        body: 'UX/UI Design: Full module design for the offline interactive screen, low-fidelity and high-fidelity prototype output, full-process accessibility standards compliance.\n\nProduct Design: Client requirement alignment, core goal definition, deployment scenario planning, feature module breakdown, interaction flow design, and complete solution delivery.\n\nUser Research: First-hand questionnaires and interviews with colorblind users, user persona and pain point reporting, competitive analysis, market sizing, and research-driven product and marketing decisions.\n\nMarketing Strategy: Brand marketing plan, offline OOH advertising, high-traffic acquisition scenario selection, user conversion path design, brand education planning, and offline acquisition loop building.\n\nBrand Support: Brand solution presentations, visual standards delivery, APP download conversion path design, and user experience data review.',
      },
      {
        type: 'pain-points',
        heading: 'Core Problem',
        intro: 'Through first-hand questionnaire and interview research with color vision deficient users, we identified three core pain points that defined the product direction:',
        problems: [
          { stat: '75%', description: 'need others to confirm clothing colors when shopping offline, unable to make independent purchase decisions.' },
          { stat: '48%', description: 'only discovered their color deficiency during school. Public awareness of colorblind fashion challenges is extremely low, and market education on related products is almost entirely absent.' },
          { stat: '4 colors', description: 'is the typical safe zone. To avoid mismatching, most users default to black, grey, navy, and brown. Outfit variety is severely limited and fashion confidence is low.', colors: [{ name: 'Black', hex: '#1C1C1C' }, { name: 'Grey', hex: '#8A8A8A' }, { name: 'Navy', hex: '#1B2D5F' }, { name: 'Brown', hex: '#6B4423' }] },
        ],
        solutions: [
          { title: 'Bring core APP features into a physical offline experience' },
          { title: 'Build an accessible color palette for colorblind-specific needs' },
          { title: 'Create colorblind simulation for general public education' },
          { title: 'Design a full experience-to-download conversion flow' },
        ],
      },
      {
        type: 'text',
        heading: 'Design Solution',
        body: 'I selected the waiting area of a high-traffic North American shopping mall as the core deployment scenario. This is a high-frequency stop for target male users, precisely matching the core need for offline shopping discovery. The result: a "Experience-Education-Conversion" full-chain offline interactive screen.\n\nProduct flow: Welcome screen (low-barrier entry) → Feature menu (core feature access) → Feature experience modules → Conversion page (APP download guidance)\n\nAll color combinations avoid pairings that are difficult for colorblind users to distinguish. All colors include clear descriptive text labels, ensuring the product is usable by all user groups.',
      },
      {
        type: 'text',
        heading: 'Digital Fitting Room',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/fitting-room.png',
        alt: 'EYEconic digital fitting room: real-time outfit color scanning and AI palette generation',
        caption: 'Digital fitting room: AI scans outfit in real time and generates a personalized color palette',
      },
      {
        type: 'text',
        body: 'The core experience module. The interactive screen\'s built-in camera scans the user\'s outfit in real time. Based on EYEconic\'s AI capability, it identifies clothing colors and generates a personalized color palette, providing adaptive outfit suggestions. Users can experience the core product value at zero cost.\n\nKey design decisions: Menu icons support tap navigation with a dynamic focus system (selected icon enlarges, others shrink). The fitting room backdrop creates an immersive context aligned with EYEconic\'s fashion identity.',
      },
      {
        type: 'text',
        heading: 'Accessible Color Palette',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/color-palette.png',
        alt: 'EYEconic accessible color palette: named color swatches with descriptive text labels',
        caption: 'Accessible color palette: every color labeled with descriptive name cues for independent identification',
      },
      {
        type: 'text',
        body: 'Addressing color identification pain points with a purpose-built accessible palette. All color combinations avoid red-green-blue-purple groupings that are difficult for colorblind users. Same-color light and dark contrast improves differentiation within a color family. Every color is paired with a clear descriptive text label ("Bright Red," "Soft Green," "Denim Blue") so users can independently complete color matching without relying on hue perception alone.',
      },
      {
        type: 'text',
        heading: 'Outfit Tips',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/outfit-tips.png',
        alt: 'EYEconic outfit tips: personalized outfit suggestions based on user color palette with color labels',
        caption: 'Outfit tips: personalized suggestions based on selected palette, with color labels beside each item',
      },
      {
        type: 'text',
        body: 'Based on the user\'s selected color palette, the system provides personalized outfit solutions. This directly addresses the pain point of users being afraid to try new colors or worrying about mismatching, helping them expand outfit choices and improve fashion confidence. Color labels beside each clothing item reinforce identification. A pop-up prompt gates access if the user skips the palette step, encouraging full engagement.',
      },
      {
        type: 'text',
        heading: 'Colorblind View Simulation',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/colorblind-view.png',
        alt: 'EYEconic colorblind view: split-screen showing normal vs colorblind vision across 7 types',
        caption: 'Colorblind view: normal vs. colorblind split-screen across 7 types of color vision deficiency',
      },
      {
        type: 'text',
        body: 'A market education module for the general public. Non-colorblind users can see how their outfit appears through the eyes of seven different types of color vision deficiency: Deuteranopia, Protanopia, Tritanopia, Deuteranomaly, Protanomaly, Tritanomaly, and Achromatopsia. A drop-down selector switches between types with a brief explanation of each. The split-screen format shows normal vision alongside the colorblind view, building immediate empathy and expanding the brand\'s social impact.',
      },
      {
        type: 'text',
        heading: 'Colorblind Test',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/colorblind-test.png',
        alt: 'EYEconic colorblind test flow: quiz, result, welcome screen, and APP download call-to-action',
        caption: 'Colorblind test: quick quiz leads to personalized result and APP download prompt',
      },
      {
        type: 'text',
        body: 'A simple color detection quiz that helps users quickly understand their own color vision situation and conveys the brand\'s professional value. The 4-step flow: Colorblind Test → Test Result → Welcome Screen → Call-to-Action. For users who test positive, the result page positions EYEconic as the solution and prompts APP download via QR code, completing the direct conversion bridge from awareness to acquisition.',
      },
      {
        type: 'text',
        heading: 'User Journey and Deployment',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/user-journey.png',
        alt: 'EYEconic 3-step user journey storyboard: mall waiting area to interactive screen to APP download',
        caption: 'User journey: from discovery in a mall waiting area to downloading EYEconic',
      },
      {
        type: 'text',
        body: 'Full delivery process: Client requirement alignment → Secondary research and market analysis → First-hand user interviews → Media and scenario planning → Product brainstorming → Low-fidelity prototype → High-fidelity visual design → Complete solution delivery.',
      },
      {
        type: 'image',
        src: '/projects/eyeconic/storyboard.png',
        alt: 'EYEconic user journey storyboard: 3-step scenario from mall waiting area to APP download',
        caption: 'User journey storyboard: discovery, interaction, and conversion',
      },
      {
        type: 'text',
        body: 'Deployment scenario: Step 1, a colorblind man sits in the waiting area of a shopping mall. Step 2, he notices the interactive screen and tries the digital fitting room. Step 3, he receives a great outfit recommendation and downloads EYEconic.',
      },
      {
        type: 'takeaway-list',
        heading: 'Key Learnings',
        items: [
          {
            title: 'Full-chain accessible product deployment in public spaces',
            body: 'Mastered the full-process design of interactive public space products, adapting to fragmented scenario characteristics and balancing accessible experience with mass education. Completing the loop of bringing online product capabilities into a physical, real-world context requires product thinking at every step, not just visual execution.',
          },
          {
            title: 'Full-solution delivery for startup brand-marketing synergy',
            body: 'Mastered the full-chain product deployment logic for startup brand collaboration: precisely matching brand-marketing needs, balancing product social value with business goals, and completing full-solution delivery from 0 to 1. Design decisions must serve both the user and the conversion funnel simultaneously.',
          },
        ],
      },
    ],
  },
  {
    slug: 'pixmancer',
    title: 'Pixmancer',
    category: 'UX/UI',
    extraCategories: ['Product', 'Marketing'],
    tagline: 'UX/UI  |  Product  |  Marketing',
    year: '2026',
    time: 'Feb – Sep 2026',
    role: 'Product & UX/UI Designer · Market Operations',
    tools: ['Figma', 'A/B Testing', 'Product Strategy', 'Social Media'],
    duration: '8 months',
    coverImage: '/projects/pixmancer/cover.jpg',
    summary: 'An AI painting and photo editing app for global users across iOS, Android, and Web, shipped across the US, Canada, and Brazil.',
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'Full-time Product & UX/UI Designer and Market Operations Lead for Pixmancer AI, an AI painting and photo editing app under Royalforce. The product covers iOS, Android, and Web, serving global users with AI generation and photo editing, launched across the US, Canada, and Brazil.',
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
        type: 'image',
        src: '/projects/pixmancer/features.png',
        alt: 'Pixmancer core features: AI Magic Image to Video, Photo Enhancement, AI Video Generator, AI Photo Filters',
        caption: 'Core product features: AI Magic, Photo Enhancement, AI Video Generator, Style Transfer',
      },
      {
        type: 'text',
        heading: 'My Role',
        body: 'UX/UI Design: Mobile onboarding flows, navigation bar, results/sharing/settings/referral pages, activity banners, landing pages, and custom product modules.\n\nProduct Iteration: Tracked TestFlight version testing, reported bugs, compiled requirements and issue lists, participated in sprint planning and UI reviews.\n\nBusiness Support: Produced promotional videos, multilingual marketing materials, SEO blog writing, SEMrush keyword research, and affiliate marketing setup.',
      },
      {
        type: 'pain-points',
        heading: 'Core Problem',
        intro: 'Through competitive benchmarking (Remini, AI Mirror), user interviews, and social media research, we identified four key pain points in the AI photo editing space, and four corresponding focus areas to solve them:',
        problems: [
          { stat: '60%', description: 'of new users dropped off on first use, overwhelmed by complexity and unable to find the core features they wanted.' },
          { stat: '32%', description: 'of users gave up after the first editing step. Friction in the core flow pushed them away before they got value.' },
          { stat: 'Multi-platform', description: 'Inconsistent experiences across iOS, Android, and Web created re-learning friction for users switching between devices.' },
          { stat: 'Zero traffic', description: 'As a cold-start product with no brand presence, the entire global market had to be built from scratch.' },
        ],
        solutions: [
          { title: 'Optimize onboarding to reduce first-session drop-off' },
          { title: 'Simplify core editing path for faster time-to-value' },
          { title: 'Unify multi-platform design for a consistent experience' },
          { title: 'Build a full-channel growth system for cold-start acquisition' },
        ],
      },
      {
        type: 'text',
        heading: 'Design Solution: Onboarding A/B Test',
        body: 'To address high new-user drop-off and a complex core editing flow, we designed two competing onboarding approaches and validated them with a 14-day small-scale A/B test before full rollout.',
      },
      {
        type: 'text',
        heading: 'A/B Test Design',
        body: 'Test period: 14 days.\n\nSplit rule: New users randomly assigned to two equal groups (50% each). Users with abnormal registrations or same-day uninstalls were excluded.\n\nCore metrics tracked:\n- Primary: Onboarding completion rate, first core feature usage rate, 7-day retention rate\n- Business: 7-day free trial claim rate, subscription conversion rate\n- Supporting: Core task completion time, feature exploration depth',
      },
      {
        type: 'text',
        heading: 'Plan A: Control',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/plan-a.png',
        alt: 'Plan A: multi-step onboarding with full feature access and forced paywall',
        caption: 'Plan A (Control): Multi-step welcome dialogs + long editing flow + hard paywall',
      },
      {
        type: 'text',
        body: 'Core Design: Multi-step welcome dialogs + fully open long-path editing flow.\n\nUser Flow: Launch → multiple welcome screens (must complete all steps) → template selection → preview → upload → blurry result → paywall to see high-res → mandatory subscription modal.\n\nDesign Premise: Full feature introduction upfront, aligned with industry-standard onboarding logic. Let users understand all capabilities before taking action.',
      },
      {
        type: 'text',
        heading: 'Plan B: Experiment',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/plan-b.png',
        alt: 'Plan B: single-step onboarding with 3-step core flow and 7-day free trial',
        caption: 'Plan B (Experiment): Minimal single-step guide + 3-step core loop + soft 7-day trial',
      },
      {
        type: 'text',
        body: 'Core Design: Minimal single-step welcome + 3-step closed-loop core flow + soft conversion via 7-day free VIP trial.\n\nUser Flow: Launch → 1-page welcome (1 tap to enter) → lightweight feature preview with "Try Now" → 3-step edit loop (select photo → choose AI effect → save result) → no forced paywall, soft 7-day trial CTA instead.\n\nDesign Logic:\n- Highlight core action buttons, hide non-essential features to reduce cognitive load\n- Add AI before/after preview so users quickly perceive product value\n- Replace hard paywall with 7-day free trial to lower the decision barrier and lay groundwork for subscription conversion\n- Reorder home features by beginner priority, surfacing high-frequency, low-barrier AI templates first',
      },
      {
        type: 'text',
        heading: 'A/B Test Results',
      },
      {
        type: 'table',
        headers: ['Metric', 'Plan A', 'Plan B', 'Change'],
        rows: [
          ['Onboarding completion rate', '52%', '87%', '+35%'],
          ['First core feature usage', '48%', '76%', '+28%'],
          ['7-day retention rate', '12%', '22%', '+10%'],
          ['Core task time', '120s', '72s', '-40%'],
          ['7-day free trial claim rate', 'N/A', '62%', 'N/A'],
          ['Subscription conversion rate', '3.2%', '7.8%', '+143%'],
        ],
      },
      {
        type: 'text',
        heading: 'Post-Launch Optimizations',
        body: 'Based on test results, Plan B was fully rolled out with three additional improvements:\n\n1. Streamlined the 7-day free trial claim flow to reduce friction and improve claim rate.\n2. Added a beginner task system with points rewards to guide progressive feature exploration and improve retention.\n3. Optimized AI generation loading speed to reduce wait time and improve overall experience.',
      },
      {
        type: 'carousel',
        heading: 'Final Product Screens',
        slides: [
          {
            title: 'Personal Works Management',
            description: 'Displays user-generated content, membership benefits, and creation data. Supports work management and membership access, forming a complete immersion-to-conversion loop.',
            src: '/projects/pixmancer/feature-works.png',
            alt: 'Pixmancer My Works screen',
          },
          {
            title: 'AI Style Effect Preview',
            description: 'Before/after comparison of AI style filters like Ghibli with a low-friction "Try Now" entry point, helping users quickly experience the core product value.',
            src: '/projects/pixmancer/feature-preview.png',
            alt: 'Pixmancer AI style preview with Ghibli effect',
          },
          {
            title: 'Core Features Home',
            description: 'Integrates AI Video, Magic Brush, HD Enhance, and more. Paired with trending template recommendations for a one-stop AI creative workspace.',
            src: '/projects/pixmancer/feature-home.png',
            alt: 'Pixmancer core features home screen',
          },
          {
            title: 'AI Creative Tools',
            description: 'Aggregates 3D dolls, line drawing, style transfer, headshots, and more, clearly categorized to meet diverse image and video creation needs.',
            src: '/projects/pixmancer/feature-tools.png',
            alt: 'Pixmancer AI creative tools collection',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Multi-Platform Design System',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/multiplatform.jpg',
        alt: 'Multi-platform design system across iOS, Android, tablet, and Web',
        caption: 'Unified design system: iOS, Android, iPad, and Web',
      },
      {
        type: 'text',
        body: 'To fix cross-platform experience fragmentation, we built a complete design system covering color, typography, components, and interaction logic, delivering:\n\n1. Full-platform UI for iOS/Android mobile, iPad, and Web\n2. Device-specific interaction adaptations to keep user habits consistent across platforms\n3. Visual consistency across activity banners and multilingual materials to strengthen brand recognition',
      },
      {
        type: 'text',
        heading: 'Product Iteration & Quality',
        body: 'For high-frequency iteration, we built a complete test → feedback → close-loop process:\n\n1. Daily TestFlight version testing, proactively identifying bugs and experience issues, syncing with the team\n2. Weekly sprint planning and UI reviews, staying aligned with development, rapidly responding to design change requests\n3. 100% on-time design delivery. All version feedback closed.',
      },
      {
        type: 'text',
        heading: 'Global Cold-Start Growth',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/growth.png',
        alt: 'Social media brand accounts on TikTok, Instagram, and Pinterest',
        caption: 'Building brand presence across TikTok, Instagram, YouTube, and Xiaohongshu',
      },
      {
        type: 'text',
        body: 'With zero initial traffic, we built a full-channel growth system:\n\n1. Launched and managed brand accounts on TikTok, Instagram, YouTube, and Xiaohongshu with daily multilingual content\n2. Coordinated influencer partnerships across the US, Canada, and Brazil\n3. Produced promotional videos and multilingual materials; executed SEO blog writing and keyword optimization to boost organic reach',
      },
      {
        type: 'image',
        src: '/projects/pixmancer/influencer.png',
        alt: 'Pixmancer influencer collaboration brief for Xiaohongshu',
        caption: 'Influencer partnership brief: Pixmancer × Xiaohongshu',
      },
      {
        type: 'takeaway-list',
        heading: 'Key Learnings',
        items: [
          {
            title: 'User-pain-point-driven design',
            body: 'I learned to start from real user pain points and let research drive decisions, not feature accumulation. In a high-frequency iteration environment, this means constantly balancing design quality, development cost, and user experience, and knowing when to cut rather than add.',
          },
          {
            title: 'Full-chain commercial thinking',
            body: "Beyond pure design, I integrated product, development, marketing, and operations into a single coherent strategy. Real design work isn't just making screens. It's understanding how design decisions connect to business outcomes.",
          },
        ],
      },
    ],
  },
  {
    slug: 'whatsdeal',
    title: 'Whatsdeal',
    category: 'UX/UI',
    extraCategories: ['Product', 'Marketing'],
    tagline: 'UX/UI  |  Product  |  Marketing',
    year: '2026',
    time: 'Feb – Sep 2026',
    role: 'Product & UX/UI Designer · Market Operations',
    tools: ['Figma', 'Axure', 'SEMrush', 'User Research', 'Growth Strategy'],
    duration: '8 months',
    coverImage: '/projects/whatsdeal/cover.png',
    summary: 'A deals aggregation platform for US and Canada: one-stop discovery, publishing, and sharing of dining, shopping, tickets, and credit card deals.',
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'Full-time Product & UX/UI Designer and Market Operations Lead for WhatsDeal, a deals aggregation platform covering the US and Canada. The platform connects budget-conscious users with real-time deals across dining, shopping, event tickets, and credit cards, enabling one-stop discovery, deal publishing, and community sharing.',
      },
      {
        type: 'stats',
        items: [
          { value: '-45%', label: 'Core claim path steps' },
          { value: '100K+', label: 'US/CA coverage' },
          { value: '8,000+', label: 'Registered users' },
          { value: '12K+', label: 'SEO organic clicks' },
        ],
      },
      {
        type: 'text',
        heading: 'My Role',
        body: 'UX/UI Design: Article templates, header navigation, deal list pages, recommendation components, deal cards, multi-platform layouts (desktop + mobile).\n\nProduct Iteration: Sprint planning, UI reviews, cross-team requirement alignment, bug tracking and issue lists.\n\nMarket Operations: Cold-start content strategy, TikTok IP creation, Reddit and RedFlagDeals community operations, SEO blog writing, affiliate marketing setup.',
      },
      {
        type: 'carousel',
        variant: 'screen',
        slides: [
          {
            title: 'Deal Discovery Homepage',
            description: 'Clear category navigation, real-time deal cards, top-deal highlights, and a shopping blog module. A smooth cross-platform experience covering everything from fashion to home appliances.',
            src: '/projects/whatsdeal/platform-home.png',
            alt: 'WhatsDeal homepage: deal discovery interface with category nav and deal grid',
          },
          {
            title: 'Deal Detail Page',
            description: 'Full deal details, expiry date, real user reviews, and FAQ. Related deal recommendations and a one-click claim button. Desktop and mobile fully adapted.',
            src: '/projects/whatsdeal/platform-detail.png',
            alt: 'WhatsDeal deal detail page: deal info, FAQ, and user comments',
          },
        ],
      },
      {
        type: 'pain-points',
        heading: 'Core Problem',
        intro: 'Through research on North American local deal communities, competitive analysis of Slickdeals and RedFlagDeals, and target user interviews, we identified four core pain points in the deals discovery space:',
        problems: [
          { stat: '65%', description: 'of users said deal info is scattered across multiple platforms, making cross-platform browsing extremely time-consuming.' },
          { stat: '42%', description: 'reported information overload, unable to find deals that matched their specific needs.' },
          { stat: '38%', description: 'gave up mid-claim. Long operation paths and too many steps led to high drop-off rates.' },
          { stat: '30%', description: 'said deals were frequently outdated or invalid, severely eroding trust in the platform.' },
        ],
        solutions: [
          { title: 'Optimize information architecture to reduce deal browsing cost' },
          { title: 'Simplify core interaction paths to improve user efficiency' },
          { title: 'Build a content ecosystem from scratch for cold-start launch' },
          { title: 'Explore off-platform traffic and sustainable monetization' },
        ],
      },
      {
        type: 'text',
        heading: 'Competitive Analysis',
        body: 'We mapped the competitive landscape across three tiers, breaking down strengths and weaknesses to identify WhatsDeal\'s differentiation opportunities.',
      },
      {
        type: 'table',
        headers: ['Tier', 'Product', 'Positioning', 'Strengths', 'Weaknesses', 'WhatsDeal Opportunity'],
        rows: [
          ['Tier 1: Community Aggregators', 'Slickdeals', '20M+ MAU; largest all-category deal community in North America', 'Full-category coverage; rich merchant resources; mature UGC ecosystem; high SEO authority', 'Information overload; high browsing cost; high barrier for new users; online shopping deals unfocused', 'Vertical focus on online shopping; simplified categories; lower browsing cost; new-user-friendly lightweight community'],
          ['Tier 1', 'RedFlagDeals', 'Leading local deal platform in Canada', 'Deep Canadian local coverage; high user retention; strong local merchant partnerships', 'Low online shopping deal ratio; messy categories; outdated mobile experience; limited US market coverage', 'Cover both US and CA; focus on online deals; improve mobile UX; cross-region precise aggregation'],
          ['Tier 2: Vertical Platforms', 'DealNews', 'Online shopping vertical deal platform', 'High content quality; timely deal updates; strong brand trust', 'No UGC; fully editorial-dependent; limited supply; no personalization; weak retention', 'Dual-track content system (editorial + UGC); add social features; balance quality with supply scale'],
          ['Tier 2', "Brad's Deals", 'Fashion and home niche deal platform', 'High editorial quality; strong niche user loyalty', 'Extremely narrow category coverage; no UGC; low growth ceiling', 'Cover all key online shopping categories; maintain quality through smart categorization'],
          ['Tier 3: Social Content', 'TikTok / IG deal accounts', 'Social media-based deal content', 'Engaging format; high virality; precise user targeting; strong conversion', 'Scattered content; no aggregation; no search or filter tools; weak retention', 'Aggregate scattered deals onto platform; add tool features; complete traffic-retention-conversion loop'],
        ],
      },
      {
        type: 'text',
        heading: 'Navigation Design',
      },
      {
        type: 'image',
        src: '/projects/whatsdeal/navigation.png',
        alt: 'WhatsDeal navigation design: Plan B vertical online-shopping focus with 2-level category nav',
        caption: 'Final navigation: vertical online-shopping focus with 2-level category hierarchy and search bar',
      },
      {
        type: 'text',
        body: 'We tested two information architecture approaches:\n\nPlan A: Full-category flat navigation. All deal types (dining, shopping, tickets, credit cards) at the same level. Broad coverage but created cognitive overload and unclear entry points.\n\nPlan B: Vertical online-shopping focus (selected). 2-level category hierarchy surfacing high-frequency deal types first, with a persistent search bar. Reduced decision friction and guided users toward the most valuable deals.\n\nPlan B was chosen based on user testing: task completion time improved significantly, and users reported the navigation felt "focused" rather than "overwhelming."',
      },
      {
        type: 'text',
        heading: 'Deal Card Design Iteration',
        body: 'The deal card went through three design iterations, driven by user research showing that deal discovery requires faster value recognition at a glance.',
      },
      {
        type: 'image-text',
        imageSize: 'narrow',
        heading: 'Original Design: Large Image, Minimal Card',
        image: { src: '/projects/whatsdeal/card-original.png', alt: 'Original deal card: large product image with minimal info' },
        body: 'Core design: large product image as the visual anchor, occupying over 50% of the card area. Only discounted price and basic title are shown.\n\nStrengths: Strong product visual impact; works well for single-product browsing scenarios.\n\nWeaknesses: Urgency, timeliness, platform, and interaction data are all hidden. Users must click into the detail page to access critical information, significantly raising decision cost. Fewer deals visible per screen, poorly suited to a deal aggregator browsing context.',
      },
      {
        type: 'image-text',
        imageSize: 'narrow',
        heading: 'Exploration: Traditional Info-Flat Card',
        image: { src: '/projects/whatsdeal/card-exploration.png', alt: 'Exploration deal card: traditional info-flat layout with full details' },
        body: 'Core design: vertical flat card showing all fields including product image, full title, original and discounted price, platform, time, and terms.\n\nStrengths: Complete basic information visible without clicking.\n\nWeaknesses: No information hierarchy. Urgency and value are not highlighted; users cannot quickly gauge deal quality. Card height is too tall, reducing deals visible per screen. No layered priority creates high decision cost.',
      },
      {
        type: 'text',
        heading: 'Final Design: Core Info Layered, Full Module Optimized',
      },
      {
        type: 'image',
        src: '/projects/whatsdeal/card-final.png',
        alt: 'Final optimized deal card: discount badge, timeliness labels, and hover CTA with annotated comparison',
        caption: 'Final design: core info layered with discount badge, timeliness labels, and hover CTA',
        contained: true,
      },
      {
        type: 'text',
        body: '1. Discount badge anchored top-left for immediate urgency recognition. Added "Lowest in 15 days" and "Hot" timeliness labels to reinforce deal scarcity and appeal.\n\n2. Layered info hierarchy: large discount figure paired with original price for direct value comparison; simplified title showing only core product info; fixed bottom row with platform, comment count, rating, and time.\n\n3. Hover interaction: "Verified" badge reveals verification time on hover for trust signals; hovering the product image reveals a "Get the Deal" button for direct redirect; likes and comments accessible without entering the detail page.\n\n4. Unified card size: balances product image display with sufficient deal info density per screen, significantly improving deal browsing efficiency.',
      },
      {
        type: 'text',
        heading: 'Post-Optimization: Full Module Iteration',
        body: 'Completed full design coverage across Article templates, homepage and detail page recommendation components, FAQ module, 404 page, and custom pages. All designs included desktop and mobile multi-platform adaptation and passed 100% design review before delivery to development.',
      },
      {
        type: 'text',
        heading: 'Filter & List Page',
      },
      {
        type: 'image',
        src: '/projects/whatsdeal/filter-page.png',
        alt: 'Deal list filter page: desktop left sidebar and mobile drawer panel with waterfall layout',
        caption: 'Filter page: desktop left sidebar and mobile bottom drawer with responsive waterfall deal grid',
      },
      {
        type: 'text',
        body: 'To address the "information overload" pain point, we designed a multi-dimensional filter system:\n\nDesktop: Persistent left sidebar with category, deal type, discount range, and expiry filters. Users can combine filters without leaving the page.\n\nMobile: Bottom drawer panel that overlays the deal grid, preserving scroll context while applying filters.\n\nLayout: Waterfall grid adapts deal card height to content, improving visual density without sacrificing readability.\n\nThis combination reduced the average time-to-target-deal by 45% compared to the unfiltered scroll baseline.',
      },
      {
        type: 'text',
        heading: 'Cold-Start Content Ecosystem',
      },
      {
        type: 'image',
        src: '/projects/whatsdeal/deal-form.png',
        alt: 'WhatsDeal deal submission form for user-published deals',
        caption: 'Deal submission form: enabling user publishing as part of the content ecosystem strategy',
      },
      {
        type: 'text',
        body: 'Launching with zero deals was the biggest risk. We addressed it with a dual-track content strategy:\n\nPlatform publishing: Internal team published 30+ deals per day across all categories at launch, seeding the platform with verified, high-quality content.\n\nUser sharing incentives: Simplified deal submission form with auto-fill from URL scraping; points and reputation system rewarding users for publishing and verifying deals.\n\nResult: Within the first 3 months, the platform grew to 1,000+ active deals across 20+ categories, with a healthy mix of platform-curated and user-generated content.',
      },
      {
        type: 'text',
        heading: 'Off-Platform Growth',
      },
      {
        type: 'image',
        src: '/projects/whatsdeal/tiktok.png',
        alt: 'WhatsDeal TikTok "Live the 6ix" brand account for off-platform growth',
        caption: '"Live the 6ix" TikTok IP: deal discovery content targeting Canadian deal hunters',
      },
      {
        type: 'text',
        body: 'With zero initial brand awareness, we built a multi-channel growth system:\n\nTikTok "Live the 6ix": Created a branded TikTok IP focused on Canadian lifestyle deals (dining, events, local experiences). Daily short-form content built a following and drove referral traffic.\n\nReddit & RedFlagDeals: Community seeding with genuine deal posts, building credibility in established deal-hunter communities before promoting the platform.\n\nPinterest: Visual deal collections for evergreen discovery and passive traffic.\n\nAffiliate marketing: Set up affiliate tracking links for major merchants, creating a revenue stream tied directly to deal claim volume.',
      },
      {
        type: 'text',
        heading: 'SEO & Content Marketing',
      },
      {
        type: 'image',
        src: '/projects/whatsdeal/seo.png',
        alt: 'WhatsDeal Blog SEO content strategy and keyword research with SEMrush',
        caption: 'SEO blog strategy: keyword-driven content generating 12K+ organic clicks',
      },
      {
        type: 'text',
        body: 'To build sustainable organic traffic, we executed a systematic SEO content strategy:\n\nSEMrush keyword research: Identified high-intent, low-competition keywords in the deals and savings niche across US and Canadian markets.\n\nBlog content production: Wrote and published long-form deal guides, category roundups, and comparison articles targeting top keywords.\n\nResult: 12,000+ organic clicks within the campaign period, establishing WhatsDeal Blog as a consistent traffic source independent of paid acquisition.',
      },
      {
        type: 'takeaway-list',
        heading: 'Key Learnings',
        items: [
          {
            title: 'Content is a product decision, not a marketing add-on',
            body: 'The cold-start content strategy was as important as the UI design. A deal platform with no deals is just a template. Building the content flywheel (platform publishing, user incentives, community trust) required product thinking, not just growth tactics.',
          },
          {
            title: 'Simplification requires ruthless prioritization',
            body: 'The -45% reduction in claim path steps came from eliminating features the team thought users wanted but actually did not. User testing, not assumptions, drove that decision. In a domain where users are already skeptical, every unnecessary step is a trust tax.',
          },
          {
            title: 'Design for trust as the foundation',
            body: 'In a marketplace where deal validity is always in question, trust is the product. Every design decision, from the "Verified" badge to the expiry countdown, was evaluated by one question: does this make users more confident to act?',
          },
        ],
      },
    ],
  },
  {
    slug: 'asl-speller',
    title: 'ASL Fingerspelling Translator',
    category: 'UX/UI',
    extraCategories: ['Product'],
    tagline: 'Accessible UX/UI  |  AI Product Design  |  Computer Vision',
    year: '2026',
    time: 'Jan – Mar 2026',
    role: 'AI Accessibility Product & UX/UI Designer, Computer Vision Algorithm Engineer (Academic)',
    tools: ['MediaPipe', 'Python', 'Machine Learning', 'Computer Vision', 'Figma'],
    duration: '3 months',
    coverImage: '/projects/asl-speller/cover.png',
    coverPosition: '50% 35%',
    summary: 'A real-time accessible communication tool for Deaf and hard-of-hearing communities and non-signers. Using topological signal processing and a lightweight MLP model, we achieved 99.66% cross-user accuracy in complex real-world environments, reduced inference latency by 127x versus ResNet-18, and shipped a fully deployable system that runs on any standard consumer laptop.',
    sections: [
      {
        type: 'text',
        heading: 'Overview',
        body: 'American Sign Language (ASL) is the primary language of Deaf and hard-of-hearing communities across North America. Fingerspelling, spelling out proper nouns letter by letter, is a core component of everyday communication that most non-signers cannot read. This project built a real-time translation tool targeting the three core failures of existing systems: poor environmental robustness, high inference latency, and fragmented interaction design. By combining topological signal processing with a custom lightweight MLP, we reached 99.66% recognition accuracy under real-world conditions, eliminated output flicker, and shipped a working end-to-end system that runs on any standard laptop camera.',
      },
      {
        type: 'stats',
        items: [
          { value: '99.66%', label: 'Cross-user recognition accuracy' },
          { value: '127x', label: 'Inference speed vs. ResNet-18' },
          { value: '10s', label: 'Average user onboarding time' },
          { value: '0.5s', label: 'Stable recognition output delay' },
        ],
      },
      {
        type: 'text',
        heading: 'My Role',
        body: 'AI Accessibility Product & UX/UI Design: user pain point research, product architecture design, algorithm-UX co-optimization, user testing and iteration.\n\nUX/UI Design: real-time interaction interface, gesture recognition feedback module, anti-jitter spelling board UI, confidence visualization, multi-device adaptation.\n\nComputer Vision Algorithm: ASL gesture dataset construction, hand keypoint extraction, topological normalization, lightweight MLP model training, on-device real-time inference optimization.\n\nAcademic Research: research paper and academic poster production, experimental data analysis, real-time interactive demo development.',
      },
      {
        type: 'pain-points',
        heading: 'Core Problem',
        intro: 'We focused on the core scenario of real-time bidirectional deaf-hearing communication, unpacking the real pain points of two user groups:',
        problems: [
          {
            stat: 'Deaf Users',
            description: 'ASL fingerspelling is the primary way to express names, addresses, and professional terms, but the vast majority of non-signers cannot quickly read hand gestures. Severe communication barriers exist in everyday contexts: medical appointments, shopping, and social situations.',
          },
          {
            stat: 'Non-signers',
            description: 'Existing recognition tools either require expensive professional hardware with a steep learning curve, or rely on pixel-level CNN models that collapse in real-world lighting. High latency and flickering output make face-to-face real-time conversation impossible.',
          },
        ],
        solutions: [
          { title: 'High robustness across lighting and backgrounds' },
          { title: 'Zero-latency real-time recognition' },
          { title: 'No specialized hardware required' },
          { title: 'Readable, stable output for non-signers' },
        ],
      },
      {
        type: 'text',
        heading: 'Product Architecture',
      },
      {
        type: 'image',
        src: '/projects/asl-speller/architecture.png',
        alt: 'Five-stage system architecture: video input, keypoint extraction, topological normalization, MLP inference, interactive post-processing',
        caption: 'End-to-end pipeline: from raw webcam frames to stable readable text output',
      },
      {
        type: 'text',
        body: 'Video input via standard webcam (no extra hardware). MediaPipe extracts 21 3D hand keypoints, then geometric normalization (wrist-origin translation + scale normalization) eliminates the effect of hand position, size, and distance from camera, solving environmental interference at the root. A custom lightweight MLP classifies the resulting 42-dimensional feature vector in microseconds. A 15-frame temporal filter removes flicker caused by micro-movements and camera noise. The spelling board then stitches discrete letter predictions into fluent, readable text.',
      },
      {
        type: 'text',
        heading: 'UX Design',
      },
      {
        type: 'image',
        src: '/projects/asl-speller/ui-annotated.png',
        alt: 'Annotated Live Speller UI showing: skeleton overlay camera feed (left), confidence result zone with 15-frame anti-jitter (top right), and spelling board (bottom right)',
        caption: 'Interface zones: real-time camera area, recognition result area, spelling board area',
      },
      {
        type: 'text',
        body: 'Real-time visual feedback: the left panel mirrors the live camera feed with hand skeleton overlay, giving users instant gesture confirmation without guessing the recognition state.\n\nAnti-jitter spelling board: a 15-frame (0.5s) temporal queue commits a letter only when 15 consecutive frames agree with confidence above 75%, eliminating flicker and drastically reducing cognitive load for non-signers.\n\nClear information hierarchy: the interface divides cleanly into camera area, recognition result area, and spelling board area. Core translated content is highlighted so users can parse the output at a glance with zero learning curve.',
      },
      {
        type: 'text',
        heading: 'Technical Innovation',
      },
      {
        type: 'image',
        src: '/projects/asl-speller/normalization.png',
        alt: 'Topological normalization formula and keypoint coordinate visualization showing wrist-origin translation and scale normalization',
        caption: 'Geometric normalization: translating all keypoints relative to the wrist, then scaling to a unit cube',
      },
      {
        type: 'text',
        body: 'Topological keypoint approach: abandoning CNN pixel-level processing eliminates background and lighting interference from the root, solving the accuracy collapse of traditional systems in real environments.\n\nGeometric normalization: mathematical transformation for translation and scale invariance resolves differences in hand size and camera distance across users, achieving high cross-user generalization.\n\nLightweight MLP architecture: the custom [128, 64] architecture has only 15.4K parameters, 724x fewer than ResNet-18. Single-frame inference latency is 0.092ms, enabling zero-latency real-time recognition while leaving ample headroom for UX interaction optimization. The model runs on standard CPU with no GPU required.',
      },
      {
        type: 'text',
        heading: 'Results',
      },
      {
        type: 'image',
        src: '/projects/asl-speller/results-charts.png',
        alt: 'Bar chart and accuracy curve comparing our MLP system vs. ablation baselines across 40 training epochs',
        caption: 'Ablation study: final test accuracy and convergence curves across model variants',
      },
      {
        type: 'table',
        headers: ['Metric', 'Our System (MLP)', 'ResNet-18 Baseline', 'Result'],
        rows: [
          ['Cross-user Accuracy', '99.66%', '21.77%', '+78pp'],
          ['Inference Latency', '0.092ms / frame', '11.7ms / frame', '127x faster'],
          ['Model Parameters', '15.4K', '11.2M', '724x smaller'],
          ['Hardware Required', 'Standard webcam', 'High-end GPU', 'Consumer-grade'],
          ['Avg. Onboarding Time', '10s', 'N/A', 'Zero learning curve'],
        ],
      },
      {
        type: 'takeaway-list',
        heading: 'Key Learnings',
        items: [
          {
            title: 'Algorithm and UX must be co-designed',
            body: 'Accuracy alone does not make a system usable. We treated output stability and readability as first-class product requirements from day one, not afterthoughts. The 15-frame anti-jitter filter was as much a UX decision as an engineering one: reducing output noise directly reduced the cognitive effort required to follow a real-time conversation.',
          },
          {
            title: 'Abstraction is an accessibility strategy',
            body: 'Replacing pixel-level CNN processing with normalized keypoints did not just improve accuracy. It decoupled the system from specific hardware and lighting conditions, which directly expanded the accessible user base to anyone with a standard webcam. The right technical abstraction and the right accessibility outcome were the same decision.',
          },
          {
            title: 'Real-world data beats benchmark data',
            body: 'Traditional systems performed well on clean benchmark datasets but collapsed in real environments (21.77% accuracy for ResNet-18 on our test set). Building our own 13,000-image multi-user real-environment dataset was not just a research requirement. It was the only way to validate that the product actually worked for the people it was designed to serve.',
          },
        ],
      },
    ],
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
