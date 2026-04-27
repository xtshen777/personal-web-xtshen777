export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-mist flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
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
    </section>
  )
}
