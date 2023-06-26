import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { RegisterService } from "../../services/register/register.service";
import * as registerUserActions from "../actions/register.actions";



@Injectable()
export class RegisterUserEffects {
    constructor(private actions$: Actions, private registerService: RegisterService) {}

    registerUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerUserActions.register),
            mergeMap((action) =>
                this.registerService.registerUser(action.user).pipe(
                    map((user) => registerUserActions.registerSuccess({ user })),
                    catchError(async (error) => registerUserActions.registerError({ error }))
                )
            )
        )
    );
}

