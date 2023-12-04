import { ContainerComponent } from './components/Section/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './components/Section/Subject/subjects-list/subjects-list.component';
import { AnswersComponent } from './components/Section/Answer/answers/answers.component';
import { QuestionsComponent } from './components/Section/Question/questions/questions.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'subject', component: SubjectsListComponent },
  { path: 'answers', component: AnswersComponent },
  { path: 'questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
