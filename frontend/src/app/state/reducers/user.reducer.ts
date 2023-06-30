import { createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import { User } from '../../../interfaces/interfaces';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loading: true,
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(UsersActions.loadUsersSuccess, (state, { users }) => {
    return {
      ...state,
      loading: false,
      users: [...users],
    };
  }),
  on(UsersActions.loadUsersFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),

  on(UsersActions.updateUser, (state, { user }) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(UsersActions.updateUserSuccess, (state, { user }) => {
    return {
      ...state,
      loading: false,
      user: {...user },
    };
  }),

  on(UsersActions.updateUserFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),

  on(UsersActions.deleteUser, (state, { user }) => ({
    ...state,
    users: state.users.filter((u: User) => u.id !== user.id),
  })),
  on(UsersActions.deleteUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.filter((u: User) => u.id !== user.id),
  })),
  on(UsersActions.deleteUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
