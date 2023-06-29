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
import { DisplayMessageComponent } from "../display-message/display-message.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, RouterModule, TagspipePipe, SearchPipe, DisplayMessageComponent,FormsModule]
})
export class HomeComponent implements OnInit  {

  questions: Question[] = [];
  currentPage = 1;
  pageSize = 10;
  pages = [1,2,3,4,5,];
  filteredQuestions: Question[] = [];
  searchTerm!:string
  user!: User;



  





  constructor(private store: Store<AppState>, private questionService: QuestionService, private router: Router,private searchService:SharedService,) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 20}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.questions =questions as Question[];
      console.log(this.questions)
    });

  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 5}));

   console.log(this.currentPage)
  }

  filterQuestions(searchTerm: string): Question[] {
    this.store.dispatch(QuestionsActions.loadQuestions({ page: 1, pageSize: 30 }));
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

  questionswithmostanswers() {
    this.store.select(selectQuestions).subscribe(questions => {
      this.questions = questions as Question[]; 
      // Create a copy of the array using the spread operator
      const sortedQuestions = [...this.questions];
      // Sort the copied array based on the number of answers
      sortedQuestions.sort((a, b) => b.answers.length - a.answers.length); 
      // Assign the sorted array back to this.questions
      this.questions = sortedQuestions;
    });
  }

  questionsWithEmptyAnswers() {
    this.store.select(selectQuestions).subscribe(questions => {
      this.questions = questions as Question[];
      
      // Filter questions where the answers array is empty
      this.questions = this.questions.filter(question => question.answers.length === 0);
    });
  }

  interestingquestions(){
    this.store.select(selectQuestions).subscribe(questions => {
      this.questions = questions as Question[];
       // Filter questions with answers
       this.questions = this.questions.filter(question => question.answers.length > 0);
    });
  }


  search(): void {
    if (this.searchTerm) {
      this.questionService.searchQuestions(this.searchTerm).subscribe(
        (questions) => {
         this.questions=questions
          console.log(questions);
        },
        (error) => {
          // Handle the error
          console.error('Error searching questions:', error);
        }
      );
    }
  }
  
  
  


}