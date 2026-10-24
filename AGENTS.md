
## SEO/AEO rules
- `scripts/seo-data.mjs` is the single source of truth for business facts (name, address, phone, hours, rating, services, FAQ). Run `node scripts/build-static.mjs` after any change: it regenerates index.html (static fallback + JSON-LD), the static pages in public/<slug>/, sitemap.xml, robots.txt, llms.txt and llms-full.txt so they never drift.
- Hours are Tuesday–Saturday 9:00–17:00; domain is https://pigmentariuspr.com — keep React copy (Footer, ContactSection) consistent with seo-data.
- No superlative claims ("el mejor", "#1") or invented prices/medical guarantees without a citable source; prices are "Llama para precios y consulta".
- Static SEO pages must not use React route names (/tienda, /servicios, legal routes stay React).
