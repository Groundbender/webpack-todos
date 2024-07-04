import { combineReducers } from "redux";
import { todos } from "./todos/todos-reducer";
import { sortFilter as filter } from "./filter/filter-reducer";
import { searchFilter as search } from "./search/search-reducer";

export const rootReducer = combineReducers({
  todos,
  filter,
  search
})

export type RootState = ReturnType<typeof rootReducer>