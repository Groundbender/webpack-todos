import styles from "./Input.module.scss"
import SearchIcon from "../../assets/SearchIcon.svg"
import classnames from "classnames"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  isShaking?: boolean
}

export const Input = (props: InputProps) => {
  const { className, isShaking, ...inputProps } = props

  return (
    <div className={classnames(styles.input__block, className)}>
      <input {...inputProps} className={classnames(styles.input, {
        [styles.input_shaking]: !!isShaking
      })} type="text" />
      {props.type === "search" &&
        <SearchIcon className={styles["input-search-icon"]}
        />}
    </div>
  )
}