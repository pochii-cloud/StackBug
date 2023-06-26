import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import { Question } from 'src/interfaces/interfaces';
import { QuestionService } from 'src/app/services/questions/question.service';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
   updateQestionForm!:FormGroup
   question!:Question 
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private store:Store,private questionService:QuestionService,private router:Router ){}
  ngOnInit(): void {

    this.route.params.subscribe((param)=>{
      this.store.select(selectQuestions).subscribe((questions)=>{
         this.question=questions.find(q=>q.id == param['id']) as Question
         console.log(this.question ,'update this')
      })
   })
    
   
     this.updateQestionForm=this.fb.group({
             title:[this.question?.title,Validators.required],
             tags:[this.question?.tags,Validators.required],
             description:[this.question?.description,Validators.required],
             code:[this.question?.code,Validators.required]
          })
  }

  updateQuestion(question :Question) {
    this.questionService.updateQuestion(question);
    this.router.navigate(['/questions']);
  }

}
