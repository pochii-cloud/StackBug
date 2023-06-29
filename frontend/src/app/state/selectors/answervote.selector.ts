import { AnswerVotesState } from "../reducers/AnswerVote.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";



export const selectAnswerVotesState = createFeatureSelector<AnswerVotesState>('answervote');



export const selectAnswerVotes = createSelector(
    selectAnswerVotesState,
    (state: AnswerVotesState) => state.answerVotes
);



export const selectAnswerVotesLoading = createSelector(
    selectAnswerVotesState,
    (state: AnswerVotesState) => state.loading
);



export const selectAnswerVotesError = createSelector(
    selectAnswerVotesState,
    (state: AnswerVotesState) => state.error
);


