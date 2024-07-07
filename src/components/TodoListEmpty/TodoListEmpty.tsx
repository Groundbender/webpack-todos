import { useTheme } from "@/hooks/useTheme"
import EmptyDark from "../../assets/empty-dark.png"
import EmptyLight from "../../assets/empty-light.png"
import { Theme } from "@/context/ThemeContext/ThemeContext"
import styles from "./TodoListEmpty.module.scss"

export const TodoListEmpty = () => {
  const { theme } = useTheme()

  return (
    <div className={styles["empty-todo-list"]}>
      <img src={theme === Theme.DARK
        ? EmptyDark : EmptyLight} alt="Empty" width={220} height={174} />
      <h3 className={styles.empty__title}>Empty...</h3>
    </div>
  )
}