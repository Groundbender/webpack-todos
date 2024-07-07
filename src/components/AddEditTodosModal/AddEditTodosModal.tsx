import { Modal } from "@/ui/Modal"
import { Title } from "../../ui/Title"
import { Input } from "@/ui/Input"
import { Button } from "@/ui/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo, editTodoTitle } from "@/store/todos/todos-actions"
import toast from "react-hot-toast"
import * as styles from './AddEditTodosModal.module.scss'

interface AddEditTodosModalProps {
  isOpenAddEditTodosModal: boolean,
  closeAddEditTodosModal: () => void,
  selectedTodoOnEdit: Todo | null
}
export const AddEditTodosModal = ({ isOpenAddEditTodosModal, closeAddEditTodosModal, selectedTodoOnEdit }: AddEditTodosModalProps) => {
  const [todoTitle, setTodoTitle] = useState(() => selectedTodoOnEdit?.title || "")
  const dispatch = useDispatch()

  const handleAddEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoTitle.trim()) {
      toast.error("Title is required")
      return
    }

    if (selectedTodoOnEdit) {
      dispatch(editTodoTitle({ id: selectedTodoOnEdit.id, title: todoTitle }))
      toast.success("Todo successfully updated")
    } else {
      dispatch(addTodo(todoTitle))
      toast.success("Todo successfully added")
    }
    closeAddEditTodosModal()
    setTodoTitle("")
  }

  const onCloseAddEditTodosModal = () => {
    closeAddEditTodosModal()
    setTodoTitle("")
  }

  return (
    <Modal isOpen={isOpenAddEditTodosModal} handleCloseModal={onCloseAddEditTodosModal}>
      <>
        <Title>
          {selectedTodoOnEdit ? "EDIT NOTE" : "ADD NOTE"}
        </Title>
        <form onSubmit={handleAddEditTodo}>
          <Input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
          <div className={styles.modal__footer}>
            <Button type="button" onClick={onCloseAddEditTodosModal} theme="outline">
              <span>CANCEL</span>
            </Button>
            <Button type="submit" theme="primary">
              <span>APPLY</span>
            </Button>
          </div>
        </form>
      </>
    </Modal>
  )
}