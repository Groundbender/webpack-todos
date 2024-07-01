import { THEME_FROM_LOCAL_STORAGE, Theme, ThemeContext } from "@/context/ThemeContext/ThemeContext"
import { useContext, useEffect } from "react"


export const useTheme = () => {
  const { theme, setTheme }  = useContext(ThemeContext);


  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {

    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(THEME_FROM_LOCAL_STORAGE, newTheme)
  }



  return {theme, toggleTheme}
}