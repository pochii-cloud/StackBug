import { createFeatureSelector, createSelector } from "@ngrx/store";

import { loggedInUserState } from "../reducers/loggedinuser.reducer";


export const selectLoggedInUserState = createFeatureSelector<loggedInUserState>('loggedInUser');

export const selectLoggedInUser = createSelector(
    selectLoggedInUserState,
    (state: loggedInUserState) => state.user
);

export const selectLoggedInUserStateloading = createSelector(
    selectLoggedInUserState,
    (state: loggedInUserState) => state.loading
);

export const selectLoggedInUserStateError = createSelector(
    selectLoggedInUserState,
    (state: loggedInUserState) => state.error
);
