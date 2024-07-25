import { SortActionTypes, SortType } from "./sort-types";

export const setSortType = (payload: SortType) => ({
  type: SortActionTypes.SET_SORT,
  payload,
});


