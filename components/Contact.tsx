const CONTACT_LINKS = [
  { label: 'Email', value: 'xtshen777@gmail.com', href: 'mailto:xtshen777@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/xtshen', href: 'https://linkedin.com/in/xtshen' },
  { label: 'Phone', value: '(647) 832-5782', href: 'tel:+16478325782' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-mist">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-deep mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted text-base md:text-lg mb-10 md:mb-14 max-w-lg">
          Open to new opportunities, collaborations, and interesting conversations.
          Drop me a line.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            {CONTACT_LINKS.map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-deep font-medium hover:opacity-70 transition-opacity"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          <form
            action="mailto:xtshen777@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep placeholder-muted focus:outline-none focus:border-violet-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep placeholder-muted focus:outline-none focus:border-violet-400 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep placeholder-muted focus:outline-none focus:border-violet-400 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-20 pt-8 border-t border-white/60 text-center text-muted text-sm">
          © 2026 Lucia Shen · Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </section>
  )
}
