# GGE Enterprise — company site

The public website for GGE Enterprise. GGE is a service company: we run
the complete operating engine for retail businesses — Royal Inventory
(inventory and sales) and Gendal (the marketplace built on top of it),
together the Total Retail Engine — starting in Gambian retail.

## Pages

- `/` — company home: what we do, who we are, the leadership team
- `/royal-marketplace` — the Total Retail Engine: Royal Inventory and Gendal
- `/talk` — contact

## Stack

Next.js (App Router, static prerender), TypeScript, Tailwind CSS.
No environment variables are required.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # production build
npm start       # serve it
```

The site is fully static — every route prerenders at build time, so it
can be hosted on any static-capable platform.
