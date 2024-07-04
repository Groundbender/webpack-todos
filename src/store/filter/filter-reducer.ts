import { FilterActionTypes, FilterActions } from "./filter-types";

export const sortFilter = (state = "all", action: FilterActions) => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};