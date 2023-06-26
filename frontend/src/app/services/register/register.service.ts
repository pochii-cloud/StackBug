import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserToRegister } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {  }



  registerUser(user: UserToRegister) {
    return this.http.post('http://localhost:5000/user/adduser', user);
  }
}
