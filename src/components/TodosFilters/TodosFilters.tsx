import { Input } from "@/ui/Input"
import { Select } from "@/ui/Select"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import { useDispatch } from "react-redux"
import { selectSortType } from "@/store/sort/sort-selectors"
import { useAppSelector } from "@/hooks/useAppSelector"
import { ChangeEvent, useState } from "react"
import { selectSearchValue } from "@/store/search/search-selectors"
import { SortType } from "@/store/sort/sort-types"
import { ClearTodosSwitch } from "../ClearTodosSwitch"
import { setSearch } from "@/store/search/search-actions"
import { setSortType } from "@/store/sort/sort-actions"
import styles from "./TodosFilters.module.scss"

type SortTodosSelectOptionType = {
  value: SortType
  label: Capitalize<SortType>
}

const sortTodosSelectOptions: SortTodosSelectOptionType[] = [
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

export const TodosFilters = () => {
  const [searchTodosInputIsShaking, setSearchTodosInputIsShaking] = useState(false)
  const sortTodosValue = useAppSelector(selectSortType);
  const searchTodosValue = useAppSelector(selectSearchValue);
  const dispatch = useDispatch();

  const handleSortTodos = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(e.target.value as SortType))
  }

  const handleSearchTodos = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <div className={styles.container}>
      <Input
        value={searchTodosValue}
        onChange={handleSearchTodos}
        type="search"
        isShaking={searchTodosInputIsShaking}
        className={styles.search}
      />
      <Select options={sortTodosSelectOptions} value={sortTodosValue} onChange={handleSortTodos} />
      <ThemeSwitcher />
      <ClearTodosSwitch setSearchTodosInputIsShaking={setSearchTodosInputIsShaking} />
    </div>
  )
}