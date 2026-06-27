import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages project site: https://sixis45.github.io/hidden-soca
// When you move to a custom domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://sixis45.github.io',
  base: '/hidden-soca',
  integrations: [sitemap()],
});
