import { assetPath } from '@/lib/asset-path'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen hero-gradient flex items-center pt-16"
    >
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <p className="text-muted text-sm tracking-widest uppercase mb-4">
              Hello, I&apos;m
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-8xl leading-tight mb-6">
              <span className="gradient-text">Lucia Shen</span>
            </h1>
            <p className="text-deep text-lg md:text-xl lg:text-2xl font-medium mb-4">
              Product Manager · UX/UI Designer · Marketer
            </p>
            <p className="text-muted text-base md:text-lg max-w-xl mb-10 mx-auto md:mx-0">
              2+ years building user-centered products across US, Canada &amp; Brazil.
              I turn complex problems into clear, impactful experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={`${BASE}/#projects`}
                className="px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href={`${BASE}/#contact`}
                className="px-8 py-3 rounded-full gradient-border-mist text-deep font-medium hover:opacity-80 transition-opacity"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath('/self.png')}
              alt="Lucia Shen"
              className="w-48 sm:w-64 md:w-72 lg:w-96 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
