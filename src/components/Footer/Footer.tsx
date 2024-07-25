import { Button } from '@/ui/Button'
import PlusIcon from '@/assets/PlusIcon.svg'
import { FC, MouseEventHandler } from 'react'
import styles from './Footer.module.scss'

interface FooterProps {
  openAddTodoModal: () => void
}

export const Footer: FC<FooterProps> = ({ openAddTodoModal }) => {
  return (
    <footer className={styles.footer}>
      <Button onClick={openAddTodoModal} buttonType="rounded">
        <PlusIcon width={24} height={24} />
      </Button>
    </footer>
  )
}