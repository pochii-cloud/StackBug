import { createReducer,on} from "@ngrx/store";
import { loggedInUser } from "../../../interfaces/interfaces";

import * as loginActions from "../actions/login.actions";


export interface loggedInUserState {
    user: loggedInUser | null;
    loading: boolean;
    error: any;
}

export const loggedInUserInitialState: loggedInUserState = {
    user: null,
    loading: false,
    error: null
}

export const _loggedInUserReducer = createReducer(loggedInUserInitialState,

    on(loginActions.login, state => ({ ...state, loading: true, error: null })),
    on(loginActions.loginSuccess, (state, { user }) => ({ ...state, loading: false, user: { ...user } })),

    on(loginActions.loginError, (state, { error }) => ({ ...state, loading: false, error: error }))
);