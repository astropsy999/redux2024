import { TodoAction, TodoActionsType, TodosState } from '../../types/todos';

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

export const todoReducer = (
  state: TodosState = initialState,
  action: TodoAction,
): TodosState => {
  switch (action.type) {
    case TodoActionsType.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionsType.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case TodoActionsType.FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TodoActionsType.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
