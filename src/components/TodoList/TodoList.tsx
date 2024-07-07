import { TodoItem } from '../TodoItem'
import { useAppSelector } from '@/hooks/useAppSelector'
import { TodoListEmpty } from '../TodoListEmpty/TodoListEmpty'
import { selectFilteredAndSearchedTodos } from '@/store/todos/todos-selectors'
import styles from './TodoList.module.scss'
interface TodoListProps {
  setSelectedTodoOnEdit: (todo: Todo) => void
  openEditTodosModal: () => void
}
export const TodoList = ({ setSelectedTodoOnEdit, openEditTodosModal }: TodoListProps) => {
  const filteredAndSearchedTodos = useAppSelector(selectFilteredAndSearchedTodos)

  if (!filteredAndSearchedTodos.length) {
    return <TodoListEmpty />
  }

  return (
    <ul className={styles.todo__list}>
      {filteredAndSearchedTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          setSelectedTodoOnEdit={setSelectedTodoOnEdit}
          openEditTodosModal={openEditTodosModal}
        />
      ))}
    </ul>
  )
}

