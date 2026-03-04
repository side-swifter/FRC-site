# FRC Team 11179 Website (TypeScript)

Multi-page FRC website built with Vite + TypeScript.

## Pages

- `index.html` (Home)
- `team.html`
- `outreach.html`
- `sponsors.html`
- `join.html`

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy options

### Option 1: GitHub Pages (automatic)

This repo includes `.github/workflows/deploy.yml`.

1. Push this project to a GitHub repo.
2. In GitHub: `Settings -> Pages`.
3. Set Source to `GitHub Actions`.
4. Push to `main` branch.

GitHub Actions will build and publish `dist/` automatically.

### Option 2: Netlify or Vercel

- Build command: `npm run build`
- Publish directory: `dist`

## Assets

Team assets are stored in `public/assets/` and copied directly into builds.
