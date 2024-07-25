export const loadDataFromLocalStorage = (key: string) => {
  try {
    const savedState = localStorage.getItem(key);
    if (savedState === null) {
      return undefined; 
    }
    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

export const saveDataToLocalStorage = <T>(key: string, state: T) => {
  try {
    const stateToBeSaved = JSON.stringify(state);
    localStorage.setItem(key, stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};