import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as QuestionsActions from '../../state/actions/questionactions'
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
        askQuestionForm!:FormGroup
      
      constructor( private fb:FormBuilder,private store:Store,private router:Router,private loginService:LoginService){}

      ngOnInit(): void {
          this.askQuestionForm=this.fb.group({
             title:['',Validators.required],
             tags:['',Validators.required],
             description:['',Validators.required],
             code:['',Validators.required]
          })
      }


      onSubmit() {

        // if (this.askQuestionForm.invalid) {
        //   return;
        // }
    
        // if(this.isUpdating)
        // {
    
        //   this.store.dispatch(QuestionsActions.updateQuestion({...this.questionToUpdate, ...this.askQuestionForm.value}));
        //   this.questionService.isQuestionUpdated = false;
        //   this.askQuestionForm.reset();
        //   this.router.navigate(['/questions']);
        //   return;
        // }
    
     
        this.store.dispatch(QuestionsActions.addQuestion({
          id: '',
          description: '',
          code: '',
          tags: '',
          user_id:this.loginService.getloggedinuserid(),
          ...this.askQuestionForm.value
        }));
        

        console.log(this.askQuestionForm.value)
    
        this.router.navigate(['/questions']);
     
      }

}
