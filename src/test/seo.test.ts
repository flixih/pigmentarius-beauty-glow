import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { PAGES } from "../../scripts/seo-data.mjs";

const pub = (p: string) => fs.readFileSync(path.resolve(__dirname, "../../public", p), "utf8");

describe("static SEO pages", () => {
  for (const p of PAGES) {
    it(`${p.slug} is valid`, () => {
      const html = pub(`${p.slug}/index.html`);
      expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
      expect(html).toContain(`<link rel="canonical" href="https://pigmentariuspr.com/${p.slug}/">`);
      const ld = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1];
      const graph = JSON.parse(ld)["@graph"];
      expect(graph.map((g: { "@type": string }) => g["@type"])).toContain("FAQPage");
      expect(html).toContain("martes a sábado, 9:00 AM – 5:00 PM");
      expect(html).toContain("tel:+17878261684");
      expect(html).not.toMatch(/el mejor|#1(?![0-9a-f])/i);
    });
  }
});

describe("home schema", () => {
  it("has Tue–Sat 9–17 hours only", () => {
    const html = fs.readFileSync(path.resolve(__dirname, "../../index.html"), "utf8");
    const ld = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1]);
    const salon = ld["@graph"][0];
    expect(salon.openingHoursSpecification).toEqual([{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "17:00" }]);
    expect(salon.telephone).toBe("+17878261684");
    expect(html).not.toContain("pigmentarius.com");
  });
});

describe("discovery files", () => {
  it("sitemap lists every static page and legal page", () => {
    const sm = pub("sitemap.xml");
    for (const p of PAGES) expect(sm).toContain(`https://pigmentariuspr.com/${p.slug}/`);
    for (const l of ["privacidad", "cookies", "terminos", "accesibilidad"]) expect(sm).toContain(`https://pigmentariuspr.com/${l}<`);
  });
  it("robots allows AI bots", () => {
    const r = pub("robots.txt");
    for (const b of ["OAI-SearchBot", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "bingbot"]) expect(r).toContain(`User-agent: ${b}\nAllow: /`);
    expect(r).toContain("Sitemap: https://pigmentariuspr.com/sitemap.xml");
    expect(r).not.toMatch(/Disallow: \/\s*$/m);
  });
});
