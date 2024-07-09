import { createPortal } from "react-dom"
import { MouseEvent, MouseEventHandler } from "react"
import classnames from "classnames"
import styles from "./Modal.module.scss"

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: MouseEventHandler<Element>;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const onClickOutside = (event: MouseEvent) => {
    onClose(event)
  }

  return createPortal(
    <div className={classnames(styles.modal, {
      [styles.open]: isOpen
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