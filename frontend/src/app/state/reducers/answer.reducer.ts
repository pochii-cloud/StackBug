import { createReducer,on } from "@ngrx/store";
import * as AnswerActions from "../actions/answer.actions";
import { Answer } from "../../../interfaces/interfaces";


export interface AnswersState {
    answers: Answer[];
    loading: boolean;
    error: any;
}

export const initialState: AnswersState = {
    answers: [],
    loading: false,
    error: null
};


export const answersReducer = createReducer(
    initialState,
    on(AnswerActions.loadAnswers, (state) => {
        return {
            ...state,
            loading: true
        }
    }
    ),
    on(AnswerActions.loadAnswersSuccess, (state, { answers }) => {
        return {
            ...state,
            loading: false,
            answers: [...answers],
            
            
        }
    }
    ),
    on(AnswerActions.loadAnswersFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error
        }
    }
    )
);


