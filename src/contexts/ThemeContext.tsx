import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";
interface ThemeContextType { theme: Theme; toggleTheme: () => void; }
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("light-mode");
      html.style.background = "#faf8f5";
      document.body.style.background = "#faf8f5";
      document.body.style.color = "#111111";
    } else {
      html.classList.remove("light-mode");
      html.style.background = "#050505";
      document.body.style.background = "#050505";
      document.body.style.color = "#ffffff";
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
