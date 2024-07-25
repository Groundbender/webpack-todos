import { Modal } from "@/ui/Modal"
import { Title } from "../../ui/Title"
import { Input } from "@/ui/Input"
import { Button } from "@/ui/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo, editTodoTitle } from "@/store/todos/todos-actions"
import toast from "react-hot-toast"
import styles from './AddOrEditTodoModal.module.scss'

interface AddOrEditTodoModalProps {
  isOpenAddOrEditTodoModal: boolean;
  closeAddOrEditTodoModal: () => void;
  selectedTodoOnEdit: Todo | null;
}

export const AddOrEditTodoModal = ({ isOpenAddOrEditTodoModal, closeAddOrEditTodoModal, selectedTodoOnEdit }: AddOrEditTodoModalProps) => {
  const [todoTitle, setTodoTitle] = useState(selectedTodoOnEdit?.title || "")

  const dispatch = useDispatch()

  const handleAddOrEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
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
    closeAddOrEditTodoModal()
    setTodoTitle("")
  }

  const onCloseAddOrEditTodosModal = () => {
    closeAddOrEditTodoModal()
    setTodoTitle("")
  }

  return (
    <Modal isOpen={isOpenAddOrEditTodoModal} onClose={onCloseAddOrEditTodosModal}>
      <>
        <Title>
          {selectedTodoOnEdit ? "EDIT NOTE" : "ADD NOTE"}
        </Title>
        <form onSubmit={handleAddOrEditTodo}>
          <Input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
          <div className={styles.modal__footer}>
            <Button type="button" onClick={onCloseAddOrEditTodosModal} buttonType="outline">
              CANCEL
            </Button>
            <Button type="submit" buttonType="primary">
              APPLY
            </Button>
          </div>
        </form>
      </>
    </Modal>
  )
}