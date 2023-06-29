import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { IsAuthenticatedService } from 'src/app/services/is-auth/is-authenticated.service';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { QuestionService } from 'src/app/services/questions/question.service';


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
    is_admin:boolean=false
    

    constructor(private authservice:IsAuthenticatedService,private router:Router,private searchService:SharedService,private questionService:QuestionService){}

    ngOnInit(): void {
      this.is_authenticated = this.authservice.isAuthenticated();
      this.is_admin=this.authservice.isAdmin()
    }
  
    ngOnChanges(): void {
      this.is_authenticated = this.authservice.isAuthenticated();
    }
  
    ngDoCheck(): void {
      this.is_authenticated = this.authservice.isAuthenticated();
    }
   
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('id');
      this.is_authenticated = false;
      this.router.navigate(['/']);

    }


    togglenav(): void {
      this.show = !this.show;

        // Automatically close the navbar after a small delay (e.g., 500ms)
    setTimeout(() => {
      this.show = false;
    }, 4000);
    }
     
    // search(): void {
    //   if (this.searchTerm) {
    //     this.searchService.setSearchTerm(this.searchTerm);
    //     console.log('search term',this.searchTerm)
    //   }
    // }


    
}
