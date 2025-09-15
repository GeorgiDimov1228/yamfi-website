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
        primary: '#22c55e',        // Fresh green
        'primary-dark': '#16a34a', // Darker green
        secondary: '#fbbf24',       // Golden yellow
        accent: '#f59e0b',          // Amber
        'brand-green': '#059669',
        'brand-yellow': '#fde047',
        'brand-light': '#ecfccb',
      },
    },
  },
  plugins: [],
}

export default config