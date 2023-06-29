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
import { TagspipePipe } from "../../pipes/tagspipe/tagspipe.pipe";
import { SearchPipe } from "../../pipes/search/search.pipe";
import { SharedService } from 'src/app/services/shared/shared.service';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, RouterModule, TagspipePipe, SearchPipe]
})
export class HomeComponent implements OnInit  {

  questions: Question[] = [];
  currentPage = 1;
  pageSize = 10;
  pages = [1,2,3,4,5,];
  searchTerm: string = '';
  filteredQuestions: Question[] = [];

  user!: User;


  





  constructor(private store: Store<AppState>, private questionService: QuestionService, private router: Router,private sharedService:SharedService) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 40}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.questions =questions as Question[];
      console.log(this.questions)


      this.sharedService.searchTerm$.subscribe(searchTerm => {
        this.searchTerm = searchTerm;
        this.filteredQuestions = this.filterQuestions(this.searchTerm);
      });
    });

  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 5}));

   console.log(this.currentPage)
  }

  filterQuestions(searchTerm: string): Question[] {
    this.store.dispatch(QuestionsActions.loadQuestions({ page: 1, pageSize: 40 }));
    let filteredQuestions: Question[] = [];
  
    this.store.select(selectQuestions).subscribe(questions => {
      // Implement your filtering logic here based on the search term
      filteredQuestions = questions.filter(question => {
        return question.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  
    return filteredQuestions;
  }
  

  filterbytags(tag:string){
    // this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 10}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.questions =questions as Question[];
      this.questions= this.questions.filter(q => q.tags && q.tags.includes(tag));
      
    });



  }


}