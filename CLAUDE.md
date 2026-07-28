# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server (Turbopack by default in Next 16)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (flat config, extends eslint-config-next)
```

No test runner is configured.

### Deployment

Deployment is container-based and driven by branch:

- `build.sh` inspects the current git branch. On `production` or `dev` it pulls, runs `docker system prune -a -f`, then `docker compose up -d --build`.
- `Dockerfile` is **nginx-only** (`FROM nginx:alpine`) — it copies the repo into `/usr/share/nginx/html` and uses `nginx/conf.d/default.conf`. It does **not** run `next build`. The container serves the static files at the repo root (`index.html`, `eula.html`, `privacy.html`, `css/`, `js/`, `public/`), not the Next.js app.
- nginx terminates TLS for `engchatt.com` using certs mounted from the host at `/etc/ssl/ec-landingpage.{pem,key}` and rewrites `/eula` → `/eula.html`, `/privacy` → `/privacy.html`.

## Architecture

This repo contains **two parallel landing-page implementations** that coexist in the same directory — be careful which one you are editing:

1. **Next.js 16 App Router app** (`app/layout.tsx`, `app/page.tsx`, `app/globals.css`)
   - React 19, TypeScript strict, Tailwind CSS v4 via `@tailwindcss/postcss` (configured by `@import "tailwindcss"` in `globals.css` — no `tailwind.config.*`).
   - Path alias `@/*` → repo root (see `tsconfig.json`).
   - Images in `public/` are served by `next/image`.
   - This is what `npm run dev` / `npm run build` exercises.

2. **Legacy static site** (`index.html`, `eula.html`, `privacy.html`, `css/index.css`, `js/{action,env,index}.js`)
   - Plain HTML/CSS/JS, no build step.
   - **This is what the production Docker/nginx setup actually serves.** The Next.js build output is not copied into the nginx image.

When modifying the live site, edit the HTML/CSS/JS files and verify under nginx. When iterating on the Next.js rebuild, edit `app/` and use `npm run dev`. Do not assume a change in one automatically reflects in the other.

### Shared assets

`public/` holds images, fonts (Roboto), and the EULA/Privacy PDFs used by both implementations. The static HTML references them as `public/...` (relative); the Next.js app references them as `/...` (served from the public root by Next).
