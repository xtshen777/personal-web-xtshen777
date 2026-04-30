import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mist: '#F7F5FF',
        deep: '#1A1A2E',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        display: ['DM Sans Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
