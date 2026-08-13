/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          900: '#09090b',
          800: '#121215',
          700: '#1a1a1e',
          600: '#27272a',
        }
      }
    },
  },
  plugins: [],
}
