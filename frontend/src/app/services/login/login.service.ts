import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loggedInUser, userToLogin } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedin_user_id!:string


  constructor(private router: Router,private http: HttpClient) { }
  login(user:userToLogin):Observable<loggedInUser> {
    return this.http.post<loggedInUser>('http://localhost:5000/user/loginuser',user);

  }
  

  setuserid(id:string):void{
    this.loggedin_user_id=id
  }
  

  getloggedinuserid():string{
    console.log('returned user id is',this.loggedin_user_id)
    return this.loggedin_user_id
  }

}
