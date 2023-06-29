import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5000/user/getusers');
  }

  deleteuser(user: User): Observable<User> {
    return this.http.delete<User>(`http://localhost:5000/user/deleteuser/${user.id}`);
  }
 
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:5000/user/updateuser/`,
      user
    );
  }
}
