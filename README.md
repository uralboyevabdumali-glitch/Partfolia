# Abdumalik Uralboyev — Portfolio

A premium, dark-luxury personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, React Icons, React Router DOM and React Toastify.

All markup, sections and logic live in a single file: `src/App.jsx`.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes / things to personalize

- **CV file**: the "Download CV" button links to `/Abdumalik_Uralboyev_CV.pdf`.
  Add your real CV file to the `public/` folder with that exact name (or update
  the `href` in the Hero section of `App.jsx`).
- **Portrait**: the hero and about sections currently use a styled monogram
  placeholder ("AU") instead of a photo. Swap it for a real `<img>` once you
  have a portrait you're happy with.
- **Project links**: each project's "Live" button currently points to `#`.
  Replace with real deployed URLs once your projects are live. The "Code"
  button links to your GitHub profile — point it at individual repos if you'd
  like.
- **Telegram / social links**: update the URLs in the `SOCIAL_LINKS` array
  near the top of `App.jsx` if any of your handles change.

## Tech stack

- React 18 + Vite
- Tailwind CSS 3 (custom palette in `tailwind.config.js`)
- Framer Motion (scroll reveals, page transitions, hover/tap animations)
- React Icons (`react-icons/fa`, `react-icons/si`)
- React Router DOM (single route, wraps the page)
- React Toastify (contact form submit notification)
