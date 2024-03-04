export interface UsersState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionsType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUsersAction {
  type: UserActionsType.FETCH_USERS;
}
export interface FetchUsersSuccessAction {
  type: UserActionsType.FETCH_USERS_SUCCESS;
  payload: any[];
}
export interface FetchUsersActionError {
  type: UserActionsType.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersActionError;
