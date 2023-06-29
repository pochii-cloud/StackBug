import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import { Store } from '@ngrx/store';
import { Answer, Question,Comment, AnswerVote } from 'src/interfaces/interfaces';
import * as QuestionsActions from  '../../state/actions/questionactions'
import * as AnswerVoteActions from '../../state/actions/AnswerVotes.actions'
import { LoginService } from 'src/app/services/login/login.service';
import { selectAnswerVotes } from 'src/app/state/selectors/answervote.selector';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
   postanswerform!:FormGroup
   showcommentform=false
   commentform!:FormGroup
   votes!:AnswerVote[]

   question!:Question
    constructor( private fb:FormBuilder,private route:ActivatedRoute,private store:Store,private router:Router,private loginService:LoginService){}

      ngOnInit(): void {
        this.route.params.subscribe((param)=>{
          this.store.select(selectQuestions).subscribe((questions)=>{
             this.question=questions.find(q=>q.id == param['id']) as Question
             console.log(this.question)

          })
          this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 50}));
       })
      

       this.store.dispatch(AnswerVoteActions.loadAnswerVotes())
       this.store.select(selectAnswerVotes).subscribe(answersvote=>{
          this.votes=answersvote

          console.log('votes',this.votes)
       })

       


         this.postanswerform=this.fb.group({
          answer:['',Validators.required]
         })

         this.commentform=this.fb.group({
          comment:['',Validators.required]
         })
      }



      postAnswer(question: Question) {


  
        let answer: Answer
        answer = {
          id: ' ',
          answer: this.postanswerform.value.answer,
          user_id: this.loginService.getloggedinuserid() ,
          comments:[],
          question_id: this.question.id
        }
    
        this.store.dispatch(QuestionsActions.addAnswer(answer))
    
        this.router.navigate(['/questions'])
    
      }
      

      postComment(answer: Answer) {
        let comment: Comment = {
          id: ' ',
          comment: this.commentform.value.comment,
          answer_id: answer.id,
          user_id: this.loginService.getloggedinuserid()
        }
    
        this.store.dispatch(QuestionsActions.addComment(comment))
    
        this.router.navigate(['/questions'])
      }

      markAccepted(answer: Answer) {
        this.store.dispatch(QuestionsActions.updateAnswer({ ...answer}))
      }

      upvote(answer: Answer) {
        const voteCount = this.getVoteCount(answer.id);
        const answerVote: AnswerVote = {
          id: '',
          answer_id: answer.id,
          user_id: this.loginService.getloggedinuserid(),
          votes: voteCount + 1, // Increment the vote count by 1
          upvote: true,
          downvote: false
        };
        this.store.dispatch(AnswerVoteActions.upVoteAnswer(answerVote));
      }
      
      downvote(answer: Answer) {
        const voteCount = this.getVoteCount(answer.id);
        const answerVote: AnswerVote = {
          id: '',
          answer_id: answer.id,
          user_id: this.loginService.getloggedinuserid(),
          votes: voteCount - 1, // Decrement the vote count by 1
          upvote: false,
          downvote: true
        };
        this.store.dispatch(AnswerVoteActions.downVoteAnswer(answerVote));
      }
      
      getVoteCount(answerId: string): number {
        const answerVotes = this.votes.filter(vote => vote.answer_id === answerId);
        // return answerVotes[0].votes

        if (answerVotes.length > 0) {
          return answerVotes[0].votes;
        } else {
          return 0;
        }
      }
      

}


