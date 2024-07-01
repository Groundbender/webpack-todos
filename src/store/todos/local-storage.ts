import { RootState } from "../root-reducer";

export const loadState = () => {
  try {
    const savedState = localStorage.getItem("todos");
    if (savedState === null) {
      return undefined; 
    }
    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};
export const saveState = (state: Pick<RootState, "todos">) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem("todos", stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};