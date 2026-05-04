import { ContentBlock } from './projects'

export interface SectionHeading {
  id: string
  label: string
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&amp;/g, 'and')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getSectionHeadings(sections: ContentBlock[]): SectionHeading[] {
  const seen = new Set<string>()
  const headings: SectionHeading[] = []

  for (const block of sections) {
    let label: string | undefined

    if (block.type === 'text' && block.heading && !block.navHide) label = block.heading
    else if (block.type === 'carousel' && block.heading) label = block.heading
    else if (block.type === 'votr-final-product' && block.heading) label = block.heading
    else if (block.type === 'pain-points' && block.heading) label = block.heading
    else if (block.type === 'takeaway-list' && block.heading) label = block.heading
    else if (block.type === 'cards' && block.heading && !block.navHide) label = block.heading

    if (label) {
      let id = slugify(label)
      if (seen.has(id)) {
        let n = 2
        while (seen.has(`${id}-${n}`)) n++
        id = `${id}-${n}`
      }
      seen.add(id)
      headings.push({ id, label })
    }
  }

  return headings
}
