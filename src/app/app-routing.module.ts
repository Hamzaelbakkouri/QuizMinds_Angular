import { ContainerComponent } from './components/Section/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './components/Section/Subject/subjects-list/subjects-list.component';
import { AnswersComponent } from './components/Section/Answer/answers/answers.component';
import { QuestionsComponent } from './components/Section/Question/questions/questions.component';
import { LevelComponent } from './components/Section/Level/level/level.component';
import { QuizComponent } from './components/Section/Quiz/quiz/quiz.component';
import { AllchallengeComponent } from './components/Section/QuizStart/allchallenge/allchallenge.component';
import { StudentquizsComponent } from './components/Section/QuizStart/studentquizs/studentquizs.component';

// const routes: Routes = [
//   { path: '', component: ContainerComponent },
//   { path: 'subject', component: SubjectsListComponent },
//   { path: 'answers', component: AnswersComponent },
//   { path: 'questions', component: QuestionsComponent }
// ];

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    title: 'YouMinds',
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'questions',
        component: QuestionsComponent
      },
      {
        path: 'answers',
        component: AnswersComponent,
        title: 'Answers Dashboard - YouMinds',
      },
      {
        path: 'subject',
        component: SubjectsListComponent,
        title: 'Subjects Dashboard - YouMinds',
      },
      {
        path: 'levels',
        component: LevelComponent,
        title: 'Levels Dashboard - YouMinds',
      },
      {
        path: 'quizs',
        component: QuizComponent,
        title: 'Quizs Dashboard - YouMinds',
      },
    ],
  },
  {
    path: 'quizstart',
    component: AllchallengeComponent,
  },
  {
    path: 'studentquizs',
    component: StudentquizsComponent,
  }
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  //   title: 'Page Not Found - YouQuiz',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
