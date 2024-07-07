import { Checkbox } from "@/ui/Checkbox"
import EditIcon from "@/assets/EditIcon.svg"
import DeleteIcon from "@/assets/DeleteIcon.svg"
import { useDispatch } from "react-redux"
import classnames from "classnames"
import { deleteTodo, toggleTodo } from "@/store/todos/todos-actions"
import toast from "react-hot-toast"
import styles from "./TodoItem.module.scss"
interface TodoItemProps {
  todo: Todo,
  setSelectedTodoOnEdit: (todo: Todo) => void
  openEditTodosModal: () => void
}
export const TodoItem = ({ todo, setSelectedTodoOnEdit, openEditTodosModal }: TodoItemProps) => {
  const dispatch = useDispatch()
  const updateTodoCompleted = () => {
    dispatch(toggleTodo(todo.id))
    toast.success("Todo successfully updated")
  }

  const onRemoveTodo = () => {
    dispatch(deleteTodo(todo.id))
    toast.success("Todo successfully deleted")
  }

  const onEditTodoTitle = () => {
    setSelectedTodoOnEdit(todo)
    openEditTodosModal()
  }

  return (
    <li className={styles.container}>
      <div className={styles.todo__info}>
        <Checkbox onChange={updateTodoCompleted} checked={todo.isDone} />
        <p className={classnames(styles.todo__title, { [styles.todo__title_completed]: todo.isDone })}>
          {todo.title}
        </p>
      </div>
      <div className={styles.todo__actions}>
        <button onClick={onEditTodoTitle} className={styles.action__btn}>
          <EditIcon className={styles.icon_edit} width={17} height={17} />
        </button>
        <button onClick={onRemoveTodo} className={styles.action__btn}>
          <DeleteIcon className={styles.icon_delete} width={17} height={17} />
        </button>
      </div>
    </li>
  )
}