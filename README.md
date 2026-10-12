# Chirag Ravishankar — Portfolio

Personal portfolio site built with React + Vite, deployed on Vercel.

A playful "desktop" design: macOS-style menu bar, draggable objects on a sky-gradient hero, a dock of links, and a light/dark theme toggle (follows the system setting by default).

## Editing content

- Text, experience, stats and links live in `src/data.js`.
- Images live in `src/assets/`.
- Styles and both colour themes live in `src/styles.css` (tokens at the top).

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel auto-deploys on every push to `main`.
