import { TodoItem } from '../TodoItem'
import { useAppSelector } from '@/hooks/useAppSelector'
import { TodoListEmpty } from '../TodoListEmpty/TodoListEmpty'
import { selectFilteredAndSearchedTodos } from '@/store/todos/todos-selectors'
import styles from './TodoList.module.scss'

interface TodoListProps {
  setEditedTodo: (todo: Todo) => void;
  openEditTodoModal: () => void;
}

export const TodoList = ({ setEditedTodo, openEditTodoModal }: TodoListProps) => {
  const filteredAndSearchedTodos = useAppSelector(selectFilteredAndSearchedTodos)

  if (!filteredAndSearchedTodos.length) {
    return <TodoListEmpty />
  }

  return (
    <ul className={styles.container}>
      {filteredAndSearchedTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          setEditedTodo={setEditedTodo}
          openEditTodoModal={openEditTodoModal}
        />
      ))}
    </ul>
  )
}

