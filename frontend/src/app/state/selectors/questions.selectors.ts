
import { Question } from "src/interfaces/interfaces";
import { QuestionsState } from "../reducers/question-reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const selectQuestionsState = createFeatureSelector<QuestionsState>('questions');


export const selectQuestions = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.questions
);

export const selectQuestionsLoading = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.loading
);

export const selectQuestionsError = createSelector(
    selectQuestionsState,
    (state: QuestionsState) => state.error
);

export const selectQuestionById = (questionId: string) => createSelector(
    selectQuestionsState,
     (state: QuestionsState) =>
    state.questions.find((question: Question) => question.id === questionId)
  );
       