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
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private fb: FormBuilder, private store: Store<AppState>, private loginService: LoginService){}
    email!:string
    password!:string;
    isLoading: boolean = false;
    error!:any
    userid!:string;
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
    
  
      this.store.dispatch(loggedInUserActions.login({ user: form.value }));
      console.log(form.value)
      this.store.select(selectLoggedInUserStateloading).subscribe((loading) => {
        this.isLoading = loading;
      }
      )
  
    
      this.store.select(selectLoggedInUserStateError).subscribe(err=>{
        this.error=err
      });
   

      this.store.select(selectLoggedInUser).subscribe((user: any) => {
        if (user) {
          if (user.role) {
            this.router.navigate(['/admin']);
          }
          else {
            // reload page and redirect to home
            const currentUrl = this.router.url;

            console.log(user)
            this.loginService.setuserid(user.id)
          
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(["/"]);
            }
            );
  
          }
        }
  
      })
  
    }
    
}
