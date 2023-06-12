import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup
    
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  submit(){}
    
}
