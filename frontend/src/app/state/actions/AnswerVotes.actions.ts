import { createAction, props } from "@ngrx/store";
import { AnswerVote } from "../../../interfaces/interfaces";



export const loadAnswerVotes = createAction(
    '[AnswerVote] Load AnswerVotes',
);


export const loadAnswerVotesSuccess = createAction(
    '[AnswerVote] Load AnswerVotes Success',
    props<{answerVotes: AnswerVote[]}>()
);


export const loadAnswerVotesFailure = createAction(
    '[AnswerVote] Load AnswerVotes Failure',
    props<{error: any}>()
);



export const upVoteAnswer = createAction(
    '[upVoteAnswer] upVoteAnswer',
     (answervote:AnswerVote)=>({answervote})
);


export const upVoteAnswerSuccess = createAction(
    '[upVoteAnswer] upVoteAnswer Success',
    (answervote:AnswerVote)=>({answervote})
);


export const upVoteAnswerFailure = createAction(
    '[upVoteAnswer] upVoteAnswer Failure',
    props<{error: any}>()
);


export const downVoteAnswer = createAction(
    '[downVoteAnswer] downVoteAnswer',
    (answervote:AnswerVote)=>({answervote})
);


export const downVoteAnswerSuccess = createAction(
    '[downVoteAnswer] downVoteAnswer Success',
    (answervote:AnswerVote)=>({answervote})
);


export const downVoteAnswerFailure = createAction(
    '[downVoteAnswer] downVoteAnswer Failure',
    props<{error: any}>()
);