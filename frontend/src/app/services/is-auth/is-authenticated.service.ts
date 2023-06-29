import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedService {

  constructor() { }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  isAdmin():boolean{
     let isadmin=localStorage.getItem('role')
     if(isadmin === '1'){
      return true
     }
     else{
      return false
     }
  }
}