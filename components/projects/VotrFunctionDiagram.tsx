export default function VotrFunctionDiagram() {
  const deep    = '#1A1A2E'
  const purple  = '#7C6AC4'
  const violet  = '#A78BFA'
  const descBg  = '#F5F0FF'
  const descBorder = '#C4B5FD'
  const muted   = '#4B5563'
  const collabBg = '#EDE9FE'
  const ln      = '#C4B5FD'  // lines — soft violet

  const bx = 496
  const tx = 506

  return (
    <div className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
      <svg viewBox="0 0 1040 790" className="w-full" style={{ fontFamily: 'inherit' }}>
        <defs>
          {/* Gradient for root box border */}
          <linearGradient id="rootGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#A78BFA" />
            <stop offset="50%"  stopColor="#EC8FBC" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
        </defs>

        {/* ROOT */}
        <rect x="20" y="402" width="195" height="50" rx="8" fill={descBg} stroke="url(#rootGrad)" strokeWidth="2" />
        <text x="117" y="432" textAnchor="middle" fontSize="13" fontWeight="700" fill={purple}>Built-in Social Media</text>
        <line x1="215" y1="427" x2="250" y2="427" stroke={ln} strokeWidth="1.5" />

        {/* VERTICAL SPINE */}
        <line x1="250" y1="117" x2="250" y2="737" stroke={ln} strokeWidth="1.5" />

        {/* ======= HOME FEED ======= */}
        <line x1="250" y1="117" x2="280" y2="117" stroke={ln} strokeWidth="1.5" />
        <rect x="280" y="98" width="135" height="38" rx="6" fill="white" stroke={descBorder} strokeWidth="1.5" />
        <text x="347" y="121" textAnchor="middle" fontSize="12" fill={deep}>Home Feed</text>
        <line x1="415" y1="117" x2="480" y2="117" stroke={ln} strokeWidth="1.5" />
        {/* desc: y=20 h=194 center=117 */}
        <rect x="480" y="20" width="445" height="194" rx="10" fill={descBg} stroke={descBorder} strokeWidth="1.5" />
        <text x={tx} y="44"  fontSize="11.5" fontWeight="700" fill={purple}>Official Account:</text>
        <text x={bx} y="62"  fontSize="11" fill={muted}>•</text><text x={tx} y="62"  fontSize="11" fill={muted}>Verified news from VOTR&apos;s official account</text>
        <text x={bx} y="79"  fontSize="11" fill={muted}>•</text><text x={tx} y="79"  fontSize="11" fill={muted}>Hourly updates on candidates and parties</text>
        <text x={bx} y="96"  fontSize="11" fill={muted}>•</text><text x={tx} y="96"  fontSize="11" fill={muted}>Voting information (time, location, policies)</text>
        <text x={tx} y="114" fontSize="11.5" fontWeight="700" fill={purple}>Post Creation:</text>
        <text x={bx} y="131" fontSize="11" fill={muted}>•</text><text x={tx} y="131" fontSize="11" fill={muted}>Share updates, articles, and opinions</text>
        <text x={bx} y="148" fontSize="11" fill={muted}>•</text><text x={tx} y="148" fontSize="11" fill={muted}>Comment, like, or share posts</text>
        <text x={tx} y="166" fontSize="11.5" fontWeight="700" fill={purple}>Search:</text>
        <text x={bx} y="183" fontSize="11" fill={muted}>•</text><text x={tx} y="183" fontSize="11" fill={muted}>Search for topics and keywords of interest</text>
        <text x={bx} y="200" fontSize="11" fill={muted}>•</text><text x={tx} y="200" fontSize="11" fill={muted}>User and post recommendations</text>

        {/* ======= TREND ======= */}
        <line x1="250" y1="290" x2="280" y2="290" stroke={ln} strokeWidth="1.5" />
        <rect x="280" y="271" width="135" height="38" rx="6" fill="white" stroke={descBorder} strokeWidth="1.5" />
        <text x="347" y="294" textAnchor="middle" fontSize="12" fill={deep}>Trend</text>
        <line x1="415" y1="290" x2="480" y2="290" stroke={ln} strokeWidth="1.5" />
        {/* desc: y=250 h=80 center=290 */}
        <rect x="480" y="250" width="445" height="80" rx="10" fill={descBg} stroke={descBorder} strokeWidth="1.5" />
        <text x={bx} y="272" fontSize="11" fill={muted}>•</text><text x={tx} y="272" fontSize="11" fill={muted}>Discover new topics, parties, and candidates</text>
        <text x={bx} y="289" fontSize="11" fill={muted}>•</text><text x={tx} y="289" fontSize="11" fill={muted}>Follow people sharing the same values</text>
        <text x={bx} y="306" fontSize="11" fill={muted}>•</text><text x={tx} y="306" fontSize="11" fill={muted}>Trending hashtags or chat groups</text>

        {/* ======= BOARD ======= */}
        <line x1="250" y1="475" x2="280" y2="475" stroke={ln} strokeWidth="1.5" />
        <rect x="280" y="456" width="135" height="38" rx="6" fill="white" stroke={descBorder} strokeWidth="1.5" />
        <text x="347" y="479" textAnchor="middle" fontSize="12" fill={deep}>Board</text>
        <line x1="415" y1="475" x2="480" y2="475" stroke={ln} strokeWidth="1.5" />
        {/* desc: y=360 h=230 center=475 */}
        <rect x="480" y="360" width="445" height="230" rx="10" fill={descBg} stroke={descBorder} strokeWidth="1.5" />
        <text x={tx} y="382" fontSize="11.5" fontWeight="700" fill={purple}>Text:</text>
        <text x={bx} y="399" fontSize="11" fill={muted}>•</text><text x={tx} y="399" fontSize="11" fill={muted}>Add and customize text (font, size, color)</text>
        <text x={tx} y="416" fontSize="11.5" fontWeight="700" fill={purple}>Brush:</text>
        <text x={bx} y="433" fontSize="11" fill={muted}>•</text><text x={tx} y="433" fontSize="11" fill={muted}>Draw with adjustable brushes</text>
        <text x={bx} y="450" fontSize="11" fill={muted}>•</text><text x={tx} y="450" fontSize="11" fill={muted}>Stroke stabilizers for smooth lines</text>
        <text x={tx} y="467" fontSize="11.5" fontWeight="700" fill={purple}>Sticker:</text>
        <text x={bx} y="484" fontSize="11" fill={muted}>•</text><text x={tx} y="484" fontSize="11" fill={muted}>Add stickers by style and topic</text>
        <text x={tx} y="501" fontSize="11.5" fontWeight="700" fill={purple}>Template:</text>
        <text x={bx} y="518" fontSize="11" fill={muted}>•</text><text x={tx} y="518" fontSize="11" fill={muted}>Use or upload templates for boards</text>
        <text x={tx} y="535" fontSize="11.5" fontWeight="700" fill={purple}>Photo Filter:</text>
        <text x={bx} y="552" fontSize="11" fill={muted}>•</text><text x={tx} y="552" fontSize="11" fill={muted}>Upload photos to the board</text>
        <text x={bx} y="569" fontSize="11" fill={muted}>•</text><text x={tx} y="569" fontSize="11" fill={muted}>Apply filters for a stylized look</text>

        {/* Collaboration box */}
        <line x1="347" y1="494" x2="347" y2="500" stroke={ln} strokeWidth="1.5" />
        <rect x="282" y="500" width="172" height="78" rx="8" fill={collabBg} stroke={violet} strokeWidth="1.5" />
        <text x="298" y="520" fontSize="11" fontWeight="700" fill={purple}>Collaboration:</text>
        <text x="294" y="537" fontSize="9.5" fill={muted}>•</text><text x="303" y="537" fontSize="9.5" fill={muted}>Share boards with chat groups</text>
        <text x="294" y="553" fontSize="9.5" fill={muted}>•</text><text x="303" y="553" fontSize="9.5" fill={muted}>Invite others to edit</text>
        <text x="294" y="569" fontSize="9.5" fill={muted}>•</text><text x="303" y="569" fontSize="9.5" fill={muted}>Save for social media</text>

        {/* ======= CHAT ======= */}
        <line x1="250" y1="642" x2="280" y2="642" stroke={ln} strokeWidth="1.5" />
        <rect x="280" y="623" width="135" height="38" rx="6" fill="white" stroke={descBorder} strokeWidth="1.5" />
        <text x="347" y="646" textAnchor="middle" fontSize="12" fill={deep}>Chat</text>
        <line x1="415" y1="642" x2="480" y2="642" stroke={ln} strokeWidth="1.5" />
        {/* desc: y=610 h=65 center=642 */}
        <rect x="480" y="610" width="445" height="65" rx="10" fill={descBg} stroke={descBorder} strokeWidth="1.5" />
        <text x={bx} y="634" fontSize="11" fill={muted}>•</text><text x={tx} y="634" fontSize="11" fill={muted}>Message others with shared values</text>
        <text x={bx} y="651" fontSize="11" fill={muted}>•</text>
        <text x={tx} y="651" fontSize="11" fill={muted}><tspan fontWeight="600" fill={purple}>Group chat</tspan><tspan> to discuss and vote together</tspan></text>

        {/* ======= PROFILE ======= */}
        <line x1="250" y1="737" x2="280" y2="737" stroke={ln} strokeWidth="1.5" />
        <rect x="280" y="718" width="135" height="38" rx="6" fill="white" stroke={descBorder} strokeWidth="1.5" />
        <text x="347" y="741" textAnchor="middle" fontSize="12" fill={deep}>Profile</text>
        <line x1="415" y1="737" x2="480" y2="737" stroke={ln} strokeWidth="1.5" />
        {/* desc: y=705 h=65 center=737 */}
        <rect x="480" y="705" width="445" height="65" rx="10" fill={descBg} stroke={descBorder} strokeWidth="1.5" />
        <text x={bx} y="729" fontSize="11" fill={muted}>•</text><text x={tx} y="729" fontSize="11" fill={muted}>User&apos;s information (values, interests, etc.)</text>
        <text x={bx} y="746" fontSize="11" fill={muted}>•</text><text x={tx} y="746" fontSize="11" fill={muted}>Activity log (posts, comments, likes)</text>
      </svg>
    </div>
  )
}
