// Light mode color palette
export const LIGHT = {
  pageBg:    "#faf8f5",
  sectionBg: "#f3efe9",
  cardBg:    "rgba(0,0,0,0.03)",
  border:    "rgba(0,0,0,0.08)",
  borderMid: "rgba(0,0,0,0.12)",
  textPrimary:  "#111111",
  textSecondary:"rgba(0,0,0,0.55)",
  textMuted:    "rgba(0,0,0,0.35)",
  navBg:     "rgba(250,248,245,0.92)",
  inputBg:   "#ffffff",
};

export const DARK = {
  pageBg:    "#050505",
  sectionBg: "#070707",
  cardBg:    "rgba(255,255,255,0.03)",
  border:    "rgba(255,255,255,0.08)",
  borderMid: "rgba(255,255,255,0.15)",
  textPrimary:  "#ffffff",
  textSecondary:"rgba(255,255,255,0.5)",
  textMuted:    "rgba(255,255,255,0.3)",
  navBg:     "rgba(5,5,5,0.85)",
  inputBg:   "rgba(255,255,255,0.04)",
};

export type Palette = typeof DARK;

export const palette = (theme: "dark" | "light"): Palette =>
  theme === "dark" ? DARK : LIGHT;
