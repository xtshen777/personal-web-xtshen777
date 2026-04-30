import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const dmSans = localFont({
  src: '../public/fonts/dm-sans.woff2',
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = localFont({
  src: '../public/fonts/inter.woff2',
  variable: '--font-inter',
  display: 'swap',
})

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Lucia Shen | Portfolio',
  description: 'Product Manager · UX/UI Designer · Marketer',
  icons: {
    icon: [
      { url: `${base}/favicon-dark.png`, type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="bg-white font-sans">
        {children}
      </body>
    </html>
  )
}
