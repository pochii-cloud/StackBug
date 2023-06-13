import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotten-password',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {
   email!:string
   ngOnInit(): void {
     
   }

  submitForm(form:NgForm){
     console.log(form.value)
  }
}
