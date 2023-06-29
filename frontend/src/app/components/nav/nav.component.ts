import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { IsAuthenticatedService } from 'src/app/services/is-auth/is-authenticated.service';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    is_authenticated:boolean=false
    show=false;
    searchTerm:string=''
    @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor(private authservice:IsAuthenticatedService,private router:Router,private searchService:SharedService){}

    ngOnInit(): void {
      this.is_authenticated = this.authservice.isAuthenticated();
    }
  
    ngOnChanges(): void {
      this.is_authenticated = this.authservice.isAuthenticated();
    }
  
    ngDoCheck(): void {
      this.is_authenticated = this.authservice.isAuthenticated();
    }
   
    logout() {
      localStorage.removeItem('token');
      this.is_authenticated = false;
      this.router.navigate(['/']);

    }

    onSearchChange(): void {
      this.searchChanged.emit(this.searchTerm);
    }

    togglenav(): void {
      this.show = !this.show;

        // Automatically close the navbar after a small delay (e.g., 500ms)
    setTimeout(() => {
      this.show = false;
    }, 2000);
    }


    
}
