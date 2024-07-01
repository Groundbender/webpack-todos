import * as styles from "./Input.module.scss"
import SearchIcon from "../../assets/SearchIcon.svg"
import { classNames } from "@/helpers/classNames"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}


export const Input = (props: InputProps) => {

  const { className = "", ...others } = props
  return (
    <div className={styles.input__block}>
      <input {...others} className={classNames(styles.input, {}, [className])} type="text" />

      {props.type === "search" && <SearchIcon className={styles.input__search__icon} />}
    </div>
  )
}