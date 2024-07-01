import { Input } from "@/ui/Input"
import * as styles from "./Filters.module.scss"
import { Select } from "@/ui/Select"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import { useDispatch } from "react-redux"
import { selectActiveFilter } from "@/store/filter/filter-selectors"
import { useAppSelector } from "@/hooks/useAppSelector"
import { ChangeEvent, useState } from "react"
import { selectSearchValue } from "@/store/search/search-selectors"
import { FilterType } from "@/store/filter/filter-types"
import { ClearToggler } from "../ClearToggler"
import { setSearch } from "@/store/search/search-actions"
import { setFilter } from "@/store/filter/filter-actions"
import { clearTodos } from "@/store/todos/todos-actions"
import { getAllTodos } from "@/store/todos/todos-selectors"

const selectOptions = [
  {
    value: "all",
    label: "All"
  },
  {
    value: "active",
    label: "Active"
  },
  {
    value: "done",
    label: "Done"
  }
]


export const Filters = () => {

  const [isShakingClass, setIsShakingClass] = useState("")
  const dispatch = useDispatch();

  const todos = useAppSelector(getAllTodos)

  const activeFilter = useAppSelector(selectActiveFilter);

  const searchValue = useAppSelector(selectSearchValue);

  const onFilter = (e: ChangeEvent) => {
    dispatch(setFilter((e.target as HTMLSelectElement).value as FilterType))
  }

  const onSearch = (e: ChangeEvent) => {
    dispatch(setSearch((e.target as HTMLInputElement).value))
  }


  const onClear = () => {
    if (!todos.length) {
      setIsShakingClass("shake")

      setTimeout(() => {
        setIsShakingClass("")
      }, 500)
      return
    }
    dispatch(clearTodos())
  }


  return (
    <div className={styles.filters__container}>

      <div className={styles.filters__search}>
        <Input value={searchValue} onChange={onSearch} type="search" className={isShakingClass} />
      </div>
      <div >
        <Select options={selectOptions} value={activeFilter} onChange={onFilter} />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
      <div>
        <ClearToggler clearAllTodos={onClear} />
      </div>
    </div>
  )
}