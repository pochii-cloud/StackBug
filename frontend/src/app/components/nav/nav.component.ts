import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

    show=false;

    ngOnInit(): void {
      

     
    }

    togglenav(): void {
      this.show = !this.show;

        // Automatically close the navbar after a small delay (e.g., 500ms)
    setTimeout(() => {
      this.show = false;
    }, 2000);
    }
}
