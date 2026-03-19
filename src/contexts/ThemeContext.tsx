import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  // Helper: returns bg color based on theme
  bg: (dark: string, light: string) => string;
  tx: (dark: string, light: string) => string;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");
  const bg = (dark: string, light: string) => theme === "dark" ? dark : light;
  const tx = (dark: string, light: string) => theme === "dark" ? dark : light;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, bg, tx }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
