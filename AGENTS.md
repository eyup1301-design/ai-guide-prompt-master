<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single product: **Wrompt** (`ai-guide-prompt-master`), a bilingual (TR/EN) Next.js 16 App Router app (JavaScript, React 19, Tailwind v4) that recommends the best AI tool for a task and generates optimized prompts via Google Gemini. There is one service; standard commands live in `package.json` (`dev`, `build`, `start`, `lint`). There is no automated test framework — verification is manual in the browser.

- Dev server: `npm run dev` (Turbopack, http://localhost:3000). Dependencies are installed by the startup update script.
- Runtime secrets live in `.env.local` (gitignored); none are committed. The app expects `GEMINI_API_KEY` (AI generation in `/api/optimize-prompt`, `/api/recommend-tool`, `/api/classify-task`), `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (used by `middleware.js` rate limiter and `/api/feedback`), and optional `FEEDBACK_ADMIN_KEY`.
- Non-obvious gotcha: `middleware.js` runs an Upstash rate limiter BEFORE the handler on the three AI `/api/*` routes. Without Upstash env vars those routes return HTTP 500 (`Failed to parse URL from /pipeline`) even before Gemini is reached. Static pages, guides (`/rehberler/*`, `/en/guides/*`), and the entire local task→AI recommendation + guided-questions flow on the home page work with NO env vars — only the final "optimize" generation needs the external keys.
- `npm run lint` currently reports many pre-existing `react/no-unescaped-entities` errors and a few `@next/next/no-img-element` warnings. These are the repo's existing state, not an environment problem; `next build` still succeeds.
