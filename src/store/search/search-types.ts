export enum SearchActionTypes {
  SET_SEARCH = "SET_SEARCH",
}


export interface SearchAction {
  type: SearchActionTypes
  payload: string
}


