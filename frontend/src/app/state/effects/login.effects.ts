import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

import * as loginActions from "../actions/login.actions";
import { LoginService } from "src/app/services/login/login.service";



@Injectable()
export class LoggedInUserEffects {
    constructor(private actions$: Actions, private loginService: LoginService) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
        ofType(loginActions.login),
        mergeMap((action) =>
            this.loginService.login(action.user).pipe(
                tap((user) => {
                    localStorage.setItem("token", user.token);
                    localStorage.setItem("username", user.username);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("role", user.role!);
                   
                }),
            map((user) => loginActions.loginSuccess({ user })),
            catchError(async (error) => loginActions.loginError({ error }))
            )
        )
        )
    );
    }