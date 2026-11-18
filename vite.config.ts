import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE can be overridden for sub-path previews (e.g. BASE=./ npm run build)
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE ?? '/',
  build: { target: 'es2019', cssCodeSplit: true, sourcemap: false },
});
