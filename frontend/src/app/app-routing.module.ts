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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { CanActivateService } from './services/canActivate/can-activate.service';

const routes: Routes = [
  {
    path: '',
    loadComponent:()=>import('./components/landing/landing.component').then(c=>c.LandingComponent)
    // component: LandingComponent,
  },
  {
    path: 'questions',loadComponent:()=>import('../app/components/home/home.component').then(c=>c.HomeComponent),canActivate:[CanActivateService]
  },
  {
    path:'login',
     loadComponent:()=>import('../app/components/login/login.component').then(c=>c.LoginComponent)
    // component:LoginComponent 
  },
  {
    path:'signup',
    loadComponent:()=>import('../app/components/signup/signup.component').then(c=>c.SignupComponent)
  },
  {
    path:'profile',
    loadComponent:()=>import('../app/components/profile/profile.component').then(c=>c.ProfileComponent)
    // component:ProfileComponent 
  },
  {
    path:'ask-question',
    loadComponent:()=>import('../app/components/ask-question/ask-question.component').then(c=>c.AskQuestionComponent)
    // component:AskQuestionComponent 
  },
  {
    path:'question-detail/:id',
    loadComponent:()=>import('../app/components/question-details/question-details.component').then(c=>c.QuestionDetailsComponent)
    // component:QuestionDetailsComponent 
  },
  {
    path:'update-question/:id',
    loadComponent:()=>import('../app/components/update-question/update-question.component').then(c=>c.UpdateQuestionComponent)
    // component:UpdateQuestionComponent 
  },
  {
    path:'admin',
    loadComponent:()=>import('../app/components/admin/admin.component').then(c=>c.AdminComponent),canActivate:[CanActivateService]
    // component:AdminComponent 
  },
  {
    path:'forgotten-password',
    loadComponent:()=>import('../app/components/forgotten-password/forgotten-password.component').then(c=>c.ForgottenPasswordComponent)
    // component:ForgottenPasswordComponent 
  },
  
  {
    path:'**',
    loadComponent:()=>import('../app/components/not-found/not-found.component').then(c=>c.NotFoundComponent)
    // component:NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
