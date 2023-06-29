import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerVote } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnswervoteService {

  constructor(private http:HttpClient) { }


  getAnswerVotes(): Observable<AnswerVote[]> {
    return this.http.get<AnswerVote[]>('http://localhost:5000/answers/answersvotes');
  }

  upVote(answervote:AnswerVote): Observable<AnswerVote> {
    return this.http.post<AnswerVote>('http://localhost:5000/answers/upvote-answer',answervote);
  }

  downVote(answervote:AnswerVote): Observable<AnswerVote> {
    return this.http.post<AnswerVote>('http://localhost:5000/answers/downvote-answer',answervote);
  }
}
