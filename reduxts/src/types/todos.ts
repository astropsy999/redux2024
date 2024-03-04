export interface TodosState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionsType {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

export interface FetchTodossAction {
  type: TodoActionsType.FETCH_TODOS;
}
export interface FetchTodosSuccessAction {
  type: TodoActionsType.FETCH_TODOS_SUCCESS;
  payload: any[];
}
export interface FetchTodossActionError {
  type: TodoActionsType.FETCH_TODOS_ERROR;
  payload: string;
}
export interface SetTodoPage {
  type: TodoActionsType.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodossAction
  | FetchTodosSuccessAction
  | FetchTodossActionError
  | SetTodoPage;
