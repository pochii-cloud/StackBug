import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AnswerVote } from "../../../interfaces/interfaces";
import * as answerVoteActions from "../actions/AnswerVotes.actions";
import { AnswervoteService } from "src/app/services/answervote/answervote.service";
import { of } from "rxjs";


@Injectable()
export class AnswerVoteEffects {
    
        constructor(private actions$: Actions, private answerVoteService: AnswervoteService) {}
    
        loadAnswerVotes$ = createEffect(() =>
            this.actions$.pipe(
            ofType(answerVoteActions.loadAnswerVotes),
            mergeMap(() =>
                this.answerVoteService.getAnswerVotes().pipe(
                map((answerVotes: AnswerVote[]) => answerVoteActions.loadAnswerVotesSuccess({ answerVotes })),
                catchError(async (error) => answerVoteActions.loadAnswerVotesFailure({ error }))
                )
            )
            )
        );

        upVoteAnswer$ = createEffect(() =>
        this.actions$.pipe(
          ofType(answerVoteActions.upVoteAnswer),
          mergeMap((action) =>
            this.answerVoteService.upVote(action.answervote).pipe(
              map((answervote) =>
                answerVoteActions.upVoteAnswerSuccess(answervote)
              ),
              catchError((error) =>
                of(answerVoteActions.upVoteAnswerFailure({ error }))
              )
            )
          )
        )
      );
      

      downVoteAnswer$ = createEffect(() =>
      this.actions$.pipe(
        ofType(answerVoteActions.downVoteAnswer),
        mergeMap((action) =>
          this.answerVoteService.downVote(action.answervote).pipe(
            map((answervote) =>
              answerVoteActions.downVoteAnswerSuccess(answervote)
            ),
            catchError((error) =>
              of(answerVoteActions.downVoteAnswerFailure({ error }))
            )
          )
        )
      )
    );


        }