import { Button, ButtonTheme } from '@/ui/Button'
import PlusIcon from '@/assets/PlusIcon.svg'
import { MouseEventHandler } from 'react'
import * as styles from './Footer.module.scss'

interface FooterProps {
  handleOpenTodosModal: MouseEventHandler<HTMLButtonElement>
}
export const Footer = ({ handleOpenTodosModal }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <Button onClick={handleOpenTodosModal} theme={ButtonTheme.ROUNED}>
        <PlusIcon width={24} height={24} />
      </Button>
    </footer>
  )
}