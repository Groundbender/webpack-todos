import { createSelector } from "reselect";
import { RootState } from "../root-reducer";
import { selectSearchValue } from "../search/search-selectors";
import { selectSortType } from "../sort/sort-selectors";

export const getAllTodos = (state: RootState) => state.todos
export const selectTodosCount = (state: RootState) => state.todos.length
export const selectActiveTodosCount = (state: RootState) => state.todos.filter((todo) => !todo.isDone).length
export const selectDoneTodosCount = (state: RootState) => state.todos.filter((todo) => todo.isDone).length

export const selectFilteredAndSearchedTodos = createSelector(getAllTodos, selectSearchValue, selectSortType, (todos, search, sort) => {
  let filteredTodos = [];

  switch (sort) {
    case "all":
      filteredTodos = todos;
      break;
    case "active":
      filteredTodos = todos.filter((todo) => !todo.isDone);
      break
    case "done":
      filteredTodos = todos.filter((todo) => todo.isDone);
      break
    default:
      filteredTodos = todos;
  }
  
  if (!search) {
    return filteredTodos
  }
  
  return filteredTodos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
})

