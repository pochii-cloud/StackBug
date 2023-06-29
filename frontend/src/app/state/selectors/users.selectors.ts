import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "../reducers/user.reducer";



export const selectUsersState = createFeatureSelector<UsersState>('users');


export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.users
);


export const selectUsersLoading = createSelector(
    selectUsersState,
    (state: UsersState) => state.loading
);


export const selectUsersError = createSelector(
    selectUsersState,
    (state: UsersState) => state.error
);
