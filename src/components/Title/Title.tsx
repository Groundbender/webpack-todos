import * as styles from './Title.module.scss'

interface ITitleProps {
  children: React.ReactNode

}
export const Title = ({ children }: ITitleProps) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}