import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";


const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("portfolio-theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  return prefersLight ? "light" : "dark";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
