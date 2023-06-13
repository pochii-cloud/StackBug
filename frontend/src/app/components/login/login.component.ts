import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // loginForm!:FormGroup
    name!:string;
    email!:string
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    // this.loginForm=this.fb.group({
    //   email:['',[Validators.required]],
    //   password:['',Validators.required]
    // })
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(this.name,this.email)
    }
  }
    
}
