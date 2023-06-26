import { AnswersState } from "../reducers/answer.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Answer } from "../../../interfaces/interfaces";


export const selectAnswersState = createFeatureSelector<AnswersState>('answers');


export const selectAnswers = createSelector(
    selectAnswersState,
    (state: AnswersState) => state.answers
  
);


export const selectAnswersLoading = createSelector(
    selectAnswersState,
    (state: AnswersState) => state.loading
);


export const selectAnswersError = createSelector(
    selectAnswersState,
    (state: AnswersState) => state.error
);


