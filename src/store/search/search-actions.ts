import { SearchActionTypes } from "./search-types";

export const setSearch = (payload: string) => ({
  type: SearchActionTypes.SET_SEARCH,
  payload,
});


