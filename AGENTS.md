<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## About this project

The warning above is about Next.js **API versions** (this repo is on Next 16). At runtime the site is not a Next.js server: it is a fully **static export**.

- `output: "export"` in `next.config.mjs`: `next build` prerenders every page to plain HTML in `out/`, and Netlify serves those files as-is. No Node server runs in production.
- Only build-time features apply: Server Components, `generateStaticParams`, `generateMetadata`, and route handlers marked `export const dynamic = "force-static"` (e.g. `src/app/sitemap.xml/route.js`, which is emitted as a static `sitemap.xml`). Runtime-only features (middleware, ISR/`revalidate`, Server Actions, dynamic route handlers, `cookies()`/`headers()`, image optimization) are not available.
- Content comes from YAML files in `data/`. GitHub stats are fetched at build time with `ENV_GITHUB_TOKEN` and cached in `data/cache/` (gitignored).
