import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Legal, { type LegalSlug } from "@/pages/Legal";

const cases: [LegalSlug, string][] = [["privacidad", "Política de privacidad"], ["cookies", "Política de cookies"], ["terminos", "Términos de uso"], ["accesibilidad", "Declaración de accesibilidad"]];
describe("legal routes", () => {
  for (const [slug, h] of cases) it(`${slug} renders`, () => {
    render(<ThemeProvider><LanguageProvider><MemoryRouter><Legal slug={slug} /></MemoryRouter></LanguageProvider></ThemeProvider>);
    expect(screen.getByRole("heading", { level: 1, name: h })).toBeTruthy();
  });
});
