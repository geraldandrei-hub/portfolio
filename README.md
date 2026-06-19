# Gerald Villa — Portfolio

Personal portfolio site built with [Astro](https://astro.build). Static, fast, and
content-driven — all text and projects live in [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Develop

```sh
npm install      # once
npm run dev      # start local server at http://localhost:4321
```

## Build

```sh
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/
├── data/portfolio.ts   # all content (edit this to update the site)
├── styles/global.css   # design tokens + styles
├── layouts/Layout.astro
├── components/         # Header, Footer
└── pages/              # index, work, about, contact, 404
```

The contact form is delivered by [Web3Forms](https://web3forms.com).
