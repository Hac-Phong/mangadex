import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f0f1f2',
        orang: '#ff6740',
        accent_hover: '#E8EAEB',
        but: '#888',
      },
      fontFamily: {
        spartan: ['--font-spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
