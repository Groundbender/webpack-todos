import classnames from "classnames"
import styles from './Button.module.scss'

type ButtonTheme = 'primary' | 'outline' | 'square' | 'rounded'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme: ButtonTheme;
}
export const Button = (props: ButtonProps) => {
  const { children, theme, ...buttonProps } = props

  return (
    <button className={classnames(styles.btn, styles[theme])} {...buttonProps}>
      {children}
    </button>
  )
}