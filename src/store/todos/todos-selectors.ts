import { createSelector } from "reselect";
import { RootState } from "../root-reducer";
import { selectSearchValue } from "../search/search-selectors";
import { selectActiveFilter } from "../filter/filter-selectors";

export const getAllTodos = (state: RootState) => state.todos

export const selectTodosCount = (state: RootState) => state.todos.length

export const selectActiveTodosCount = (state: RootState) => state.todos.filter((todo) => !todo.isDone).length
export const selectDoneTodosCount = (state: RootState) => state.todos.filter((todo) => todo.isDone).length




export const selectFilteredAndSearchedTodos = createSelector(getAllTodos, selectSearchValue, selectActiveFilter, (todos, search, filter) => {

  let filteredTodos = [];
  switch (filter) {
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

