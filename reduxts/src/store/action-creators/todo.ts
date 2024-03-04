import { Dispatch } from 'redux';
import { TodoAction, TodoActionsType } from '../../types/todos';
import axios from 'axios';

export const fetchTodos = (page = 1, limit = 5) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionsType.FETCH_TODOS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _limit: limit,
            _page: page,
          },
        },
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionsType.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: TodoActionsType.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел',
      });
    }
  };
};

export const setTodoPage = (page: number) => {
  return { type: TodoActionsType.SET_TODO_PAGE, payload: page };
};
