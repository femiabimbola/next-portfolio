"use client";

import {useEffect, useState, createContext, useContext} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// const ThemeContext = createContext<Theme | null>(null);
export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  // useEffect is when you need an external value on load.When you need to call a function on load
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      // The did not show
    }
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// This is a custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null)
    throw new Error("useTheme must be used within a themecontextprovider");
  return context;
};

export default ThemeContextProvider;
