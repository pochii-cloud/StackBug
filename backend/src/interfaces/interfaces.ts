export interface Answer {
    id: string;
    answer: string;
    user_id: string;
    question_id: string;
    comments?:Comment[]
  }

  export interface Comment {
    id: string;
    comment: string;
    user_id: string;
    answer_id: string;
  }
  
export interface Question {
  id: string;
  title: string;
  user_id: string;
  description: string;
  code: string;
  tags: string;
  answers?:Answer[]
  comments?:Comment[]
}


export interface User{
  id:string
  name:string
  email:string
  password:string
}

export interface AnswerVote{
  id:string
  vote:Number
  answer_id:string
  user_id:string
}