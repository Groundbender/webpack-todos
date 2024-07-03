import { createContext } from "react";

export enum Theme {
  LIGHT = 'app_light',
  DARK = 'app_dark'
}
export interface ThemeContextProps {
  setTheme: (theme: Theme) => void
  theme: Theme
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const THEME_FROM_LOCAL_STORAGE = 'theme'


