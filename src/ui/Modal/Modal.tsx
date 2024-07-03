import { createPortal } from "react-dom"
import { MouseEvent, MouseEventHandler } from "react"
import { classNames } from "@/helpers/classNames"
import * as styles from "./Modal.module.scss"


interface ModalProps {
  children: React.ReactNode
  isOpen: boolean,
  handleCloseModal: MouseEventHandler<Element>
}

export const Modal = ({ children, isOpen, handleCloseModal }: ModalProps) => {

  const onClickOutside = (event: MouseEvent) => {
    handleCloseModal(event)
  }

  return createPortal(
    <div className={classNames(styles.modal, {
      [styles.modal__opened]: isOpen
    })}>
      <div onClick={onClickOutside} className={styles.modal__overlay}>
        <div onClick={event => event.stopPropagation()} className={styles.modal__content}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}