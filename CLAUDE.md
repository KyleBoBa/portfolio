# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site built with Next.js, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

Add shadcn components:
```bash
pnpm dlx shadcn@latest add <component>
```

## Architecture

- **App Router** — all routes live under `app/`. `app/layout.tsx` is the root layout; `app/page.tsx` is the home page.
- **Styling** — Tailwind v4 configured entirely via CSS (no `tailwind.config.ts`). Theme tokens and dark mode CSS variables are in `app/globals.css` under `@theme inline {}` and `:root` / `.dark`.
- **shadcn/ui** — components added via CLI land in `components/ui/`. Uses Radix UI primitives under the hood.
- **Utilities** — `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional class merging.

## Key conventions

- Use semantic CSS tokens (`bg-background`, `text-muted-foreground`, etc.) rather than raw color values so dark mode works automatically.
- Custom theme extensions belong in `globals.css` `@theme inline {}` block, not a separate config file.

## Skills

- `/frontend-design` — use when building new UI components or pages for design guidance.
