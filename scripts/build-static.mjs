// Generates crawlable static pages, index.html fallback + JSON-LD, sitemap, robots and llms files.
// Run: node scripts/build-static.mjs
import fs from "node:fs";
import path from "node:path";
import { SITE, UPDATED, F, ADDRESS_LINE, SERVICES, HOME_FAQ, LEGAL, PAGES } from "./seo-data.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const pub = (p) => path.join(root, "public", p);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const bySlug = Object.fromEntries(PAGES.map((p) => [p.slug, p]));
const SALON_ID = `${SITE}/#salon`;
const city = (n) => (n === "Añasco" ? { "@type": "City", name: n, alternateName: "Anasco" } : { "@type": "City", name: n });
// Real Google review excerpts, copied verbatim from the React reviews section.
const reviewsSrc = fs.readFileSync(path.join(root, "src/components/ReviewsSection.tsx"), "utf8");
const REVIEWS = [...reviewsSrc.matchAll(/name: "([^"]+)",\s*text: \{ es: "([^"]+)"/g)].slice(0, 4).map((m) => ({ name: m[1], text: m[2] }));
const reviewsBlock = () => REVIEWS.length ? `<h2>Lo que dicen nuestras clientas</h2>
${REVIEWS.map((r) => `<blockquote><p>“${esc(r.text)}”</p><footer>— ${esc(r.name)}, Reseña de Google</footer></blockquote>`).join("\n")}
<p>Resumen: 4.8 estrellas en Google con más de 215 reseñas.</p>` : "";
const LOCAL_LINE = "Salón de belleza en Añasco (Anasco), Puerto Rico";

