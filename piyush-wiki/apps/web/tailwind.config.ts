import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wiki: {
          bg: 'var(--wiki-bg)',
          surface: 'var(--wiki-surface)',
          text: 'var(--wiki-text)',
          muted: 'var(--wiki-muted)',
          border: 'var(--wiki-border)',
          accent: 'var(--wiki-accent)',
        },
        node: {
          moc: '#2563eb',
          atomic: '#16a34a',
          raw: '#6b7280',
          ghost: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        serif: ['var(--font-serif)', 'Lora', 'Merriweather', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
