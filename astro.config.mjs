import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Host-agnostic config so the same repo can deploy to multiple hosts:
//  - GitHub Pages (served at /hidden-soca): the Actions workflow sets BASE_PATH + SITE_URL.
//  - Cloudflare Pages / Netlify (served at root): no env vars -> base defaults to "/".
// When you settle on a custom domain, point SITE_URL (or the default below) at it.
const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE_URL ?? 'https://hidden-soca.pages.dev';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