const faqLd = (faq) => ({ "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });

const CSS = `*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}body{margin:0;background:#FAF7F4;color:#1A1410;font:17px/1.65 Georgia,"Times New Roman",serif}
a{color:#A3165A}a:focus-visible{outline:3px solid #A3165A;outline-offset:2px}
.w{max-width:760px;margin:0 auto;padding:20px}header,footer{background:#1A1410;color:#FAF7F4}header a,footer a{color:#FAF7F4}
header .w{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}.brand{font-weight:700;text-decoration:none;font-size:18px}
h1{font-size:30px;line-height:1.2;margin:8px 0 16px}h2{font-size:23px;margin:32px 0 10px}h3{font-size:18px;margin:18px 0 4px}
.crumbs{font:14px/1.4 system-ui,sans-serif}.crumbs ol{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:6px}.crumbs li+li:before{content:"›";margin-right:6px}
.brief{background:#fff;border-left:4px solid #A3165A;padding:14px 16px;margin:0 0 16px}
img{max-width:100%;height:auto;display:block;border-radius:12px;margin:16px 0}
.box{background:#fff;border:1px solid #E0D0C4;padding:16px;border-radius:12px;font-family:system-ui,sans-serif;font-size:16px}
.btn{display:inline-block;min-height:44px;padding:11px 20px;margin:6px 8px 0 0;border-radius:999px;background:#A3165A;color:#fff;text-decoration:none;font:600 15px system-ui,sans-serif}
.btn.alt{background:#1A1410}footer{font:14px/1.6 system-ui,sans-serif;margin-top:40px}footer ul{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:14px}
@media(min-width:800px){h1{font-size:40px}}`;

const contactBoxEn = () => `<div class="box">
<p><strong>${esc(F.name)}</strong><br>${esc(ADDRESS_LINE)}<br>Phone: <a href="tel:${F.tel}">${F.phone}</a><br>Hours: Tuesday to Saturday, 9:00 AM – 5:00 PM (closed Sunday and Monday)<br>4.8 stars on Google (215+ real reviews). More than 20 years of experience.</p>
<a class="btn" href="tel:${F.tel}">Call now</a><a class="btn alt" href="${F.maps}" rel="noopener noreferrer">Get directions</a><a class="btn alt" href="${F.fresha}" rel="noopener noreferrer">Book on Fresha</a>
<p>Prices: call for pricing and a consultation.</p></div>`;

const contactBox = () => `<div class="box">
<p><strong>${esc(F.name)}</strong><br>${esc(ADDRESS_LINE)}<br>Teléfono: <a href="tel:${F.tel}">${F.phone}</a><br>Horario: ${esc(F.hours)}<br>4.8 estrellas en Google (215+ reseñas reales). Más de 20 años de experiencia.</p>
<a class="btn" href="tel:${F.tel}">Llamar ahora</a><a class="btn alt" href="${F.maps}" rel="noopener noreferrer">Cómo llegar</a><a class="btn alt" href="${F.fresha}" rel="noopener noreferrer">Reservar en Fresha</a>
<p>Precios: llama para precios y consulta.</p>
<p>Para reservar, llama durante el horario del salón o reserva en Fresha. Al confirmar tu cita te indicamos fecha, hora y cualquier preparación previa que necesites, y puedes hacernos todas tus preguntas antes de venir.</p></div>`;

const footer = () => `<footer><div class="w">
<p>© ${esc(F.name)} · ${esc(ADDRESS_LINE)} · <a href="tel:${F.tel}">${F.phone}</a></p>
<ul><li><a href="${SITE}/">Sitio principal</a></li><li><a href="${SITE}/servicios">Todos los servicios</a></li><li><a href="/beauty-salon-anasco-pr/" hreflang="en-US">English</a></li>${LEGAL.map(([h, l]) => `<li><a href="${SITE}${h}">${l}</a></li>`).join("")}<li><a href="${F.ig}" rel="noopener noreferrer">Instagram</a></li><li><a href="${F.fb}" rel="noopener noreferrer">Facebook</a></li></ul>
</div></footer>`;

function page(p) {
  const url = `${SITE}/${p.slug}/`;
  const en = p.lang === "en";
  const t = en ? { home: "Home", faq: "Frequently asked questions", visit: "Visit or call", more: "Learn more on the", site: "Pigmentarius website", all: "full list of services", rel: "Related pages:", crumbs: "Breadcrumbs", line: "Beauty salon in Añasco (Anasco), Puerto Rico" }
    : { home: "Inicio", faq: "Preguntas frecuentes", visit: "Visítanos o llama", more: "Conoce más en el", site: "sitio de Pigmentarius", all: "lista completa de servicios", rel: "Páginas relacionadas:", crumbs: "Migas de pan", line: LOCAL_LINE };
  const alt = p.slug.includes("anasco") || p.kind === "area" ? `${p.img[1]} (Anasco, PR)` : p.img[1];
  const alternates = p.en ? [["es-PR", url], ["en-US", `${SITE}/${p.en}/`]] : p.es ? [["en-US", url], ["es-PR", `${SITE}/${p.es}/`]] : [["es-PR", url]];
  const authority = p.authority ? `<h2>Por qué clientas de Añasco, Mayagüez y Rincón nos eligen</h2>
<ul><li>Más de 20 años de experiencia en cabello y cejas.</li><li>4.8 estrellas en Google con más de 215 reseñas.</li><li>Fundado por ${esc(F.founder)}.</li><li>Especialistas en cejas, microblading y maquillaje permanente.</li>${p.authority.map((a) => `<li>${esc(a)}</li>`).join("")}<li>${esc(ADDRESS_LINE)} · ${esc(F.hours)}.</li></ul>` : "";
  const main = p.kind === "service"
    ? { "@type": "Service", "@id": `${url}#service`, name: p.service, serviceType: p.service, description: p.desc, url, areaServed: ["Añasco", "Mayagüez", "Rincón", "Aguada", "Aguadilla", "San Germán"].map(city), provider: { "@id": SALON_ID } }
    : { "@type": "WebPage", "@id": `${url}#webpage`, name: p.title, description: p.desc, url, inLanguage: en ? "en-US" : "es-PR", about: { "@id": SALON_ID }, provider: { "@id": SALON_ID } };
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t.home, item: `${SITE}/` }, { "@type": "ListItem", position: 2, name: p.h1, item: url }] },
    main, faqLd(p.faq)] };
  const html = `<!doctype html>
<html lang="${en ? "en-US" : "es-PR"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${url}">
${alternates.map(([l, h]) => `<link rel="alternate" hreflang="${l}" href="${h}">`).join("\n")}
<link rel="icon" href="/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/images/og-pigmentarius.jpg">
<meta name="twitter:card" content="summary_large_image">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<header><div class="w"><a class="brand" href="${SITE}/">${esc(F.name)}</a><a href="tel:${F.tel}">${F.phone}</a></div></header>
<main class="w">
<nav class="crumbs" aria-label="${t.crumbs}"><ol><li><a href="${SITE}/">${t.home}</a></li><li aria-current="page">${esc(p.h1)}</li></ol></nav>
<h1>${esc(p.h1)}</h1>
${p.kind === "area" ? `<p><strong>${esc(t.line)}</strong></p>\n` : ""}${p.authority ? `<p><small>Por ${esc(F.name)} · Actualizado: 24 de octubre de 2026</small></p>\n` : ""}<p class="brief"><strong>${en ? "In short" : "En breve"}:</strong> ${esc(p.brief)}</p>
<img src="/images/${p.img[0]}.webp" alt="${esc(alt)}" width="640" height="800" loading="eager">
${p.sections.map(([h, ps]) => `<h2>${esc(h)}</h2>\n${ps.map((t) => `<p>${esc(t)}</p>`).join("\n")}`).join("\n")}
${authority}
${p.reviews ? reviewsBlock() : ""}
<h2>${en ? "Questions" : p.authority ? "Preguntas" : t.faq}</h2>
${p.faq.map(([q, a]) => `<h3>${esc(q)}</h3>\n<p>${esc(a)}</p>`).join("\n")}
<h2>${t.visit}</h2>
${en ? contactBoxEn() : contactBox()}
<p>${t.more} <a href="${SITE}/">${t.site}</a> ${en ? "and the" : "y la"} <a href="${SITE}/servicios">${t.all}</a>.</p>
${p.en ? `<p><a href="/${p.en}/" hreflang="en-US">English version</a></p>` : p.es ? `<p><a href="/${p.es}/" hreflang="es-PR">Versión en español</a></p>` : ""}
<p><strong>${t.rel}</strong></p>
<ul>${p.related.map((s) => `<li><a href="/${s}/">${esc(bySlug[s].h1)}</a></li>`).join("")}</ul>
</main>
${footer()}
</body>
</html>
`;
  fs.mkdirSync(pub(p.slug), { recursive: true });
  fs.writeFileSync(pub(`${p.slug}/index.html`), html);
}
PAGES.forEach(page);

