import styles from "./Checkbox.module.scss"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Checkbox = (props: CheckboxProps) => {
  return (
    <input {...props} type="checkbox" className={styles.checkbox} />
  )
}