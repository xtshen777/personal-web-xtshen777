import type { Metadata } from 'next'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/inter'
import './globals.css'

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
    <html lang="en">
      <body className="bg-white font-sans">
        {children}
      </body>
    </html>
  )
}
