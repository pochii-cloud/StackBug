import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import { Store } from '@ngrx/store';
import { Answer, Question,Comment } from 'src/interfaces/interfaces';
import * as QuestionsActions from  '../../state/actions/questionactions'

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

   question!:Question
    constructor( private fb:FormBuilder,private route:ActivatedRoute,private store:Store,private router:Router){}

      ngOnInit(): void {
        this.route.params.subscribe((param)=>{
          this.store.select(selectQuestions).subscribe((questions)=>{
             this.question=questions.find(q=>q.id == param['id']) as Question
             console.log(this.question)

          })
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
          user_id: ' ',
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
          user_id: ''
        }
    
        this.store.dispatch(QuestionsActions.addComment(comment))
    
        this.router.navigate(['/questions'])
      }



}


