export enum FilterActionTypes {
  SET_FILTER = "SET_FILTER",
}


interface SetFilterAction {
  type: FilterActionTypes
  payload: FilterType
}

export type FilterType = "all" | "active" | "done"

export type FilterActions = SetFilterAction