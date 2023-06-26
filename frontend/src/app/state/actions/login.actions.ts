import { createAction,props } from "@ngrx/store";

import { userToLogin } from "../../../interfaces/interfaces";
import { loggedInUser } from "../../../interfaces/interfaces";

export const login = createAction( '[Login] Login', props<{ user: userToLogin }>());

export const loginSuccess = createAction( '[Login] Login Success', props<{ user: loggedInUser }>());

export const loginError = createAction( '[Login] Login Error', props<{ error: any }>());
