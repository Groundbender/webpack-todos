import { useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"
import { loadDataFromLocalStorage } from "@/helpers/local-storage";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const themeFromLocalStorage = loadDataFromLocalStorage(LOCAL_STORAGE_THEME_KEY) ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.DARK
    : Theme.LIGHT)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(themeFromLocalStorage as Theme);

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const defaultThemeProps = useMemo(() => ({
    theme, setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultThemeProps}>
      {children}
    </ThemeContext.Provider>
  )
}