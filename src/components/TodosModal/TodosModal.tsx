import { Modal } from "@/ui/Modal"
import { Title } from "../Title"
import { Input } from "@/ui/Input"
import { Button, ButtonTheme } from "@/ui/Button"
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo, editTodo } from "@/store/todos/todos-actions"
import toast from "react-hot-toast"
import * as styles from './TodosModal.module.scss'

interface TodosModalProps {
  isOpen: boolean,
  handleCloseModal: () => void,
  selectedTodo: Todo | null
}
export const TodosModal = ({ isOpen, handleCloseModal, selectedTodo }: TodosModalProps) => {
  const [todoTitle, setTodoTitle] = useState<string>(() => selectedTodo?.title || "")

  const dispatch = useDispatch()

  const handleAddTodo = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!todoTitle.trim()) {
      toast.error("Title is required")
      return
    }

    if (selectedTodo) {
      dispatch(editTodo({ id: selectedTodo.id, title: todoTitle }))
      toast.success("Todo successfully updated")
    } else {
      dispatch(addTodo(todoTitle))
      toast.success("Todo successfully added")
    }

    handleCloseModal()
    setTodoTitle("")
  }

  const closeTodosModal = () => {
    handleCloseModal()
    setTodoTitle("")
  }

  return (
    <Modal isOpen={isOpen} handleCloseModal={closeTodosModal}>
      <>
        <Title>
          {selectedTodo ? "EDIT NOTE" : "ADD NOTE"}
        </Title>
        <form onSubmit={handleAddTodo}>
          <Input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
          <div className={styles.modal__footer}>
            <Button type="button" onClick={closeTodosModal} theme={ButtonTheme.OUTLINE}>
              <span className="btn-text">CANCEL</span>
            </Button>
            <Button type="submit" theme={ButtonTheme.PRIMARY}>
              <span className="btn-text">APPLY</span>
            </Button>
          </div>
        </form>
      </>
    </Modal>
  )
}