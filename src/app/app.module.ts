import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/Section/container/container.component';
import { ButtonBoxComponent } from './components/Button/button-box/button-box.component';
import { SubjectsListComponent } from './components/Section/Subject/subjects-list/subjects-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionBackspaceSharp, ionPencil } from '@ng-icons/ionicons';
import { bootstrapCalendarCheckFill, bootstrapBell } from '@ng-icons/bootstrap-icons';
import { ConfirmComponent } from './components/Section/Subject/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/Section/Subject/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './components/Section/Subject/update/update.component';
import { AnswersComponent } from './components/Section/Answer/answers/answers.component';
import { CreateAnswerComponent } from './components/Section/Answer/create-answer/create-answer.component';
import { ConfirmAnswerComponent } from './components/Section/Answer/confirm-answer/confirm-answer.component';
import { UpdateAnswerComponent } from './components/Section/Answer/update-answer/update-answer.component';
import { QuestionsComponent } from './components/Section/Question/questions/questions.component';
import { QuestionConfirmComponent } from './components/Section/Question/question-confirm/question-confirm.component';
import { QuestionCreateComponent } from './components/Section/Question/question-create/question-create.component';
import { QuestionUpdateComponent } from './components/Section/Question/question-update/question-update.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MediaPopComponent } from './components/Section/Question/media-pop/media-pop.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    ButtonBoxComponent,
    SubjectsListComponent,
    FooterComponent,
    ConfirmComponent,
    CreateComponent,
    UpdateComponent,
    AnswersComponent,
    CreateAnswerComponent,
    ConfirmAnswerComponent,
    UpdateAnswerComponent,
    QuestionsComponent,
    QuestionConfirmComponent,
    QuestionCreateComponent,
    QuestionUpdateComponent,
    MediaPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionBackspaceSharp, ionPencil, bootstrapCalendarCheckFill, bootstrapBell }),
    FormsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AutoCompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
