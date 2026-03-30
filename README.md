# Appscrip Task - Next.js E-Commerce Frontend

This is a pixel-perfect, fully responsive Product Listing Page (PLP) built for the Appscrip frontend evaluation.

## Architectural Highlights (Evaluation Criteria Addressed)

* **Server-Side Rendering (SSR):** Product data is fetched dynamically on the server (`app/page.tsx`) to ensure optimal initial load times and SEO compliance, passing the payload to interactive client components.
* **Zero-JS UI Components:** To satisfy the "minimum pre-built JS packages" and "Min DOM size" requirements, the mobile footer and filter sidebars are built using native HTML `<details>` and `<summary>` tags. This achieves buttery-smooth accordions with zero JavaScript overhead.
* **Technical SEO:** Includes dynamic `Metadata` generation, semantic HTML (`<h1>` for Hero, `<h2>` for products), optimized Next.js `<Image>` tags with `alt` attributes, and injected JSON-LD schema for e-commerce search indexing.
* **Resilient Data Fetching:** Utilizes `dummyjson` to simulate an external microservice, featuring error boundary fallbacks to prevent build crashes during CI/CD deployments.
* **Responsive CSS Grid:** Fluidly transitions from a 1-column/2-column mobile layout to a 4-column desktop grid.

## Tech Stack
* Next.js (App Router)
* React 
* Tailwind CSS
* TypeScript

## Getting Started

run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

