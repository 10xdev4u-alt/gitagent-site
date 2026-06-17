import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://10xdev4u-alt.github.io',
  base: '/gitagent',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
