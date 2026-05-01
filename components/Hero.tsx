import { assetPath } from '@/lib/asset-path'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen hero-gradient flex items-center pt-16"
    >
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-muted text-sm tracking-widest uppercase mb-4">
              Hello, I&apos;m
            </p>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-tight mb-6">
              <span className="gradient-text">Lucia Shen</span>
            </h1>
            <p className="text-deep text-xl md:text-2xl font-medium mb-4">
              Product Manager · UX/UI Designer · Marketer
            </p>
            <p className="text-muted text-lg max-w-xl mb-10">
              2+ years building user-centered products across US, Canada &amp; Brazil.
              I turn complex problems into clear, impactful experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#contact"
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
              className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
