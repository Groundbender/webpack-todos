import * as styles from './Button.module.scss'

export enum ButtonTheme {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  SQUARE = 'square',
  ROUNED = 'rounded'
}


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme: ButtonTheme;
}


export const Button = (props: ButtonProps) => {

  const { children, theme, ...others } = props

  return (
    <button className={`${styles.btn} ${styles[theme]}`} {...others}>
      {children}
    </button>
  )
}