import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService implements CanActivate {

  constructor(private router: Router) { }
  
    canActivate(): boolean {
      const isadmin=localStorage.getItem('role')
      if (isadmin == '1') {
        this.router.navigate(['/admin']);
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }

   
}
