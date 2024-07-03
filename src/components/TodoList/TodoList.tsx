import { TodoItem } from '../TodoItem'
import { useAppSelector } from '@/hooks/useAppSelector'
import { TodoListEmpty } from '../TodoListEmpty/TodoListEmpty'
import { selectFilteredAndSearchedTodos } from '@/store/todos/todos-selectors'
import * as styles from './TodoList.module.scss'


interface TodoListProps {
  setSelectedTodo: (todo: Todo) => void
  handleOpenModal: () => void
}
export const TodoList = ({ setSelectedTodo, handleOpenModal }: TodoListProps) => {

  const filteredAndSearchedTodos = useAppSelector(selectFilteredAndSearchedTodos)

  if (!filteredAndSearchedTodos.length) {
    return <TodoListEmpty />
  }

  return (
    <ul className={styles.todo__list}>
      {filteredAndSearchedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} setSelectedTodo={setSelectedTodo} handleOpenModal={handleOpenModal} />)}
    </ul>
  )
}

