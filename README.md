
Project Link :ellty-frontend-test-orpin.vercel.app

# Ellty – Pages Selector (Technical Test)

This repository contains my solution for **Round 1 – Quick form styling** from Ellty’s frontend technical test.  
The goal was to recreate a Figma component (pages selector with checkboxes and a “Done” button) as close to pixel-perfect as possible.

---

##  What this project does

- Recreates the given Figma design:
  - Card with **“All pages”** and **Page 1–4** rows
  - Custom rounded **checkboxes** with tick, hover & active states
  - Full-width **“Done”** button with hover state
- Basic interaction:
  - Clicking **All pages** toggles all page checkboxes
  - Individual page checkboxes can be toggled independently
  - Clicking **Done** logs the selected pages to the console
- No external UI libraries or CSS frameworks – only **Next.js + plain CSS**.

---

##  Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- React
- TypeScript
- Vanilla CSS (`globals.css`)

---

##  Project structure

```text
app/
  ├─ layout.tsx        # Root layout
  ├─ page.tsx          # Main page with card and logic
  └─ globals.css       # Global + component styles
components/
  └─ Checkbox.tsx      # Reusable custom checkbox component
