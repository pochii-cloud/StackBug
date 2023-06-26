import { AnswersState } from "./reducers/answer.reducer";
import { QuestionsState } from "./reducers/question-reducers";



export interface AppState {
    questions: QuestionsState;  
    answers: AnswersState;
}