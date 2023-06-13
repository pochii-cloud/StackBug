import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
   updateQestionForm!:FormGroup

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
     this.updateQestionForm=this.fb.group({
             title:['',Validators.required],
             tags:['',Validators.required],
             problem:['',Validators.required],
             expectations:['',Validators.required]
          })
  }
}
