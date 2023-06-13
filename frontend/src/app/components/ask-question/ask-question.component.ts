import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
        askQestionForm!:FormGroup
      
      constructor( private fb:FormBuilder){}

      ngOnInit(): void {
          this.askQestionForm=this.fb.group({
             title:['',Validators.required],
             tags:['',Validators.required],
             problem:['',Validators.required],
             expectations:['',Validators.required]
          })
      }

     
}
