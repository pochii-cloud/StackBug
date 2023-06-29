import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { questionsReducer } from './state/reducers/question-reducers';
import { QuestionEffects } from './state/effects/question.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegisterUserEffects } from './state/effects/register.effects';
import { LoggedInUserEffects } from './state/effects/login.effects';
import { _loggedInUserReducer } from './state/reducers/loggedinuser.reducer';
import { registerUserReducer } from './state/reducers/register.reducer';
import { AnswerEffects } from './state/effects/answer.effects';
import { answersReducer } from './state/reducers/answer.reducer';
import { usersReducer } from './state/reducers/user.reducer';
import { UserEffects } from './state/effects/users.effects';
import { TagspipePipe } from './pipes/tagspipe/tagspipe.pipe';
import { answerVotesReducer } from './state/reducers/AnswerVote.reducer';
import { AnswerVoteEffects } from './state/effects/AnswerVote.effects';
import { SearchPipe } from './pipes/search/search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({questions:questionsReducer,loggedInUser: _loggedInUserReducer,registerUser: registerUserReducer,answers: answersReducer,users:usersReducer,answervote:answerVotesReducer}, {}),
    EffectsModule.forRoot([QuestionEffects,RegisterUserEffects,LoggedInUserEffects,AnswerEffects,UserEffects,AnswerVoteEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    TagspipePipe,
    SearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
