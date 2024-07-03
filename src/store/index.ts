import { compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { loadTodosFromLocalStorage, saveTodosToLocalStorage } from "./todos/todos-local-storage";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const configureStore = () => {
  const persistedState = loadTodosFromLocalStorage();
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers()
  );
    store.subscribe(() => saveTodosToLocalStorage({
      todos: store.getState().todos,
    })
  );

  return store;
};
