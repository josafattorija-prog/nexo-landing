# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing landing site for **Nexo AI** (nexoai.mx), a real-estate CRM product. This repo is
*only* the public marketing site (Next.js App Router) — the actual product/CRM lives at
`app.nexoai.mx` and is a separate codebase. Links to sign-in (`https://app.nexoai.mx/sign-in`)
and the lead-capture endpoint (`https://app.nexoai.mx/api/public/saas-lead`) point out to that
other app.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite in this repo. There is no CI config checked in; deploys currently happen
by pushing to `main` (Vercel picks it up), sometimes via one-off shell scripts at the repo root
(e.g. `deploy-seo.sh`) that build, commit, and push a specific set of files.

## Architecture

**Stack:** Next.js 14 (App Router) + React 18 + TypeScript (strict) + Tailwind, with
`framer-motion` for animation and `resend` for transactional email. Path alias `@/*` maps to
the repo root (see `tsconfig.json`).

**Pages** live under `app/<route>/page.tsx` (Spanish route names: `/ia`, `/modulos`, `/precios`,
`/comparativa`, `/propiedades`, `/contacto`, `/sobre-nosotros`, `/aviso-de-privacidad`,
`/terminos`). Each page is a thin composition of components from `components/`. The home page
(`app/page.tsx`) reuses several of the same section components that appear on their own
dedicated pages, in a `preview` variant — e.g. `<AIFeatures preview />` renders a condensed
teaser of the same component the full `/ia` page renders un-abridged. When adding a new
section component that should appear both as a homepage teaser and as its own page, follow this
`preview` boolean-prop pattern rather than writing two components.

**`app/sitemap.ts`** is the sitemap source of truth and is *not* auto-derived from the `app/`
tree — it has an explicit route list. Adding a new page requires manually adding an entry there
(the file says so directly). `app/robots.ts` points at it.

**Legal pages** (`/terminos`, `/aviso-de-privacidad`) render through the shared
`components/legal-page.tsx` layout, which takes structured `sections: LegalSection[]` data
rather than freeform markup. It is deliberately a Server Component (not `"use client"`) because
its content must be present in the server-rendered HTML for Meta's business-verification
crawler and search engines that don't execute JS — don't convert it to a client component.

**`lib/business.ts`** is the single source of truth for the business's legal identity (legal
name, RFC, address, phone/WhatsApp, emails). It exists because Meta rejected business
verification until the site's displayed info exactly matched the SAT tax records and Meta
Business Manager. Any change to these values must be mirrored in Meta Business Info, and the
file's own header comments explain the constraint — read them before editing.

**Lead capture (`app/actions/contact.ts`, `app/actions/quick-contact.ts`)** are Next.js Server
Actions (`"use server"`), not API routes. Each submission does two independent, best-effort
things in sequence: (1) POST the lead server-to-server to the CRM at
`app.nexoai.mx/api/public/saas-lead` (no CORS involved since it's server-to-server), and (2)
send a notification email via Resend (`RESEND_API_KEY` env var) to `contacto@nexoai.mx`. The
action only reports failure if *both* fail — either channel succeeding is enough. `contact.ts`
backs the full form (`/contacto`); `quick-contact.ts` backs the shorter inline form used on the
homepage. Keep both forms' validation (required fields, email regex) mirrored if one changes.

**Theming** is CSS-variable-based, not Tailwind's dark-mode classes. `app/globals.css` defines
all design tokens (colors, gradients, shadows) on `:root` and overrides them under
`[data-theme="light"]` (the app is dark-by-default). Tailwind's `tailwind.config.ts` colors
(`bg`, `surface`, `primary`, `accent`, `text`, etc.) all resolve to `var(--token)`, so new UI
should consume the existing Tailwind color names / CSS variables rather than hardcoding hex
values. Theme state is a plain React context (`components/theme-provider.tsx`) backed by
`localStorage["nexo-theme"]`, applied via `data-theme` on `<html>`. `app/layout.tsx` inlines a
small blocking `<script>` that sets `data-theme` from `localStorage` before hydration to avoid
a flash of the wrong theme — any change to the theme mechanism needs to keep that inline script
in sync with `theme-provider.tsx`. Theme-dependent assets follow a `-light`/`-dark` filename
suffix convention with both versions rendered and toggled via CSS (see the logo `<img>` pair in
`components/nav.tsx`).

**Animation utilities** live in `components/atoms.tsx`: `useInView` (IntersectionObserver hook)
and a `Reveal` wrapper component are the shared building blocks most section components use for
scroll-triggered entrance animations, instead of each component re-implementing observer logic.

**Page transitions** are handled globally by `components/page-transition.tsx`, wrapped around
`{children}` in `app/layout.tsx` — it keys a wrapper div on `usePathname()` to re-trigger a CSS
fade on route change. This runs for every page; don't add a second, per-page transition
mechanism.

## Content/business notes

- All copy is in Spanish (`es-MX`); metadata, OG tags, and `<html lang>` follow suit.
- The product being marketed is a CRM that publishes listings to multiple real-estate portals
  (see `/comparativa`, `/modulos` for the feature claims) — copy consistency with `/precios` and
  `/comparativa` matters since they're compared against competitors there.
