import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";


import * as usersActions from "../actions/users.actions";
import { of } from "rxjs";
import { UsersService } from "src/app/services/user/users.service";
import { User } from "src/interfaces/interfaces";


@Injectable()
export class UserEffects {
    
        constructor(
            private actions$: Actions,
            private userService: UsersService
        ) { }
    
        loadUsers$ = createEffect(() => this.actions$.pipe(
            ofType(usersActions.loadUsers),
            mergeMap(() => this.userService.getUsers().pipe(
                map(users => usersActions.loadUsersSuccess({ users })),
                catchError(error => of(usersActions.loadUsersFailure({ error })))
            )),
        ));


        deleteUser$ = createEffect(() =>
        this.actions$.pipe(
          ofType(usersActions.deleteUser),
          mergeMap((action) =>
            this.userService.deleteuser(action.user).pipe(
              map((user) => usersActions.deleteUserSuccess(user)),
              catchError((error: any) => of(usersActions.deleteUserFailure({ error })))
            )
          )
        )
      );

      updateUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(usersActions.updateUser),
        mergeMap(({ user }) =>
          this.userService.updateUser(user).pipe(
            map(() => usersActions.updateUserSuccess({ ...user })),
            catchError(error => of(usersActions.updateUserFailure({ error })))
          )
        )
      )
    );



    }
    