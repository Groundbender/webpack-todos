import * as styles from './Title.module.scss'

interface TitleProps {
  children: React.ReactNode
}
export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}