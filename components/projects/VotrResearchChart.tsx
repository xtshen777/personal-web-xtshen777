type Seg = { label: string; pct?: string; weight: number; color: string }

function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const rad = ((deg - 90) * Math.PI) / 180
  return [+(cx + r * Math.cos(rad)).toFixed(2), +(cy + r * Math.sin(rad)).toFixed(2)]
}

function arc(cx: number, cy: number, OR: number, IR: number, a0: number, a1: number) {
  const [s, e] = [a0 + 1.8, a1 - 1.8]
  if (e - s < 0.5) return null
  const [ox1, oy1] = polar(cx, cy, OR, s)
  const [ox2, oy2] = polar(cx, cy, OR, e)
  const [ix1, iy1] = polar(cx, cy, IR, e)
  const [ix2, iy2] = polar(cx, cy, IR, s)
  const lg = e - s > 180 ? 1 : 0
  return `M${ox1},${oy1} A${OR},${OR} 0 ${lg} 1 ${ox2},${oy2} L${ix1},${iy1} A${IR},${IR} 0 ${lg} 0 ${ix2},${iy2}Z`
}

function buildSegs(segs: Seg[], cx: number, cy: number, OR: number, IR: number) {
  const total = segs.reduce((s, x) => s + x.weight, 0)
  let cum = 0
  return segs.map(seg => {
    const a0 = cum
    cum += (seg.weight / total) * 360
    return { ...seg, path: arc(cx, cy, OR, IR, a0, cum) }
  })
}

const CX = 105, CY = 155, OR = 60, IR = 37

// Website palette: violet #A78BFA → pink #EC8FBC → blue #93C5FD
const c1: Seg[] = [
  { label: 'Very important',      pct: '75%', weight: 75, color: '#7C6AC4' },
  { label: 'Somewhat important',              weight: 15, color: '#C4A8E8' },
  { label: 'Not very important',              weight: 10, color: '#E8E0F5' },
]
const c2: Seg[] = [
  { label: 'Unsure',   pct: '47%', weight: 47, color: '#7C6AC4' },
  { label: 'Yes',                  weight: 31, color: '#A78BFA' },
  { label: 'No',                   weight: 14, color: '#EC8FBC' },
  { label: "Don't care",           weight:  8, color: '#F5C6DC' },
]
const c3: Seg[] = [
  { label: 'Misinformation', pct: '88%', weight: 88, color: '#7C6AC4' },
  { label: 'Bias',           pct: '62%', weight: 62, color: '#A78BFA' },
  { label: 'Security',       pct: '50%', weight: 50, color: '#93C5FD' },
  { label: 'Accuracy',       pct: '43%', weight: 43, color: '#BAD8F5' },
  { label: 'other...',                   weight:  7, color: '#E8E4F0' },
]
const c4: Seg[] = [
  { label: 'News & Media',    pct: '100%', weight: 100, color: '#7C6AC4' },
  { label: 'Social Media',    pct:  '88%', weight:  88, color: '#EC8FBC' },
  { label: 'Advertisements',  pct:  '63%', weight:  63, color: '#A78BFA' },
  { label: 'Movie & TV',      pct:  '48%', weight:  48, color: '#93C5FD' },
  { label: 'Online forums & more',         weight:  20, color: '#E8E4F0' },
]

