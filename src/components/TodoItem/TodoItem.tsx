import { Checkbox } from "@/ui/Checkbox"
import EditIcon from "@/assets/EditIcon.svg"
import DeleteIcon from "@/assets/DeleteIcon.svg"
import { useDispatch } from "react-redux"
import { classNames } from "@/helpers/classNames"
import { deleteTodo, toggleTodo } from "@/store/todos/todos-actions"
import toast from "react-hot-toast"
import * as styles from "./TodoItem.module.scss"
interface TodoItemProps {
  todo: Todo,
  setSelectedTodo: (todo: Todo) => void
  handleOpenTodosModal: () => void
}
export const TodoItem = ({ todo, setSelectedTodo, handleOpenTodosModal }: TodoItemProps) => {

  const dispatch = useDispatch()
  const updateTodo = () => {
    dispatch(toggleTodo(todo.id))
    toast.success("Todo successfully updated")
  }
  const removeTodo = () => {
    dispatch(deleteTodo(todo.id))
    toast.success("Todo successfully deleted")
  }

  const handleTodoEditMode = () => {
    setSelectedTodo(todo)
    handleOpenTodosModal()
  }

  return (
    <li className={styles.todo__item}>
      <div className={styles.todo__info}>
        <Checkbox onChange={updateTodo} checked={todo.isDone} />
        <p className={classNames(styles.todo__title, { [styles.todo__title_checked]: todo.isDone })}>
          {todo.title}
        </p>
      </div>
      <div className={styles.todo__actions}>
        <button onClick={handleTodoEditMode} className={styles.action__btn}>
          <EditIcon className={styles.icon_edit} width={17} height={17} />
        </button>
        <button onClick={removeTodo} className={styles.action__btn}>
          <DeleteIcon className={styles.icon_delete} width={17} height={17} />
        </button>
      </div>
    </li>
  )
}