import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'optional',
  preload: false,
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Lucia Shen | Portfolio',
  description: 'Product Manager · UX/UI Designer · Marketer',
  icons: {
    icon: [
      { url: '/favicon-light.png', type: 'image/png' },
      { url: '/favicon-dark.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
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
