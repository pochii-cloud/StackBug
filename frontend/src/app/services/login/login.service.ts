import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loggedInUser, userToLogin } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,private http: HttpClient) { }
  login(user:userToLogin):Observable<loggedInUser> {
    return this.http.post<loggedInUser>('http://localhost:5000/users/loginuser',user);

  }



}
