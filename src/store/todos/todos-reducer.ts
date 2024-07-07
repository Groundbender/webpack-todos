import { ActionTypes, TodosActions } from "./todos-types";
import { v4 as uid } from 'uuid';

const todosInitialState: Todo[] = [];
export const todosReducer = (state = [], action: TodosActions) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      return [
        ...state,
        {
          id: uid(),
          title: action.payload,
          isDone: false
        }
      ];
    }
    case ActionTypes.DELETE_TODO: {
      return state.filter((todo: Todo) => todo.id !== action.payload);
    }
    case ActionTypes.TOGGLE_TODO: {
      return state.map((todo: Todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    }
    case ActionTypes.EDIT_TODO: {
      return state.map((todo: Todo) =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );
    }
    case ActionTypes.CLEAR_TODOS: {
      return todosInitialState;
    }
    
    default: {
      return state;
    }
  }
};

