import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'questions',
        component: HomeComponent,
  },
  {
    path:'login',component:LoginComponent 
  },
  {
    path:'signup',component:SignupComponent 
  },
  {
    path:'profile',component:ProfileComponent 
  },
  {
    path:'ask-question',component:AskQuestionComponent 
  },
  {
    path:'question-detail',component:QuestionDetailsComponent 
  },
  {
    path:'update-question',component:UpdateQuestionComponent 
  },
  {
    path:'admin',component:AdminComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
