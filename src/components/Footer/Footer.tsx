import { Button } from '@/ui/Button'
import PlusIcon from '@/assets/PlusIcon.svg'
import { FC, MouseEventHandler } from 'react'
import styles from './Footer.module.scss'
interface FooterProps {
  openAddTodosModal: MouseEventHandler<HTMLButtonElement>
}
export const Footer: FC<FooterProps> = ({ openAddTodosModal }) => {
  return (
    <footer className={styles.footer}>
      <Button onClick={openAddTodosModal} theme="rounded">
        <PlusIcon width={24} height={24} />
      </Button>
    </footer>
  )
}