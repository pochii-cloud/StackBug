import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService implements CanActivate {

  constructor(private router: Router) { }
  
    canActivate(): boolean {
      if (localStorage.getItem('role') == '1') {
        this.router.navigate(['/admin']);
        return true;
      } 

      this.router.navigate(['/login']);
      return false;
    }

   
}
