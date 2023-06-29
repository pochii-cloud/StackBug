import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  setSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }


}
