export interface Answer {
    id: string;
    answer: string;
    user_id: string;
    question_id: string;
    is_accepted?:string
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
  user_id?: string;
  description: string;
  code: string;
  tags: string;
  answers : Answer[];
}

export interface User{
  id:string
  name:string
  email:string
  password:string
}

export interface UserToRegister{
  name:string
  email:string
  password:string
}

export interface userToLogin {  
  email: string;
  password: string;
}


export interface loggedInUser {
  user?: User[];
  is_admin?: string;
  id: string;
  username: string;
  email: string;
  token : string;

}

export interface AnswerVote{
  id:string
  vote:Number
  answer_id:string
  user_id:string
}