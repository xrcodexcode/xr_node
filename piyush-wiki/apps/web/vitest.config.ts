import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    include: ['src/**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@piyush-wiki/types': path.resolve(__dirname, '../../packages/types/src/index.ts'),
      '@piyush-wiki/shared': path.resolve(__dirname, '../../packages/shared/src/index.ts'),
      '@piyush-wiki/design-tokens': path.resolve(__dirname, '../../packages/design-tokens/src/index.ts'),
    },
  },
});
