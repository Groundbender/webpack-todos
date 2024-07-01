import { combineReducers } from "redux";
import { todos } from "./todos/todos-reducer";
import { filters } from "./filter/filter-reducer";
import { search } from "./search/search-reducer";



export const rootReducer = combineReducers({
  todos,
  filters,
  search
})


export type RootState = ReturnType<typeof rootReducer>