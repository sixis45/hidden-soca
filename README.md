# Hidden Soča

Map-first static guide to the Soča Valley & western Slovenia — built with [Astro](https://astro.build). Off-the-beaten-path waterfalls, gorges, wild swimming and WWI sites, mapped and blogged for SEO.

See `hidden-soca-handoff.md` for the full project background and strategy.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static site -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data/spots.json          # map pins — name, type, lat/lng, blurb, linked post
  components/Map.astro      # Leaflet + OpenTopoMap, filterable by category
  layouts/BaseLayout.astro  # head, SEO meta, Open Graph, JSON-LD injection, fonts
  content/
    config.ts               # blog collection schema (title, category, faqs, related…)
    blog/*.md               # 12 posts
  pages/
    index.astro             # map-first homepage
    blog/index.astro        # blog hub
    blog/[slug].astro       # post template — Article + FAQPage JSON-LD, related, CTA
public/
  robots.txt, favicon.svg
```

`@astrojs/sitemap` generates `sitemap-index.xml` on build.

## Adding a blog post

Drop a new `.md` file in `src/content/blog/`. Frontmatter:

```yaml
---
title: "..."
description: "..."
category: "Planning" | "Waterfalls" | "Wild swimming" | "Gorges" | "WWI history" | "Activities"
pubDate: 2026-04-01
faqs:
  - q: "Question?"
    a: "Answer."          # rendered as FAQ + FAQPage schema
related: ["other-slug"]   # related-posts block
---
```

## Adding a map pin

Add an object to `spots` in `src/data/spots.json`. Set `type` to a category id
and `post` to a blog slug to link the popup to a guide.

## Before go-live

- Update the domain in `astro.config.mjs` (`site:`) and `public/robots.txt` — placeholder is `hiddensoca.com`.
- If deploying to a project page (`user.github.io/repo`), also set `base: '/repo'` in `astro.config.mjs`.
- **Verify GPS coordinates on the ground** — pin positions in `spots.json` are approximate.
- Final fact-check pass on all posts (factual accuracy is the known weak point — see handoff §4).

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on push to `main`.
In the repo: **Settings → Pages → Source: GitHub Actions**.
