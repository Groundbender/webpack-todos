import classnames from "classnames"
import styles from './Button.module.scss'

type ButtonType = 'primary' | 'outline' | 'square' | 'rounded' | 'transparent'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: ButtonType;
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { children, buttonType, className, ...buttonProps } = props

  return (
    <button className={classnames(styles.btn, styles[buttonType], className)} {...buttonProps}>
      {children}
    </button>
  )
}