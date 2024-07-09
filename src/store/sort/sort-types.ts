export enum SortActionTypes {
  SET_SORT = "SET_SORT",
}

interface SetSortAction {
  type: SortActionTypes
  payload: SortType
}

export type SortType = "all" | "active" | "done"
export type SortActions = SetSortAction