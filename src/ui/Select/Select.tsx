import { SelectHTMLAttributes } from 'react'
import * as styles from './Select.module.scss'

type Option = {
  value: string
  label: string
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
}
export const Select = (props: SelectProps) => {

  const { options, ...others } = props
  return (
    <select {...others} className={styles.select}>
      {options.map((option: Option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}