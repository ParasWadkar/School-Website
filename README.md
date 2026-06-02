# H.S.R.D Public School Website

Static website for **H.S.R.D Public School**, Lauriya, West Champaran, Bihar.  
Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

---

## Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm (comes with Node.js)

---

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/ParasWadkar/School-Website.git
cd School-Website
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the dev server**

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The page hot-reloads as you edit files.

---

## Build for Production

```bash
npm run build
```

The output goes into the `dist/` folder. Upload that folder to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages).

To preview the production build locally before deploying:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/       # Header, Footer
├── content/
│   ├── notices/      # School notices (Markdown files)
│   ├── events/       # Upcoming events (Markdown files)
│   └── gallery/      # Photo gallery (albums.json)
├── layouts/          # Base HTML layout
└── pages/            # One .astro file per page
public/               # Static assets (logo, images, robots.txt)
```

### Adding a Notice

Create a new `.md` file in `src/content/notices/`:

```markdown
---
title: "Your Notice Title"
date: 2026-06-10
---

Notice body text goes here.
```

### Adding an Event

Create a new `.md` file in `src/content/events/`:

```markdown
---
title: "Event Name"
date: 2026-08-15
location: "School Grounds"
---

Event description goes here.
```

---

## Before Going Live

- [ ] Replace `YOUR_FORM_ID` in `src/pages/admissions.astro` and `src/pages/contact.astro` with your [Formspree](https://formspree.io) form ID
- [ ] Fill in the board affiliation (CBSE / ICSE / Bihar State Board) in `src/pages/about.astro`
- [ ] Add real campus photos to `public/gallery/` and update `src/content/gallery/albums.json`
- [ ] Update the Google Maps embed in `src/pages/contact.astro` with the school's exact location

---

## Contact

**Phone:** 8210853223  
**Email:** infohsrdgroupofinst53@gmail.com  
**School:** H.S.R.D Public School, Lauriya, West Champaran, Bihar
