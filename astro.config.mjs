import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://acre.homes',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
