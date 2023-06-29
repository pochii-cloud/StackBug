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
  user?:User
  description: string;
  code: string;
  tags: string;
  answers : Answer[];
}

export interface User{
  id:string
  username:string
  email:string
  password:string
}

export interface profile{
  id:string
  username:string
  email:string
  password:string
  role:string
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
  isAdmin?: string;
  id: string;
  username: string;
  email: string;
  token : string;

}

export interface AnswerVote{
  id:string
  answer_id:string
  user_id:string
  votes:number
  user?: User;
  upvote:boolean;
  downvote:boolean; 
}