import { createReducer, on } from '@ngrx/store';
import * as AnswerVoteActions from '../actions/AnswerVotes.actions';
import { AnswerVote } from '../../../interfaces/interfaces';

export interface AnswerVotesState {
  answerVotes: AnswerVote[];
  loading: boolean;
  error: any;
}

export const initialState: AnswerVotesState = {
  answerVotes: [],
  loading: false,
  error: null,
};

export const answerVotesReducer = createReducer(
  initialState,
  on(AnswerVoteActions.loadAnswerVotes, (state) => ({
    ...state,
    loading: true,
  })),
  on(AnswerVoteActions.loadAnswerVotesSuccess, (state, { answerVotes }) => ({
    ...state,
    loading: false,
    answerVotes: [...answerVotes],
  })),
  on(AnswerVoteActions.loadAnswerVotesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AnswerVoteActions.upVoteAnswer, (state) => ({
    ...state,
    loading: true,
  })),
  on(AnswerVoteActions.upVoteAnswerSuccess, (state, { answervote }) => {
    const updatedVotes = state.answerVotes.map((vote) => {
      if (vote.id === answervote.id) {
        return {
          ...vote,
          upvote: true,
          votes: vote.votes + 1,
        };
      }
      return vote;
    });

    return {
      ...state,
      answerVotes: updatedVotes,
      loading: false,
    };
  }),
  on(AnswerVoteActions.upVoteAnswerFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AnswerVoteActions.downVoteAnswer, (state) => ({
    ...state,
    loading: true,
  })),
  on(AnswerVoteActions.downVoteAnswerSuccess, (state, { answervote }) => {
    const updatedVotes = state.answerVotes.map((vote) => {
      if (vote.id === answervote.id) {
        return {
          ...vote,
          downvote: true,
          votes: vote.votes - 1,
        };
      }
      return vote;
    });

    return {
      ...state,
      answerVotes: updatedVotes,
      loading: false,
    };
  }),
  on(AnswerVoteActions.downVoteAnswerFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
