import { FilterActionTypes, FilterType } from "./filter-types";

export const setFilter = (payload: FilterType) => ({
  type: FilterActionTypes.SET_FILTER,
  payload,
});


