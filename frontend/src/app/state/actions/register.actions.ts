import { createAction, props } from "@ngrx/store";
import { UserToRegister } from "src/interfaces/interfaces";

export const register = createAction( '[Register] Register', props<{ user: UserToRegister }>());


export const registerSuccess = createAction( '[Register] Register Success', props<{ user: any }>());


export const registerError = createAction( '[Register] Register Error', props<{ error: any }>());