export default function VotrResearchChart() {
  const s1 = buildSegs(c1, CX, CY, OR, IR)
  const s2 = buildSegs(c2, CX, CY, OR, IR)
  const s3 = buildSegs(c3, CX, CY, OR, IR)
  const s4 = buildSegs(c4, CX, CY, OR, IR)

  return (
    <div className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
      <svg viewBox="0 0 840 510" className="w-full" style={{ fontFamily: 'inherit' }}>
        <line x1="0" y1="255" x2="840" y2="255" stroke="#EDE9FE" strokeWidth="1.5" />
        <line x1="420" y1="0" x2="420" y2="510" stroke="#EDE9FE" strokeWidth="1.5" />

        {/* Chart 1 — Importance Of Voting */}
        <g>
          <text x="210" y="68" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1A1A2E">Importance Of Voting</text>
          {s1.map((s, i) => s.path && <path key={i} d={s.path} fill={s.color} />)}
          <circle cx={CX} cy={CY} r={IR - 1} fill="white" />
          <text x={CX} y="152" textAnchor="middle" fontSize="9" fontWeight="700" fill="#A78BFA">VOTE</text>
          <text x="182" y="126" fontSize="34" fontWeight="700" fill="#1A1A2E">75%</text>
          <text x="182" y="144" fontSize="9" fill="#7C6AC4">think voting is</text>
          <text x="182" y="157" fontSize="9" fill="#7C6AC4">very important</text>
          <rect x="182" y="173" width="9" height="9" rx="2" fill="#C4A8E8" />
          <text x="196" y="182" fontSize="8.5" fill="#6B7280">Somewhat important</text>
          <rect x="182" y="189" width="9" height="9" rx="2" fill="#E8E0F5" />
          <text x="196" y="198" fontSize="8.5" fill="#6B7280">Not very important</text>
        </g>

        {/* Chart 2 — Do You Feel That Your Vote Counts? */}
        <g transform="translate(420, 0)">
          <text x="210" y="61" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1A1A2E">Do You Feel That</text>
          <text x="210" y="75" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1A1A2E">Your Vote Counts?</text>
          {s2.map((s, i) => s.path && <path key={i} d={s.path} fill={s.color} />)}
          <circle cx={CX} cy={CY} r={IR - 1} fill="white" />
          <text x="182" y="120" fontSize="34" fontWeight="700" fill="#1A1A2E">47%</text>
          <text x="182" y="137" fontSize="8" fill="#7C6AC4">&quot;I&apos;m unsure if my</text>
          <text x="182" y="149" fontSize="8" fill="#7C6AC4">vote matters.&quot;</text>
          <rect x="182" y="165" width="9" height="9" rx="2" fill="#A78BFA" />
          <text x="196" y="174" fontSize="7.5" fill="#6B7280">&quot;Yes, every vote counts.&quot;</text>
          <rect x="182" y="181" width="9" height="9" rx="2" fill="#EC8FBC" />
          <text x="196" y="190" fontSize="7.5" fill="#6B7280">&quot;No, I don&apos;t think my vote</text>
          <text x="196" y="201" fontSize="7.5" fill="#6B7280">makes a difference.&quot;</text>
          <rect x="182" y="206" width="9" height="9" rx="2" fill="#F5C6DC" />
          <text x="196" y="215" fontSize="7.5" fill="#6B7280">&quot;I don&apos;t care about voting.&quot;</text>
        </g>

        {/* Chart 3 — Concerns About AI In Politics */}
        <g transform="translate(0, 255)">
          <text x="210" y="68" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1A1A2E">Concerns About AI In Politics</text>
          {s3.map((s, i) => s.path && <path key={i} d={s.path} fill={s.color} />)}
          <circle cx={CX} cy={CY} r={IR - 1} fill="white" />
          <rect x="182" y="112" width="9" height="9" rx="2" fill="#7C6AC4" />
          <text x="196" y="121" fontSize="9" fontWeight="600" fill="#7C6AC4">88%</text>
          <text x="220" y="121" fontSize="8.5" fill="#6B7280">Misinformation</text>
          <rect x="182" y="129" width="9" height="9" rx="2" fill="#A78BFA" />
          <text x="196" y="138" fontSize="9" fontWeight="600" fill="#A78BFA">62%</text>
          <text x="220" y="138" fontSize="8.5" fill="#6B7280">Bias</text>
          <rect x="182" y="146" width="9" height="9" rx="2" fill="#93C5FD" />
          <text x="196" y="155" fontSize="9" fontWeight="600" fill="#93C5FD">50%</text>
          <text x="220" y="155" fontSize="8.5" fill="#6B7280">Security</text>
          <rect x="182" y="163" width="9" height="9" rx="2" fill="#BAD8F5" />
          <text x="196" y="172" fontSize="9" fontWeight="600" fill="#93C5FD">43%</text>
          <text x="220" y="172" fontSize="8.5" fill="#6B7280">Accuracy</text>
          <rect x="182" y="180" width="9" height="9" rx="2" fill="#E8E4F0" />
          <text x="196" y="189" fontSize="8.5" fill="#9CA3AF">other...</text>
        </g>

        {/* Chart 4 — Factors Influencing */}
        <g transform="translate(420, 255)">
          <text x="210" y="61" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1A1A2E">Factors Influencing Decisions</text>
          <text x="210" y="75" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1A1A2E">In U.S. Election</text>
          {s4.map((s, i) => s.path && <path key={i} d={s.path} fill={s.color} />)}
          <circle cx={CX} cy={CY} r={IR - 1} fill="white" />
          <rect x="182" y="112" width="9" height="9" rx="2" fill="#7C6AC4" />
          <text x="196" y="121" fontSize="9" fontWeight="600" fill="#7C6AC4">100%</text>
          <text x="225" y="121" fontSize="8.5" fill="#6B7280">News & Media</text>
          <rect x="182" y="129" width="9" height="9" rx="2" fill="#EC8FBC" />
          <text x="196" y="138" fontSize="9" fontWeight="600" fill="#EC8FBC">88%</text>
          <text x="225" y="138" fontSize="8.5" fill="#6B7280">Social Media</text>
          <rect x="182" y="146" width="9" height="9" rx="2" fill="#A78BFA" />
          <text x="196" y="155" fontSize="9" fontWeight="600" fill="#A78BFA">63%</text>
          <text x="225" y="155" fontSize="8.5" fill="#6B7280">Advertisements</text>
          <rect x="182" y="163" width="9" height="9" rx="2" fill="#93C5FD" />
          <text x="196" y="172" fontSize="9" fontWeight="600" fill="#93C5FD">48%</text>
          <text x="225" y="172" fontSize="8.5" fill="#6B7280">Movie & TV</text>
          <rect x="182" y="180" width="9" height="9" rx="2" fill="#E8E4F0" />
          <text x="196" y="189" fontSize="8.5" fill="#9CA3AF">Online forums, Friends &</text>
          <text x="196" y="201" fontSize="8.5" fill="#9CA3AF">Families, and more...</text>
        </g>
      </svg>
    </div>
  )
}