// ---------- index.html ----------
const salon = {
  "@type": ["BeautySalon", "HairSalon"], "@id": SALON_ID, name: F.name, alternateName: F.alternateName, url: `${SITE}/`,
  image: `${SITE}/images/og-pigmentarius.jpg`, logo: `${SITE}/favicon.png`, telephone: F.tel, email: F.email,
  address: { "@type": "PostalAddress", streetAddress: "2700 Plaza del Valle Mall, Suite 1", addressLocality: "Añasco", addressRegion: "PR", postalCode: "00610", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: F.lat, longitude: F.lng },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "17:00" }],
  areaServed: ["Añasco", "Mayagüez", "Rincón", "Aguada", "Aguadilla", "San Germán", "Las Marías"].map(city),
  review: REVIEWS.map((r) => ({ "@type": "Review", author: { "@type": "Person", name: r.name }, reviewBody: r.text, publisher: { "@type": "Organization", name: "Google" } })),
  sameAs: [F.ig, F.fb, F.fresha],
  aggregateRating: { "@type": "AggregateRating", ratingValue: F.rating, reviewCount: F.reviews, bestRating: "5" },
  founder: { "@type": "Person", name: F.founder },
  knowsAbout: SERVICES.flatMap((c) => c.items.map((i) => i[0])),
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Servicios", itemListElement: SERVICES.map((c) => ({ "@type": "OfferCatalog", name: c.cat, itemListElement: c.items.map(([n, d]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n, description: d, provider: { "@id": SALON_ID } } })) })) },
};
const homeLd = { "@context": "https://schema.org", "@graph": [salon, { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: F.name, inLanguage: "es-PR", publisher: { "@id": SALON_ID } }, faqLd(HOME_FAQ)] };
const areas = PAGES.filter((p) => p.kind === "area");
const svcPages = PAGES.filter((p) => p.kind === "service");
const fallback = `<main id="static-fallback" style="max-width:760px;margin:0 auto;padding:20px;background:#FAF7F4;color:#1A1410;font:17px/1.6 Georgia,serif">
<h1>Salón de belleza en Añasco, Puerto Rico: cabello, cejas, microblading y láser</h1>
<p><strong>${LOCAL_LINE}</strong></p>
<p>${esc(F.name)} es un salón especializado en cabello y cejas en Plaza del Valle Mall, Añasco, con más de 20 años de experiencia y 4.8 estrellas en Google (215+ reseñas). Fundado por ${esc(F.founder)}. Llama al <a href="tel:${F.tel}">${F.phone}</a> para precios y consulta.</p>
<h2>Datos rápidos</h2>
<ul><li>Dirección: ${esc(ADDRESS_LINE)}</li><li>Teléfono: <a href="tel:${F.tel}">${F.phone}</a></li><li>Horario: ${esc(F.hours)}</li><li>Calificación: 4.8 estrellas en Google (215+ reseñas)</li><li><a href="${F.maps}" rel="noopener noreferrer">Cómo llegar en Google Maps</a></li><li><a href="${F.fresha}" rel="noopener noreferrer">Reservar en Fresha</a></li></ul>
<h2>Servicios</h2>
${SERVICES.map((c) => `<h3>${esc(c.cat)}</h3><ul>${c.items.map(([n, d]) => `<li><strong>${esc(n)}</strong>: ${esc(d)}</li>`).join("")}</ul>`).join("\n")}
<p>Guías: ${svcPages.map((p) => `<a href="/${p.slug}/">${esc(p.service)}</a>`).join(" · ")}</p>
<h2>Preguntas frecuentes</h2>
${HOME_FAQ.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join("\n")}
${reviewsBlock()}
<h2>También servimos a</h2>
<ul>${areas.map((p) => `<li><a href="/${p.slug}/">${esc(p.town)}</a></li>`).join("")}<li>Aguada (aprox. 20 min)</li><li>Aguadilla (aprox. 35–40 min)</li><li>San Germán (aprox. 30 min)</li><li>Las Marías</li></ul>
<p><a href="/beauty-salon-anasco-pr/" hreflang="en-US">English: Beauty salon in Añasco (Anasco), Puerto Rico</a></p>
<p>${LEGAL.map(([h, l]) => `<a href="${h}">${l}</a>`).join(" · ")}</p>
</main>`;
const homeTitle = "Pigmentarius Hair & Brow Salon | Salón de Belleza en Añasco (Anasco), PR – Cejas, Microblading, Láser, Keratina";
const homeDesc = "Salón en Añasco (Anasco) cerca de Mayagüez y Rincón: cabello, cejas, microblading, láser y keratina. 4.8★, 20+ años. Llama al (787) 826-1684.";
const index = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <title>${esc(homeTitle)}</title>
    <meta name="description" content="${esc(homeDesc)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta property="og:title" content="${esc(homeTitle)}" />
    <meta property="og:description" content="${esc(homeDesc)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE}/" />
    <meta property="og:image" content="${SITE}/images/og-pigmentarius.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="es_PR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(homeTitle)}" />
    <meta name="twitter:description" content="${esc(homeDesc)}" />
    <meta name="twitter:image" content="${SITE}/images/og-pigmentarius.jpg" />
    <link rel="canonical" href="${SITE}/" />
    <link rel="alternate" hreflang="es-PR" href="${SITE}/" />
    <script type="application/ld+json">${JSON.stringify(homeLd)}</script>
  </head>
  <body>
    <div id="root">${fallback}</div>
    <noscript><p style="text-align:center;padding:12px">Este sitio funciona mejor con JavaScript. Llama al <a href="tel:${F.tel}">${F.phone}</a>.</p></noscript>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
