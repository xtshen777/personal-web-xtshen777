import { assetPath } from '@/lib/asset-path'
import { ContentBlock } from '@/lib/projects'
import { slugify } from '@/lib/section-headings'
import FeatureCarousel from './FeatureCarousel'
import UIGrid from './UIGrid'
import VotrResearchChart from './VotrResearchChart'
import PersonaCard from './PersonaCard'
import IPhoneMockup from './IPhoneMockup'
import VotrFunctionDiagram from './VotrFunctionDiagram'
import VotrWireframes from './VotrWireframes'
import VotrFinalProduct from './VotrFinalProduct'
import VotrSocialFeature from './VotrSocialFeature'
import VotrBoardFeature from './VotrBoardFeature'

interface Props {
  sections: ContentBlock[]
}

export default function ProjectContent({ sections }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      {sections.map((block, i) => {
        if (block.type === 'text') {
          if (!block.heading && !block.body) return null
          return (
            <div key={i} id={block.heading ? slugify(block.heading) : undefined}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-4">
                  {block.heading}
                </h2>
              )}
              {block.body && (
                <p className="text-muted leading-relaxed whitespace-pre-line">{block.body}</p>
              )}
            </div>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={i} className={block.contained ? '' : '-mx-6 sm:-mx-16 lg:-mx-32'}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(block.src)}
                alt={block.alt}
                className={`rounded-2xl ${block.contained ? 'w-3/4 mx-auto block' : 'w-full'}`}
              />
              {block.caption && (
                <figcaption className="text-center text-muted text-sm mt-3 px-6">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )
        }

        if (block.type === 'image-text') {
          const imgW = block.imageSize === 'narrow' ? 'md:w-[26%]' : block.imageSize === 'wide' ? 'md:w-[48%]' : 'md:w-[38%]'
          const align = block.imageSize === 'narrow' ? 'md:items-center' : 'items-start'
          return (
            <div key={i} className={`flex flex-col md:flex-row gap-8 ${align}`}>
              <div className={`w-full ${imgW} shrink-0`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assetPath(block.image.src)} alt={block.image.alt} className="w-full rounded-xl" />
              </div>
              <div className="flex-1">
                {block.heading && (
                  <h3 className="font-display font-semibold text-lg text-deep mb-3">{block.heading}</h3>
                )}
                <p className="text-muted text-sm leading-relaxed whitespace-pre-line">{block.body}</p>
              </div>
            </div>
          )
        }

        if (block.type === 'image-grid') {
          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              {block.images.map((img, j) => (
                <figure key={j}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assetPath(img.src)} alt={img.alt} className="w-full rounded-xl" />
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

        if (block.type === 'table') {
          return (
            <div key={i} className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-deep/10">
                    {block.headers.map((h, j) => (
                      <th key={j} className="text-left py-3 px-4 font-display font-semibold text-deep first:pl-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className="border-b border-deep/5 hover:bg-mist/50 transition-colors">
                      {row.map((cell, k) => (
                        <td key={k} className={`py-3 px-4 first:pl-0 align-top ${k === 0 ? 'text-deep font-medium' : k === row.length - 1 ? 'font-semibold gradient-text' : 'text-muted'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        if (block.type === 'stats') {
          return (
            <div key={i} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {block.items.map(({ value, label }) => (
                <div key={label} className="bg-mist rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-4xl gradient-text mb-1">{value}</p>
                  <p className="text-muted text-sm">{label}</p>
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'pain-points') {
          return (
            <div key={i} id={block.heading ? slugify(block.heading) : undefined}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-4">{block.heading}</h2>
              )}
              <p className="text-muted leading-relaxed mb-8">{block.intro}</p>
              <div className={`grid gap-4 mb-6 ${block.problems.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {block.problems.map((p, j) => (
                  <div key={j} className="bg-mist rounded-2xl p-6 flex flex-col">
                    {p.stat && <p className="font-display font-bold text-3xl gradient-text mb-3">{p.stat}</p>}
                    {p.title && <p className={`font-display font-bold mb-3 ${p.stat ? 'text-deep text-base' : 'text-2xl gradient-text'}`}>{p.title}</p>}
                    <p className="text-muted text-sm leading-relaxed">{p.description}</p>
                    {p.colors && (
                      <div className="flex gap-2 mt-4">
                        {p.colors.map((c, k) => (
                          <div key={k} className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 rounded-lg shadow-sm" style={{ backgroundColor: c.hex }} />
                            <span className="text-muted text-xs">{c.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {block.solutions && block.solutions.length > 0 && (
                <div className="border-t border-deep/10 pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted/60 mb-4">{block.solutions.length} focus areas</p>
                  <div className={`grid gap-3 grid-cols-2 ${block.solutions.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
                    {block.solutions.map((s, j) => (
                      <div key={j} className="border border-deep/10 rounded-xl p-4 text-sm text-deep font-medium leading-snug">
                        {s.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }

        if (block.type === 'carousel') {
          return (
            <div key={i} id={block.heading ? slugify(block.heading) : undefined} className={block.variant === 'photo' ? '-mx-6 sm:-mx-16 lg:-mx-32' : ''}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-6">{block.heading}</h2>
              )}
              <FeatureCarousel slides={block.slides} variant={block.variant} />
            </div>
          )
        }

        if (block.type === 'market-overview') {
          const COLORS = ['#A78BFA', '#C4B5FD', '#F9A8D4', '#BFDBFE']
          const r = 40
          const circ = 2 * Math.PI * r
          let offset = 0
          const slices = block.segments.map((s, j) => {
            const dash = (s.percentage / 100) * circ
            const slice = { ...s, dash, offset, color: COLORS[j] }
            offset += dash
            return slice
          })
          return (
            <div key={i} className="rounded-2xl overflow-hidden border border-deep/5">
              {/* Row 1: Market size */}
              <div className="flex items-center gap-6 px-8 py-6 bg-mist">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-2xl gradient-text">$</span>
                </div>
                <p className="text-deep text-base leading-snug">
                  The North American Garden market is set to reach{' '}
                  <span className="font-bold gradient-text">{block.marketSize}</span> in {block.year}.
                </p>
              </div>

              {/* Row 2: Donut + segmentation note */}
              <div className="flex flex-col sm:flex-row items-center gap-8 px-8 py-6 bg-white">
                <div className="flex flex-col items-center shrink-0">
                  <svg width="150" height="150" viewBox="0 0 100 100">
                    <g transform="rotate(-90 50 50)">
                      {slices.map((s, j) => (
                        <circle key={j} cx="50" cy="50" r={r} fill="none"
                          stroke={s.color} strokeWidth="15"
                          strokeDasharray={`${s.dash} ${circ}`}
                          strokeDashoffset={-s.offset}
                        />
                      ))}
                    </g>
                    <text x="50" y="45" textAnchor="middle" fontSize="6" fill="#6B7280" fontWeight="500">Average Age</text>
                    <text x="50" y="57" textAnchor="middle" fontSize="9" fill="#1A1A2E" fontWeight="bold">{block.averageAge}</text>
                  </svg>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-3">
                    {slices.map((s, j) => (
                      <div key={j} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                        <span className="text-xs text-muted">{s.percentage}% {s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-px self-stretch bg-deep/5 hidden sm:block" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-muted/60 uppercase tracking-widest mb-3">Customer Segmentation By Age Groups</p>
                  <p className="text-sm text-muted leading-relaxed">{block.note}</p>
                </div>
              </div>
            </div>
          )
        }

        if (block.type === 'survey-bars') {
          const BAR_COLORS = ['#A78BFA', '#C4B5FD', '#F9A8D4', '#BFDBFE']
          return (
            <div key={i}>
              {block.intro && <p className="text-muted leading-relaxed mb-8">{block.intro}</p>}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {block.groups.map((group, j) => (
                  <div key={j}>
                    <p className="text-sm font-semibold text-deep mb-4 leading-snug">{group.question}</p>
                    <div className="flex flex-col gap-2.5">
                      {group.bars.map((bar, k) => (
                        <div key={k} className="flex items-center gap-3">
                          <div className="flex-1 h-7 bg-deep/5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full flex items-center px-3"
                              style={{ width: `${bar.percentage}%`, background: BAR_COLORS[k % BAR_COLORS.length] }}
                            >
                              <span className="text-xs font-bold text-white leading-none">{bar.percentage}%</span>
                            </div>
                          </div>
                          <span className="text-xs text-muted w-28 shrink-0">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (block.type === 'survey-donuts') {
          const r = 38
          const circ = 2 * Math.PI * r
          return (
            <div key={i}>
              {block.heading && (
                <p className="text-sm font-semibold text-deep mb-6">{block.heading}:</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {block.items.map((item, j) => {
                  const filled = (item.percentage / 100) * circ
                  return (
                    <div key={j} className="flex items-center gap-4 bg-mist rounded-2xl p-5">
                      <svg width="80" height="80" viewBox="0 0 100 100" className="shrink-0">
                        <defs>
                          <linearGradient id={`dg-${i}-${j}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A78BFA"/>
                            <stop offset="100%" stopColor="#F9A8D4"/>
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r={r} fill="none" stroke="#EDE9FE" strokeWidth="13" />
                        <circle cx="50" cy="50" r={r} fill="none" stroke={`url(#dg-${i}-${j})`} strokeWidth="13"
                          strokeDasharray={`${filled} ${circ}`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                        <text x="50" y="55" textAnchor="middle" fontSize="17" fill="#1A1A2E" fontWeight="bold">{item.percentage}%</text>
                      </svg>
                      <p className="text-sm text-muted leading-snug">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }

        if (block.type === 'personas') {
          const avatars = [
            // Robert: older male, gray hair, stubble
            <svg key="robert" width="96" height="96" viewBox="0 0 96 96" fill="none">
              <circle cx="48" cy="48" r="48" fill="#C5D8E8"/>
              <path d="M 0 78 Q 48 62 96 78 L 96 96 L 0 96 Z" fill="#546E7A"/>
              <ellipse cx="48" cy="48" rx="20" ry="22" fill="#F0CCa0"/>
              <path d="M 28 40 Q 30 22 48 20 Q 66 22 68 40 Q 62 30 48 32 Q 34 30 28 40Z" fill="#B0BEC5"/>
              <ellipse cx="27" cy="48" rx="4" ry="5" fill="#E8BC90"/>
              <ellipse cx="69" cy="48" rx="4" ry="5" fill="#E8BC90"/>
              <circle cx="41" cy="46" r="2.5" fill="#37474F"/>
              <circle cx="55" cy="46" r="2.5" fill="#37474F"/>
              <path d="M 36 40 Q 41 38 46 40" stroke="#78909C" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <path d="M 50 40 Q 55 38 60 40" stroke="#78909C" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              <ellipse cx="48" cy="52" rx="2" ry="1.5" fill="#D4956A" opacity="0.5"/>
              <path d="M 41 59 Q 48 64 55 59" stroke="#B07050" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M 30 56 Q 48 68 66 56 Q 60 66 48 67 Q 36 66 30 56Z" fill="#CFD8DC" opacity="0.35"/>
            </svg>,
            // Layla: young female, dark natural hair, glasses
            <svg key="layla" width="96" height="96" viewBox="0 0 96 96" fill="none">
              <circle cx="48" cy="48" r="48" fill="#F5C4A8"/>
              <path d="M 0 78 Q 48 62 96 78 L 96 96 L 0 96 Z" fill="#BF360C"/>
              <ellipse cx="48" cy="38" rx="28" ry="25" fill="#1A1A1A"/>
              <ellipse cx="48" cy="52" rx="18" ry="20" fill="#8D5524"/>
              <ellipse cx="27" cy="52" rx="3.5" ry="4.5" fill="#7A4520"/>
              <ellipse cx="69" cy="52" rx="3.5" ry="4.5" fill="#7A4520"/>
              <circle cx="41" cy="51" r="2.5" fill="#1A1A1A"/>
              <circle cx="55" cy="51" r="2.5" fill="#1A1A1A"/>
              <rect x="35" y="47" width="13" height="9" rx="2.5" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
              <rect x="50" y="47" width="13" height="9" rx="2.5" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
              <line x1="48" y1="51.5" x2="50" y2="51.5" stroke="#1A1A1A" strokeWidth="1.5"/>
              <path d="M 35 47 Q 32 44 30 46" stroke="#1A1A1A" strokeWidth="1.2" fill="none"/>
              <path d="M 63 47 Q 66 44 68 46" stroke="#1A1A1A" strokeWidth="1.2" fill="none"/>
              <ellipse cx="48" cy="57" rx="1.5" ry="1.2" fill="#6D4C41" opacity="0.5"/>
              <path d="M 41 63 Q 48 68 55 63" stroke="#5D4037" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>,
          ]
          return (
            <div key={i} className="flex flex-col gap-5">
              {block.items.map((persona, j) => (
                <div key={j} className="bg-mist rounded-2xl p-7 flex gap-7 items-start">
                  {/* Left: avatar + name + descriptor */}
                  <div className="shrink-0 flex flex-col items-center gap-2 w-28 text-center">
                    {avatars[j]}
                    <p className="font-display font-bold text-sm text-deep leading-tight mt-1">{persona.name}</p>
                    <p className="text-xs text-muted leading-snug">{persona.age} · {persona.job}</p>
                  </div>

                  <div className="w-px bg-deep/10 self-stretch" />

                  {/* Right: quote + needs */}
                  <div className="flex-1 flex flex-col gap-5 min-w-0">
                    <div className="border-l-2 border-violet-300/60 pl-4">
                      <p className="text-muted text-sm leading-relaxed italic">{persona.quote}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold gradient-text mb-3">Core Needs</p>
                      <ul className="space-y-2">
                        {persona.needs.map((need, k) => (
                          <li key={k} className="text-sm text-muted leading-relaxed flex gap-3 items-start">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-violet-400/70 mt-1.5" />
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'garden-facts') {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-6">{block.heading}</h2>
              )}
              <div className="flex justify-between items-end gap-2">
                {block.items.map((item, j) => {
                  const stemBottom = 108
                  const stemTop = stemBottom - Math.round((item.percentage / 100) * 72)
                  const flowerCy = stemTop - 14
                  const leafY1 = stemTop + Math.round((stemBottom - stemTop) * 0.55)
                  const leafY2 = stemTop + Math.round((stemBottom - stemTop) * 0.35)
                  return (
                    <div key={j} className="flex flex-col items-center flex-1">
                      <svg width="100%" viewBox="0 0 80 155" preserveAspectRatio="xMidYMax meet">
                        {/* Stem */}
                        <line x1="40" y1={stemBottom} x2="40" y2={stemTop} stroke="#5D8A6C" strokeWidth="3" strokeLinecap="round" />
                        {/* Leaves */}
                        <ellipse cx="28" cy={leafY1} rx="12" ry="6" fill="#5D8A6C" transform={`rotate(-35 28 ${leafY1})`} />
                        <ellipse cx="52" cy={leafY2} rx="12" ry="6" fill="#5D8A6C" transform={`rotate(35 52 ${leafY2})`} />
                        {/* Petals */}
                        <g transform={`translate(40, ${flowerCy})`}>
                          {[0, 60, 120, 180, 240, 300].map(angle => (
                            <ellipse key={angle} cx="0" cy="-13" rx="7" ry="10" fill="#F9A8D4" transform={`rotate(${angle})`} />
                          ))}
                          <circle cx="0" cy="0" r="9" fill="#FCD34D" />
                        </g>
                        {/* Pot rim */}
                        <rect x="11" y="108" width="58" height="7" rx="2" fill="#B07A50" />
                        {/* Pot body */}
                        <path d="M 16 115 L 64 115 L 58 138 L 22 138 Z" fill="#C4885A" />
                        {/* Sign on pot body */}
                        <rect x="23" y="119" width="34" height="14" rx="3" fill="#7C5228" />
                        <text x="40" y="130" textAnchor="middle" fontSize="8.5" fill="white" fontWeight="bold">{item.percentage}%</text>
                      </svg>
                      <p className="text-sm text-muted text-center mt-2 leading-tight min-h-[2.5rem] flex items-start justify-center">{item.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }

        if (block.type === 'feature-cards') {
          return (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {block.items.map((item, j) => (
                <div key={j} className="bg-mist rounded-2xl overflow-hidden flex flex-col">
                  <div className="px-5 pt-5 pb-3">
                    {item.label && (
                      <p className="text-xs font-semibold text-muted/60 uppercase tracking-widest mb-1">{item.label}</p>
                    )}
                    <h4 className="font-display font-bold text-2xl gradient-text">{item.title}</h4>
                  </div>
                  <div className="px-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assetPath(item.src)}
                      alt={item.alt}
                      className={`w-full h-52 rounded-xl ${item.objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                    />
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'cards') {
          return (
            <div key={i} id={block.heading ? slugify(block.heading) : undefined}>
              {block.heading && (
                <p className="text-xs uppercase tracking-widest text-muted/60 mb-4">{block.heading}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {block.items.map((item, j) => (
                  <div key={j} className="bg-mist rounded-2xl p-6 flex flex-col">
                    <p className="font-display font-bold text-2xl gradient-text mb-3">{item.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (block.type === 'creation-steps') {
          return (
            <div key={i}>
              {block.subtitle && (
                <p className="text-sm text-muted font-medium mb-5">{block.subtitle}</p>
              )}
              <div className="flex items-stretch gap-0">
                {block.items.map((step, j) => (
                  <>
                    {step.image ? (
                      <div key={j} className="flex-1 min-w-0 flex flex-col">
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-sm text-muted/50 font-semibold shrink-0">{step.number}.</span>
                          <h4 className="font-display font-bold gradient-text text-base leading-snug">{step.heading}</h4>
                        </div>
                        <div className="flex-1 flex items-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={assetPath(step.image.src)} alt={step.image.alt} className="w-full rounded-xl object-contain" />
                        </div>
                      </div>
                    ) : (
                      <div key={j} className="flex-1 min-w-0 flex gap-2">
                        <span className="text-sm text-muted/50 font-semibold shrink-0 mt-0.5">{step.number}.</span>
                        <div className="flex-1 flex flex-col min-w-0">
                          <h4 className="font-display font-bold gradient-text text-base leading-snug mb-4">{step.heading}</h4>
                          <div className="flex-1 flex items-center">
                            <div className="w-full">
                              {step.fields && (
                                <div className="space-y-3">
                                  {step.fields.map((f, k) => (
                                    <p key={k} className="text-sm leading-relaxed">
                                      <span className="font-semibold text-deep">{f.label}: </span>
                                      <span className="text-muted">{f.value}</span>
                                    </p>
                                  ))}
                                </div>
                              )}
                              {step.body && (
                                <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {j < block.items.length - 1 && (
                      <div key={`arr-${j}`} className="shrink-0 px-3 self-center text-2xl gradient-text leading-none select-none">»</div>
                    )}
                  </>
                ))}
              </div>
            </div>
          )
        }

        if (block.type === 'iphone-steps') {
          return (
            <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32">
              <div className="grid grid-cols-3 gap-4 px-4">
                {block.slides.map((s, j) => (
                  <div key={j} className="bg-mist rounded-2xl p-6 flex flex-col items-center">
                    <div className="w-full mb-5 min-h-[7rem]">
                      {s.title && <h4 className="font-display font-semibold text-deep text-sm mb-2">{s.title}</h4>}
                      {s.description && <p className="text-muted text-xs leading-relaxed">{s.description}</p>}
                    </div>
                    <IPhoneMockup src={s.src} alt={s.alt} />
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (block.type === 'persona') {
          return <div key={i}><PersonaCard {...block} /></div>
        }

        if (block.type === 'storyboard') {
          return (
            <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32">
              <p className="font-display font-bold text-lg gradient-text mb-6 px-6 sm:px-16 lg:px-32">{block.heading}</p>
              <div className="flex gap-4 overflow-x-auto pb-2 px-6 sm:px-16 lg:px-32" style={{ scrollbarWidth: 'none' }}>
                {block.panels.map((panel, j) => (
                  <div key={j} className="shrink-0 flex flex-col" style={{ width: 'calc(20% - 13px)', minWidth: 160 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assetPath(panel.src)}
                      alt={panel.alt}
                      className="w-full rounded-xl object-cover aspect-square"
                    />
                    <p className="text-sm text-muted leading-snug mt-3">{panel.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        if (block.type === 'votr-wireframes') {
          return <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32"><VotrWireframes /></div>
        }

        if (block.type === 'votr-final-product') {
          return <div key={i} id={block.heading ? slugify(block.heading) : undefined} className="-mx-6 sm:-mx-16 lg:-mx-32"><VotrFinalProduct /></div>
        }

        if (block.type === 'votr-social-feature') {
          return <VotrSocialFeature key={i} />
        }

        if (block.type === 'votr-board-feature') {
          return <VotrBoardFeature key={i} />
        }

        if (block.type === 'votr-function-diagram') {
          return <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32"><VotrFunctionDiagram /></div>
        }

        if (block.type === 'votr-research-chart') {
          return <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32"><VotrResearchChart /></div>
        }

        if (block.type === 'ui-grid') {
          return (
            <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32">
              <UIGrid items={block.items} />
            </div>
          )
        }

        if (block.type === 'ivy-tech-diagram') {
          const aid = `td${i}`
          return (
            <div key={i} className="-mx-6 sm:-mx-16 lg:-mx-32 overflow-x-auto bg-mist rounded-2xl p-6">
              <div className="min-w-[680px]">
                <svg viewBox="0 0 840 345" className="w-full" fill="none" style={{fontFamily: 'inherit'}}>
                  <defs>
                    <marker id={aid} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#A78BFA"/>
                    </marker>
                  </defs>
                  {/* User input */}
                  <text x="310" y="39" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="700">User</text>
                  <rect x="339" y="22" width="96" height="26" rx="4" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5"/>
                  <text x="387" y="39" textAnchor="middle" fontSize="10" fill="#831843">VR Headset</text>
                  <rect x="451" y="22" width="86" height="26" rx="4" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5"/>
                  <text x="494" y="39" textAnchor="middle" fontSize="10" fill="#831843">Controller</text>
                  <line x1="333" y1="44" x2="333" y2="109" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  {/* Supporting tech (top right) */}
                  <rect x="430" y="72" width="108" height="28" rx="4" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                  <text x="484" y="86" textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#1E40AF">OpenAI ChatGPT</text>
                  <rect x="558" y="72" width="108" height="28" rx="4" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                  <text x="612" y="86" textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#1E40AF">ConviAI SDK</text>
                  <rect x="686" y="72" width="108" height="28" rx="4" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                  <text x="740" y="86" textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#1E40AF">ConviAI LipSync</text>
                  <line x1="484" y1="100" x2="484" y2="112" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3,2"/>
                  <line x1="612" y1="100" x2="612" y2="112" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3,2"/>
                  <line x1="740" y1="100" x2="740" y2="112" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3,2"/>
                  {/* Left ConviAI SDK label */}
                  <rect x="2" y="72" width="238" height="24" rx="4" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                  <text x="121" y="88" textAnchor="middle" fontSize="9" fill="#1E40AF">ConviAI SDK</text>
                  {/* Row 1 left: Research Recognition → Speech-to-text */}
                  <rect x="2" y="108" width="118" height="40" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="61" y="123" textAnchor="middle" fontSize="9.5" fill="#4C1D95">Research</text>
                  <text x="61" y="136" textAnchor="middle" fontSize="9.5" fill="#4C1D95">Recognition</text>
                  <line x1="120" y1="128" x2="138" y2="128" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  <rect x="140" y="108" width="100" height="40" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="190" y="131" textAnchor="middle" fontSize="9.5" fill="#4C1D95">Speech-to-text</text>
                  <text x="252" y="123" fontSize="8" fill="#9CA3AF">Check</text>
                  <line x1="240" y1="128" x2="291" y2="128" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  {/* Instruction 1 diamond */}
                  <polygon points="333,110 373,128 333,146 293,128" fill="#F5F3FF" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="333" y="131" textAnchor="middle" fontSize="8" fill="#4C1D95">Instruction</text>
                  <text x="340" y="162" fontSize="8" fill="#9CA3AF">Yes</text>
                  <path d="M 333,146 C 333,200 484,145 484,199" stroke="#A78BFA" strokeWidth="1.5" fill="none" markerEnd={`url(#${aid})`}/>
                  <text x="399" y="122" textAnchor="middle" fontSize="8" fill="#9CA3AF">No</text>
                  <line x1="373" y1="128" x2="429" y2="128" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  {/* Row 1 right: Generative AI → Text-to-speech → Lip Animation */}
                  <rect x="430" y="113" width="108" height="30" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="484" y="132" textAnchor="middle" fontSize="10" fill="#4C1D95">Generative AI</text>
                  <line x1="538" y1="128" x2="556" y2="128" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  <rect x="558" y="113" width="108" height="30" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="612" y="124" textAnchor="middle" fontSize="9.5" fill="#4C1D95">Text-to-</text>
                  <text x="612" y="136" textAnchor="middle" fontSize="9.5" fill="#4C1D95">speech</text>
                  <line x1="666" y1="128" x2="684" y2="128" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  <rect x="686" y="113" width="108" height="30" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="740" y="132" textAnchor="middle" fontSize="10" fill="#4C1D95">Lip Animation</text>
                  {/* Row 2 left: Area/Objects → Trigger Event */}
                  <rect x="2" y="192" width="118" height="44" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text fontSize="9" fill="#4C1D95">
                    <tspan x="61" y="209" textAnchor="middle">Area/Objects</tspan>
                    <tspan x="61" y="221" textAnchor="middle">Recognition</tspan>
                  </text>
                  <line x1="120" y1="214" x2="138" y2="214" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  <rect x="140" y="197" width="100" height="34" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="190" y="218" textAnchor="middle" fontSize="9.5" fill="#4C1D95">Trigger Event</text>
                  <text x="252" y="209" fontSize="8" fill="#9CA3AF">Check</text>
                  <line x1="240" y1="214" x2="291" y2="214" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  {/* Instruction 2 diamond */}
                  <polygon points="333,196 373,214 333,232 293,214" fill="#F5F3FF" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="333" y="217" textAnchor="middle" fontSize="8" fill="#4C1D95">Instruction</text>
                  <text x="338" y="190" fontSize="8" fill="#9CA3AF">Yes</text>
                  <path d="M 333,196 C 333,142 484,197 484,143" stroke="#A78BFA" strokeWidth="1.5" fill="none" markerEnd={`url(#${aid})`}/>
                  <text x="399" y="208" textAnchor="middle" fontSize="8" fill="#9CA3AF">No</text>
                  <line x1="373" y1="214" x2="429" y2="214" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  <text x="316" y="252" fontSize="8" fill="#9CA3AF">Yes</text>
                  <line x1="333" y1="232" x2="333" y2="297" stroke="#A78BFA" strokeWidth="1.5" markerEnd={`url(#${aid})`}/>
                  {/* Row 2 right: Avatar Actions */}
                  <rect x="430" y="199" width="108" height="30" rx="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5"/>
                  <text x="484" y="218" textAnchor="middle" fontSize="10" fill="#4C1D95">Avatar Actions</text>
                  <line x1="484" y1="229" x2="484" y2="248" stroke="#C4B5FD" strokeWidth="1" strokeDasharray="3,2"/>
                  {/* Utility labels */}
                  <rect x="2" y="248" width="238" height="24" rx="4" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                  <text x="121" y="264" textAnchor="middle" fontSize="9" fill="#1E40AF">Unity C#</text>
                  <rect x="430" y="248" width="108" height="24" rx="4" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
                  <text x="484" y="264" textAnchor="middle" fontSize="9" fill="#1E40AF">Unity</text>
                  {/* AI-Avatar bottom row */}
                  <text x="288" y="317" textAnchor="middle" fontSize="12" fill="#374151" fontWeight="700">AI-Avatar</text>
                  <rect x="339" y="300" width="95" height="26" rx="4" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5"/>
                  <text x="387" y="317" textAnchor="middle" fontSize="10" fill="#831843">RPM Avatar</text>
                  <rect x="450" y="300" width="85" height="26" rx="4" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5"/>
                  <text x="493" y="317" textAnchor="middle" fontSize="10" fill="#831843">Animation</text>
                  <rect x="551" y="300" width="185" height="26" rx="4" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="1.5"/>
                  <text x="644" y="317" textAnchor="middle" fontSize="10" fill="#831843">Knowledge database + background</text>
                </svg>
              </div>
            </div>
          )
        }

        if (block.type === 'takeaway-list') {
          return (
            <div key={i} id={block.heading ? slugify(block.heading) : undefined}>
              {block.heading && (
                <h2 className="font-display font-bold text-2xl text-deep mb-2">{block.heading}</h2>
              )}
              <div>
                {block.items.map((item, j) => (
                  <div key={j} className="flex gap-8 py-7 border-t border-deep/10 last:border-b">
                    <p className="font-display font-semibold text-deep text-sm w-44 shrink-0 pt-0.5">{item.title}</p>
                    <p className="text-muted leading-relaxed text-sm">{item.body}</p>
                  </div>
                ))}
              </div>
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
