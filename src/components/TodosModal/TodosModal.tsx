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
  todo: Todo | null
}

export const TodosModal = ({ isOpen, handleCloseModal, todo }: TodosModalProps) => {
  const [title, setTitle] = useState<string>(() => todo?.title || "")

  const dispatch = useDispatch()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();


    if (!title.trim()) {
      toast.error("Title is required")
      return
    }


    if (todo) {
      dispatch(editTodo({ id: todo.id, title }))
      toast.success("Todo successfully updated")
    } else {
      dispatch(addTodo(title))
      toast.success("Todo successfully added")
    }


    handleCloseModal()
    setTitle("")
  }

  const closeModal = () => {
    handleCloseModal()
    setTitle("")
  }



  return (
    <Modal isOpen={isOpen} handleCloseModal={closeModal}>
      <>
        <Title>
          {todo ? "EDIT NOTE" : "ADD NOTE"}
        </Title>
        <form onSubmit={handleSubmit}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />

          <div className={styles.modal__footer}>
            <Button type="button" onClick={closeModal} theme={ButtonTheme.OUTLINE}>
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