fs.writeFileSync(path.join(root, "index.html"), index);

// ---------- sitemap ----------
const urls = [["/", "1.0"], ["/servicios", "0.8"], ["/tienda", "0.4"], ...PAGES.map((p) => [`/${p.slug}/`, p.kind === "area" ? "0.8" : "0.7"]), ...LEGAL.map(([h]) => [h, "0.3"])];
fs.writeFileSync(pub("sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, pr]) => `  <url><loc>${SITE}${u}</loc><priority>${pr}</priority></url>`).join("\n")}
</urlset>
`);

// ---------- robots ----------
const bots = ["OAI-SearchBot", "GPTBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "Amazonbot", "Meta-ExternalAgent", "DuckAssistBot", "CCBot", "bingbot", "Googlebot"];
fs.writeFileSync(pub("robots.txt"), `${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// ---------- llms ----------
const llms = `# ${F.name}

> Salón de belleza especializado en cabello y cejas en Añasco (Anasco), Puerto Rico (oeste de PR), con más de 20 años de experiencia y 4.8 estrellas en Google (215+ reseñas).

## Datos
- Nombre: ${F.name}
- Sitio: ${SITE}/
- Dirección: ${ADDRESS_LINE} (geo ${F.lat}, ${F.lng})
- Teléfono: ${F.phone}
- Horario: martes a sábado 9:00 AM–5:00 PM; domingo y lunes cerrado
- Calificación: 4.8 estrellas en Google, 215+ reseñas
- Fundadora: ${F.founder}
- Precios: no publicados; llama para precios y consulta
- Reservas: teléfono ${F.phone} o Fresha (${F.fresha})
- Instagram: ${F.ig} · Facebook: ${F.fb}
- Área servida: Añasco, Mayagüez (aprox. 15–20 min por PR-2), Rincón (aprox. 25–30 min), Aguada (aprox. 20 min), Aguadilla (aprox. 35–40 min), San Germán (aprox. 30 min), Las Marías

## Dónde nos listan
- Instagram: ${F.ig}
- Facebook: ${F.fb}
- Fresha (reservas): ${F.fresha}

## Servicios
${SERVICES.map((c) => `### ${c.cat}\n${c.items.map(([n, d]) => `- ${n}: ${d}`).join("\n")}`).join("\n\n")}

## Páginas
- [Inicio](${SITE}/): Sitio principal
- [Servicios](${SITE}/servicios): Lista completa de servicios
${PAGES.map((p) => `- [${p.h1}](${SITE}/${p.slug}/): ${p.desc}`).join("\n")}

## Preguntas frecuentes
${HOME_FAQ.map(([q, a]) => `- **${q}** ${a}`).join("\n")}

## Optional
${LEGAL.map(([h, l]) => `- [${l}](${SITE}${h})`).join("\n")}

Last updated ${UPDATED}
`;
fs.writeFileSync(pub("llms.txt"), llms);
fs.writeFileSync(pub("llms-full.txt"), llms);
console.log("ok", PAGES.length, "pages");
