import { useAppSelector } from "@/hooks/useAppSelector"
import { selectActiveTodosCount, selectDoneTodosCount, selectTodosCount } from "@/store/todos/todos-selectors"
import * as styles from "./Statistics.module.scss"


export const Statistics = () => {

  const todosCount = useAppSelector(selectTodosCount)
  const activeTodosCount = useAppSelector(selectActiveTodosCount)
  const doneTodosCount = useAppSelector(selectDoneTodosCount)


  return (
    <aside className={styles.statistics}>
      <ul className={styles.statistics__list}>
        <li className={styles.statistics__item}> All todos: {todosCount} </li>
        <li className={styles.statistics__item}>Completed todos: {doneTodosCount}</li>
        <li className={styles.statistics__item}>Active todos: {activeTodosCount}</li>
      </ul>
    </aside>
  )
}