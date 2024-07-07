import { Button } from "@/ui/Button"
import LightIcon from "@/assets/LightIcon.svg"
import DarkIcon from "@/assets/DarkIcon.svg"
import { useTheme } from "@/hooks/useTheme"
import { Theme } from "@/context/ThemeContext/ThemeContext"

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} theme="square" >
      {
        theme === Theme.DARK
          ? <LightIcon width={20} height={20} />
          : <DarkIcon width={20} height={20} />
      }
    </Button>
  )
}


