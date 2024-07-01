import { compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { loadState, saveState } from "./todos/local-storage";


export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
   

   composeEnhancers()
  );
  store.subscribe(() => saveState({
    todos: store.getState().todos,
    
  })
      
  );

  return store;
};
