import { createAction,props } from "@ngrx/store";
import { Answer } from "../../../interfaces/interfaces";

export const loadAnswers = createAction(
    '[Answer] Load Answers',
);

export const loadAnswersSuccess = createAction(
    '[Answer] Load Answers Success',
    props<{answers: Answer[]}>()
);

export const loadAnswersFailure = createAction(
    '[Answer] Load Answers Failure',
    props<{error: any}>()
);

