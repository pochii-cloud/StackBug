import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/services/login/login.service';
import { IsAuthenticatedService } from 'src/app/services/is-auth/is-authenticated.service';
import { AppState } from 'src/app/state/app.state';
import { selectLoggedInUser, selectLoggedInUserStateError, selectLoggedInUserStateloading } from 'src/app/state/selectors/loggedinuser.selector';
import * as loggedInUserActions from '../../state/actions/login.actions'
import { DisplayMessageComponent } from "../display-message/display-message.component";
import { userToLogin } from 'src/interfaces/interfaces';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, DisplayMessageComponent]
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private fb: FormBuilder, private store: Store<AppState>, private loginService: LoginService){}
    email!:string
    password!:string;
    isLoading: boolean = false;
    error!:any
    userid!:string;
    message!:string |null


    
    ngOnInit(): void {
     
    
       
      this.store.select(selectLoggedInUserStateloading).subscribe((loading) => {
        this.isLoading = loading;
      }
      )
    }
  
  
    onSubmit(form: NgForm) {
  
      if (form.invalid) {

        console.log('form invalid')
        return;

      }
    
      this.store.select(selectLoggedInUserStateError).subscribe(error=>{
        this.message=error.statusText
        console.log(error)
      })
      this.store.dispatch(loggedInUserActions.login({ user: form.value }));
      console.log(form.value)
      this.store.select(selectLoggedInUserStateloading).subscribe((loading) => {
        this.isLoading = loading;
      }
      )
  
    
      this.store.select(selectLoggedInUserStateError).subscribe(err=>{
        this.error=err
      });
   

      this.store.select(selectLoggedInUser).subscribe((user) => {
        
          const updatedUser = {
            ...user,
            username: localStorage.getItem('username') as string,
            email: localStorage.getItem('email') as string,
            role: localStorage.getItem('role') as string,
            token: localStorage.getItem('token') as string
          };
         
          this.router.navigate(['/questions']);
          console.log(updatedUser);
       
      });
      
      
  
    }
    
}
