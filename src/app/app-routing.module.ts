import { ContainerComponent } from './components/Section/container/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './components/Section/subjects-list/subjects-list.component';

const routes: Routes = [
  {path: '', component: ContainerComponent},
  { path: 'subject', component: SubjectsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
