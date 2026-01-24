# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a vacation rental landing page for "Studio La Franqui" - a beachside studio apartment in La Franqui, France. It's a static marketing site built with Next.js and Tailwind CSS v4.

## Commands

- `npm run dev` - Start development server on port 3001
- `npm run build` - Build static export to `out/` directory
- `npm run lint` - Run ESLint

**Note**: The user runs the dev server themselves. It's available at http://localhost:3001/

## Architecture

- **Static Export**: Configured for static site generation (`output: 'export'` in next.config.ts). No server-side features.
- **Single Page**: All content is on the home page (`app/page.tsx`), composed of section components.
- **Section Components**: Located in `components/` - Hero, About, Gallery, Amenities, Location, Info, Footer.
- **Styling**: Tailwind CSS v4 with PostCSS. Global styles in `app/globals.css`.
- **Path Aliases**: Use `@/*` to import from project root (e.g., `@/components/Hero`).
- **Images**: Static images in `public/images/`. Uses unoptimized images due to static export.

## Language

The site content is in French. Maintain French text in UI components.
