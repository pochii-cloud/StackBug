import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loggedInUserState } from "../reducers/loggedinuser.reducer";



export const registerUserState = createFeatureSelector<loggedInUserState>('registerUser');


export const selectRegisterUser = createSelector(
    registerUserState,
    (state: loggedInUserState) => state.user
);

export const selectRegisterUserStateloading = createSelector(
    registerUserState,
    (state: loggedInUserState) => state.loading
);

export const selectRegisterUserStateError = createSelector(
    registerUserState,
    (state: loggedInUserState) => state.error
);