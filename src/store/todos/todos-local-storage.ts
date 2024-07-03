import { RootState } from "../root-reducer";
import { LOCAL_STORAGE_TODOS_KEY } from "./todos-types";

export const loadTodosFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY);
    if (savedState === null) {
      return undefined; 
    }
    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};
export const saveTodosToLocalStorage = (state: Pick<RootState, typeof LOCAL_STORAGE_TODOS_KEY>) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};