import { combineReducers } from "redux";
import { todosReducer as todos } from "./todos/todos-reducer";
import { sortTodosReducer as sort } from "./sort/sort-reducer";
import { searchTodosReducer as search } from "./search/search-reducer";

export const rootReducer = combineReducers({
  todos,
  sort,
  search
})

export type RootState = ReturnType<typeof rootReducer>