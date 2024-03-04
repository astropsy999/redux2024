import { UserAction, UserActionsType, UsersState } from '../../types/users';

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state: UsersState = initialState,
  action: UserAction,
): UsersState => {
  switch (action.type) {
    case UserActionsType.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionsType.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionsType.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
