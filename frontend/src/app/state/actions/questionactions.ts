import { createAction, props } from "@ngrx/store";
import { Answer, Question,Comment } from "src/interfaces/interfaces";




export const loadQuestions = createAction(
    '[Questions] Load Questions',
    props<{ page: number, pageSize: number }>()
);


export const loadQuestionsSuccess = createAction(
    '[Questions] Load Questions Success',
    props<{ questions: Question[] }>()
);

export const loadQuestionsFailure = createAction(
    '[Questions] Load Questions Failure',
    (error: any) => ({ error })
);

export const addQuestion = createAction(
    '[Questions] Add Question',
    (question: Question) => ({ question })
);

export const addQuestionSuccess = createAction(
    '[Questions] Add Question Success',
    (question: Question) => ({ question })
);

export const addQuestionFailure = createAction(
    '[Questions] Add Question Failure',
    (error: any) => ({ error })
);


export const deleteQuestion = createAction(
    '[Questions] Delete Question',
    (question: Question) => ({ question })
);

export const deleteQuestionSuccess = createAction(
    '[Questions] Delete Question Success',
    (question: Question) => ({ question })
);

export const deleteQuestionFailure = createAction(
    '[Questions] Delete Question Failure',
    (error: any) => ({ error })
); 



export const updateQuestion = createAction(
    '[Questions] Update Question',
    (question: Question) => ({ question })
);

export const updateQuestionSuccess = createAction(
    '[Questions] Update Question Success',
    (question: Question) => ({ question })
);

export const updateQuestionFailure = createAction(
    '[Questions] Update Question Failure',
    (error: any) => ({ error })
);

export const updateAnswer = createAction(
    '[Questions] Update Answer',
    (answer: Answer) => ({ answer })
);

export const updateAnswerSuccess = createAction(
    '[Questions] Update Answer Success',
    (answer: Answer) => ({ answer })
);

export const updateAnswerFailure = createAction(
    '[Questions] Update Answer Failure',
    (error: any) => ({ error })
);







export const addAnswer = createAction(
    '[Questions] Add Answer',
    (answer: Answer ) => ({answer })
);

export const addAnswerSuccess = createAction(
    '[Questions] Add Answer Success',
    (answer: Answer ) => ({ answer })
);

export const addAnswerFailure = createAction(
    '[Questions] Add Answer Failure',
    (error: any) => ({ error })
);






export const addComment = createAction(
    '[Questions] Add Comment',
    (comment:Comment) => ({ comment })
);

export const addCommentSuccess = createAction(
    '[Questions] Add Comment Success',
    (comment:Comment) => ({ comment })
);

export const addCommentFailure = createAction(
    '[Questions] Add Comment Failure',
    (error: any) => ({ error })
);