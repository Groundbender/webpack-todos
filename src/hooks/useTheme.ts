import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "@/context/ThemeContext/ThemeContext"
import { saveDataToLocalStorage } from "@/helpers/local-storage";
import { useContext } from "react"

export const useTheme = () => {
  const { theme, setTheme }  = useContext(ThemeContext);
  
 const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    saveDataToLocalStorage(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  
  return { theme, toggleTheme }
}