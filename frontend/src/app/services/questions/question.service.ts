import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Answer, Question,Comment } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) {}


  getQuestions(page = 1, pageSize = 10): Observable<Question[]> {
    // include query params in the url of page and pageSize
    let question= this.http.get<Question[]>('http://localhost:5000/questions/questionslist', { params: { page: page.toString(), pageSize: pageSize.toString() } });

    console.log(question)
    return question
  }


  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(' http://localhost:5000/questions/add-question', question);
  }
  

  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(`http://localhost:5000/questions/update-question/${question.id}`, question);
  }

  deleteQuestion(question: Question): Observable<Question> {
    return this.http.delete<Question>(`http://localhost:5000/questions/delete-question/${question.id}`);
  }

  addAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>('http://localhost:5000/answers/add-answer', answer);
  }
  updateAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`http://localhost:5000/answers/answer-accepted/${answer.id}`, answer);
  }

  addComment(comment:Comment): Observable<Comment> {
    return this.http.post<Comment>('http://localhost:5000/comments/add-comment', comment);
  }
}