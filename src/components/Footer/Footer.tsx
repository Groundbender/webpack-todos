import { Button, ButtonTheme } from '@/ui/Button'
import PlusIcon from '@/assets/PlusIcon.svg'
import { MouseEventHandler } from 'react'
import * as styles from './Footer.module.scss'


interface FooterProps {
  handleOpenModal: MouseEventHandler<HTMLButtonElement>
}

export const Footer = ({ handleOpenModal }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <Button onClick={handleOpenModal} theme={ButtonTheme.ROUNED}>
        <PlusIcon width={24} height={24} />
      </Button>
    </footer>
  )
}