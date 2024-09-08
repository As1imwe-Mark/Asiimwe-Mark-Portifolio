import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'part:@sanity/base/schema-creator',
        'all:part:@sanity/base/schema-type',
      ],
    },
  },
});
