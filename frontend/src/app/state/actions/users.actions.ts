import { createAction,props } from "@ngrx/store";
import { Answer, User } from "../../../interfaces/interfaces";

export const loadUsers = createAction(
    "[Users] Load Users"
);

export const loadUsersSuccess = createAction(
    "[Users] Load Users Success",

    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    "[Users] Load Users Error",

    props<{ error: any }>()
);


export const updateUser = createAction(
    '[Users] Update User',
    (user: User) => ({ user })
);

export const updateUserSuccess = createAction(
    '[Users] Update User Success',
    (user: User) => ({ user })
);

export const updateUserFailure = createAction(
    '[Users] Update User Failure',
    (error: any) => ({ error })
);


export const deleteUser = createAction(
    '[USER] Delete user',
    (user: User) => ({ user })
);


export const deleteUserSuccess = createAction(
    '[Questions] Delete User Success',
    (user: User) => ({ user })
);

export const deleteUserFailure = createAction(
    '[User] Delete User Failure',
    (error: any) => ({ error })
);


