import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  searchTerm!: string;
  constructor() { }
 
  setSearchTerm(term: string) {
    this.searchTerm = term;
    console.log('service returned',this.searchTerm)
    return this.searchTerm
  }

}
