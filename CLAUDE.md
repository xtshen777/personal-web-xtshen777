# Portfolio Site — Claude Instructions

## Writing Style

**No em dashes (—) anywhere in the site copy.**
Replace with: a colon, a comma, or split into two sentences.

- Label/intro separator: use a colon. `UX/UI Design: Mobile onboarding flows...`
- Appositive or aside: use a comma or rewrite. `...from user research and ideation to...`
- Two independent clauses: split into sentences. `Real design work isn't just making screens. It's understanding how...`
- Unavoidable placeholder in a data table (N/A value): use `N/A`, not `—`

This rule applies to all text in `lib/projects.ts`, all components, and any future project content.

## Case Study Page Structure

Every project detail page follows this section order and block format. Apply consistently to all projects.

### Section format rule
Every section with an image uses: **heading-only block → image block → body-only block**

```ts
{ type: 'text', heading: 'Section Title' }          // heading only, no body
{ type: 'image', src: '...', alt: '...', caption: '...' }
{ type: 'text', body: 'Explanation...' }             // body only, no heading
```

Never put heading and body in the same text block when an image follows or precedes.

### Standard section order

1. **Overview** — `{ type: 'text', heading: 'Overview', body: '...' }` — one paragraph summary of the project
2. **Stats** — `{ type: 'stats', items: [...] }` — 3–4 key metrics
3. **My Role** — `{ type: 'text', heading: 'My Role', body: '...' }` — responsibilities by workstream, separated by `\n\n`
4. **Platform/Product overview carousel** — `{ type: 'carousel', variant: 'screen', slides: [...] }` — 2 slides showing key screens
5. **Core Problem** — `{ type: 'pain-points', heading: 'Core Problem', intro: '...', problems: [...], solutions: [...] }` — 4 stat cards + 4 focus area pills
6. **Competitive Analysis** — `{ type: 'text', heading: 'Competitive Analysis', body: '...' }` + `{ type: 'table', headers: [...], rows: [...] }` — 6-column table: Tier / Product / Positioning / Strengths / Weaknesses / Opportunity (last column gets gradient-text)
7. **Design sections** (repeat pattern as needed): heading → image → body
8. **Iteration sections with side-by-side mockups** — `{ type: 'image-text', imageSize: 'narrow'|'wide', heading: '...', image: {...}, body: '...' }` — use `narrow` for portrait card mockups, `wide` for landscape comparisons; if the image and text are very mismatched in height, fall back to the standard 3-line format instead
9. **Key Learnings** — `{ type: 'takeaway-list', heading: 'Key Learnings', items: [{ title: '...', body: '...' }] }` — 2–3 titled cards

### Image block options

- Default `{ type: 'image' }`: breaks out of text container (`-mx-6 sm:-mx-16 lg:-mx-32`), full bleed — use for large interface screenshots, navigation maps, system diagrams
- `{ type: 'image', contained: true }`: stays inside container at 75% width, centered — use for small annotated mockups, card comparisons, detail callouts

### Block type reference

| Block type | When to use |
|---|---|
| `text` | Headings, body copy, section intros |
| `image` | Single full-bleed screenshot or diagram |
| `image-grid` | 2-column side-by-side screenshots |
| `image-text` | Mockup card on left, description on right |
| `stats` | Key metrics row (3–4 numbers) |
| `table` | Competitive analysis, A/B test results |
| `pain-points` | Core Problem: stat grid + focus area pills |
| `takeaway-list` | Key Learnings: titled card list |
| `carousel` variant `iphone` | Feature screens in iPhone frames |
| `carousel` variant `screen` | Platform overview screenshots (2 slides) |

### Image files

Place all project images in `public/projects/<slug>/`. Use `.png` unless source is `.jpg`. Reference as `/projects/<slug>/filename.png` in `lib/projects.ts` — `assetPath()` is applied at render time, not in data.

## Image Paths

Always use `assetPath()` from `@/lib/asset-path` for every `<img src>`.  
`next/image` does NOT prepend `basePath` in static export.

## Pushing

Always push to both remotes:
```
git push origin main && git push personal main
```
