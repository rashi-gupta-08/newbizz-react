# Newbizz — React/Next.js rebuild

A from-scratch Next.js 14 (App Router) rebuild of the original Framer-exported
`newbizz1` landing page, with a new working contact form feature, scroll
animations (Framer Motion), and multi-page routing.

## What's new vs. the original

- **Full React/Next.js codebase** (the original was a single static,
  Framer-generated `index.html` — not hand-editable component code).
- **Multi-page routing**: `/`, `/services`, `/pricing`, `/contact`.
- **Working contact form** at `/contact`, with client + server-side
  validation (`src/app/api/contact/route.ts`), inline error states, and an
  animated success confirmation.
- **Animations**: scroll-reveal sections, sticky nav with animated active-tab
  underline, a drifting gradient orb in the hero, and a marquee keyword strip
  — all via Framer Motion / Tailwind, and all respecting
  `prefers-reduced-motion`.

## Run it locally

You'll need Node.js 18.17+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Wiring up real email delivery (optional)

Right now `src/app/api/contact/route.ts` validates submissions and logs them
server-side as a stub. To actually receive emails, plug in a provider such as
[Resend](https://resend.com) or SendGrid inside that route — both have a
two-line `send()` call once you add an API key as an environment variable.

## Deploying to Vercel

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Newbizz React rebuild"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Click **Import** next to your new repository.
4. Vercel auto-detects Next.js — leave the default build settings and click
   **Deploy**.
5. You'll get a live URL (e.g. `your-repo.vercel.app`) in about a minute.

No environment variables are required for the default build; add one only if
you wire up an email provider above.
