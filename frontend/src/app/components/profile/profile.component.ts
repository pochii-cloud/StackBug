import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedinuser.selector';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { Answer, Question, User, loggedInUser, profile } from 'src/interfaces/interfaces';
import { LoginService } from 'src/app/services/login/login.service';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import * as QuestionsActions from '../../state/actions/questionactions';
import * as AnswerActions from '../../state/actions/answer.actions'
import * as UserActions from '../../state/actions/users.actions'
import * as LoginActions from '../../state/actions/login.actions'
import { selectAnswers } from 'src/app/state/selectors/answer.selector';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usertoupdate!:User
  user!:loggedInUser
  userquestions:Question[]=[]
  useranswers:Answer[]=[]
  updateProfileForm!: FormGroup;
  showquestions:boolean=true
  updateProfileFormShow = false;

    constructor(private store:Store<AppState>,private router:Router,private loginService:LoginService,private fb: FormBuilder,private userService:UsersService){}

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      username: [localStorage.getItem('username')],
      email: [localStorage.getItem('email')],
      id: [localStorage.getItem('id')]
    });

    
    this.store.select(selectLoggedInUser).subscribe((user) => {
      if(user){
        this.user=user
        console.log('user',user.id)
      }
      else{
        console.log('no user')
          this.router.navigate(['/login'])
      }
   

    })




    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 50}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.userquestions = questions.filter(question => question.user_id == this.user.id) as Question[];
      console.log('questions',this.userquestions)
    });

    this.store.dispatch(AnswerActions.loadAnswers())
    this.store.select(selectAnswers).subscribe(answers => {
      
      this.useranswers = answers.filter(answer => answer.user_id == this.user.id) as Answer[];
      console.log(this.useranswers)
   
    }

    );

  }


  toggleshowquestionsfalse(){
    this.showquestions=false
  }
  
  toggleshowquestionstrue(){
    this.showquestions=true
  }
  showupdateprofile(){
    this.updateProfileFormShow=true
  }

  updateProfile(user:User) { 
    this.store.dispatch(UserActions.updateUser({...this.updateProfileForm.value}))
    console.log(this.updateProfileForm.value);
    this.router.navigate(['/'])
  }
  deleteQuestion(question: Question) {
    this.store.dispatch(QuestionsActions.deleteQuestion(question))

    this.router.navigate(['/'])
  }
}

