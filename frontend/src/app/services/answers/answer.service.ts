import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { Answer, AnswerVote, User } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }


  getAnswers(): Observable<Answer[]> {
    return this.http.get<Answer[]>('http://localhost:5000/answers/answerslist')
  }
}
