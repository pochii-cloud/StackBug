import { AnswerVote } from "src/interfaces/interfaces";
import { AnswersState } from "./reducers/answer.reducer";
import { loggedInUserState } from "./reducers/loggedinuser.reducer";
import { QuestionsState } from "./reducers/question-reducers";
import { UsersState } from "./reducers/user.reducer";



export interface AppState {
    questions: QuestionsState;  
    answers: AnswersState;
    users:UsersState;
    loggedInUser: loggedInUserState;
    answervote:AnswerVote;
}