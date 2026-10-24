import { useEffect } from "react";

const SITE = "https://pigmentariuspr.com";

function setTag(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) { el = create(); document.head.appendChild(el); }
  el.setAttribute(attr, value);
}
const meta = (key: "name" | "property", k: string, v: string) =>
  setTag(`meta[${key}="${k}"]`, () => { const m = document.createElement("meta"); m.setAttribute(key, k); return m; }, "content", v);

export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    meta("name", "description", description);
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", url);
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);
    setTag('link[rel="canonical"]', () => { const l = document.createElement("link"); l.setAttribute("rel", "canonical"); return l; }, "href", url);
  }, [title, description, path]);
}
