export interface Answer {
    id: string;
    answer: string;
    user_id: string;
    question_id: string;
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
}

export interface User{
  id:string
  name:string
  email:string
  password:string
}