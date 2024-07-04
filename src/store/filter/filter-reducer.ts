import { FilterActionTypes, FilterActions } from "./filter-types";

export const sortTodosFilter = (state = "all", action: FilterActions) => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};