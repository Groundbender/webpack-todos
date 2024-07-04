import { useMemo, useState } from "react";
import { THEME_FROM_LOCAL_STORAGE, Theme, ThemeContext } from "./ThemeContext"
interface ThemeProviderProps {
  children: React.ReactNode
}

const themeFromLocalStorage = localStorage.getItem(THEME_FROM_LOCAL_STORAGE) ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.DARK
    : Theme.LIGHT)
export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [theme, setTheme] = useState<Theme>(themeFromLocalStorage as Theme);

  const defaultThemeProps = useMemo(() => ({
    theme, setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultThemeProps}>
      {children}
    </ThemeContext.Provider>
  )
}