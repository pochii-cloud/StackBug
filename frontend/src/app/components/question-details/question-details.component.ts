import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    constructor( private fb:FormBuilder){}

      ngOnInit(): void {
         this.postanswerform=this.fb.group({
          answer:['',Validators.required]
         })

         this.commentform=this.fb.group({
          comment:['',Validators.required]
         })
      }

      togglecommentform(){
       this.showcommentform =!this.showcommentform
       console.log(this.showcommentform)
      }
}
