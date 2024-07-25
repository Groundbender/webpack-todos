import { compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { LOCAL_STORAGE_TODOS_KEY } from "./todos/todos-types";
import { loadDataFromLocalStorage, saveDataToLocalStorage } from "@/helpers/local-storage";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
export const configureStore = () => {
  const persistedState = loadDataFromLocalStorage(LOCAL_STORAGE_TODOS_KEY);
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers()
  );
    store.subscribe(() => saveDataToLocalStorage(LOCAL_STORAGE_TODOS_KEY ,{
      todos: store.getState().todos,
    })
  );

  return store;
};
