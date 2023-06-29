import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectLoggedInUser } from 'src/app/state/selectors/loggedinuser.selector';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { Answer, Question, User, profile } from 'src/interfaces/interfaces';
import { LoginService } from 'src/app/services/login/login.service';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import * as QuestionsActions from '../../state/actions/questionactions';
import * as AnswerActions from '../../state/actions/answer.actions'
import * as UserActions from '../../state/actions/users.actions'
import * as LoginActions from '../../state/actions/login.actions'
import { selectAnswers } from 'src/app/state/selectors/answer.selector';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!:profile
  userquestions:Question[]=[]
  useranswers:Answer[]=[]
  updateProfileForm!: FormGroup;
  showquestions:boolean=true
  updateProfileFormShow = false;

    constructor(private store:Store<AppState>,private router:Router,private loginService:LoginService,private fb: FormBuilder){}

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      name: [this.user.username],
      email: [this.user.email],
      id: [this.user.id]
    })


    this.store.dispatch(UserActions.loadUsers())
    this.store.select(selectLoggedInUser).subscribe((user: any) => {
      if(user){
        this.user=user
        console.log('user',user.id)
      }
      else{
          this.router.navigate(['/login'])
      }
   

    })




    this.store.dispatch(QuestionsActions.loadQuestions({page: 1, pageSize: 50}));
    this.store.select( selectQuestions).subscribe(questions => {
      this.userquestions = questions.filter(question => question.user_id == this.user.id) as Question[];
      console.log(this.userquestions)
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

  updateProfile() { 
    this.store.dispatch(UserActions.updateUser(this.updateProfileForm.value))
    console.log(this.updateProfileForm.value);
  }
}
