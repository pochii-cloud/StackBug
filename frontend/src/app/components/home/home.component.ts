import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question, User } from 'src/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { QuestionService } from 'src/app/services/questions/question.service';
import * as QuestionsActions from '../../state/actions/questionactions';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  questions: Question[] = [];
  currentPage = 1;
  pageSize = 10;
  pages = [1,2,3,4,5,];

  user!: User;

  





  constructor(private store: Store<AppState>, private questionService: QuestionService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 30}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.questions =questions as Question[];
      console.log(this.questions)
    });

    // this.store.select( selectLoggedInUser).subscribe(user => {
    //   if(user == null)
    //   {
    //     this.router.navigate(['/home/login']);
    //   }
    // }
    // );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 5}));

   console.log(this.currentPage)
  }


}