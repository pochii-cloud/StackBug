import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import * as registerUserActions from '../../state/actions/register.actions'
import { Store } from '@ngrx/store';
import { selectRegisterUserStateError, selectRegisterUserStateloading } from 'src/app/state/selectors/register.selectors';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  isLoading = true;
  signupform!:FormGroup
  constructor( private fb:FormBuilder , private store:Store, private router:Router){}

  ngOnInit(): void {
     
    this.signupform=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })

  }


  onSubmit() {
    if (this.signupform.invalid) {
      return;
    }
    this.store.dispatch(registerUserActions.register({ user: this.signupform.value }))

    this.store.select(selectRegisterUserStateloading).subscribe((loading) => {
      this.isLoading = loading;
    });
 
    this.store.select(selectRegisterUserStateError).subscribe((error:any) => {
      if (error) {
        console.log(error.error.message);
        // this.modalHost.viewContainerRef.clear();
        // const modal = this.modalHost.viewContainerRef.createComponent(ModalComponent);
        // return;
      }
     
    })

    this.router.navigate(['/login']);
  }

}


