import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The renderer is lazy-loaded after hydration and only on capable desktop devices.
    chunkSizeWarningLimit: 900,
  },
})
