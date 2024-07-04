import { SearchAction, SearchActionTypes } from "./search-types";

export const searchTodosFilter = (state = "", action: SearchAction) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH:
      return action.payload;

    default:
      return state;
  }
};