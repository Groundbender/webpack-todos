import { SortActionTypes, SortActions } from "./sort-types";

export const sortTodosReducer = (state = "all", action: SortActions) => {
  switch (action.type) {
    case SortActionTypes.SET_SORT:
      return action.payload;
    default:
      return state;
  }
};