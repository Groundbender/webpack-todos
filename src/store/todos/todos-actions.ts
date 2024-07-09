import { ActionTypes } from "./todos-types";

export const addTodo = (title: string) => ({
  type: ActionTypes.ADD_TODO,
  payload: title
});

export const deleteTodo = (id: string) => ({
  type: ActionTypes.DELETE_TODO,
  payload: id
});

export const toggleTodo = (id: string) => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: id
});

export const editTodoTitle = (payload: { id: string, title: string }) => ({
  type: ActionTypes.EDIT_TODO,
  payload
});

export const clearTodos = () => ({
  type: ActionTypes.CLEAR_TODOS
});