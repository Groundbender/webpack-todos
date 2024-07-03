export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
  EDIT_TODO = "EDIT_TODO",
  CLEAR_TODOS = "CLEAR_TODOS",
  
}

export const LOCAL_STORAGE_TODOS_KEY = "todos"
interface AddTodoAction {
  type: ActionTypes.ADD_TODO
  payload: string
}
interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO
  payload: string
}
interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO
  payload: string
}
interface EditTodoAction {
  type: ActionTypes.EDIT_TODO
  payload: { id: string, title: string }
}
interface ClearTodosAction {
  type: ActionTypes.CLEAR_TODOS
}


export type TodosActions = AddTodoAction | DeleteTodoAction | ToggleTodoAction | EditTodoAction | ClearTodosAction