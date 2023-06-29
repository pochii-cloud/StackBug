import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Question, User } from 'src/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { QuestionService } from 'src/app/services/questions/question.service';
import { AppState } from 'src/app/state/app.state';
import * as QuestionsActions from '../../state/actions/questionactions';
import * as UserActions from '../../state/actions/users.actions'
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import { selectUsers } from 'src/app/state/selectors/users.selectors';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  implements OnInit {
     showquestions = true
     questions: Question[] = [];
     users:User[]=[];

      constructor(private store: Store<AppState>, private questionService: QuestionService, private router: Router) {}
      
     ngOnInit(): void {
      
    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 20}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.questions =questions as Question[];
      console.log(this.questions)
    });


    this.store.dispatch(UserActions.loadUsers());
    this.store.select( selectUsers).subscribe(users => {
      this.users =users as User[];
      console.log(this.users)
    });

     }
     
     deleteQuestion(question: Question) {
      this.store.dispatch(QuestionsActions.deleteQuestion(question))
  
      this.router.navigate(['/admin'])
    }

    deleteUser(user:User){
      this.store.dispatch(UserActions.deleteUser(user))
      this.router.navigate(['/admin'])
    }


     toogleshowquestions(){
       this.showquestions=!this.showquestions
     }
}
